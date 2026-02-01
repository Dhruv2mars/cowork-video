import type {FC} from 'react';
import {AbsoluteFill} from 'remotion';
import {SceneShell} from '../components/SceneShell';
import {colors, layout, radii, shadows} from '../design/theme';
import {fonts, typeScale} from '../design/typography';
import {AnimatedText} from '../components/AnimatedText';

export const CtaScene: FC = () => {
  return (
    <SceneShell>
      <AbsoluteFill style={{padding: layout.gutter, alignItems: 'center'}}>
        <div style={{marginTop: 80, textAlign: 'center'}}>
          <AnimatedText>
            <div
              style={{
                fontFamily: fonts.display,
                fontSize: typeScale.hero,
                fontWeight: 600,
                color: colors.ink,
              }}
            >
              Claude Cowork
            </div>
          </AnimatedText>
          <AnimatedText delaySeconds={0.25}>
            <div
              style={{
                marginTop: 20,
                fontFamily: fonts.body,
                fontSize: typeScale.bodyLg,
                color: colors.inkMuted,
              }}
            >
              Research preview · Available on Pro or Max
            </div>
          </AnimatedText>
          <AnimatedText delaySeconds={0.45}>
            <div
              style={{
                marginTop: 34,
                display: 'inline-flex',
                gap: 14,
              }}
            >
              {['Go from answers to action', 'Built for power users'].map(
                (label) => (
                  <div
                    key={label}
                    style={{
                      padding: '12px 22px',
                      borderRadius: radii.xl,
                      background: colors.white,
                      boxShadow: shadows.soft,
                      fontFamily: fonts.body,
                      fontSize: typeScale.bodySm,
                      fontWeight: 600,
                      color: colors.ink,
                    }}
                  >
                    {label}
                  </div>
                )
              )}
            </div>
          </AnimatedText>
        </div>
      </AbsoluteFill>
    </SceneShell>
  );
};
