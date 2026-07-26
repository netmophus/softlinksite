// src/sections/Solutions.jsx
// « Nos solutions » — CARROUSEL plein largeur : une maquette à la fois, flèches ‹ ›,
// points cliquables, swipe tactile. Nom + description centrés dessous.
// Chaque solution est reliée à son image /public/solutions/<slug>.<EXT>.
import { useState } from 'react'
import { Box, Container, Typography, IconButton } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded'
import HealthAndSafetyRoundedIcon from '@mui/icons-material/HealthAndSafetyRounded'
import SwapHorizRoundedIcon from '@mui/icons-material/SwapHorizRounded'
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded'
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded'
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded'
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded'
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded'
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded'
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import DemoModal from '../components/DemoModal'

const EXT = '.png'
const imgOf = (slug) => `/solutions/${slug}${EXT}`

const C = {
  bg: '#FFFFFF', soft: '#F5F7FB', deep: '#0C2A4D', sub: '#5B6B82',
  turq: '#12A9A4', turqDeep: '#0E8F8B', border: '#DCE4EE',
}

const SOLUTIONS = [
  { slug: 'miznas-immobilier', name: 'MIZNAS Immobilier', kind: 'Plateforme', url: 'immobilier.miznas.ne', Icon: ApartmentRoundedIcon,
    short: 'MIZNAS Immobilier est une plateforme géolocalisée de gestion foncière et immobilière au Niger. Elle permet aux agences d’enregistrer leurs parcelles, maisons, terrains, locations et autres biens immobiliers, puis de les affecter à leurs commerciaux. Une fois publiés, les biens deviennent visibles sur un site central accessible au public. Les commerciaux suivent leur portefeuille de clients et leurs ventes, tandis que les clients disposent d’un espace mobile pour consulter leurs biens, leurs échéances et leurs paiements échelonnés. L’administrateur de l’agence supervise l’ensemble des biens, des commerciaux, des clients et des opérations.',
    features: ['Biens géolocalisés', 'Espaces commerciaux & clients', 'Paiements échelonnés'] },
  { slug: 'miznas-assurance-sante', name: 'MIZNAS Assurance Santé', kind: 'Application', url: 'sante.miznas.ne', Icon: HealthAndSafetyRoundedIcon,
    short: 'MIZNAS Assurance Santé est une plateforme qui relie les compagnies d’assurance, les entreprises, les assurés et les prestataires de santé. Les entreprises y enregistrent leurs contrats et leurs salariés assurés, tandis que la compagnie d’assurance contrôle et valide les adhésions. Les cliniques, pharmacies, laboratoires et médecins partenaires sont également enregistrés afin de faciliter la prise en charge et le suivi des prestations. Chaque assuré dispose d’une fiche de santé historisée permettant de suivre ses consultations, soins et remboursements de manière sécurisée.',
    features: ['Contrats & assurés', 'Prestataires partenaires', 'Fiche de santé historisée'] },
  { slug: 'miznas-transfert', name: 'MIZNAS Transfert', kind: 'Site web', url: 'transfert.miznas.ne', Icon: SwapHorizRoundedIcon,
    short: 'Un service de transfert d’argent simple : expéditeur, bénéficiaire, montant, destination et suivi en temps réel de l’opération.',
    features: ['Envoi en quelques étapes', 'Suivi en temps réel', 'Destinataires enregistrés'] },
  { slug: 'miznas-fiscalite-locale', name: 'MIZNAS Fiscalité Locale', kind: 'Portail', url: 'fiscalite.miznas.ne', Icon: AccountBalanceRoundedIcon,
    short: 'Un portail de collectivité pour consulter ses taxes, payer en ligne, télécharger ses quittances et suivre ses démarches.',
    features: ['Consultation des taxes', 'Paiement & quittances', 'Suivi des démarches'] },
  { slug: 'miznas-pilotage-budgetaire', name: 'MIZNAS Pilotage Budgétaire Bancaire', kind: 'Application', url: 'budget.miznas.ne', Icon: AccountBalanceWalletRoundedIcon,
    short: 'Vous êtes un établissement financier et vous souhaitez disposer d’une vision claire de vos budgets. MIZNAS Pilotage Budgétaire Bancaire permet de préparer, saisir, consolider, arbitrer et valider les budgets de chaque direction et agence. La plateforme organise les circuits de validation et compare les prévisions aux réalisations afin de suivre l’exécution budgétaire. Son module d’intelligence artificielle détecte les écarts, identifie les anomalies et fournit des synthèses pour faciliter la prise de décision.',
    features: ['Préparation & consolidation', 'Circuits de validation', 'IA : écarts & anomalies'] },
  { slug: 'miznas-microfinance', name: 'MIZNAS Microfinance', kind: 'Application', url: 'microfinance.miznas.ne', Icon: SavingsRoundedIcon,
    short: 'Un espace pour la demande de crédit, le suivi des bénéficiaires et la gestion des échéances de remboursement.',
    features: ['Demande de crédit', 'Suivi des bénéficiaires', 'Échéancier de remboursement'] },
  { slug: 'miznas-restaurant', name: 'MIZNAS Restau', kind: 'Site web', url: 'resto.miznas.ne', Icon: RestaurantRoundedIcon,
    short: 'Un site de restaurant avec menu en ligne, réservation de table, commande à emporter et suivi du service en salle.',
    features: ['Menu & carte en ligne', 'Réservation de table', 'Commande en ligne'] },
  { slug: 'miznas-livraison', name: 'MIZNAS Livraison', kind: 'Application', url: 'livraison.miznas.ne', Icon: LocalShippingRoundedIcon,
    short: 'MIZNAS Livraison est une application de livraison avec géolocalisation en temps réel des coursiers. Le client suit sur une application mobile le coursier chargé de sa commande et peut échanger avec lui en temps réel. L’administrateur central reçoit les commandes, les affecte aux coursiers et supervise l’ensemble des opérations depuis son espace de gestion. Il suit les commandes, les coursiers, les clients et les livraisons en temps réel.',
    features: ['Géolocalisation temps réel', 'Échange client ↔ coursier', 'Supervision centralisée'] },
  { slug: 'fahimta', name: 'FAHIMTA', kind: 'Plateforme', url: 'fahimta.ne', Icon: SchoolRoundedIcon,
    short: 'FAHIMTA est une plateforme éducative intelligente dédiée à l’apprentissage des mathématiques, du collège à l’université. Elle permet aux élèves de poser leurs questions, de dicter une demande ou de photographier un exercice afin d’obtenir une explication adaptée à leur niveau. L’application propose également des cours vidéo, des livres, des sujets d’examens corrigés et un accompagnement personnalisé. Grâce à son assistant intelligent, FAHIMTA aide chaque apprenant à comprendre les méthodes et à progresser pas à pas.',
    features: ['Assistant IA (photo / dictée)', 'Cours vidéo & livres', 'Sujets d’examens corrigés'] },
  { slug: 'miznas-pilot', name: 'MIZNAS Pilot', kind: 'Décision bancaire · IA', url: 'pilot.miznas.ne', Icon: QueryStatsRoundedIcon,
    short: 'MIZNAS Pilot met l’intelligence artificielle au service de la décision bancaire. La plateforme réunit cinq modules : gestion intelligente des impayés, états financiers PCB UEMOA, catalogue de formations spécialisées, analyse de crédit assistée par l’IA et base de connaissance réglementaire — pour piloter le recouvrement, l’analyse de crédit, la conformité et la montée en compétences des équipes.',
    features: ['Recouvrement des impayés', 'Analyse de crédit IA', 'Conforme PCB UEMOA'] },
]

