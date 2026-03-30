# Design System — Project Instructions

This is the `@hanabi-challenges/design-system` package. It is a standalone published package consumed by `hanabi-challenges/hanabi-challenges` and any future Hanabi community projects.

## Structure

- `src/index.ts` — primary export surface (Tier 1 DS components + Core* re-exports)
- `src/mantine.tsx` — Mantine wrappers and defaults; the boundary between raw Mantine and the DS
- `src/components/` — all first-party components
- `src/primitives/` — design tokens, text-styles, themes

## Component Tiers

See `docs/standards.md` for the full tier definition.

- **Tier 1**: Custom-built DS components (`Button`, `Text`, `Heading`, etc.) — exported from `src/index.ts`
- **Tier 2 (Core*)**: Mantine components re-exported through the DS boundary — prefixed `Core` in `src/index.ts`

## Adding Components

New components go in `src/components/<category>/<ComponentName>/`. Export them from `src/index.ts`.

Do not import directly from `@mantine/core` in new component files — go through `src/mantine.tsx` instead.

## Releasing

This package uses Changesets. To ship a change:

1. Run `pnpm changeset` and follow the prompts (patch / minor / major).
2. Commit the generated changeset file alongside your code change.
3. When merged to `main`, the Release workflow opens a "Version Packages" PR.
4. Merging that PR triggers a publish to GitHub Packages.

## Git Workflow

Do NOT commit, push, or open PRs unless explicitly asked.

Before committing, run:
```
pnpm format && pnpm lint && pnpm typecheck && pnpm build
```
