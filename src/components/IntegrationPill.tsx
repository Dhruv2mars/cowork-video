import type {CSSProperties, FC} from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {colors, radii, shadows} from '../design/theme';
import {fonts, typeScale} from '../design/typography';
import {springProgress} from '../utils/motion';

type IntegrationPillProps = {
  label: string;
  color: string;
  delaySeconds?: number;
  style?: CSSProperties;
};

export const IntegrationPill: FC<IntegrationPillProps> = ({
  label,
  color,
  delaySeconds = 0,
  style,
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const progress = springProgress({
    frame,
    fps,
    delaySeconds,
    durationSeconds: 0.7,
    config: {damping: 160},
  });
  const opacity = interpolate(progress, [0, 1], [0, 1]);
  const translateY = interpolate(progress, [0, 1], [18, 0]);
  const scale = interpolate(progress, [0, 1], [0.96, 1]);

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12,
        padding: '14px 20px',
        borderRadius: radii.xl,
        background: colors.white,
        boxShadow: shadows.soft,
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        ...style,
      }}
    >
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: 12,
          background: color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: colors.white,
          fontFamily: fonts.display,
          fontWeight: 600,
          fontSize: typeScale.bodySm,
        }}
      >
        {label.slice(0, 1).toUpperCase()}
      </div>
      <div
        style={{
          fontFamily: fonts.body,
          fontSize: typeScale.bodySm,
          fontWeight: 600,
          color: colors.ink,
        }}
      >
        {label}
      </div>
    </div>
  );
};
