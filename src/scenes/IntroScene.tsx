import type {FC} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {SceneShell} from '../components/SceneShell';
import {TitleStack} from '../components/TitleStack';
import {colors, layout, radii, shadows} from '../design/theme';
import {fonts, typeScale} from '../design/typography';

export const IntroScene: FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const floatY = Math.sin(frame / fps) * 12;
  const ringOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
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
