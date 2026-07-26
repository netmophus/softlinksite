// src/sections/Hero.jsx
// Structure SIMPLE et centrée : une seule boîte de contenu (max-width, centrée),
// text-align center sur des blocs pleine largeur. Peu d'imbrication.
import { Box, Typography } from '@mui/material'
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded'
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded'
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded'
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import { motion } from 'framer-motion'
import { tokens } from '../theme'

const DOMAINS = [
  { label: 'Logiciels métiers', Icon: TerminalRoundedIcon },
  { label: 'Digitalisation', Icon: AccountTreeRoundedIcon },
  { label: 'IA générative', Icon: PsychologyRoundedIcon },
  { label: 'RAG sécurisé', Icon: ShieldRoundedIcon },
]

export default function Hero() {
  return (
    <Box
      component="section"
      id="accueil"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: { xs: 'auto', md: 'calc(100vh - 80px)' },
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        textAlign: 'center',
        pt: { xs: 2, md: 2.5 },
        pb: { xs: 10, md: 8 },
        px: 2,
        bgcolor: tokens.bg,
      }}
    >
      {/* Halo doux */}
      <Box aria-hidden sx={{
        position: 'absolute', top: '16%', left: '50%', transform: 'translateX(-50%)',
        width: { xs: 340, md: 720 }, height: { xs: 340, md: 720 }, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,108,255,0.22), rgba(167,139,250,0.10) 40%, transparent 70%)',
        filter: 'blur(30px)', pointerEvents: 'none',
      }} />

      {/* UNE seule boîte de contenu, centrée. Tout dedans est centré via text-align. */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        sx={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 820, mx: 'auto', textAlign: 'center' }}
      >
        {/* Accroche — badge à bordure dégradée qui tourne */}
        <Box
          sx={{
            position: 'relative',
            display: 'inline-flex',
            borderRadius: 999,
            // bordure animée (conic-gradient qui pivote via --badge-angle)
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              borderRadius: 'inherit',
              padding: '1.5px',
              background: `conic-gradient(from var(--badge-angle), transparent 0%, ${tokens.violet} 18%, ${tokens.indigo} 38%, transparent 55%)`,
              WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              animation: 'badge-rotate 4.5s linear infinite',
              pointerEvents: 'none',
            },
          }}
        >
          <Box
            component="span"
            sx={{
              position: 'relative',
              zIndex: 1,
              display: 'inline-flex',
              alignItems: 'center',
              gap: { xs: 1, md: 1.3 },
              px: { xs: 1.75, md: 3 },
              py: { xs: 0.85, md: 1.35 },
              borderRadius: 999,
              bgcolor: 'rgba(18,18,28,0.7)',
              backdropFilter: 'blur(6px)',
              maxWidth: '100%',
            }}
          >
            {/* point lumineux qui pulse */}
            <Box component="span" sx={{
              width: { xs: 24, md: 42 }, height: { xs: 24, md: 42 }, borderRadius: '50%', flex: '0 0 auto',
              bgcolor: tokens.violet, boxShadow: { xs: `0 0 14px ${tokens.violet}`, md: `0 0 30px ${tokens.violet}` },
              animation: 'badge-dot 2.2s ease-in-out infinite',
            }} />
            <AutoAwesomeRoundedIcon sx={{ fontSize: { xs: 16, md: 20 }, color: tokens.violet, flex: '0 0 auto' }} />
            <Typography component="span" sx={{
              fontSize: { xs: '0.72rem', sm: '0.85rem', md: '1rem' }, letterSpacing: { xs: 0.2, md: 0.5 }, fontWeight: 500, color: tokens.textMain, whiteSpace: 'nowrap',
            }}>
              Technologie au service des métiers
            </Typography>
          </Box>
        </Box>

        {/* Titre — bloc pleine largeur, texte centré */}
        <Typography
          variant="h1"
          sx={{
            mt: 3, mb: 0,
            fontSize: { xs: '3rem', sm: '4.2rem', md: '5.4rem' }, lineHeight: 1.04,
            background: `linear-gradient(92deg, #ffffff 0%, ${tokens.violet} 58%, ${tokens.indigo} 100%)`,
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            filter: 'drop-shadow(0 0 30px rgba(124,108,255,0.35))',
          }}
        >
          Future is Digital
        </Typography>

        {/* Sous-titre */}
        <Typography sx={{
          mt: 3, mb: 0, mx: 'auto', maxWidth: 620,
          fontSize: { xs: '1.15rem', md: '1.4rem' }, fontWeight: 500, color: tokens.textMain,
        }}>
          Des solutions digitales qui font avancer votre organisation.
        </Typography>

        {/* Paragraphe */}
        <Typography sx={{
          mt: 2.5, mb: 0, mx: 'auto', maxWidth: 660,
          fontSize: { xs: '0.98rem', md: '1.05rem' }, lineHeight: 1.75, color: tokens.textDim,
        }}>
          Softlink Technologies développe des logiciels sur mesure et intègre l’intelligence
          artificielle pour rendre les processus plus simples, les décisions plus rapides et les
          équipes plus performantes.
        </Typography>

        {/* 4 domaines — centrés */}
        <Box sx={{ mt: 4.5, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1.5 }}>
          {DOMAINS.map(({ label, Icon }) => (
            <Box key={label} sx={{
              display: 'inline-flex', alignItems: 'center', gap: 1.25,
              px: 1.75, py: 1, borderRadius: '12px',
              bgcolor: 'rgba(255,255,255,0.03)', border: `1px solid ${tokens.border}`,
              transition: 'border-color .25s ease, transform .25s ease, background-color .25s ease',
              '&:hover': { borderColor: tokens.borderAccent, transform: 'translateY(-3px)', bgcolor: 'rgba(124,108,255,0.06)' },
            }}>
              <Box sx={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: '9px',
                background: 'linear-gradient(135deg, rgba(124,108,255,0.25), rgba(167,139,250,0.15))', border: `1px solid ${tokens.borderAccent}`,
              }}>
                <Icon sx={{ fontSize: 20, color: tokens.violet }} />
              </Box>
              <Typography sx={{ color: tokens.textMain, fontSize: '0.9rem', fontWeight: 500, whiteSpace: 'nowrap' }}>{label}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Indicateur de scroll */}
      <Box component={motion.div} aria-hidden
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }}
        sx={{
          position: 'absolute', bottom: 22, left: '50%', transform: 'translateX(-50%)',
          display: { xs: 'none', md: 'flex' }, flexDirection: 'column', alignItems: 'center', gap: 0.4,
          cursor: 'pointer', color: tokens.textDim, zIndex: 1, '&:hover': { color: tokens.violet },
        }}>
        <Typography sx={{ fontSize: '0.7rem', letterSpacing: 1.5, textTransform: 'uppercase' }}>Explorer</Typography>
        <Box component={motion.div} animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
          <KeyboardArrowDownRoundedIcon />
        </Box>
      </Box>
    </Box>
  )
}
