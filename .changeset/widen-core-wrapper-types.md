---
"@hanabi-challenges/design-system": minor
---

Widen Core* wrapper types to accept arbitrary Mantine props

- `CoreButton`, `CoreActionIcon`, `CoreAlert`, `CoreBadge`, `CoreStack`, `CoreImage`: accept `Record<string, unknown>` so Mantine-style props (onClick, loading, variant, color, leftSection, etc.) pass through TypeScript without errors
- `Card`: fix overload to accept `href?: string | undefined` (instead of requiring `href?: undefined` for the div branch)
- `Card`: add `'accent'` variant
- `Button` (DS primitive): add `'outline'` and `'subtle'` variants
- `Text` (DS primitive): accept unknown extra props
- Export `BadgeTone` type from the package root
