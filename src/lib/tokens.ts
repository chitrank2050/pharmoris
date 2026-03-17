// JS mirror of CSS vars — used only where CSS variables are inaccessible (Recharts, canvas)
export const tokens = {
  colors: {
    bg: '#0a0c0f',
    surface: '#111418',
    surfaceRaised: '#161b22',
    border: '#1e2530',
    accent: '#00c896',
    textSecondary: '#6b7a8d',
    textMuted: '#3d4a5c',
    warning: '#f59e0b',
    danger: '#ef4444',
  },
  fonts: {
    display: 'var(--font-sans), sans-serif',
  },
} as const
