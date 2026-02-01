import type {FC} from 'react';
import {AbsoluteFill} from 'remotion';
import {SceneShell} from '../components/SceneShell';
import {TitleStack} from '../components/TitleStack';
import {Checklist} from '../components/Checklist';
import {layout} from '../design/theme';

export const ApprovalScene: FC = () => {
  return (
    <SceneShell>
      <AbsoluteFill style={{padding: layout.gutter}}>
        <TitleStack
          kicker="In control"
          headline={
            <>
              Approve plans. Control<br />file and folder access.
            </>
          }
          subhead="Stay in the loop before every critical action."
          maxWidth={760}
        />
        <div
          style={{
            position: 'absolute',
            right: 160,
            top: 200,
          }}
        >
          <Checklist
            items={[
              'Approve proposed steps',
              'Grant file access selectively',
              'Review outcomes before share',
            ]}
            startDelay={8}
          />
        </div>
      </AbsoluteFill>
    </SceneShell>
  );
};
