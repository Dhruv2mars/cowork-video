import type {FC} from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {colors, radii, shadows} from '../design/theme';
import {fonts, typeScale} from '../design/typography';

type ChecklistProps = {
  items: string[];
  startDelay?: number;
};

export const Checklist: FC<ChecklistProps> = ({
  items,
  startDelay = 0,
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        padding: 30,
        borderRadius: radii.lg,
        background: colors.white,
        boxShadow: shadows.card,
        minWidth: 420,
      }}
    >
      {items.map((item, index) => {
        const delay = startDelay + index * 12;
        const progress = spring({
          frame: frame - delay,
          fps,
          config: {damping: 200},
        });
        const opacity = interpolate(progress, [0, 1], [0, 1]);
        const translateX = interpolate(progress, [0, 1], [20, 0]);
        const scale = interpolate(progress, [0, 1], [0.8, 1]);

        return (
          <div
            key={item}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              opacity,
              transform: `translateX(${translateX}px)` ,
            }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 12,
                background: colors.accent,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: colors.white,
                fontFamily: fonts.display,
                fontWeight: 700,
                fontSize: typeScale.bodySm,
                transform: `scale(${scale})`,
              }}
            >
              ✓
            </div>
            <div
              style={{
                fontFamily: fonts.body,
                fontSize: typeScale.body,
                color: colors.ink,
                fontWeight: 600,
              }}
            >
              {item}
            </div>
          </div>
        );
      })}
    </div>
  );
};
