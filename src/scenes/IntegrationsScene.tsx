import type {FC} from 'react';
import {AbsoluteFill} from 'remotion';
import {SceneShell} from '../components/SceneShell';
import {TitleStack} from '../components/TitleStack';
import {IntegrationPill} from '../components/IntegrationPill';
import {layout} from '../design/theme';

const integrations = [
  {label: 'Google Docs', color: '#3b82f6'},
  {label: 'Google Sheets', color: '#22c55e'},
  {label: 'Slack', color: '#a855f7'},
  {label: 'GitHub', color: '#111827'},
  {label: 'Notion', color: '#111111'},
];

export const IntegrationsScene: FC = () => {
  return (
    <SceneShell>
      <AbsoluteFill style={{padding: layout.gutter}}>
        <TitleStack
          kicker="Connected tools"
          headline={
            <>
              Plug into the apps<br />power users live in.
            </>
          }
          subhead="Claude Cowork connects to Google Docs and Sheets, Slack, GitHub, and Notion."
          maxWidth={760}
        />
        <div
          style={{
            position: 'absolute',
            right: 140,
            top: 240,
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
          }}
        >
          {integrations.map((integration, index) => (
            <IntegrationPill
              key={integration.label}
              label={integration.label}
              color={integration.color}
              delaySeconds={0.25 + index * 0.18}
            />
          ))}
        </div>
      </AbsoluteFill>
    </SceneShell>
  );
};
