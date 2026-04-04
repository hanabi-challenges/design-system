export const typography = {
  fontFamily: {
    display: '"Permanent Marker", cursive',
    heading: '"Permanent Marker", cursive',
    body: '"Inter", sans-serif',
    prose: '"Inter", sans-serif', // matches body until prose has a distinct use case
    mono: '"Roboto Mono", monospace',
    meta: '"Inter", sans-serif',
  },

  fontWeight: {
    display: 400, // Permanent Marker is single-weight (400 only)
    heading: 400, // Permanent Marker is single-weight (400 only)
    body: 400,
    prose: 400,
    mono: 400,
    meta: 400,
  },

  lineHeight: {
    tight: 1.2, // display + headings
    normal: 1.4, // body
    relaxed: 1.6, // prose
  },

  letterSpacing: {
    normal: "0",
  },
} as const;

export type Typography = typeof typography;