const N = SOLUTIONS.length

function BrowserMock({ sol }) {
  const [error, setError] = useState(false)
  const { Icon } = sol
  return (
    <Box sx={{ borderRadius: '14px', overflow: 'hidden', border: `1px solid ${C.border}`, bgcolor: '#fff', boxShadow: '0 40px 80px -34px rgba(12,42,77,0.4)' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 2, py: 1.25, bgcolor: C.soft, borderBottom: `1px solid ${C.border}` }}>
        <Box sx={{ display: 'flex', gap: 0.75 }}>
          {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => <Box key={c} sx={{ width: 11, height: 11, borderRadius: '50%', bgcolor: c }} />)}
        </Box>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', aspectRatio: '16 / 10', bgcolor: C.soft }}>
        {!error ? (
          <Box component="img" src={imgOf(sol.slug)} alt={`Maquette ${sol.name}`} onError={() => setError(true)}
            sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <Box sx={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2, p: 3, background: 'linear-gradient(135deg, #F7F9FC, #EEF2F8)' }}>
            <Box sx={{ width: 66, height: 66, borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: C.deep, boxShadow: '0 14px 30px -12px rgba(12,42,77,0.5)' }}>
              <Icon sx={{ fontSize: 34, color: '#5EEAE4' }} />
            </Box>
            <Typography sx={{ color: C.deep, fontWeight: 800, fontSize: '1.15rem', textAlign: 'center' }}>{sol.name}</Typography>
            <Typography sx={{ color: C.sub, fontSize: '0.85rem', textAlign: 'center', maxWidth: 340 }}>
              Aperçu de la maquette à venir — déposez <b>{sol.slug}{EXT}</b> dans <code>/public/solutions/</code>.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
              {[60, 90, 40].map((w, i) => <Box key={i} sx={{ width: w, height: 8, borderRadius: 4, bgcolor: i === 0 ? C.turq : C.border }} />)}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}

const slideV = {
  enter: (d) => ({ opacity: 0, x: d > 0 ? 70 : -70 }),
  center: { opacity: 1, x: 0 },
  exit: (d) => ({ opacity: 0, x: d > 0 ? -70 : 70 }),
}

export default function Solutions() {
  const [[i, dir], setState] = useState([0, 0])
  const [demoOpen, setDemoOpen] = useState(false)
  const active = SOLUTIONS[i]
  const go = (idx, d) => setState([(idx + N) % N, d])
  const prev = () => go(i - 1, -1)
  const next = () => go(i + 1, 1)

  const arrowSx = {
    flex: '0 0 auto', width: { xs: 40, md: 52 }, height: { xs: 40, md: 52 },
    color: C.deep, bgcolor: '#fff', border: `1px solid ${C.border}`, boxShadow: '0 8px 20px -10px rgba(12,42,77,0.3)',
    '&:hover': { bgcolor: C.deep, color: '#fff', borderColor: C.deep },
  }

  return (
    <Box component="section" id="solutions" sx={{ bgcolor: C.bg, pt: { xs: 4, md: 6 }, pb: { xs: 8, md: 12 }, borderTop: `1px solid ${C.border}`, overflow: 'hidden' }}>
      <Container maxWidth="lg">
        {/* Introduction (centrée) */}
        <Box sx={{ textAlign: 'center', maxWidth: 720, mx: 'auto', mb: { xs: 4, md: 6 } }}>
          <Typography sx={{ color: C.turq, fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.16em', mb: 1.5 }}>NOS SOLUTIONS</Typography>
          <Typography component="h2" sx={{ color: C.deep, fontWeight: 800, lineHeight: 1.12, fontSize: { xs: '1.9rem', sm: '2.4rem', md: '2.9rem' }, letterSpacing: '-0.02em', mb: 2 }}>
            Des outils qui travaillent pour vous.
          </Typography>
          <Typography sx={{ color: C.sub, fontSize: '1.05rem', lineHeight: 1.7 }}>
            Softlink Technologies conçoit des solutions numériques taillées pour chaque métier.
            Faites défiler notre portefeuille et découvrez chaque maquette.
          </Typography>
        </Box>

        {/* Carrousel : flèche · maquette · flèche */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 3 } }}>
          <IconButton onClick={prev} aria-label="Solution précédente" sx={arrowSx}><ChevronLeftRoundedIcon /></IconButton>

          <Box sx={{ flex: 1, minWidth: 0, maxWidth: 900, mx: 'auto' }}>
            <AnimatePresence mode="wait" custom={dir}>
              <Box component={motion.div} key={active.slug} custom={dir} variants={slideV}
                initial="enter" animate="center" exit="exit" transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.18}
                onDragEnd={(e, info) => { if (info.offset.x < -60) next(); else if (info.offset.x > 60) prev() }}
                sx={{ cursor: 'grab', '&:active': { cursor: 'grabbing' } }}>
                <BrowserMock sol={active} />
              </Box>
            </AnimatePresence>
          </Box>

          <IconButton onClick={next} aria-label="Solution suivante" sx={arrowSx}><ChevronRightRoundedIcon /></IconButton>
        </Box>

        {/* Points + compteur */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5, mt: 3 }}>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
            {SOLUTIONS.map((s, idx) => (
              <Box key={s.slug} component="button" type="button" aria-label={s.name} aria-current={idx === i}
                onClick={() => go(idx, idx > i ? 1 : -1)}
                sx={{ border: 'none', cursor: 'pointer', p: 0, height: 8, borderRadius: 999,
                  width: idx === i ? 30 : 8, bgcolor: idx === i ? C.turq : C.border,
                  transition: 'width .25s ease, background-color .25s ease' }} />
            ))}
          </Box>
          <Typography sx={{ fontFamily: 'monospace', fontSize: '0.78rem', color: C.sub, letterSpacing: '0.05em' }}>
            {String(i + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}
          </Typography>
        </Box>

        {/* Nom + description centrés */}
        <AnimatePresence mode="wait">
          <Box component={motion.div} key={active.slug}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.3 }}
            sx={{ textAlign: 'center', maxWidth: 720, mx: 'auto', mt: 3 }}>
            <Box component="span" sx={{ display: 'inline-block', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', color: C.turqDeep,
              bgcolor: 'rgba(18,169,164,0.10)', border: '1px solid rgba(18,169,164,0.3)', px: 1, py: 0.4, borderRadius: 999, mb: 1.5 }}>
              {active.kind.toUpperCase()}
            </Box>
            <Typography sx={{ color: C.deep, fontWeight: 800, fontSize: { xs: '1.4rem', md: '1.7rem' }, lineHeight: 1.2, mb: 2 }}>{active.name}</Typography>
            {/* Description justifiée et encadrée */}
            <Box sx={{ border: `1px solid ${C.border}`, borderRadius: '14px', bgcolor: C.soft, p: { xs: 2, md: 2.5 }, mb: 2.5 }}>
              <Typography sx={{ color: C.sub, fontSize: '0.98rem', lineHeight: 1.7, textAlign: 'justify' }}>{active.short}</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: { xs: 1.5, sm: 3 }, mb: 3 }}>
              {active.features.map((f) => (
                <Box key={f} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CheckCircleRoundedIcon sx={{ fontSize: 18, color: C.turq }} />
                  <Typography sx={{ color: C.deep, fontSize: '0.88rem', fontWeight: 500 }}>{f}</Typography>
                </Box>
              ))}
            </Box>
            <Box component="button" type="button" onClick={() => setDemoOpen(true)}
              sx={{ font: 'inherit', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 1, px: 2.75, py: 1.15, borderRadius: '10px',
                border: 'none', color: '#fff', fontWeight: 600, fontSize: '0.9rem', background: `linear-gradient(45deg, ${C.deep}, #16457A)`,
                transition: 'transform .2s ease', '&:hover': { transform: 'translateY(-1px)' }, '& svg': { transition: 'transform .2s ease' }, '&:hover svg': { transform: 'translateX(3px)' } }}>
              Demander une démo <ArrowForwardRoundedIcon sx={{ fontSize: 17, color: '#5EEAE4' }} />
            </Box>
          </Box>
        </AnimatePresence>
      </Container>

      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} solution={active.name} />
    </Box>
  )
}
