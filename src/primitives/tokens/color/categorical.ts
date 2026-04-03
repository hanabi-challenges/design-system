// Categorical palette for data visualization, aligned with the v2 accent system.
// Colors cycle through blue → green → magenta anchors with complementary fills.
export const colorCategorical = {
  cat1:  { light: '#2563eb', dark: '#60a5fa'  }, // blue mid
  cat2:  { light: '#059669', dark: '#00c896'  }, // green mid
  cat3:  { light: '#d0145a', dark: '#e8185c'  }, // magenta mid
  cat4:  { light: '#1d4ed8', dark: '#93c5fd'  }, // blue strong
  cat5:  { light: '#065f46', dark: '#34d399'  }, // green strong
  cat6:  { light: '#8c0c3c', dark: '#f9a8d4'  }, // magenta strong
  cat7:  { light: '#d97706', dark: '#fbbf24'  }, // amber (KPI / warning)
  cat8:  { light: '#b91c1c', dark: '#ef4444'  }, // red (error)
  cat9:  { light: '#4a4768', dark: '#c8c0a8'  }, // charcoal.2 / ivory.3 (neutral)
  cat10: { light: '#06b6d4', dark: '#a5f3fc'  }, // cyan (extended)
  cat11: { light: '#7c3aed', dark: '#c4b5fd'  }, // violet (extended)
  cat12: { light: '#0284c7', dark: '#bae6fd'  }, // sky (extended)
} as const;
