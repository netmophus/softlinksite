// src/sections/Formations.jsx
// « Softlink Academy » (id="formations") — section sombre premium (bleu profond + turquoise),
// 3 axes de formation en cartes. Cible du menu « Formations ».
import { Box, Container, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import CodeRoundedIcon from '@mui/icons-material/CodeRounded'
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded'
import DeveloperBoardRoundedIcon from '@mui/icons-material/DeveloperBoardRounded'
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded'

const C = {
  bg: '#0B1B33',                       // bleu nuit profond
  panel: 'rgba(255,255,255,0.04)',
  border: 'rgba(255,255,255,0.10)',
  title: '#FFFFFF',
  sub: '#A9B6CC',
  turq: '#3FE0DA',
  turqSoft: 'rgba(63,224,218,0.12)',
}

const AXES = [
  {
    Icon: CodeRoundedIcon,
    title: 'Formations informatiques professionnelles',
    desc: 'Développement web, bases de données, réseaux, cybersécurité et administration système.',
    tags: ['Développement web', 'Bases de données', 'Réseaux', 'Cybersécurité', 'Admin système'],
  },
  {
    Icon: PsychologyRoundedIcon,
    title: 'Formations IA & RAG',
    desc: 'Intelligence artificielle générative, assistants intelligents, bases documentaires et automatisation.',
    tags: ['IA générative', 'Assistants intelligents', 'Bases documentaires', 'Automatisation'],
  },
  {
    Icon: DeveloperBoardRoundedIcon,
    title: 'Formations Arduino, IoT & automatisation',
    desc: 'Électronique pratique, capteurs, systèmes connectés et commande automatique.',
    tags: ['Électronique pratique', 'Capteurs', 'Systèmes connectés', 'Commande auto'],
  },
]

// Formations en cours (sessions ouvertes) — 4 liens vers les pages d'inscription.
// Remplacez les 3 entrées « à compléter » par vos vraies formations + liens.
const SESSIONS = [
  { title: 'NGINX sous Linux, du bare-metal au HTTPS', tag: 'DevOps · Linux', url: 'https://linux-nginx-srv.vercel.app/', status: 'launched' },
  { title: 'Développement web Full-Stack (React & Node.js)', tag: 'Développement · Web', url: '#', status: 'upcoming' },
  { title: 'Assistants IA & RAG sécurisés en pratique', tag: 'IA · RAG', url: '#', status: 'upcoming' },
  { title: 'Arduino & IoT : de la maquette au projet connecté', tag: 'IoT · Électronique', url: '#', status: 'upcoming' },
]

// Arc-en-ciel de tons foncés (un par carte) — fond sombre + accent lumineux assorti
const PALETTES = [
  { bg: '#3A1622', accent: '#F87A9B' }, // rose / rouge
  { bg: '#3A2A10', accent: '#F0B24A' }, // ambre
  { bg: '#0F3329', accent: '#4FE0A6' }, // vert
  { bg: '#1A2450', accent: '#8CA0FF' }, // bleu / indigo
]

export default function Formations() {
  return (
    <Box component="section" id="formations" sx={{
      position: 'relative', overflow: 'hidden', bgcolor: C.bg, py: { xs: 8, md: 12 },
      backgroundImage: 'radial-gradient(800px 400px at 85% -8%, rgba(63,224,218,0.10), transparent 60%), radial-gradient(700px 360px at 5% 110%, rgba(124,108,255,0.08), transparent 60%)',
    }}>
      <Container maxWidth="lg">
        {/* Intro */}
        <Box sx={{ textAlign: 'center', maxWidth: 760, mx: 'auto', mb: { xs: 5, md: 7 } }}>
          <Typography sx={{ color: C.turq, fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.18em', mb: 1.5 }}>SOFTLINK ACADEMY</Typography>
          <Typography component="h2" sx={{ color: C.title, fontWeight: 800, lineHeight: 1.12, fontSize: { xs: '1.9rem', sm: '2.4rem', md: '2.9rem' }, letterSpacing: '-0.02em', mb: 2 }}>
            Former les talents du <Box component="span" sx={{ color: C.turq }}>numérique</Box>.
          </Typography>
          <Typography sx={{ color: C.sub, fontSize: '1.05rem', lineHeight: 1.7 }}>
            Des formations pratiques pour développer les compétences numériques, maîtriser les outils
            informatiques et accompagner la transformation des métiers.
          </Typography>
        </Box>

        {/* 3 axes */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: { xs: 2, md: 2.5 } }}>
          {AXES.map(({ Icon, title, desc, tags }, idx) => (
            <Box key={title}
              component={motion.div}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              sx={{
                display: 'flex', flexDirection: 'column', gap: 2, p: { xs: 2.5, md: 3 }, borderRadius: '18px',
                bgcolor: C.panel, border: `1px solid ${C.border}`, backdropFilter: 'blur(6px)',
                transition: 'transform .25s ease, border-color .25s ease, background-color .25s ease',
                '&:hover': { transform: 'translateY(-4px)', borderColor: 'rgba(63,224,218,0.4)', bgcolor: 'rgba(255,255,255,0.06)' },
              }}
            >
              <Box sx={{ width: 52, height: 52, borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: C.turqSoft, border: '1px solid rgba(63,224,218,0.3)' }}>
                <Icon sx={{ fontSize: 28, color: C.turq }} />
              </Box>
              <Typography sx={{ color: C.title, fontWeight: 700, fontSize: '1.18rem', lineHeight: 1.25 }}>{title}</Typography>
              <Typography sx={{ color: C.sub, fontSize: '0.92rem', lineHeight: 1.6 }}>{desc}</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mt: 'auto', pt: 0.5 }}>
                {tags.map((t) => (
                  <Box key={t} component="span" sx={{ fontSize: '0.72rem', color: C.sub, bgcolor: 'rgba(255,255,255,0.04)', border: `1px solid ${C.border}`, px: 1, py: 0.35, borderRadius: 999 }}>
                    {t}
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {/* CTA */}
        <Box sx={{ textAlign: 'center', mt: { xs: 5, md: 6 } }}>
          <Box component="a" href="/programme-softlink-academy.pdf" download
            sx={{ textDecoration: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 1, px: 3, py: 1.25, borderRadius: '10px',
              color: '#04121a', fontWeight: 700, fontSize: '0.92rem',
              background: `linear-gradient(45deg, ${C.turq}, #17B8B3)`, boxShadow: '0 0 24px rgba(63,224,218,0.3)',
              transition: 'transform .2s ease, box-shadow .2s ease', '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 0 34px rgba(63,224,218,0.45)' },
              '& svg': { transition: 'transform .2s ease' }, '&:hover svg': { transform: 'translateY(2px)' } }}>
            Télécharger le programme <FileDownloadRoundedIcon sx={{ fontSize: 18 }} />
          </Box>
        </Box>

        {/* Formations en cours (sessions ouvertes) */}
        <Box sx={{ mt: { xs: 7, md: 10 } }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 5 } }}>
            <Typography sx={{ color: C.turq, fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.18em', mb: 1 }}>SESSIONS</Typography>
            <Typography component="h3" sx={{ color: C.title, fontWeight: 800, fontSize: { xs: '1.5rem', md: '2rem' }, letterSpacing: '-0.01em' }}>
              Formations en cours et à venir
            </Typography>
          </Box>

          {/* 4 cartes espacées, chacune d'une couleur foncée (arc-en-ciel) */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 2, md: 2.5 } }}>
            {SESSIONS.map((s, idx) => {
              const p = PALETTES[idx % PALETTES.length]
              const launched = s.status === 'launched'
              const ext = s.url.startsWith('http')
              return (
                <Box key={idx} component={launched ? 'a' : 'div'}
                  href={launched ? s.url : undefined} target={launched && ext ? '_blank' : undefined} rel={launched && ext ? 'noopener noreferrer' : undefined}
                  sx={{
                    flex: 1, minWidth: 0, textDecoration: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                    p: { xs: 2.5, md: 3 }, borderRadius: '16px', bgcolor: p.bg, border: `1px solid ${p.accent}40`,
                    opacity: launched ? 1 : 0.82,
                    transition: 'transform .25s ease, box-shadow .25s ease, border-color .25s ease',
                    ...(launched && { cursor: 'pointer', '&:hover': { transform: 'translateY(-4px)', borderColor: `${p.accent}99`, boxShadow: `0 18px 38px -18px ${p.bg}` }, '&:hover .sess-title': { color: p.accent } }),
                  }}>
                  <Box>
                    {/* Ligne haute : tag (gauche) · statut (droite) */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, mb: 1.5 }}>
                      <Box component="span" sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', color: p.accent,
                        bgcolor: `${p.accent}1F`, border: `1px solid ${p.accent}55`, px: 0.9, py: 0.3, borderRadius: 999 }}>
                        {s.tag}
                      </Box>
                      {launched ? (
                        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.08em', color: '#3BE38A' }}>
                          <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: '#3BE38A', boxShadow: '0 0 8px #3BE38A', animation: 'badge-dot 2s ease-in-out infinite' }} />
                          LANCÉ
                        </Box>
                      ) : (
                        <Box component="span" sx={{ fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.08em', color: '#9AA7BC',
                          bgcolor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', px: 0.9, py: 0.3, borderRadius: 999 }}>
                          À VENIR
                        </Box>
                      )}
                    </Box>
                    <Typography className="sess-title" sx={{ color: '#fff', fontWeight: 700, fontSize: '0.98rem', lineHeight: 1.3, transition: 'color .2s ease' }}>
                      {s.title}
                    </Typography>
                  </Box>
                  {launched ? (
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.6, color: p.accent, fontWeight: 600, fontSize: '0.82rem', mt: 2 }}>
                      S’inscrire <OpenInNewRoundedIcon sx={{ fontSize: 15 }} />
                    </Box>
                  ) : (
                    <Box sx={{ color: '#8494A9', fontWeight: 600, fontSize: '0.8rem', mt: 2 }}>Bientôt disponible</Box>
                  )}
                </Box>
              )
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
