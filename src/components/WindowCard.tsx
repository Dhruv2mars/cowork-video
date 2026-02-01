import type {CSSProperties, FC} from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {colors, radii, shadows} from '../design/theme';
import {fonts, typeScale} from '../design/typography';

type WindowCardProps = {
  title: string;
  subtitle: string;
  delay?: number;
  accent?: string;
  style?: CSSProperties;
};

export const WindowCard: FC<WindowCardProps> = ({
  title,
  subtitle,
  delay = 0,
  accent = colors.accent,
  style,
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const progress = spring({frame: frame - delay, fps, config: {damping: 180}});
  const opacity = interpolate(progress, [0, 1], [0, 1]);
  const translateY = interpolate(progress, [0, 1], [30, 0]);
  const scale = interpolate(progress, [0, 1], [0.96, 1]);

  return (
    <div
      style={{
        position: 'absolute',
        padding: 24,
        borderRadius: radii.lg,
        background: colors.white,
        boxShadow: shadows.card,
        minWidth: 280,
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        ...style,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          marginBottom: 14,
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: 10,
            background: accent,
          }}
        />
        <div
          style={{
            fontFamily: fonts.body,
            fontSize: typeScale.body,
            fontWeight: 600,
            color: colors.ink,
          }}
        >
          {title}
        </div>
      </div>
      <div
        style={{
          fontFamily: fonts.body,
          fontSize: typeScale.bodySm,
          color: colors.inkMuted,
          lineHeight: 1.4,
        }}
      >
        {subtitle}
      </div>
      <div
        style={{
          marginTop: 18,
          display: 'flex',
          gap: 8,
        }}
      >
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            style={{
              flex: 1,
              height: 6,
              borderRadius: 6,
              background:
                index === 0
                  ? colors.accent
                  : 'rgba(16, 16, 16, 0.08)',
            }}
          />
        ))}
      </div>
    </div>
  );
};
