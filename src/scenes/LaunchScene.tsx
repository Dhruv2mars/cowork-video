import type {FC} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {SceneShell} from '../components/SceneShell';
import {AnimatedText} from '../components/AnimatedText';
import {colors, layout, radii, shadows} from '../design/theme';
import {fonts, typeScale} from '../design/typography';

export const LaunchScene: FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const shimmer = interpolate(frame, [0, 120], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <SceneShell>
      <AbsoluteFill style={{padding: layout.gutter}}>
        <AnimatedText>
          <div
            style={{
              fontFamily: fonts.display,
              fontSize: typeScale.hero,
              fontWeight: 600,
              color: colors.ink,
              lineHeight: 0.95,
            }}
          >
            Claude Cowork
          </div>
        </AnimatedText>
        <AnimatedText delay={8}>
          <div
            style={{
              marginTop: 24,
              fontFamily: fonts.body,
              fontSize: typeScale.h3,
              fontWeight: 500,
              color: colors.inkMuted,
            }}
          >
            Go from answers to action.
          </div>
        </AnimatedText>
        <div
          style={{
            position: 'absolute',
            right: 120,
            bottom: 160,
            width: 520,
            padding: 28,
            borderRadius: radii.xl,
            background: colors.white,
            boxShadow: shadows.strong,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              fontFamily: fonts.body,
              fontSize: typeScale.body,
              fontWeight: 600,
              color: colors.ink,
              marginBottom: 12,
            }}
          >
            Mission Control
          </div>
          <div
            style={{
              fontFamily: fonts.body,
              fontSize: typeScale.bodySm,
              color: colors.inkMuted,
              lineHeight: 1.5,
            }}
          >
            Orchestrate agents, approve plans, and ship outcomes faster.
          </div>
          <div
            style={{
              position: 'absolute',
              top: -80,
              right: -120,
              width: 240,
              height: 240,
              borderRadius: 240,
              background: colors.accentGlow,
              filter: 'blur(20px)',
              opacity: shimmer,
            }}
          />
        </div>
      </AbsoluteFill>
    </SceneShell>
  );
};
