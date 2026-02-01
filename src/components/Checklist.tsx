import type {FC} from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {colors, radii, shadows} from '../design/theme';
import {fonts, typeScale} from '../design/typography';
import {springProgress} from '../utils/motion';

type ChecklistProps = {
  items: string[];
  startDelaySeconds?: number;
};

export const Checklist: FC<ChecklistProps> = ({
  items,
  startDelaySeconds = 0,
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
        const delaySeconds = startDelaySeconds + index * 0.35;
        const progress = springProgress({
          frame,
          fps,
          delaySeconds,
          durationSeconds: 0.65,
          config: {damping: 200},
        });
        const opacity = interpolate(progress, [0, 1], [0, 1]);
        const translateX = interpolate(progress, [0, 1], [18, 0]);
        const scale = interpolate(progress, [0, 1], [0.85, 1]);

        return (
          <div
            key={item}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              opacity,
              transform: `translateX(${translateX}px)`,
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
