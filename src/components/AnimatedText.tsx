import type {CSSProperties, FC, ReactNode} from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {springProgress} from '../utils/motion';

type AnimatedTextProps = {
  children: ReactNode;
  delaySeconds?: number;
  style?: CSSProperties;
};

export const AnimatedText: FC<AnimatedTextProps> = ({
  children,
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
    config: {damping: 200},
  });

  const opacity = interpolate(progress, [0, 1], [0, 1]);
  const translateY = interpolate(progress, [0, 1], [18, 0]);
  const blur = interpolate(progress, [0, 1], [8, 0]);

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        filter: `blur(${blur}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
