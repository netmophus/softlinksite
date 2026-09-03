// src/sections/Equipe.jsx
// Section « Notre équipe » — fond clair gris-lavande, cartes bleu marine à liseré teal
// (contraste premium volontaire avec le reste du site). Placée avant « Les six piliers ».
import { Box, Container, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'

const C = {
  sectionBg: '#e8e9f0',
  cardBg: '#0d1b3e',
  accent: '#14b8a6',
  circleBg: '#1e2f5a',
  circleText: '#5eead4',
  name: '#ffffff',
  role: '#5eead4',
  bio: '#a9b0c4',
  socialIcon: '#6b7590',
  eyebrow: '#0f9b8e',
  title: '#0d1b3e',
}

// Photos à venir : renseigner `photo` (URL/import) pour basculer automatiquement
// de l'avatar « initiales » vers la vraie photo (fallback conservé si l'image manque).
const DIRECTION = {
  name: 'Jamila Seydou Moussa',
  role: 'Directrice Générale',
  initials: 'JS',
  bio: 'Direction stratégique et développement de Softlink.',
  photo: null,
  linkedin: null,
  email: null,
}

const EQUIPE = [
  {
    name: 'HAMED Attaher Abdoulatif',
    role: 'R&D Manager',
    initials: 'HA',
    bio: 'Recherche, innovation et intégration de l’IA.',
    photo: '/latif.jpeg',
    linkedin: null,
    email: null,
  },
  {
    name: 'OUACHO Ousseyni',
    role: 'Project Manager',
    initials: 'OO',
    bio: 'Coordination des projets et relation client.',
    photo: '/ouacho-ouseini.jpeg',
    linkedin: null,
    email: null,
  },
  {
    name: 'KANE Mahaman Lawan',
    role: 'Consultant Associé',
    initials: 'KM',
    bio: 'Conseil stratégique et expertise métier.',
    photo: '/kane-ml.jpeg',
    linkedin: null,
    email: null,
  },
]

function MemberCard({ member, big = false }) {
  const circleSize = big ? 72 : 64
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: big ? 300 : '100%',
        mx: 'auto',
        bgcolor: C.cardBg,
        borderTop: `3px solid ${C.accent}`,
        borderRadius: '16px',
        p: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        boxShadow: '0 16px 40px -20px rgba(13,27,62,0.45)',
      }}
    >
      <Box
        sx={{
          width: circleSize,
          height: circleSize,
          borderRadius: '50%',
          bgcolor: C.circleBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        {member.photo ? (
          <Box component="img" src={member.photo} alt={member.name} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <Typography sx={{ color: C.circleText, fontWeight: 700, fontSize: big ? '1.3rem' : '1.1rem' }}>
            {member.initials}
          </Typography>
        )}
      </Box>

      <Typography sx={{ color: C.name, fontWeight: 600, fontSize: big ? '1.05rem' : '0.98rem', mt: 1.5 }}>
        {member.name}
      </Typography>
      <Typography sx={{ color: C.role, fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', mt: 0.5 }}>
        {member.role}
      </Typography>
      <Typography sx={{ color: C.bio, fontSize: '13px', lineHeight: 1.5, mt: 1 }}>
        {member.bio}
      </Typography>

      <Box sx={{ display: 'flex', gap: 1.5, mt: 1.5 }}>
        <LinkedInIcon sx={{ fontSize: 18, color: C.socialIcon }} />
        <EmailRoundedIcon sx={{ fontSize: 18, color: C.socialIcon }} />
      </Box>
    </Box>
  )
}

export default function Equipe() {
  return (
    <Box component="section" id="equipe" sx={{ bgcolor: C.sectionBg, py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Typography sx={{ textAlign: 'center', color: C.eyebrow, fontWeight: 700, fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Notre équipe
        </Typography>
        <Typography component="h2" sx={{ textAlign: 'center', color: C.title, fontWeight: 500, fontSize: { xs: '1.5rem', md: '1.75rem' }, mt: 1.5, mb: { xs: 5, md: 6 } }}>
          Les talents derrière Softlink.
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 2.5, md: 3 } }}>
          <MemberCard member={DIRECTION} big />
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '14px',
            maxWidth: 900,
            mx: 'auto',
          }}
        >
          {EQUIPE.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </Box>
      </Container>
    </Box>
  )
}
