import type {FC} from 'react';
import {AbsoluteFill} from 'remotion';
import {SceneShell} from '../components/SceneShell';
import {TitleStack} from '../components/TitleStack';
import {EnvironmentFrame} from '../components/EnvironmentFrame';
import {layout} from '../design/theme';

export const SafeEnvScene: FC = () => {
  return (
    <SceneShell>
      <AbsoluteFill style={{padding: layout.gutter}}>
        <TitleStack
          kicker="Safe execution"
          headline={
            <>
              Runs inside an isolated<br />macOS virtual environment.
            </>
          }
          subhead="Work happens in a dedicated space so your main system stays protected."
          maxWidth={760}
        />
        <div
          style={{
            position: 'absolute',
            right: 140,
            top: 200,
          }}
        >
          <EnvironmentFrame
            title="Dedicated workspaces"
            subtitle="Each workflow runs in its own secure macOS VM with controlled access."
            delaySeconds={0.25}
          />
        </div>
      </AbsoluteFill>
    </SceneShell>
  );
};
