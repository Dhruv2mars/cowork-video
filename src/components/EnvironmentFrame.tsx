import type {FC} from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {colors, radii, shadows} from '../design/theme';
import {fonts, typeScale} from '../design/typography';

type EnvironmentFrameProps = {
  title: string;
  subtitle: string;
  delay?: number;
};

export const EnvironmentFrame: FC<EnvironmentFrameProps> = ({
  title,
  subtitle,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const progress = spring({frame: frame - delay, fps, config: {damping: 180}});
  const opacity = interpolate(progress, [0, 1], [0, 1]);
  const translateY = interpolate(progress, [0, 1], [30, 0]);

  return (
    <div
      style={{
        width: 720,
        padding: 28,
        borderRadius: radii.xl,
        background: colors.white,
        boxShadow: shadows.strong,
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          marginBottom: 18,
        }}
      >
        {[colors.accent, '#f2c14f', '#6aa6a0'].map((dot) => (
          <div
            key={dot}
            style={{
              width: 12,
              height: 12,
              borderRadius: 12,
              background: dot,
            }}
          />
        ))}
        <div
          style={{
            marginLeft: 8,
            fontFamily: fonts.body,
            fontSize: typeScale.bodySm,
            fontWeight: 600,
            color: colors.inkMuted,
            letterSpacing: 1.2,
            textTransform: 'uppercase',
          }}
        >
          macOS VM
        </div>
      </div>
      <div
        style={{
          fontFamily: fonts.display,
          fontSize: typeScale.h3,
          fontWeight: 600,
          color: colors.ink,
          marginBottom: 10,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: fonts.body,
          fontSize: typeScale.body,
          color: colors.inkMuted,
          lineHeight: 1.5,
        }}
      >
        {subtitle}
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 12,
          marginTop: 22,
        }}
      >
        {['Secure files', 'Isolated runtime', 'Managed access'].map((label) => (
          <div
            key={label}
            style={{
              padding: 14,
              borderRadius: radii.md,
              background: 'rgba(16,16,16,0.06)',
              fontFamily: fonts.body,
              fontSize: typeScale.caption,
              fontWeight: 600,
              color: colors.ink,
              textAlign: 'center',
            }}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};
