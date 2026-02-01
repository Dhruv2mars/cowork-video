import type {FC, ReactNode} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {colors, gradients} from '../design/theme';
import {fonts} from '../design/typography';

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
  const drift = frame / fps;

  const glowShift = {
    x: Math.sin(drift / 3) * 30,
    y: Math.cos(drift / 4) * 24,
  };
  const glowShiftTwo = {
    x: Math.cos(drift / 5) * 40,
    y: Math.sin(drift / 6) * 32,
  };

  const baseOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
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
