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
import { Button, Text, Heading, Stack } from '@hanabi-challenges/design-system';
```

For lower-level Mantine primitives:

```tsx
import { CoreBox, CoreAnchor } from '@hanabi-challenges/design-system';
```

## Releasing

See [CLAUDE.md](./CLAUDE.md) for the Changesets release workflow.
