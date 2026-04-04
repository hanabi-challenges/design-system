import { tokens } from "../tokens/index.ts";

const lt = tokens.color.theme.light;
const dk = tokens.color.theme.dark;

// Light mode CSS custom properties
export const lightThemeVariables = {
  "--ds-color-surface": lt.surface,
  "--ds-color-surface-muted": lt.surfaceMuted,
  "--ds-color-text": lt.text,
  "--ds-color-text-muted": lt.textMuted,
  "--ds-color-border": lt.border,

  // Blue accent
  "--ds-color-accent-blue-weak": lt.accentBlue.weak,
  "--ds-color-accent-blue-mid": lt.accentBlue.mid,
  "--ds-color-accent-blue-strong": lt.accentBlue.strong,

  // Green accent
  "--ds-color-accent-green-weak": lt.accentGreen.weak,
  "--ds-color-accent-green-mid": lt.accentGreen.mid,
  "--ds-color-accent-green-strong": lt.accentGreen.strong,

  // Magenta accent
  "--ds-color-accent-magenta-weak": lt.accentMagenta.weak,
  "--ds-color-accent-magenta-mid": lt.accentMagenta.mid,
  "--ds-color-accent-magenta-strong": lt.accentMagenta.strong,

  // Generic accent aliases → blue (interactive default)
  "--ds-color-accent-weak": lt.accentBlue.weak,
  "--ds-color-accent-mid": lt.accentBlue.mid,
  "--ds-color-accent-strong": lt.accentBlue.strong,
} as const;

// Dark mode CSS custom properties
export const darkThemeVariables = {
  "--ds-color-surface": dk.surface,
  "--ds-color-surface-muted": dk.surfaceMuted,
  "--ds-color-text": dk.text,
  "--ds-color-text-muted": dk.textMuted,
  "--ds-color-border": dk.border,

  // Blue accent
  "--ds-color-accent-blue-weak": dk.accentBlue.weak,
  "--ds-color-accent-blue-mid": dk.accentBlue.mid,
  "--ds-color-accent-blue-strong": dk.accentBlue.strong,

  // Green accent
  "--ds-color-accent-green-weak": dk.accentGreen.weak,
  "--ds-color-accent-green-mid": dk.accentGreen.mid,
  "--ds-color-accent-green-strong": dk.accentGreen.strong,

  // Magenta accent
  "--ds-color-accent-magenta-weak": dk.accentMagenta.weak,
  "--ds-color-accent-magenta-mid": dk.accentMagenta.mid,
  "--ds-color-accent-magenta-strong": dk.accentMagenta.strong,

  // Generic accent aliases → blue (interactive default)
  "--ds-color-accent-weak": dk.accentBlue.weak,
  "--ds-color-accent-mid": dk.accentBlue.mid,
  "--ds-color-accent-strong": dk.accentBlue.strong,
} as const;

/**
 * Generate a full CSS string for both themes.
 *
 * - OS preference is the default (`:root` media query block).
 * - Manual overrides via `[data-theme="light"]` / `[data-theme="dark"]`
 *   take precedence over the media query.
 */
export const generateAllThemeCSS = (): string => {
  const toBlock = (vars: Record<string, string>) =>
    Object.entries(vars)
      .map(([k, v]) => `  ${k}: ${v};`)
      .join("\n");

  return [
    `@media (prefers-color-scheme: light) {\n  :root {\n${toBlock(lightThemeVariables)}\n  }\n}`,
    `@media (prefers-color-scheme: dark) {\n  :root {\n${toBlock(darkThemeVariables)}\n  }\n}`,
    `:root[data-theme="light"] {\n${toBlock(lightThemeVariables)}\n}`,
    `:root[data-theme="dark"] {\n${toBlock(darkThemeVariables)}\n}`,
  ].join("\n\n");
};

/**
 * Generate a CSS string for a single explicit theme selector.
 * Useful when you only need one block (e.g. for SSR injection).
 */
export const generateThemeCSS = (theme: "light" | "dark"): string => {
  const vars = theme === "light" ? lightThemeVariables : darkThemeVariables;
  const body = Object.entries(vars)
    .map(([k, v]) => `  ${k}: ${v};`)
    .join("\n");
  return `:root[data-theme="${theme}"] {\n${body}\n}`;
};
