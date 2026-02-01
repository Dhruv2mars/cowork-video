import type {FC} from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {colors} from '../design/theme';

const nodes = [
  {id: 'core', x: 0.5, y: 0.5, r: 58},
  {id: 'a', x: 0.25, y: 0.28, r: 36},
  {id: 'b', x: 0.72, y: 0.2, r: 32},
  {id: 'c', x: 0.8, y: 0.62, r: 40},
  {id: 'd', x: 0.28, y: 0.7, r: 34},
];

const links = [
  ['core', 'a'],
  ['core', 'b'],
  ['core', 'c'],
  ['core', 'd'],
  ['a', 'b'],
  ['d', 'c'],
];

type NodeGraphProps = {
  width: number;
  height: number;
  delay?: number;
};

export const NodeGraph: FC<NodeGraphProps> = ({
  width,
  height,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const progress = spring({frame: frame - delay, fps, config: {damping: 200}});
  const lineProgress = interpolate(progress, [0, 1], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const nodePulse = (index: number) =>
    1 +
    Math.sin((frame + index * 12) / (fps * 1.4)) * 0.04 +
    Math.sin((frame + index * 22) / (fps * 0.8)) * 0.02;

  const getNode = (id: string) => nodes.find((node) => node.id === id)!;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <defs>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={colors.accent} stopOpacity="0.9" />
          <stop offset="100%" stopColor={colors.accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      {links.map(([from, to], index) => {
        const source = getNode(from);
        const target = getNode(to);
        const x1 = source.x * width;
        const y1 = source.y * height;
        const x2 = target.x * width;
        const y2 = target.y * height;
        const length = Math.hypot(x2 - x1, y2 - y1);
        const dashOffset = length * (1 - lineProgress);

        return (
          <line
            key={`${from}-${to}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={colors.accentDeep}
            strokeWidth={2}
            strokeDasharray={length}
            strokeDashoffset={dashOffset}
            opacity={0.7}
          />
        );
      })}
      {nodes.map((node, index) => {
        const scale = nodePulse(index) * interpolate(progress, [0, 1], [0.8, 1]);
        const x = node.x * width;
        const y = node.y * height;
        const r = node.r * scale;
        const isCore = node.id === 'core';

        return (
          <g key={node.id}>
            {isCore ? (
              <circle cx={x} cy={y} r={r * 1.4} fill="url(#coreGlow)" />
            ) : null}
            <circle
              cx={x}
              cy={y}
              r={r}
              fill={isCore ? colors.accent : colors.white}
              stroke={colors.accentDeep}
              strokeWidth={2}
            />
          </g>
        );
      })}
    </svg>
  );
};
