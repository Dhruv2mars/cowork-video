import type {FC} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {SceneShell} from '../components/SceneShell';
import {colors, layout, radii} from '../design/theme';
import {fonts, typeScale} from '../design/typography';

export const ImpactScene: FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const progress = interpolate(frame, [0, 2 * fps, 6 * fps], [0, 0.6, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <SceneShell variant="dark">
      <AbsoluteFill style={{padding: layout.gutter}}>
        <div
          style={{
            fontFamily: fonts.display,
            fontSize: typeScale.h1,
            fontWeight: 600,
            lineHeight: 1.05,
            color: colors.white,
            maxWidth: 900,
          }}
        >
          Parallel agents. One outcome.
        </div>
        <div
          style={{
            marginTop: 24,
            fontFamily: fonts.body,
            fontSize: typeScale.bodyLg,
            fontWeight: 500,
            color: 'rgba(255,255,255,0.72)',
            maxWidth: 720,
          }}
        >
          Fewer handoffs. More shipping. Stay in flow while Claude Cowork
          coordinates the work.
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 180,
            left: layout.gutter,
            right: layout.gutter,
            height: 90,
            display: 'flex',
            gap: 18,
          }}
        >
          {[0, 1, 2, 3, 4].map((index) => {
            const barHeight = Math.min(100, 40 + index * 12 + progress * 30);
            return (
              <div
                key={index}
                style={{
                  flex: 1,
                  borderRadius: radii.lg,
                  background: 'rgba(255,255,255,0.12)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    height: `${barHeight}%`,
                    width: '100%',
                    background: `linear-gradient(180deg, rgba(198,139,87,0.9), rgba(123,166,154,0.9))`,
                    borderRadius: radii.lg,
                  }}
                />
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </SceneShell>
  );
};
