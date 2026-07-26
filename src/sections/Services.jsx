// src/sections/Services.jsx
// « Les six piliers de Softlink ». Cartes claires (teinte propre à chacune), fond
// INCHANGÉ au clic — la sélection se marque par la bordure turquoise + l'indicateur.
import { useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded'
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded'
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded'
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded'
import HubRoundedIcon from '@mui/icons-material/HubRounded'
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded'
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import DeveloperBoardRoundedIcon from '@mui/icons-material/DeveloperBoardRounded'
import AgricultureRoundedIcon from '@mui/icons-material/AgricultureRounded'
import ServiceModal from '../components/ServiceModal'

const C = {
  bg: '#E8EBF2',
  deep: '#0C2A4D',       // titres / texte fort
  sub: '#5B6B82',        // texte secondaire
  turq: '#12A9A4',       // accent turquoise (lisible sur clair)
  border: '#DCE4EE',
  numMuted: '#AEBBCD',
  iconBadge: '#EDF1F8',
}

// Teinte de fond propre à chaque carte (claire, proche du blanc, coordonnée)
const TINTS = ['#FFFFFF', '#F3F7FD', '#F5F3FC', '#EFFAF8', '#F2F6FB', '#F7F2FB']

const PILIERS = [
  { num: '01', key: 'SUR-MESURE', title: 'Développement sur mesure',
    short: 'Des plateformes web, applications mobiles et API conçues autour de vos processus, avec un accompagnement complet de l’analyse au déploiement.',
    intro: 'Vous avez un processus métier spécifique ou une idée de solution numérique ? Softlink Technologies conçoit des plateformes web, applications mobiles et API adaptées à vos besoins réels. Nous prenons en charge l’analyse de vos processus, la conception des interfaces, le développement, l’intégration avec vos systèmes existants et la mise en production. Chaque solution est conçue pour améliorer la productivité, renforcer la traçabilité et évoluer avec votre organisation.',
    listTitle: 'Notre approche',
    listStyle: 'steps',
    list: [
      'Analyse de vos besoins et de vos processus',
      'Conception de l’architecture et des interfaces',
      'Développement de plateformes web, applications mobiles et API',
      'Intégration des systèmes et des bases de données existants',
      'Ajout de fonctionnalités d’intelligence artificielle et de RAG lorsque cela est pertinent',
      'Tests, sécurité, déploiement et accompagnement des utilisateurs',
      'Maintenance et évolution de la solution',
    ],
    full: 'Nous concevons des plateformes web, applications mobiles, tableaux de bord, portails et API pensés autour de vos processus réels — architecture solide, code maintenable et évolutif.',
    Icon: DesignServicesRoundedIcon },
  { num: '02', key: 'PROCESSUS', title: 'Digitalisation des processus',
    short: 'Des workflows numériques simples, traçables et automatisés pour fluidifier vos opérations, sécuriser les validations et améliorer le suivi de vos activités.',
    intro: 'Nous transformons vos procédures papier, fichiers Excel et échanges dispersés en workflows numériques simples et structurés. Chaque étape est définie avec ses acteurs, ses responsabilités, ses délais et ses règles de validation. Les demandes, documents, notifications et décisions sont centralisés afin d’améliorer la traçabilité et de réduire les erreurs. Vos responsables disposent d’une vision claire de l’avancement des opérations et peuvent suivre les performances en temps réel.',
    listTitle: 'Notre intervention',
    listStyle: 'grid',
    list: [
      'Analyse et cartographie de vos processus actuels',
      'Identification des tâches à automatiser',
      'Création des circuits de saisie, contrôle et validation',
      'Gestion des rôles et des droits d’accès',
      'Centralisation des documents et des données',
      'Notifications par e-mail, SMS ou WhatsApp',
      'Suivi des délais, blocages et retards',
      'Intégration avec vos applications existantes',
      'Accompagnement et formation des utilisateurs',
    ],
    full: 'Nous transformons vos procédures manuelles en workflows numériques : gestion documentaire, validations, suivi de dossiers, reporting et notifications SMS/e-mail — traçables et automatisés.',
    Icon: AccountTreeRoundedIcon },
  { num: '03', key: 'IA', title: 'Intégration de l’intelligence artificielle',
    short: 'Des fonctionnalités d’intelligence artificielle et des assistants RAG intégrés à vos applications pour analyser vos données, exploiter vos documents et faciliter la prise de décision.',
    intro: 'Nous intégrons l’intelligence artificielle directement dans vos applications afin d’automatiser l’analyse, l’extraction d’informations et certaines tâches répétitives. Vos documents, données et procédures peuvent être exploités par des assistants intelligents capables de rechercher l’information pertinente et de générer des réponses structurées. Nous développons également des solutions RAG connectées à vos bases documentaires pour faciliter l’accès à votre connaissance interne. L’objectif est d’aider vos équipes à prendre des décisions plus rapides, mieux informées et toujours contrôlées par l’utilisateur.',
    listTitle: 'Nos possibilités d’intégration',
    listStyle: 'chips',
    panelBg: '#150F2E',
    panelAccent: '#B39DFF',
    panelAccent2: '#7C6CFF',
    list: [
      'Extraction d’informations dans les documents',
      'Analyse et synthèse automatique de dossiers',
      'Assistants conversationnels internes',
      'Solutions RAG basées sur vos documents',
      'Recherche intelligente dans les bases de connaissances',
      'Détection d’anomalies et de zones de risque',
      'Génération de rapports et de recommandations',
      'Classification et qualification des données',
      'Intégration de l’IA dans vos applications existantes',
      'Contrôle des accès, traçabilité et validation humaine',
    ],
    full: 'Nous intégrons l’IA dans vos applications pour analyser vos données, extraire l’information de vos documents, assister vos utilisateurs et accélérer la prise de décision.',
    Icon: PsychologyRoundedIcon },
  { num: '04', key: 'RAG', title: 'RAG et assistants intelligents',
    short: 'Transformez vos documents internes en une base de connaissances intelligente avec des assistants RAG capables de retrouver, expliquer et exploiter l’information au moment où vos équipes en ont besoin.',
    intro: 'Vous disposez de nombreux règlements, procédures, contrats, manuels ou documents internes difficiles à exploiter rapidement. Softlink Technologies transforme cette documentation en une base de connaissances intelligente accessible par conversation. L’assistant RAG recherche les informations pertinentes dans vos propres documents avant de formuler une réponse structurée et contextualisée. Il peut ainsi accompagner vos collaborateurs dans leurs recherches, leurs opérations quotidiennes et leur prise de décision.',
    listTitle: 'Ce que nous mettons en place',
    listStyle: 'columns',
    panelBg: '#0C2320',
    panelAccent: '#4FE0A6',
    panelAccent2: '#12A98A',
    list: [
      'Collecte et organisation de vos documents',
      'Traitement des PDF, Word, images et documents numérisés',
      'Recherche intelligente par mots-clés et par sens',
      'Assistant conversationnel disponible sur une plateforme web',
      'Réponses basées sur vos sources documentaires',
      'Affichage des références utilisées',
      'Gestion des droits d’accès par profil',
      'Mise à jour de la base de connaissances',
      'Assistants spécialisés par métier',
      'Intégration avec vos applications et processus existants',
    ],
    video: {
      id: 'nSSdmTFap3U',
      title: 'Démonstration',
      desc: 'Exemple : un agent conversationnel RAG qui répond à partir de documents spécifiques de l’Institut National de la Statistique — et reste juste même après la mise à jour de ces documents.',
    },
    full: 'Nos assistants exploitent vos documents internes (procédures, contrats, réglementations) et répondent avec leurs sources, dans le respect des droits d’accès de chaque utilisateur.',
    Icon: AutoStoriesRoundedIcon },
  { num: '05', key: 'SYSTÈMES', title: 'Intégration des systèmes',
    short: 'Nous connectons vos applications, bases de données et outils métiers afin de fluidifier les échanges, éviter les doubles saisies et construire un système d’information plus cohérent.',
    intro: 'Vos applications, bases de données et outils métiers doivent pouvoir communiquer entre eux. Softlink Technologies connecte vos systèmes existants afin de faire circuler les données de manière fluide, sécurisée et contrôlée. Nous intégrons les applications web et mobiles, les logiciels métiers, les bases de données, les services bancaires et les plateformes partenaires. Vous réduisez les doubles saisies, améliorez la qualité des données et disposez d’une vision plus cohérente de vos opérations.',
    listTitle: 'Notre intervention',
    listStyle: 'chevrons',
    panelBg: '#241A0A',
    panelAccent: '#F5C367',
    panelAccent2: '#D69A2E',
    list: [
      'Analyse de votre architecture informatique',
      'Connexion de vos applications et bases de données',
      'Développement et intégration d’API',
      'Synchronisation automatique des données',
      'Intégration avec les logiciels existants',
      'Échanges avec les banques, ERP, CRM et plateformes partenaires',
      'Gestion des utilisateurs et de l’authentification',
      'Sécurisation des échanges de données',
      'Suivi des erreurs et journalisation des opérations',
      'Accompagnement technique et documentation',
    ],
    full: 'Nous connectons vos nouvelles solutions à l’existant : comptabilité, ERP, CRM, applications bancaires, bases de données, services de paiement et plateformes SMS.',
    Icon: HubRoundedIcon },
  { num: '06', key: 'FORMATION', title: 'Formation opérationnelle',
    short: 'Des formations pratiques et adaptées à vos métiers pour rendre vos équipes autonomes face aux outils numériques, à l’intelligence artificielle et aux nouveaux processus de travail.',
    intro: 'Nous accompagnons vos équipes dans la prise en main des outils numériques et des nouveaux processus de travail. Les formations sont adaptées à votre niveau, à vos métiers et aux solutions utilisées dans votre organisation. Elles privilégient la pratique, les exercices et les cas réels afin de rendre les participants rapidement autonomes. Un accompagnement après la formation peut également être prévu pour répondre aux difficultés rencontrées sur le terrain.',
    listTitle: 'Nos domaines de formation',
    listStyle: 'grid',
    list: [
      'Informatique et outils numériques professionnels',
      'Développement web et applications mobiles',
      'Digitalisation des processus métiers',
      'Intelligence artificielle et solutions RAG',
      'Cybersécurité et bonnes pratiques numériques',
      'Arduino, IoT et automatisation',
      'Outils de pilotage bancaire et financier',
      'Administration et utilisation des applications métiers',
    ],
    list2Title: 'Notre méthode',
    list2Style: 'steps',
    list2: [
      'Identification des besoins',
      'Définition du niveau des participants',
      'Préparation d’un programme adapté',
      'Cours pratiques et démonstrations',
      'Exercices sur des cas réels',
      'Évaluation des acquis',
      'Remise de supports pédagogiques',
      'Accompagnement après la formation',
    ],
    panelBg: '#2A1020',
    panelAccent: '#F58EB0',
    panelAccent2: '#E0507F',
    full: 'Nous formons vos équipes aux solutions numériques, à l’IA, au RAG et à la gestion des données — pour une autonomie durable face aux nouveaux outils.',
    Icon: SchoolRoundedIcon },
]

export default function Services() {
  const [selected, setSelected] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const active = PILIERS[selected]

  const openPilier = (idx) => { setSelected(idx); setModalOpen(true) }

  return (
    <Box component="section" id="services" sx={{
      position: 'relative', bgcolor: C.bg, pt: { xs: 8, md: 10 }, pb: { xs: 2, md: 2.5 },
      '&::before': {
        content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: 60,
        background: 'linear-gradient(180deg, #0A0A12 0%, rgba(10,10,18,0) 100%)', pointerEvents: 'none', zIndex: 0,
      },
    }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* En-tête */}
        <Box sx={{
          display: 'flex', flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'flex-end' },
          gap: 3, mb: { xs: 5, md: 7 },
        }}>
          <Box>
            <Typography sx={{ color: C.turq, fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.16em', mb: 1.5 }}>
              LES SIX PILIERS DE SOFTLINK
            </Typography>
            <Typography component="h2" sx={{
              color: C.deep, fontWeight: 800, lineHeight: 1.12,
              fontSize: { xs: '1.9rem', sm: '2.4rem', md: '2.9rem' }, letterSpacing: '-0.02em',
            }}>
              Une seule équipe.<br />Six façons de créer de la valeur.
            </Typography>
          </Box>
          <Typography sx={{ color: C.sub, fontSize: '0.98rem', lineHeight: 1.6, maxWidth: 320, textAlign: { xs: 'left', md: 'right' } }}>
            Sélectionnez un pilier pour découvrir la manière dont il accompagne vos projets.
          </Typography>
        </Box>

        {/* Grille */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 2, md: 2.5 }, alignItems: 'stretch' }}>
          {PILIERS.map((p, i) => {
            const on = i === selected
            const { Icon } = p
            return (
              <Box
                key={p.num}
                component="button"
                type="button"
                aria-pressed={on}
                onClick={() => openPilier(i)}
                sx={{
                  textAlign: 'left', font: 'inherit', cursor: 'pointer', width: '100%',
                  display: 'flex', flexDirection: 'column', gap: 1.5, height: 'auto', p: { xs: 2.5, md: 3 },
                  borderRadius: '16px',
                  bgcolor: TINTS[i],                               // teinte propre — inchangée au clic
                  border: `1px solid ${on ? C.turq : C.border}`,
                  borderLeft: `4px solid ${on ? C.turq : 'transparent'}`,
                  boxShadow: on ? `0 0 0 1px ${C.turq}, 0 16px 34px -18px rgba(18,169,164,0.5)` : '0 1px 2px rgba(12,42,77,0.05)',
                  transition: 'border-color .25s ease, box-shadow .25s ease, transform .2s ease',
                  '&:hover': { transform: 'translateY(-3px)', borderColor: on ? C.turq : '#C3D0E0', boxShadow: on ? `0 0 0 1px ${C.turq}, 0 18px 38px -18px rgba(18,169,164,0.55)` : '0 10px 26px -12px rgba(12,42,77,0.18)' },
                  '&:focus-visible': { outline: `3px solid ${C.turq}`, outlineOffset: 2 },
                }}
              >
                {/* icône (gauche) · numéro + mot-clé (droite) */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <Box sx={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', width: 46, height: 46, borderRadius: '12px',
                    bgcolor: on ? 'rgba(18,169,164,0.12)' : C.iconBadge, border: `1px solid ${on ? 'rgba(18,169,164,0.35)' : C.border}`,
                  }}>
                    <Icon sx={{ fontSize: 24, color: on ? C.turq : C.deep }} />
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
                    <Box component="span" sx={{ fontWeight: 800, fontSize: '0.95rem', color: C.numMuted }}>{p.num}</Box>
                    <Box component="span" sx={{ fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.1em', color: C.turq }}>{p.key}</Box>
                  </Box>
                </Box>

                <Typography sx={{ fontWeight: 700, fontSize: { xs: '1.1rem', md: '1.2rem' }, lineHeight: 1.25, color: C.deep, mt: 0.5 }}>
                  {p.title}
                </Typography>
                <Typography sx={{ fontSize: '0.92rem', lineHeight: 1.55, color: C.sub }}>
                  {p.short}
                </Typography>

                {/* bas : indicateur d'état (gauche) + flèche (droite) */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 'auto', pt: 1 }}>
                  <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, height: 20 }}>
                    {on && (
                      <>
                        <CheckRoundedIcon sx={{ fontSize: 16, color: C.turq }} />
                        <Box component="span" sx={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', color: C.turq }}>SÉLECTIONNÉ</Box>
                      </>
                    )}
                  </Box>
                  <NorthEastRoundedIcon sx={{ fontSize: 18, color: on ? C.turq : '#B4C1D3' }} />
                </Box>
              </Box>
            )
          })}
        </Box>

        {/* Bloc SOFTLINK CONNECT — IoT & automatisation */}
        <Box sx={{ mt: { xs: 6, md: 9 } }}>
          <Typography component="h3" sx={{ color: C.deep, fontWeight: 800, fontSize: { xs: '1.6rem', md: '2.1rem' }, letterSpacing: '-0.01em', mb: 1.5 }}>
            SOFTLINK <Box component="span" sx={{ color: C.turq }}>CONNECT</Box>
          </Typography>
          <Typography sx={{ color: C.sub, fontSize: '1.02rem', lineHeight: 1.7, maxWidth: 800, mb: { xs: 3, md: 4 } }}>
            Softlink Technologies conçoit des systèmes intelligents capables de mesurer, analyser et agir.
            De l’automatisation sur mesure aux solutions agricoles connectées, nous transformons les données
            du terrain en actions concrètes, pilotables à distance.
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 2, md: 2.5 } }}>
            {/* Carte 1 : IoT & Automatisation */}
            <Box sx={{ p: { xs: 2.5, md: 3 }, borderRadius: '16px', bgcolor: '#FFFFFF', border: `1px solid ${C.border}`, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ width: 48, height: 48, borderRadius: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: C.deep }}>
                <DeveloperBoardRoundedIcon sx={{ fontSize: 26, color: '#5EEAE4' }} />
              </Box>
              <Typography sx={{ color: C.deep, fontWeight: 700, fontSize: '1.15rem' }}>Solutions IoT &amp; Automatisation intelligente</Typography>
              <Typography sx={{ color: C.sub, fontSize: '0.92rem', lineHeight: 1.6 }}>
                Conception de systèmes connectés utilisant des capteurs, Arduino, ESP32 ou autres équipements
                pour surveiller et commander des processus à distance.
              </Typography>
            </Box>

            {/* Carte 2 : MIZNAS AgroConnect */}
            <Box sx={{ p: { xs: 2.5, md: 3 }, borderRadius: '16px', bgcolor: '#FFFFFF', border: `1px solid ${C.border}`, borderLeft: `4px solid ${C.turq}`, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ width: 48, height: 48, borderRadius: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: C.deep }}>
                  <AgricultureRoundedIcon sx={{ fontSize: 26, color: '#5EEAE4' }} />
                </Box>
                <Box component="span" sx={{ fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.1em', color: '#0E8F8B', bgcolor: 'rgba(18,169,164,0.10)', border: '1px solid rgba(18,169,164,0.3)', px: 1, py: 0.4, borderRadius: 999 }}>
                  PRODUIT MIZNAS
                </Box>
              </Box>
              <Typography sx={{ color: C.deep, fontWeight: 700, fontSize: '1.15rem' }}>MIZNAS AgroConnect</Typography>
              <Typography sx={{ color: C.sub, fontSize: '0.92rem', lineHeight: 1.6 }}>
                Solution connectée pour automatiser l’irrigation, contrôler l’humidité des plantes,
                surveiller les cultures et recevoir des alertes à distance.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      <ServiceModal open={modalOpen} onClose={() => setModalOpen(false)} pilier={active} />
    </Box>
  )
}
