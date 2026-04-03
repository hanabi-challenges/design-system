# @hanabi-challenges/design-system

## 2.1.0

### Minor Changes

- 2a99918: Widen Core\* wrapper types to accept arbitrary Mantine props
  - `CoreButton`, `CoreActionIcon`, `CoreAlert`, `CoreBadge`, `CoreStack`, `CoreImage`: accept `Record<string, unknown>` so Mantine-style props (onClick, loading, variant, color, leftSection, etc.) pass through TypeScript without errors
  - `Card`: fix overload to accept `href?: string | undefined` (instead of requiring `href?: undefined` for the div branch)
  - `Card`: add `'accent'` variant
  - `Button` (DS primitive): add `'outline'` and `'subtle'` variants
  - `Text` (DS primitive): accept unknown extra props
  - Export `BadgeTone` type from the package root

### Patch Changes

- 083d81a: Fix `Link` type to accept `children` prop

## 2.0.0

### Major Changes

- c76a6f3: v2.0.0 design token overhaul

  **Breaking changes:**
  - `colorTheme` now exposes three named accent families (`accentBlue`, `accentGreen`, `accentMagenta`) with `weak/mid/strong` levels per theme, replacing the single `accentWeak`/`accentStrong` pair.
  - CSS custom properties `--ds-color-accent-weak` and `--ds-color-accent-strong` are retained as blue-accent aliases for backward compatibility; new `--ds-color-accent-{blue|green|magenta}-{weak|mid|strong}` properties are added.
  - Color scale (`colorScale`) rewritten: old `blue` / `purple` / `amber` scale keys replaced with `charcoal`, `ivory`, `magenta`, `blue`, `green`, `amber`, `red` aligned to the v2 palette.
  - Typography: display and heading font families changed from `Inter` to `Pacifico` (single weight 400); body remains `Inter`.
  - Semantic KPI and alert colors updated to use the v2 accent palette.
  - Categorical data colors reordered and updated to anchor on blue → green → magenta.

  **New additions:**
  - `generateAllThemeCSS()` helper in `themes/index.ts` that emits both OS-preference media queries and explicit `[data-theme]` overrides in a single CSS string.
  - OS `prefers-color-scheme` is now the primary theme signal; `[data-theme="light/dark"]` on `:root` overrides it.
