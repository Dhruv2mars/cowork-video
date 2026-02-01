import type {FC} from 'react';
import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {colors, radii, shadows} from '../design/theme';
import {fonts, typeScale} from '../design/typography';
import {secondsToFrames} from '../utils/motion';

type TimelineFlowProps = {
  steps: string[];
  durationInFrames: number;
};

export const TimelineFlow: FC<TimelineFlowProps> = ({
  steps,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const totalSeconds = durationInFrames / fps;
  const progress = interpolate(frame, [0, secondsToFrames(totalSeconds, fps)], [0, 1], {
    easing: Easing.inOut(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const stepSpan = 1 / steps.length;

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
        const stepStart = index * stepSpan;
        const stepEnd = (index + 1) * stepSpan;
        const stepProgress = interpolate(progress, [stepStart, stepEnd], [0, 1], {
          easing: Easing.out(Easing.cubic),
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        });
        const isActive = progress >= stepStart;
        const lift = interpolate(stepProgress, [0, 1], [8, 0]);
        const fill = interpolate(stepProgress, [0, 1], [0, 1]);
        return (
          <div
            key={step}
            style={{
              flex: 1,
              padding: '18px 20px',
              borderRadius: radii.md,
              background: isActive ? colors.white : 'rgba(255,255,255,0.72)',
              boxShadow: isActive ? shadows.soft : 'none',
              border: `1px solid ${
                isActive ? 'rgba(198, 139, 87, 0.4)' : 'rgba(16,16,16,0.08)'
              }`,
              color: colors.ink,
              fontFamily: fonts.body,
              fontSize: typeScale.bodySm,
              fontWeight: isActive ? 600 : 500,
              textAlign: 'center',
              transform: `translateY(${lift}px)`,
              opacity: 0.6 + fill * 0.4,
            }}
          >
            {step}
          </div>
        );
      })}
    </div>
  );
};
