# Repository Guidelines

## Project Structure & Module Organization
- `src/` contains the Remotion video code.
  - `src/Root.tsx` registers compositions; `src/Video.tsx` wires the main video.
  - `src/scenes/` holds scene components.
  - `src/components/` holds shared UI pieces.
  - `src/utils/` holds helpers (timeline lives in `src/utils/timeline.ts`).
  - `src/design/` holds design tokens/styles.
- `public/` stores static assets referenced by scenes.
- `remotion.config.ts` configures Remotion.

## Build, Test, and Development Commands
- `npm install` installs deps.
- `npm run start` opens Remotion Studio for interactive editing.
- `npm run preview` runs a quick preview server.
- `npm run render -- CoworkLaunch out/cowork-launch.mp4` renders the main composition to a file.

## Coding Style & Naming Conventions
- TypeScript + React 18; strict TS config in `tsconfig.json`.
- Match existing formatting; no formatter script is defined.
- Components use PascalCase (example: `CoworkLaunch`), files follow component names.
- Directory names are lower-case (example: `src/scenes/`).

## Testing Guidelines
- No automated tests or test framework configured.
- Validate changes by running `npm run preview` or a short `npm run render`.
- For timing edits, re-check `src/utils/timeline.ts` and verify key timestamps in Studio.

## Commit & Pull Request Guidelines
- Git history is minimal; existing commit uses short sentence-case (`Initial Remotion launch video`). Follow that style.
- PRs: include a short summary, render command used, output path, and 2-3 key timestamps or frames for visual changes.

## Render & Output Notes
- Target output is 1080p at 30fps; edit length is ~86-89 seconds.
- The core composition name is `CoworkLaunch`; keep it stable unless you update docs and render commands.
