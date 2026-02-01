import type {FC} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {colors, radii, shadows} from '../design/theme';
import {fonts, typeScale} from '../design/typography';

type TimelineFlowProps = {
  steps: string[];
  durationInFrames: number;
};

export const TimelineFlow: FC<TimelineFlowProps> = ({
  steps,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const activeIndex = Math.min(
    steps.length - 1,
    Math.floor(progress * steps.length)
  );

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        width: '100%',
      }}
    >
      {steps.map((step, index) => {
        const isActive = index <= activeIndex;
        return (
          <div
            key={step}
            style={{
              flex: 1,
              padding: '18px 20px',
              borderRadius: radii.md,
              background: isActive ? colors.white : 'rgba(255,255,255,0.7)',
              boxShadow: isActive ? shadows.soft : 'none',
              border: `1px solid ${
                isActive ? 'rgba(198, 139, 87, 0.4)' : 'rgba(16,16,16,0.08)'
              }`,
              color: colors.ink,
              fontFamily: fonts.body,
              fontSize: typeScale.bodySm,
              fontWeight: isActive ? 600 : 500,
              textAlign: 'center',
              transition: 'none',
            }}
          >
            {step}
          </div>
        );
      })}
    </div>
  );
};
