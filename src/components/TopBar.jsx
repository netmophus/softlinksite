// src/components/TopBar.jsx
// Barre supérieure, 3 zones : [Téléphone · Contact] — [Géolocalisation (centre)] — [Réseaux · Nous écrire].
// Hauteur fixe, entièrement responsive (grille + libellés qui se masquent sur petit écran).
import { useState } from 'react'
import { Box, Container, Stack, Link, IconButton, Tooltip, Button, Divider, SvgIcon } from '@mui/material'
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded'
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import { tokens } from '../theme'
import ContactModal from './ContactModal'
import MapModal from './MapModal'

// Icône TikTok (absente de MUI) — SVG maison
function TikTokIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64a5.68 5.68 0 0 0 5.69 5.7 5.69 5.69 0 0 0 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.85 4.85 0 0 1-3.24-1.48z" />
    </SvgIcon>
  )
}

// Hauteur de la topbar (exportée pour que le Header puisse s'y référer plus tard)
export const TOPBAR_HEIGHT = { xs: 50, md: 58 }

const PHONE = '+227 80 64 83 83'
const EMAIL = 'contact@softlink-groupe.com'

const socials = [
  { label: 'Facebook', icon: <FacebookIcon />, url: 'https://www.facebook.com/softlink.2204/', brand: '#1877F2' },
  { label: 'YouTube', icon: <YouTubeIcon />, url: 'https://www.youtube.com/channel/UCrJ3BzSm4LGtyPTsm5eN4Ww', brand: '#FF0000' },
  { label: 'Instagram', icon: <InstagramIcon />, url: 'https://www.instagram.com/softlink2204/', brand: '#E4405F' },
  { label: 'TikTok', icon: <TikTokIcon />, url: 'https://www.tiktok.com/@bkatech3', brand: '#FE2C55' },
]

// Lien de contact (téléphone / email)
const contactLinkSx = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 1,
  color: tokens.textDim,
  fontSize: { xs: '0.82rem', md: '0.9rem' },
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  '& svg': { fontSize: { xs: 20, md: 22 }, color: tokens.indigo },
  '&:hover': { color: tokens.textMain },
}

// Pastille sociale : icône AUX COULEURS DE LA MARQUE dès le départ.
// Au survol/clic, la pastille se remplit de la couleur et l'icône passe en blanc.
const socialBtnSx = (brand) => ({
  width: 38,
  height: 38,
  color: brand,                       // couleur de marque par défaut
  border: `1px solid ${brand}66`,     // bordure teintée de la marque
  bgcolor: `${brand}14`,              // léger fond teinté
  transition: 'all 0.22s ease',
  '& svg': { fontSize: 21 },
  '&:hover': {
    color: '#fff',
    borderColor: brand,
    bgcolor: brand,
    transform: 'translateY(-2px)',
    boxShadow: `0 6px 16px ${brand}55`,
  },
})

