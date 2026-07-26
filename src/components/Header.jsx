// src/components/Header.jsx
// Menu moderne, 3 zones : logo (gauche) · menu centré à pilule glissante · CTA (droite).
// Pilule qui glisse entre les onglets (framer layoutId), suit le survol, revient sur
// la section active (scroll-spy). Fixe en haut, verre.
import { useEffect, useState } from 'react'
import {
  Box, Container, Button, IconButton, Drawer, List, ListItemButton, ListItemText, Divider, Stack,
} from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { motion } from 'framer-motion'
import { tokens } from '../theme'
import logo from '../assets/images/logo.png'

const NAV = [
  { label: 'Accueil', id: 'accueil' },
  { label: 'Services', id: 'services' },
  { label: 'Nos solutions', id: 'solutions' },
  { label: 'Formations', id: 'formations' },
]

const scrollToId = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

// Contact WhatsApp (+227 96 64 83 83) — « Discutons de votre projet »
const WHATSAPP_URL = `https://wa.me/22796648383?text=${encodeURIComponent('Bonjour Softlink, j’aimerais échanger sur un projet.')}`

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('accueil')
  const [hover, setHover] = useState(null)
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
  const highlighted = hover || active

  return (
    <Box
      component={motion.header}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      sx={{
        position: 'sticky', top: 0, zIndex: 1100,
        transition: 'background-color .3s ease, box-shadow .3s ease',
        bgcolor: scrolled ? 'rgba(10,10,18,0.85)' : 'rgba(10,10,18,0.30)',
        backdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${scrolled ? tokens.border : 'transparent'}`,
        boxShadow: scrolled ? '0 8px 30px rgba(0,0,0,0.35)' : 'none',
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 5 } }}>
        {/* 3 zones : gauche | centre | droite */}
        <Box sx={{ height: { xs: 66, md: 80 }, display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center' }}>
          {/* Logo — gauche */}
          <Box
            component={motion.div}
            whileHover={{ scale: 1.04 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            sx={{ justifySelf: 'start', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          >
            <Box component="img" src={logo} alt="Softlink Technologies"
              sx={{ height: { xs: 46, md: 58 }, filter: 'drop-shadow(0 0 12px rgba(124,108,255,0.5))' }} />
          </Box>

          {/* Menu — centre, pilule glissante */}
          <Stack
            direction="row"
            spacing={0.5}
            alignItems="center"
            onMouseLeave={() => setHover(null)}
            sx={{
              justifySelf: 'center',
              display: { xs: 'none', md: 'flex' },
              p: 0.6,
              borderRadius: 999,
              border: `1px solid ${tokens.border}`,
              bgcolor: 'rgba(255,255,255,0.02)',
            }}
          >
            {NAV.map((n) => {
              const on = highlighted === n.id
              return (
                <Box
                  key={n.id}
                  onMouseEnter={() => setHover(n.id)}
                  onClick={() => go(n.id)}
                  sx={{ position: 'relative', px: 2, py: 0.9, cursor: 'pointer', borderRadius: 999, userSelect: 'none' }}
                >
                  {on && (
                    <Box
                      component={motion.div}
                      layoutId="nav-pill"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      sx={{
                        position: 'absolute', inset: 0, borderRadius: 999,
                        background: 'linear-gradient(135deg, rgba(124,108,255,0.28), rgba(167,139,250,0.16))',
                        border: `1px solid ${tokens.borderAccent}`,
                        boxShadow: '0 0 18px rgba(124,108,255,0.25)',
                      }}
                    />
                  )}
                  <Box component="span" sx={{
                    position: 'relative', zIndex: 1, fontFamily: 'Poppins, sans-serif',
                    fontSize: '0.92rem', fontWeight: 500, color: on ? '#fff' : tokens.textDim, transition: 'color .2s ease',
                  }}>
                    {n.label}
                  </Box>
                </Box>
              )
            })}
          </Stack>

          {/* Droite — CTA (desktop) / hamburger (mobile) */}
          <Box sx={{ justifySelf: 'end', display: 'flex', alignItems: 'center' }}>
            <Button
              component="a"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<WhatsAppIcon />}
              sx={{
                display: { xs: 'none', md: 'inline-flex' },
                px: 2.25, py: 0.9, fontWeight: 600, fontSize: '0.88rem', color: '#0b0713', borderRadius: '10px',
                background: `linear-gradient(45deg, ${tokens.indigoDeep}, ${tokens.indigo} 55%, ${tokens.violet})`,
                boxShadow: '0 0 18px rgba(124,108,255,0.22)',
                transition: 'transform .2s ease, box-shadow .2s ease',
                '&:hover': { transform: 'translateY(-1px)', boxShadow: '0 0 26px rgba(124,108,255,0.4)' },
              }}
            >
              Discutons de votre projet
            </Button>

            <IconButton
              onClick={() => setDrawer(true)}
              aria-label="Menu"
              sx={{ display: { xs: 'inline-flex', md: 'none' }, color: tokens.textMain, border: `1px solid ${tokens.border}`, borderRadius: 2 }}
            >
              <MenuRoundedIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>

      {/* Tiroir mobile */}
      <Drawer
        anchor="right"
        open={drawer}
        onClose={() => setDrawer(false)}
        PaperProps={{ sx: { width: '80%', maxWidth: 320, bgcolor: tokens.bg, borderLeft: `1px solid ${tokens.border}`,
          backgroundImage: 'radial-gradient(circle at 100% 0%, rgba(124,108,255,0.14), transparent 55%)' } }}
      >
        <Stack direction="row" justifyContent="flex-end" sx={{ p: 1.5 }}>
          <IconButton onClick={() => setDrawer(false)} sx={{ color: tokens.textDim }} aria-label="Fermer"><CloseRoundedIcon /></IconButton>
        </Stack>
        <Divider sx={{ borderColor: tokens.border }} />
        <List sx={{ pt: 1 }}>
          {NAV.map((n) => (
            <ListItemButton key={n.id} onClick={() => go(n.id)} selected={active === n.id}
              sx={{ py: 1.5, mx: 1, borderRadius: 2, '&.Mui-selected': { bgcolor: 'rgba(124,108,255,0.12)' }, '&:hover': { bgcolor: 'rgba(124,108,255,0.10)' } }}>
              <ListItemText primary={n.label} primaryTypographyProps={{ fontWeight: 500, color: active === n.id ? tokens.violet : tokens.textMain }} />
            </ListItemButton>
          ))}
        </List>

        {/* CTA WhatsApp dans le tiroir mobile */}
        <Box sx={{ px: 2, pt: 2 }}>
          <Button
            component="a"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setDrawer(false)}
            fullWidth
            endIcon={<WhatsAppIcon />}
            sx={{
              py: 1.25, fontWeight: 700, fontSize: '0.9rem', color: '#0b0713', borderRadius: '10px',
              background: `linear-gradient(45deg, ${tokens.indigoDeep}, ${tokens.indigo} 55%, ${tokens.violet})`,
              boxShadow: '0 0 18px rgba(124,108,255,0.22)',
            }}
          >
            Discutons de votre projet
          </Button>
        </Box>
      </Drawer>
    </Box>
  )
}
