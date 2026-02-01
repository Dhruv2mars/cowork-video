import type {FC} from 'react';
import {TransitionSeries, springTiming} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {slide} from '@remotion/transitions/slide';
import {wipe} from '@remotion/transitions/wipe';
import {IntroScene} from './scenes/IntroScene';
import {ProblemScene} from './scenes/ProblemScene';
import {LaunchScene} from './scenes/LaunchScene';
import {OrchestrateScene} from './scenes/OrchestrateScene';
import {SafeEnvScene} from './scenes/SafeEnvScene';
import {ApprovalScene} from './scenes/ApprovalScene';
import {IntegrationsScene} from './scenes/IntegrationsScene';
import {WorkflowScene} from './scenes/WorkflowScene';
import {ImpactScene} from './scenes/ImpactScene';
import {CtaScene} from './scenes/CtaScene';
import {TRANSITION_FRAMES, scenesInFrames} from './utils/timeline';

const timing = springTiming({
  durationInFrames: TRANSITION_FRAMES,
  config: {damping: 200},
});

export const CoworkLaunchVideo: FC = () => {
  const workflowDuration = scenesInFrames.find(
    (scene) => scene.id === 'workflow'
  )?.frames;

  return (
    <>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={scenesInFrames[0].frames} premountFor={TRANSITION_FRAMES}>
          <IntroScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={timing} />
        <TransitionSeries.Sequence durationInFrames={scenesInFrames[1].frames} premountFor={TRANSITION_FRAMES}>
          <ProblemScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({direction: 'from-right'})} timing={timing} />
        <TransitionSeries.Sequence durationInFrames={scenesInFrames[2].frames} premountFor={TRANSITION_FRAMES}>
          <LaunchScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={wipe({direction: 'from-left'})} timing={timing} />
        <TransitionSeries.Sequence durationInFrames={scenesInFrames[3].frames} premountFor={TRANSITION_FRAMES}>
          <OrchestrateScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={timing} />
        <TransitionSeries.Sequence durationInFrames={scenesInFrames[4].frames} premountFor={TRANSITION_FRAMES}>
          <SafeEnvScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({direction: 'from-bottom'})} timing={timing} />
        <TransitionSeries.Sequence durationInFrames={scenesInFrames[5].frames} premountFor={TRANSITION_FRAMES}>
          <ApprovalScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={timing} />
        <TransitionSeries.Sequence durationInFrames={scenesInFrames[6].frames} premountFor={TRANSITION_FRAMES}>
          <IntegrationsScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={wipe({direction: 'from-right'})} timing={timing} />
        <TransitionSeries.Sequence durationInFrames={scenesInFrames[7].frames} premountFor={TRANSITION_FRAMES}>
          <WorkflowScene durationInFrames={workflowDuration ?? scenesInFrames[7].frames} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({direction: 'from-top'})} timing={timing} />
        <TransitionSeries.Sequence durationInFrames={scenesInFrames[8].frames} premountFor={TRANSITION_FRAMES}>
          <ImpactScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={timing} />
        <TransitionSeries.Sequence durationInFrames={scenesInFrames[9].frames} premountFor={TRANSITION_FRAMES}>
          <CtaScene />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </>
  );
};
