export const colorSemantic = {
  kpiText: {
    positive: {
      onLightSurface: "#059669", // green.2
      onDarkSurface: "#00c896", // green.4
    },
    neutral: {
      onLightSurface: "#d97706", // amber.2
      onDarkSurface: "#fbbf24", // amber.4
    },
    negative: {
      onLightSurface: "#b91c1c", // red.2
      onDarkSurface: "#ef4444", // red.4
    },
  },

  alert: {
    success: {
      light: { bg: "#d1fae5", text: "#065f46" }, // green.1 / green.3
      dark: { bg: "rgba(0, 200, 150, 0.18)", text: "#34d399" }, // green weak / green.5
    },
    info: {
      light: { bg: "#dbeafe", text: "#1d4ed8" }, // blue.1 / blue.3
      dark: { bg: "rgba(37, 99, 235, 0.2)", text: "#93c5fd" }, // blue weak / blue.5
    },
    warning: {
      light: { bg: "#fef3c7", text: "#92400e" }, // amber.1 / amber.3
      dark: { bg: "rgba(251, 191, 36, 0.18)", text: "#fde68a" }, // amber weak / amber.5
    },
    error: {
      light: { bg: "#fef2f2", text: "#7f1d1d" }, // red.1 / red.3
      dark: { bg: "rgba(239, 68, 68, 0.18)", text: "#fecdd3" }, // red weak / red.5
    },
  },
} as const;
