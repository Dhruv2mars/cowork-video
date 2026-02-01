import type {FC} from 'react';
import {AbsoluteFill} from 'remotion';
import {SceneShell} from '../components/SceneShell';
import {TitleStack} from '../components/TitleStack';
import {NodeGraph} from '../components/NodeGraph';
import {layout} from '../design/theme';

export const OrchestrateScene: FC = () => {
  return (
    <SceneShell>
      <AbsoluteFill style={{padding: layout.gutter}}>
        <TitleStack
          kicker="Orchestrate"
          headline={
            <>
              Coordinate multiple Claudes<br />across complex workflows.
            </>
          }
          subhead="Each instance tackles a task in parallel, moving projects forward together."
          maxWidth={760}
        />
        <div
          style={{
            position: 'absolute',
            right: 100,
            top: 160,
            width: 820,
            height: 620,
          }}
        >
          <NodeGraph width={820} height={620} delaySeconds={0.25} />
        </div>
      </AbsoluteFill>
    </SceneShell>
  );
};
