import type {FC} from 'react';
import {AbsoluteFill} from 'remotion';
import {SceneShell} from '../components/SceneShell';
import {TitleStack} from '../components/TitleStack';
import {WindowCard} from '../components/WindowCard';
import {colors, layout} from '../design/theme';

export const ProblemScene: FC = () => {
  return (
    <SceneShell>
      <AbsoluteFill style={{padding: layout.gutter}}>
        <TitleStack
          kicker="The reality"
          headline={
            <>
              Complex work is never one task.<br />It&apos;s dozens.
            </>
          }
          subhead={
            <>
              Tabs. Steps. Tools. Context switching everywhere.
            </>
          }
          maxWidth={780}
        />
        <div
          style={{
            position: 'absolute',
            right: 120,
            top: 140,
            width: 760,
            height: 720,
          }}
        >
          <WindowCard
            title="Docs"
            subtitle="Draft the narrative, align stakeholders, and refine tone."
            delaySeconds={0.2}
            style={{top: 0, left: 40}}
            accent={colors.accent}
          />
          <WindowCard
            title="Slack"
            subtitle="Check updates, clarify asks, and unblock decisions."
            delaySeconds={0.4}
            style={{top: 220, right: 0}}
            accent={colors.mint}
          />
          <WindowCard
            title="GitHub"
            subtitle="Review changes, track progress, and merge fast."
            delaySeconds={0.6}
            style={{bottom: 0, left: 140}}
            accent={colors.accentDeep}
          />
          <WindowCard
            title="Notion"
            subtitle="Organize research, tasks, and project context."
            delaySeconds={0.8}
            style={{top: 280, left: 0}}
            accent={colors.mintDeep}
          />
        </div>
      </AbsoluteFill>
    </SceneShell>
  );
};
