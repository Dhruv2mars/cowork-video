import type {FC, ReactNode} from 'react';
import {fonts, typeScale} from '../design/typography';
import {colors} from '../design/theme';
import {AnimatedText} from './AnimatedText';

type TitleStackProps = {
  kicker?: string;
  headline: ReactNode;
  subhead?: ReactNode;
  align?: 'left' | 'center';
  maxWidth?: number;
  delaySeconds?: number;
  tone?: 'light' | 'dark';
};

export const TitleStack: FC<TitleStackProps> = ({
  kicker,
  headline,
  subhead,
  align = 'left',
  maxWidth = 860,
  delaySeconds = 0,
  tone = 'light',
}) => {
  const color = tone === 'dark' ? colors.white : colors.ink;
  const subColor =
    tone === 'dark' ? 'rgba(255,255,255,0.75)' : colors.inkMuted;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 22,
        textAlign: align,
        alignItems: align === 'center' ? 'center' : 'flex-start',
        maxWidth,
      }}
    >
      {kicker ? (
        <AnimatedText delaySeconds={delaySeconds}>
          <div
            style={{
              fontFamily: fonts.body,
              textTransform: 'uppercase',
              letterSpacing: 4,
              fontSize: typeScale.caption,
              fontWeight: 600,
              color: subColor,
            }}
          >
            {kicker}
          </div>
        </AnimatedText>
      ) : null}
      <AnimatedText delaySeconds={delaySeconds + 0.2}>
        <div
          style={{
            fontFamily: fonts.display,
            fontSize: typeScale.h1,
            fontWeight: 600,
            lineHeight: 1.05,
            color,
          }}
        >
          {headline}
        </div>
      </AnimatedText>
      {subhead ? (
        <AnimatedText delaySeconds={delaySeconds + 0.4}>
          <div
            style={{
              fontFamily: fonts.body,
              fontSize: typeScale.bodyLg,
              fontWeight: 500,
              lineHeight: 1.4,
              color: subColor,
            }}
          >
            {subhead}
          </div>
        </AnimatedText>
      ) : null}
    </div>
  );
};
