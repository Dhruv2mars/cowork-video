import type {FC, ReactNode} from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {colors, gradients} from '../design/theme';
import {fonts} from '../design/typography';
import {floatOffset, springProgress} from '../utils/motion';

type SceneShellProps = {
  variant?: 'light' | 'dark';
  children: ReactNode;
};

export const SceneShell: FC<SceneShellProps> = ({
  variant = 'light',
  children,
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const glowShift = {
    x: floatOffset(frame, fps, {amplitude: 26, periodSeconds: 7}),
    y: floatOffset(frame, fps, {amplitude: 20, periodSeconds: 9, phaseSeconds: 0.8}),
  };
  const glowShiftTwo = {
    x: floatOffset(frame, fps, {amplitude: 34, periodSeconds: 10, phaseSeconds: 1.3}),
    y: floatOffset(frame, fps, {amplitude: 28, periodSeconds: 8, phaseSeconds: 0.4}),
  };

  const baseOpacity = springProgress({
    frame,
    fps,
    durationSeconds: 0.7,
    config: {damping: 200},
  });

  return (
    <AbsoluteFill
      style={{
        backgroundImage: variant === 'dark' ? gradients.dark : gradients.hero,
        color: variant === 'dark' ? colors.white : colors.ink,
        fontFamily: fonts.body,
      }}
    >
      <AbsoluteFill
        style={{
          opacity: baseOpacity,
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(transparent 0%, rgba(255,255,255,0.02) 100%), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '100% 100%, 120px 120px, 120px 120px',
            opacity: variant === 'dark' ? 0.08 : 0.05,
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 520,
            height: 520,
            borderRadius: 520,
            background: colors.accentGlow,
            filter: 'blur(90px)',
            top: 80 + glowShift.y,
            left: 80 + glowShift.x,
            opacity: variant === 'dark' ? 0.5 : 0.8,
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 680,
            height: 680,
            borderRadius: 680,
            background: 'rgba(123, 166, 154, 0.28)',
            filter: 'blur(120px)',
            right: -100 + glowShiftTwo.x,
            bottom: -120 + glowShiftTwo.y,
            opacity: variant === 'dark' ? 0.55 : 0.75,
          }}
        />
        {children}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
