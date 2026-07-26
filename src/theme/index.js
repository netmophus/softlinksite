// src/theme/index.js
// Thème MUI centralisé de Softlink Technologies.
// Identité : "IA premium" — fond sombre bleuté élégant, accent INDIGO/VIOLET.
// Crédible pour une clientèle entreprises & institutions (B2B, IA, RAG sécurisé).
import { createTheme } from '@mui/material/styles';

// --- Design tokens : la source unique de vérité pour couleurs, glow, etc. ---
export const tokens = {
  // Accent de marque : indigo → violet
  indigo: '#7C6CFF',
  violet: '#A78BFA',
  indigoDeep: '#5B4FE0',
  // Fonds sombres bleutés
  bg: '#0A0A12',       // fond principal (presque noir bleuté)
  bgAlt: '#12121C',    // sections alternées
  surface: '#16161F',  // cartes
  surfaceHi: 'rgba(255,255,255,0.05)', // glassmorphism
  border: 'rgba(255,255,255,0.08)',    // bordures neutres discrètes
  borderAccent: 'rgba(124,108,255,0.30)',
  textMain: '#ECECF1',
  textDim: '#9B9BB0',
};

// Ombres / halos réutilisables
export const glow = {
  soft: '0 0 22px rgba(124,108,255,0.18)',
  medium: '0 0 34px rgba(124,108,255,0.32)',
  card: '0 14px 44px rgba(0,0,0,0.5)',
  text: '0 0 16px rgba(124,108,255,0.45)',
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: tokens.indigo, light: tokens.violet, dark: tokens.indigoDeep },
    secondary: { main: tokens.violet },
    background: { default: tokens.bg, paper: tokens.surface },
    text: { primary: tokens.textMain, secondary: tokens.textDim },
    divider: tokens.border,
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    // Titres en Orbitron (identité de marque)
    h1: { fontFamily: 'Orbitron, sans-serif', fontWeight: 800, letterSpacing: 0.5, lineHeight: 1.1 },
    h2: { fontFamily: 'Orbitron, sans-serif', fontWeight: 700, letterSpacing: 0.5, lineHeight: 1.15 },
    h3: { fontFamily: 'Orbitron, sans-serif', fontWeight: 700, letterSpacing: 0.5 },
    h4: { fontFamily: 'Orbitron, sans-serif', fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: { borderRadius: 14 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { paddingInline: 26, paddingBlock: 11 },
        containedPrimary: {
          background: `linear-gradient(45deg, ${tokens.indigoDeep}, ${tokens.indigo})`,
          color: '#0b0713',
          boxShadow: glow.soft,
          '&:hover': {
            background: `linear-gradient(45deg, ${tokens.indigo}, ${tokens.violet})`,
            boxShadow: glow.medium,
          },
        },
        outlinedPrimary: {
          borderColor: tokens.borderAccent,
          color: tokens.violet,
          '&:hover': { borderColor: tokens.indigo, backgroundColor: 'rgba(124,108,255,0.08)' },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.surface,
          backgroundImage: 'none',
          border: `1px solid ${tokens.border}`,
          borderRadius: 16,
        },
      },
    },
  },
});

export default theme;
