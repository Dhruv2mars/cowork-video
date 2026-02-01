import type {FC} from 'react';
import {AbsoluteFill} from 'remotion';
import {SceneShell} from '../components/SceneShell';
import {TitleStack} from '../components/TitleStack';
import {TimelineFlow} from '../components/TimelineFlow';
import {layout} from '../design/theme';

type WorkflowSceneProps = {
  durationInFrames: number;
};

export const WorkflowScene: FC<WorkflowSceneProps> = ({
  durationInFrames,
}) => {
  return (
    <SceneShell>
      <AbsoluteFill style={{padding: layout.gutter}}>
        <TitleStack
          kicker="One flow"
          headline={
            <>
              Research, draft, execute,<br />and report in sequence.
            </>
          }
          subhead="Parallel agents move as one, so your work keeps pace."
          maxWidth={820}
        />
        <div
          style={{
            position: 'absolute',
            left: layout.gutter,
            right: layout.gutter,
            bottom: 180,
          }}
        >
          <TimelineFlow
            steps={['Research', 'Plan', 'Draft', 'Execute', 'Report']}
            durationInFrames={durationInFrames}
          />
        </div>
      </AbsoluteFill>
    </SceneShell>
  );
};
