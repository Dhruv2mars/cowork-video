import {loadFont as loadSora} from '@remotion/google-fonts/Sora';
import {loadFont as loadManrope} from '@remotion/google-fonts/Manrope';

const sora = loadSora('normal', {
  weights: ['400', '600', '700'],
  subsets: ['latin'],
});

const manrope = loadManrope('normal', {
  weights: ['400', '500', '600'],
  subsets: ['latin'],
});

export const fonts = {
  display: sora.fontFamily,
  body: manrope.fontFamily,
};

export const typeScale = {
  hero: 120,
  title: 88,
  h1: 72,
  h2: 54,
  h3: 42,
  bodyLg: 30,
  body: 24,
  bodySm: 20,
  caption: 16,
};
