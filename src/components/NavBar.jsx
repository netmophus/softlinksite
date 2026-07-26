// src/components/NavBar.jsx
// Paradigme : barre de navigation FLOTTANTE en pilule de verre (île détachée des bords).
// Menu segmenté : l'onglet actif est une pastille pleine. Reste fixe au scroll.
import { useEffect, useState } from 'react'
import {
  Box, Stack, Button, IconButton, Drawer, List, ListItemButton, ListItemText, Divider,
} from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { motion } from 'framer-motion'
import { tokens } from '../theme'
import logo from '../assets/images/logo.png'

const NAV = [
  { label: 'Accueil', id: 'accueil' },
  { label: 'Services', id: 'services' },
  { label: 'Réalisations', id: 'realisations' },
  { label: 'Formations', id: 'formations' },
  { label: 'Contact', id: 'contact' },
]

const scrollToId = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('accueil')
  const [drawer, setDrawer] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const els = NAV.map((n) => document.getElementById(n.id)).filter(Boolean)
    if (!els.length) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const go = (id) => { scrollToId(id); setDrawer(false) }

  // Onglet segmenté : pastille pleine quand actif
  const tabSx = (on) => ({
    px: 2,
    py: 0.7,
    borderRadius: 999,
    fontSize: '0.9rem',
    fontWeight: 500,
    color: on ? '#fff' : tokens.textDim,
    bgcolor: on ? 'rgba(124,108,255,0.20)' : 'transparent',
    border: `1px solid ${on ? tokens.borderAccent : 'transparent'}`,
    transition: 'all .22s ease',
    '&:hover': { color: '#fff', bgcolor: on ? 'rgba(124,108,255,0.26)' : 'rgba(255,255,255,0.06)' },
  })

  return (
    <Box
      component={motion.nav}
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      sx={{
        position: 'sticky',
        top: { xs: 8, md: 14 },
        zIndex: 1100,
        px: { xs: 1.5, md: 3 },
        mt: { xs: 1, md: 1.5 },
      }}
    >
      {/* La pilule flottante */}
      <Box
        sx={{
          maxWidth: 1180,
          mx: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          pl: { xs: 1.5, md: 2 },
          pr: { xs: 1, md: 1.5 },
          py: { xs: 0.75, md: 1 },
          borderRadius: 999,
          border: `1px solid ${tokens.border}`,
          bgcolor: scrolled ? 'rgba(18,18,28,0.82)' : 'rgba(18,18,28,0.55)',
          backdropFilter: 'blur(16px)',
          boxShadow: scrolled
            ? '0 12px 40px rgba(0,0,0,0.45)'
            : '0 8px 30px rgba(0,0,0,0.30)',
          transition: 'background-color .3s ease, box-shadow .3s ease',
        }}
      >
        {/* Logo */}
        <Box
          component={motion.div}
          whileHover={{ scale: 1.05 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', pl: 0.5 }}
        >
          <Box
            component="img"
            src={logo}
            alt="Softlink Technologies"
            sx={{ height: { xs: 38, md: 46 }, filter: 'drop-shadow(0 0 10px rgba(124,108,255,0.5))' }}
          />
        </Box>

        {/* Onglets — desktop */}
        <Stack direction="row" spacing={0.5} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
          {NAV.map((n) => (
            <Button key={n.id} disableRipple onClick={() => go(n.id)} sx={tabSx(active === n.id)}>
              {n.label}
            </Button>
          ))}
        </Stack>

        {/* Hamburger — mobile */}
        <IconButton
          onClick={() => setDrawer(true)}
          aria-label="Menu"
          sx={{ display: { xs: 'inline-flex', md: 'none' }, color: tokens.textMain }}
        >
          <MenuRoundedIcon />
        </IconButton>
      </Box>

      {/* Tiroir mobile */}
      <Drawer
        anchor="right"
        open={drawer}
        onClose={() => setDrawer(false)}
        PaperProps={{
          sx: {
            width: '80%', maxWidth: 320, bgcolor: tokens.bg,
            borderLeft: `1px solid ${tokens.border}`,
            backgroundImage: 'radial-gradient(circle at 100% 0%, rgba(124,108,255,0.14), transparent 55%)',
          },
        }}
      >
        <Stack direction="row" justifyContent="flex-end" sx={{ p: 1.5 }}>
          <IconButton onClick={() => setDrawer(false)} sx={{ color: tokens.textDim }} aria-label="Fermer">
            <CloseRoundedIcon />
          </IconButton>
        </Stack>
        <Divider sx={{ borderColor: tokens.border }} />
        <List sx={{ pt: 1 }}>
          {NAV.map((n) => (
            <ListItemButton
              key={n.id}
              onClick={() => go(n.id)}
              selected={active === n.id}
              sx={{ py: 1.5, mx: 1, borderRadius: 2, '&.Mui-selected': { bgcolor: 'rgba(124,108,255,0.12)' }, '&:hover': { bgcolor: 'rgba(124,108,255,0.10)' } }}
            >
              <ListItemText primary={n.label} primaryTypographyProps={{ fontWeight: 500, color: active === n.id ? tokens.violet : tokens.textMain }} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}
