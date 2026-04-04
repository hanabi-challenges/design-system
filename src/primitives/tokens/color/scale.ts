export const colorScale = {
  charcoal: {
    1: "#8480a0", // muted text on light, borders
    2: "#4a4768", // secondary text on light, strong borders
    3: "#2a2840", // surface-muted in dark, strong text on light
    4: "#1a1828", // main surface in dark
    5: "#0f0e1a", // deepest surface, default text on light
  },
  ivory: {
    1: "#fdfaf4", // main surface in light, primary text on dark
    2: "#f5efdc", // surface-muted in light
    3: "#c8c0a8", // muted text on dark
    4: "#a09880", // secondary borders in light
    5: "#786850", // strong borders in light
  },
  magenta: {
    1: "#fce8f0", // weak fill on light
    2: "#d0145a", // mid — readable on light surfaces
    3: "#8c0c3c", // strong — text on light
    4: "#e8185c", // mid — vivid on dark surfaces
    5: "#f9a8d4", // strong — text on dark
  },
  blue: {
    1: "#dbeafe", // weak fill on light
    2: "#2563eb", // mid — readable on light surfaces
    3: "#1d4ed8", // strong — text on light
    4: "#60a5fa", // mid — readable on dark surfaces
    5: "#93c5fd", // strong — text on dark
  },
  green: {
    1: "#d1fae5", // weak fill on light
    2: "#059669", // mid — readable on light surfaces
    3: "#065f46", // strong — text on light
    4: "#00c896", // mid — vivid on dark surfaces
    5: "#34d399", // strong — text on dark
  },
  // Retained for semantic use (alerts, KPI)
  amber: {
    1: "#fef3c7",
    2: "#d97706",
    3: "#92400e",
    4: "#fbbf24",
    5: "#fde68a",
  },
  red: {
    1: "#fef2f2",
    2: "#b91c1c",
    3: "#7f1d1d",
    4: "#ef4444",
    5: "#fecdd3",
  },
} as const;