export default function TopBar() {
  const [openContact, setOpenContact] = useState(false)
  const [openMap, setOpenMap] = useState(false)

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          height: TOPBAR_HEIGHT,
          bgcolor: 'rgba(10,10,18,0.85)',
          backdropFilter: 'blur(8px)',
          borderBottom: `1px solid ${tokens.border}`,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: `linear-gradient(90deg, ${tokens.indigoDeep}, ${tokens.violet})`,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ height: '100%' }}>
          {/* Grille 3 colonnes : gauche | centre | droite */}
          <Box
            sx={{
              height: '100%',
              display: 'grid',
              gridTemplateColumns: '1fr auto 1fr',
              alignItems: 'center',
              gap: { xs: 1, sm: 2 },
            }}
          >
            {/* ── Zone gauche : Téléphone · Contact ── */}
            <Stack direction="row" spacing={{ xs: 1.5, sm: 3 }} alignItems="center" sx={{ justifySelf: 'start' }}>
              <Link href={`tel:${PHONE.replace(/\s/g, '')}`} sx={contactLinkSx} aria-label="Nous appeler">
                <PhoneInTalkOutlinedIcon />
                <Box component="span" sx={{ display: { xs: 'none', md: 'inline' } }}>{PHONE}</Box>
              </Link>
              <Link
                href={`mailto:${EMAIL}`}
                sx={{ ...contactLinkSx, display: { xs: 'none', sm: 'inline-flex' } }}
                aria-label="Nous envoyer un email"
              >
                <EmailOutlinedIcon />
                <Box component="span" sx={{ display: { xs: 'none', lg: 'inline' } }}>{EMAIL}</Box>
              </Link>
            </Stack>

            {/* ── Zone centre : Géolocalisation ── */}
            <Tooltip title="Nous situer sur la carte" arrow>
              <Button
                onClick={() => setOpenMap(true)}
                aria-label="Voir notre localisation"
                startIcon={<PlaceOutlinedIcon />}
                sx={{
                  justifySelf: 'center',
                  color: tokens.textDim,
                  border: `1px solid ${tokens.border}`,
                  bgcolor: 'rgba(255,255,255,0.03)',
                  px: { xs: 1.25, sm: 2 },
                  py: 0.6,
                  borderRadius: 2,
                  fontSize: { xs: '0.8rem', md: '0.9rem' },
                  transition: 'all 0.22s ease',
                  '& .MuiButton-startIcon': { mr: { xs: 0, sm: 0.75 }, '& svg': { fontSize: 22 } },
                  '&:hover': {
                    color: tokens.violet,
                    borderColor: tokens.borderAccent,
                    bgcolor: 'rgba(124,108,255,0.08)',
                    transform: 'translateY(-1px)',
                  },
                }}
              >
                <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>Nous situer</Box>
              </Button>
            </Tooltip>

            {/* ── Zone droite : Réseaux (extrême) · Nous écrire ── */}
            <Stack direction="row" spacing={1} alignItems="center" sx={{ justifySelf: 'end' }}>
              {/* Les réseaux, encadrés */}
              <Stack
                direction="row"
                spacing={0.75}
                alignItems="center"
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  p: 0.75,
                  border: `1px solid ${tokens.border}`,
                  borderRadius: 2.5,
                  bgcolor: 'rgba(255,255,255,0.02)',
                }}
              >
                {socials.map((s) => (
                  <Tooltip key={s.label} title={s.label} arrow>
                    <IconButton
                      component="a"
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      sx={socialBtnSx(s.brand)}
                    >
                      {s.icon}
                    </IconButton>
                  </Tooltip>
                ))}
              </Stack>

              <Divider
                orientation="vertical"
                flexItem
                sx={{ mx: 0.5, my: 1.25, borderColor: tokens.border, display: { xs: 'none', md: 'block' } }}
              />

              <Button
                onClick={() => setOpenContact(true)}
                startIcon={<EditNoteRoundedIcon />}
                sx={{
                  color: tokens.textMain,
                  border: `1px solid ${tokens.borderAccent}`,
                  px: { xs: 1.25, sm: 2 },
                  py: 0.6,
                  fontSize: { xs: '0.8rem', md: '0.9rem' },
                  borderRadius: 2,
                  transition: 'all 0.22s ease',
                  '& .MuiButton-startIcon': { mr: { xs: 0, sm: 0.75 }, '& svg': { fontSize: 22 } },
                  '&:hover': {
                    borderColor: tokens.indigo,
                    bgcolor: 'rgba(124,108,255,0.10)',
                    boxShadow: '0 0 18px rgba(124,108,255,0.25)',
                  },
                }}
              >
                <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>Nous écrire</Box>
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      <ContactModal open={openContact} onClose={() => setOpenContact(false)} />
      <MapModal open={openMap} onClose={() => setOpenMap(false)} />
    </>
  )
}
