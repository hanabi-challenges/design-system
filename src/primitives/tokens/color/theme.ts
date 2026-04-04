export const colorTheme = {
  light: {
    surface: "#fdfaf4",
    surfaceMuted: "#f5efdc",
    text: "#0f0e1a",
    textMuted: "#4a4768",
    border: "rgba(74, 71, 104, 0.14)",
    accentBlue: {
      weak: "#dbeafe",
      mid: "#2563eb",
      strong: "#1d4ed8",
    },
    accentGreen: {
      weak: "#d1fae5",
      mid: "#059669",
      strong: "#065f46",
    },
    accentMagenta: {
      weak: "#fce8f0",
      mid: "#d0145a",
      strong: "#8c0c3c",
    },
  },
  dark: {
    surface: "#1a1828",
    surfaceMuted: "#2a2840",
    text: "#fdfaf4",
    textMuted: "#c8c0a8",
    border: "rgba(253, 250, 244, 0.1)",
    accentBlue: {
      weak: "rgba(37, 99, 235, 0.2)",
      mid: "#60a5fa",
      strong: "#93c5fd",
    },
    accentGreen: {
      weak: "rgba(0, 200, 150, 0.18)",
      mid: "#00c896",
      strong: "#34d399",
    },
    accentMagenta: {
      weak: "rgba(232, 24, 92, 0.18)",
      mid: "#e8185c",
      strong: "#f9a8d4",
    },
  },
} as const;
