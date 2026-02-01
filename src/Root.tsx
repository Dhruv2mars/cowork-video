import type {FC} from 'react';
import {Composition, Folder} from 'remotion';
import {CoworkLaunchVideo} from './Video';
import {
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
  totalDurationInFrames,
} from './utils/timeline';

export const RemotionRoot: FC = () => {
  return (
    <>
      <Folder name="Launch">
        <Composition
          id="CoworkLaunch"
          component={CoworkLaunchVideo}
          durationInFrames={totalDurationInFrames}
          fps={VIDEO_FPS}
          width={VIDEO_WIDTH}
          height={VIDEO_HEIGHT}
        />
      </Folder>
    </>
  );
};
