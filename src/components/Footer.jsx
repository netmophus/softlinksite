// src/components/Footer.jsx
// Pied de page premium, cohérent avec le haut du site (sombre indigo/violet).
import { Box, Container, Typography, Link, Stack, IconButton, Divider, SvgIcon } from '@mui/material'
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import { tokens } from '../theme'
import logo from '../assets/images/logo.png'

function TikTokIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64a5.68 5.68 0 0 0 5.69 5.7 5.69 5.69 0 0 0 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.85 4.85 0 0 1-3.24-1.48z" />
    </SvgIcon>
  )
}

const NAV = [
  { label: 'Accueil', id: 'accueil' },
  { label: 'Services', id: 'services' },
  { label: 'Nos solutions', id: 'solutions' },
  { label: 'Formations', id: 'formations' },
  { label: 'Contact', id: 'contact' },
]
const SOLUTIONS = ['MIZNAS Transfert', 'MIZNAS Immobilier', 'MIZNAS AgroConnect', 'FAHIMTA', 'MIZNAS Assurance Santé']
const SOCIALS = [
  { label: 'Facebook', icon: <FacebookIcon />, url: 'https://www.facebook.com/softlink.2204/', brand: '#1877F2' },
  { label: 'YouTube', icon: <YouTubeIcon />, url: 'https://www.youtube.com/channel/UCrJ3BzSm4LGtyPTsm5eN4Ww', brand: '#FF0000' },
  { label: 'Instagram', icon: <InstagramIcon />, url: 'https://www.instagram.com/softlink2204/', brand: '#E4405F' },
  { label: 'TikTok', icon: <TikTokIcon />, url: 'https://www.tiktok.com/@bkatech3', brand: '#FE2C55' },
]

const scrollToId = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

const colTitleSx = { color: tokens.textMain, fontWeight: 700, fontSize: '0.95rem', mb: 2, letterSpacing: 0.3 }
const linkSx = {
  color: tokens.textDim, fontSize: '0.9rem', textDecoration: 'none', cursor: 'pointer',
  transition: 'color .2s ease', display: 'inline-block', py: 0.4,
  '&:hover': { color: tokens.violet },
}

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <Box component="footer" sx={{
      position: 'relative', bgcolor: '#08080F', color: tokens.textDim,
      '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: `linear-gradient(90deg, ${tokens.indigoDeep}, ${tokens.violet}, ${tokens.indigoDeep})` },
    }}>
      <Container maxWidth="lg" sx={{ pt: { xs: 6, md: 8 }, pb: 3 }}>
        {/* Colonnes */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1.6fr 1fr 1fr 1.3fr' }, gap: { xs: 4, md: 5 } }}>
          {/* Marque */}
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, mb: 2, cursor: 'pointer' }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Box component="img" src={logo} alt="Softlink Technologies" sx={{ height: 46, filter: 'drop-shadow(0 0 10px rgba(124,108,255,0.5))' }} />
              <Box>
                <Box component="span" sx={{ display: 'block', color: tokens.textMain, fontWeight: 700, fontSize: '1rem', lineHeight: 1.1 }}>Softlink</Box>
                <Box component="span" sx={{ display: 'block', fontFamily: 'monospace', fontSize: '0.62rem', letterSpacing: '0.2em', color: tokens.textDim }}>TECHNOLOGIES</Box>
              </Box>
            </Box>
            <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.65, maxWidth: 320, mb: 2.5 }}>
              Logiciels métiers sur mesure, digitalisation, IA générative et assistants RAG sécurisés
              pour les entreprises et les institutions.
            </Typography>
            <Stack direction="row" spacing={1}>
              {SOCIALS.map((s) => (
                <IconButton key={s.label} component="a" href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  sx={{ width: 40, height: 40, borderRadius: '50%', color: s.brand, border: `1px solid ${s.brand}55`, bgcolor: `${s.brand}14`,
                    '& svg': { fontSize: 20 }, transition: 'all .2s ease',
                    '&:hover': { color: '#fff', bgcolor: s.brand, borderColor: s.brand, transform: 'translateY(-2px)' } }}>
                  {s.icon}
                </IconButton>
              ))}
            </Stack>
          </Box>

          {/* Navigation */}
          <Box>
            <Typography sx={colTitleSx}>Navigation</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {NAV.map((n) => (
                <Box key={n.id} component="span" role="link" tabIndex={0} onClick={() => scrollToId(n.id)}
                  onKeyDown={(e) => e.key === 'Enter' && scrollToId(n.id)} sx={linkSx}>
                  {n.label}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Nos solutions */}
          <Box>
            <Typography sx={colTitleSx}>Nos solutions</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {SOLUTIONS.map((s) => (
                <Box key={s} component="span" role="link" tabIndex={0} onClick={() => scrollToId('solutions')}
                  onKeyDown={(e) => e.key === 'Enter' && scrollToId('solutions')} sx={linkSx}>
                  {s}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Contact */}
          <Box>
            <Typography sx={colTitleSx}>Contact</Typography>
            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1.25} alignItems="flex-start">
                <PlaceOutlinedIcon sx={{ fontSize: 20, color: tokens.violet, mt: '2px' }} />
                <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Niamey, Niger</Typography>
              </Stack>
              <Link href="tel:+22780648383" sx={{ ...linkSx, display: 'flex', alignItems: 'center', gap: 1.25 }}>
                <PhoneInTalkOutlinedIcon sx={{ fontSize: 20, color: tokens.violet }} /> +227 80 64 83 83
              </Link>
              <Link href="mailto:contact@softlink-groupe.com" sx={{ ...linkSx, display: 'flex', alignItems: 'center', gap: 1.25, wordBreak: 'break-all' }}>
                <EmailOutlinedIcon sx={{ fontSize: 20, color: tokens.violet }} /> contact@softlink-groupe.com
              </Link>
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ borderColor: tokens.border, my: { xs: 4, md: 5 } }} />

        {/* Bas de page */}
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" spacing={1.5}>
          <Typography sx={{ fontSize: '0.82rem', color: tokens.textDim }}>
            © {year} Softlink Technologies. Tous droits réservés.
          </Typography>
          <Typography sx={{ fontSize: '0.82rem', color: tokens.textDim }}>
            Conçu à Niamey avec <Box component="span" sx={{ color: tokens.violet }}>♥</Box>
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}
