import {Easing, interpolate, spring} from 'remotion';
import type {SpringConfig} from 'remotion';

type SpringProgressOptions = {
  frame: number;
  fps: number;
  delaySeconds?: number;
  durationSeconds?: number;
  config?: SpringConfig;
};

type EaseProgressOptions = {
  frame: number;
  fps: number;
  delaySeconds?: number;
  durationSeconds?: number;
  easing?: (input: number) => number;
};

export const secondsToFrames = (seconds: number, fps: number) =>
  Math.round(seconds * fps);

export const springProgress = ({
  frame,
  fps,
  delaySeconds = 0,
  durationSeconds = 0.7,
  config = {damping: 200},
}: SpringProgressOptions) => {
  const raw = spring({
    frame: frame - secondsToFrames(delaySeconds, fps),
    fps,
    durationInFrames: secondsToFrames(durationSeconds, fps),
    config,
  });

  return interpolate(raw, [0, 1], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
};

export const easeProgress = ({
  frame,
  fps,
  delaySeconds = 0,
  durationSeconds = 0.6,
  easing = Easing.inOut(Easing.cubic),
}: EaseProgressOptions) => {
  const start = secondsToFrames(delaySeconds, fps);
  const end = secondsToFrames(delaySeconds + durationSeconds, fps);

  return interpolate(frame, [start, end], [0, 1], {
    easing,
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
};

export const floatOffset = (
  frame: number,
  fps: number,
  {
    amplitude = 10,
    periodSeconds = 6,
    phaseSeconds = 0,
  }: {
    amplitude?: number;
    periodSeconds?: number;
    phaseSeconds?: number;
  }
) => {
  const t = frame / fps + phaseSeconds;
  return Math.sin((t / periodSeconds) * Math.PI * 2) * amplitude;
};
