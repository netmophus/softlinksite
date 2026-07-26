// src/components/MapModal.jsx
// Carte de géolocalisation DANS la page (Google Maps intégré), ouverte avec la
// même animation "slider" que le modal de contact, occupant ~85% de l'écran.
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Box, Typography, IconButton, Stack, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded'
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded'
import { tokens, glow } from '../theme'

// Coordonnées GPS exactes de Softlink Technologies (Koubia, Niamey)
const LAT = 13.553272
const LNG = 2.060443
const LABEL = 'Softlink Technologies'
// Repère ÉTIQUETÉ (…q=lat,lng(Label)) → évite l'erreur "Impossible de charger les informations sur le lieu"
const MAP_EMBED = `https://maps.google.com/maps?q=${LAT},${LNG}(${encodeURIComponent(LABEL)})&z=17&hl=fr&output=embed`
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${LAT},${LNG}`

// Même effet que le modal de contact : glisse depuis le bord droit.
const panelVariants = {
  hidden: { opacity: 0, x: '110%' },
  visible: { opacity: 1, x: 0 },
}

const PHOTO_CANDIDATES = ['/softlink-local.jpg', '/softlink-local.jpeg']

export default function MapModal({ open, onClose }) {
  const [photoIdx, setPhotoIdx] = useState(0)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          sx={{
            position: 'fixed',
            inset: 0,
            zIndex: 1300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
            bgcolor: 'rgba(5,5,10,0.62)',
            backdropFilter: 'blur(5px)',
          }}
        >
          <Box
            component={motion.div}
            onClick={(e) => e.stopPropagation()}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            sx={{
              width: '85vw',
              height: '85vh',
              bgcolor: tokens.surface,
              border: `1px solid ${tokens.border}`,
              borderRadius: 3,
              boxShadow: glow.card,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Liseré dégradé */}
            <Box sx={{ height: 3, background: `linear-gradient(90deg, ${tokens.indigoDeep}, ${tokens.violet})` }} />

            {/* En-tête */}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ px: { xs: 2, sm: 3 }, py: 1.5, borderBottom: `1px solid ${tokens.border}` }}
            >
              <Stack direction="row" spacing={1.25} alignItems="center">
                <PlaceOutlinedIcon sx={{ color: tokens.violet }} />
                <Box>
                  <Typography variant="h6" sx={{ color: tokens.textMain, fontWeight: 700, lineHeight: 1.1 }}>
                    Nous situer
                  </Typography>
                  <Typography variant="caption" sx={{ color: tokens.textDim }}>
                    Softlink Technologies · Koubia, Niamey — Niger
                  </Typography>
                </Box>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <Button
                  component="a"
                  href={MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  color="primary"
                  size="small"
                  startIcon={<OpenInNewRoundedIcon />}
                  sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
                >
                  Ouvrir dans Maps
                </Button>
                <IconButton onClick={onClose} sx={{ color: tokens.textDim }} aria-label="Fermer la carte">
                  <CloseIcon />
                </IconButton>
              </Stack>
            </Stack>

            {/* Photo du local + carte intégrée */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, minHeight: 0 }}>
              {/* Photo */}
              <Box sx={{
                position: 'relative', flex: { xs: '0 0 42%', md: '0 0 42%' }, minHeight: { xs: 220, md: 0 },
                bgcolor: tokens.bgAlt,
                borderBottom: { xs: `1px solid ${tokens.border}`, md: 'none' },
                borderRight: { md: `1px solid ${tokens.border}` },
              }}>
                {photoIdx < PHOTO_CANDIDATES.length ? (
                  <Box component="img" src={PHOTO_CANDIDATES[photoIdx]} alt="Locaux de Softlink Technologies" onError={() => setPhotoIdx((i) => i + 1)}
                    sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
                ) : (
                  <Box sx={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2, p: 3, textAlign: 'center' }}>
                    <Box sx={{ width: 66, height: 66, borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'rgba(124,108,255,0.12)', border: `1px solid ${tokens.borderAccent}` }}>
                      <ApartmentRoundedIcon sx={{ fontSize: 34, color: tokens.violet }} />
                    </Box>
                    <Typography sx={{ color: tokens.textMain, fontWeight: 700 }}>Photo de Softlink Technologies</Typography>
                    <Typography variant="body2" sx={{ color: tokens.textDim, maxWidth: 280 }}>
                      Déposez <b>softlink-local.jpg</b> dans le dossier <code>/public/</code> pour l'afficher ici.
                    </Typography>
                  </Box>
                )}
              </Box>

              {/* Carte */}
              <Box sx={{ position: 'relative', flex: 1, minHeight: { xs: 260, md: 0 } }}>
                <Box
                  component="iframe"
                  title="Localisation Softlink Technologies"
                  src={MAP_EMBED}
                  loading="eager"
                  referrerPolicy="no-referrer-when-downgrade"
                  sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </AnimatePresence>
  )
}
