// src/components/ServiceModal.jsx
// Panneau d'explication d'un service — sort du bord droit, ancré en haut, ~80% de large, hauteur auto.
// Couleur de fond + accent par service (panelBg / panelAccent / panelAccent2).
// Listes : styles 'steps' | 'grid' | 'chips' | 'columns' | 'chevrons'. Supporte une 2e liste + une vidéo.
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Box, Typography, IconButton } from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'

export default function ServiceModal({ open, onClose, pilier }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const Icon = pilier?.Icon
  const BG = pilier?.panelBg || '#0B1220'
  const A = pilier?.panelAccent || '#5EEAE4'
  const A2 = pilier?.panelAccent2 || '#12A9A4'

  const renderList = (items, title, style) => {
    if (!items || !items.length) return null
    return (
      <Box sx={{ mt: 4 }}>
        <Typography sx={{ color: A, fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.16em', mb: 2 }}>
          {(title || 'Notre approche').toUpperCase()}
        </Typography>

        {style === 'chips' ? (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {items.map((item, i) => (
              <Box key={i} component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 1.75, py: 0.9, borderRadius: 999,
                bgcolor: `${A}14`, border: `1px solid ${A}45`, color: '#E7E4F5', fontSize: '0.85rem',
                transition: 'all .2s ease', '&:hover': { bgcolor: `${A}26`, borderColor: `${A}88` } }}>
                <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: A, flex: '0 0 auto' }} />
                {item}
              </Box>
            ))}
          </Box>
        ) : style === 'chevrons' ? (
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {items.map((item, i) => (
              <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, py: 1.35,
                borderBottom: i < items.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                <Box sx={{ width: 26, height: 26, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  bgcolor: `${A}1F`, border: `1px solid ${A}55`, flex: '0 0 auto' }}>
                  <ChevronRightRoundedIcon sx={{ fontSize: 18, color: A }} />
                </Box>
                <Typography sx={{ color: '#DCE4EE', fontSize: '0.94rem', lineHeight: 1.4 }}>{item}</Typography>
              </Box>
            ))}
          </Box>
        ) : style === 'columns' ? (
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, columnGap: 3 }}>
            {items.map((item, i) => (
              <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, py: 1.25, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <Box sx={{ width: 9, height: 9, transform: 'rotate(45deg)', bgcolor: A, flex: '0 0 auto', mt: '6px', borderRadius: '2px' }} />
                <Typography sx={{ color: '#DCE4EE', fontSize: '0.92rem', lineHeight: 1.45 }}>{item}</Typography>
              </Box>
            ))}
          </Box>
        ) : style === 'grid' ? (
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.25 }}>
            {items.map((item, i) => (
              <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25, p: 1.5, borderRadius: '12px',
                bgcolor: `${A}0D`, border: `1px solid ${A}29` }}>
                <CheckCircleRoundedIcon sx={{ fontSize: 19, color: A, flex: '0 0 auto', mt: '1px' }} />
                <Typography sx={{ color: '#DCE4EE', fontSize: '0.92rem', lineHeight: 1.45 }}>{item}</Typography>
              </Box>
            ))}
          </Box>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {items.map((step, i) => (
              <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.75, p: 1.5, borderRadius: '12px',
                bgcolor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
                transition: 'border-color .2s ease, background-color .2s ease',
                '&:hover': { borderColor: `${A}59`, bgcolor: `${A}0D` } }}>
                <Box sx={{ flex: '0 0 auto', width: 30, height: 30, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: `linear-gradient(135deg, ${A}, ${A2})`, color: '#04121a', fontWeight: 800, fontSize: '0.8rem' }}>
                  {i + 1}
                </Box>
                <Typography sx={{ color: '#DCE4EE', fontSize: '0.95rem', lineHeight: 1.4 }}>{step}</Typography>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    )
  }

  return (
    <AnimatePresence>
      {open && pilier && (
        <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }}
          onClick={onClose}
          sx={{ position: 'fixed', inset: 0, zIndex: 1300, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start',
            bgcolor: 'rgba(6,12,24,0.6)', backdropFilter: 'blur(5px)' }}>
          <Box component={motion.div} onClick={(e) => e.stopPropagation()}
            initial={{ x: '110%' }} animate={{ x: 0 }} exit={{ x: '110%' }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            sx={{ width: { xs: '100%', md: '80%' }, maxHeight: '100vh', bgcolor: BG,
              borderRadius: '0 0 0 18px', overflow: 'hidden', borderLeft: '1px solid rgba(255,255,255,0.10)', borderBottom: '1px solid rgba(255,255,255,0.10)',
              boxShadow: '0 40px 90px -30px rgba(0,0,0,0.75)', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ height: 4, background: `linear-gradient(90deg, ${A2}, ${A})`, flex: '0 0 auto' }} />

            <Box sx={{ p: { xs: 3, sm: 5 }, overflowY: 'auto' }}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
                <IconButton onClick={onClose} sx={{ color: '#93A4BC', bgcolor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)' }} aria-label="Fermer">
                  <CloseRoundedIcon />
                </IconButton>
              </Box>

              <Box sx={{ width: 60, height: 60, borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                bgcolor: `${A}1F`, border: `1px solid ${A}55`, mb: 2.5 }}>
                {Icon && <Icon sx={{ fontSize: 32, color: A }} />}
              </Box>
              <Box component="span" sx={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: A }}>{pilier.num} · {pilier.key}</Box>
              <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: { xs: '1.5rem', md: '1.9rem' }, lineHeight: 1.2, mt: 0.5, mb: 3 }}>
                {pilier.title}
              </Typography>

              <Typography sx={{ color: '#B7C2D2', fontSize: '1.02rem', lineHeight: 1.8, textAlign: 'justify' }}>
                {pilier.intro || pilier.full}
              </Typography>

              {renderList(pilier.list, pilier.listTitle, pilier.listStyle)}
              {renderList(pilier.list2, pilier.list2Title, pilier.list2Style)}

              {/* Vidéo de démonstration (YouTube) */}
              {pilier.video && (
                <Box sx={{ mt: 4 }}>
                  <Typography sx={{ color: A, fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.16em', mb: 1.5 }}>
                    {(pilier.video.title || 'Démonstration').toUpperCase()}
                  </Typography>
                  {pilier.video.desc && (
                    <Typography sx={{ color: '#B7C2D2', fontSize: '0.95rem', lineHeight: 1.65, mb: 2, textAlign: 'justify' }}>
                      {pilier.video.desc}
                    </Typography>
                  )}
                  <Box sx={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', borderRadius: '14px', overflow: 'hidden', border: `1px solid ${A}45` }}>
                    <Box component="iframe"
                      src={`https://www.youtube.com/embed/${pilier.video.id}`}
                      title={pilier.video.title || 'Démonstration'}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }} />
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      )}
    </AnimatePresence>
  )
}
