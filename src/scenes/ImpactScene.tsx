import type {FC} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {SceneShell} from '../components/SceneShell';
import {TitleStack} from '../components/TitleStack';
import {colors, layout, radii} from '../design/theme';
import {springProgress} from '../utils/motion';

export const ImpactScene: FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const progress = springProgress({
    frame,
    fps,
    durationSeconds: 1.6,
    config: {damping: 200},
  });

  return (
    <SceneShell variant="dark">
      <AbsoluteFill style={{padding: layout.gutter}}>
        <TitleStack
          kicker="Impact"
          headline="Parallel agents. One outcome."
          subhead="Fewer handoffs. More shipping. Stay in flow while Claude Cowork coordinates the work."
          maxWidth={900}
          tone="dark"
        />
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
            const barProgress = springProgress({
              frame,
              fps,
              delaySeconds: 0.2 + index * 0.12,
              durationSeconds: 1.1,
              config: {damping: 200},
            });
            const barHeight = Math.min(
              100,
              42 + index * 12 + interpolate(barProgress, [0, 1], [0, 34])
            );
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
                  opacity: 0.5 + barProgress * 0.5,
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
        <div
          style={{
            position: 'absolute',
            right: layout.gutter,
            bottom: 120,
            fontSize: 16,
            letterSpacing: 2,
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          Velocity index
        </div>
      </AbsoluteFill>
    </SceneShell>
  );
};
