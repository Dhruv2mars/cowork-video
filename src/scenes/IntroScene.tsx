import type {FC} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {SceneShell} from '../components/SceneShell';
import {TitleStack} from '../components/TitleStack';
import {colors, layout, radii, shadows} from '../design/theme';
import {fonts, typeScale} from '../design/typography';
import {easeProgress, floatOffset, springProgress} from '../utils/motion';

export const IntroScene: FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const floatY = floatOffset(frame, fps, {
    amplitude: 12,
    periodSeconds: 6,
    phaseSeconds: 0.6,
  });
  const ringOpacity = easeProgress({
    frame,
    fps,
    delaySeconds: 0.1,
    durationSeconds: 0.6,
  });
  const orbScale = springProgress({
    frame,
    fps,
    delaySeconds: 0.05,
    durationSeconds: 0.8,
    config: {damping: 180},
  });

  return (
    <SceneShell>
      <AbsoluteFill style={{padding: layout.gutter}}>
        <div style={{maxWidth: 900}}>
          <TitleStack
            kicker="Claude Cowork"
            headline={
              <>
                Power users don&apos;t just work.<br />
                They orchestrate.
              </>
            }
            subhead="The next era of AI collaboration starts here."
          />
        </div>
        <div
          style={{
            position: 'absolute',
            right: 140,
            top: 180,
            width: 420,
            height: 420,
            borderRadius: 420,
            background: colors.white,
            boxShadow: shadows.strong,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: `translateY(${floatY}px)`,
            opacity: interpolate(orbScale, [0, 1], [0, 1]),
          }}
        >
          <div
            style={{
              width: 280,
              height: 280,
              borderRadius: 280,
              border: `2px solid ${colors.accent}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              transform: `scale(${interpolate(orbScale, [0, 1], [0.9, 1])})`,
            }}
          >
            <div
              style={{
                width: 140,
                height: 140,
                borderRadius: 140,
                background: colors.accent,
                opacity: 0.9,
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: -32,
                borderRadius: 999,
                border: `2px solid ${colors.accent}`,
                opacity: ringOpacity,
              }}
            />
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: 40,
              textTransform: 'uppercase',
              letterSpacing: 2,
              fontFamily: fonts.body,
              fontSize: typeScale.caption,
              color: colors.inkMuted,
            }}
          >
            Multi-Claude workspace
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            left: layout.gutter,
            bottom: 110,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            padding: '10px 18px',
            borderRadius: radii.xl,
            background: colors.white,
            boxShadow: shadows.soft,
            fontFamily: fonts.body,
            fontSize: typeScale.bodySm,
            fontWeight: 600,
            color: colors.ink,
          }}
        >
          Research preview on macOS
        </div>
      </AbsoluteFill>
    </SceneShell>
  );
};
