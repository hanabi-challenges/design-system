# @hanabi-challenges/design-system

Shared design system for Hanabi Challenges. Provides themed Mantine components, typography primitives, and layout utilities.

## Installation

```bash
# .npmrc — add once per consuming repo
echo "@hanabi-challenges:registry=https://npm.pkg.github.com" >> .npmrc

pnpm add @hanabi-challenges/design-system
```

## Usage

```tsx
import { Button, Text, Heading, Stack } from "@hanabi-challenges/design-system";
```

For lower-level Mantine primitives:

```tsx
import { CoreBox, CoreAnchor } from "@hanabi-challenges/design-system";
```

## Fonts

The design system uses **Permanent Marker** for display and heading text, and **Inter** for body copy. Fonts are not bundled — consuming apps must load them. See [docs/typography.md](./docs/typography.md) for the full font stack and a ready-to-use Google Fonts snippet.

## Releasing

See [CLAUDE.md](./CLAUDE.md) for the Changesets release workflow.
