export const VIDEO_FPS = 30;
export const VIDEO_WIDTH = 1920;
export const VIDEO_HEIGHT = 1080;

export const TRANSITION_FRAMES = Math.round(0.6 * VIDEO_FPS);

export const scenes = [
  {id: 'intro', seconds: 6},
  {id: 'problem', seconds: 8},
  {id: 'launch', seconds: 8},
  {id: 'orchestrate', seconds: 12},
  {id: 'safe', seconds: 9},
  {id: 'approval', seconds: 9},
  {id: 'integrations', seconds: 9},
  {id: 'workflow', seconds: 12},
  {id: 'impact', seconds: 8},
  {id: 'cta', seconds: 8},
];

export const scenesInFrames = scenes.map((scene) => ({
  ...scene,
  frames: Math.round(scene.seconds * VIDEO_FPS),
}));

export const totalDurationInFrames =
  scenesInFrames.reduce((sum, scene) => sum + scene.frames, 0) -
  TRANSITION_FRAMES * (scenesInFrames.length - 1);
