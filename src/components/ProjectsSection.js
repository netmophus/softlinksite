// src/components/ProjectsSection.js
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import softlinkTransfertImg from '../assets/images/softlinktrans.png';
import djangalImg from '../assets/images/djangal.png';
import schoolPortalImg from '../assets/images/schoolPortal.png';
import fahimtaImg from '../assets/images/fahimta.png';
import esanteImg from '../assets/images/esante.png';
const projects = [
  {
    title: 'SOFTLINK TRANSFERT : Une Nouvelle Ère pour vos Transactions Financières',
     image: softlinkTransfertImg,
    description: "Découvrez une solution digitale innovante dédiée aux transferts financiers rapides, fluides et sécurisés. Effectuez facilement vos opérations de transfert d'argent d'un compte à un autre, entre comptes et villes différentes ou encore d'une ville vers une autre. Gérez également vos tontines en toute simplicité avec notre interface intuitive, offrant une visibilité totale sur vos contributions et gains. Softlink Transfert réinvente vos échanges financiers quotidiens avec une technologie performante pour répondre efficacement à tous vos besoins en matière de finance mobile moderne.",
  },
  {
    title: 'App Djangal',
    image: djangalImg,
    description: "Djangal simplifie la gestion et la collecte des taxes municipales : paiement partiel ou complet, avis d’imposition et de taxe de marché. Le collecteur et le contribuable disposent chacun d’une application mobile dédiée, tandis que l’administrateur suit en temps réel l’activité de tous via un dashboard centralisé.",
  },
  {
    title: 'Portail des etablissements scolaires',
    image: schoolPortalImg ,
    description: "Plateforme tout-en-un pour établissements : gestion des notes et bulletins infalsifiables, génération de cartes d’identité scolaires numériques, accès aux ressources pédagogiques pour élèves, consultation des bulletins par les parents, et intranet sécurisé pour le ministère."
  },
  {
    title: 'Fahimta',
    image: fahimtaImg,
    description: "Fahimta est une application éducative de nouvelle génération qui propulse l’apprentissage des mathématiques dans l’ère de l’intelligence artificielle.\n\nConçue pour les élèves du Niger de la 6e à la Terminale, elle intègre une IA capable de :\n répondre aux questions du programme officiel,\n proposer des pistes de résolution d'exercices,\n traiter automatiquement les sujets d’examens,\n accompagner pas à pas chaque élève dans sa progression.\n\nAvec son interface intuitive, Fahimta transforme le rapport à l’apprentissage. C’est bien plus qu’une app : un mentor numérique et un tremplin vers la réussite scolaire."

  },
  {
    title: 'E-santé',
    image: esanteImg ,
    description: "eSanté Connect est une application innovante dédiée à la modernisation de l'accès aux services médicaux au Niger. Grâce à une interface sécurisée et intuitive, les patients peuvent désormais consulter en temps réel les résultats de leurs examens médicaux, reçus directement depuis les laboratoires d’analyses partenaires. La plateforme permet également une collaboration fluide avec les médecins agréés, garantissant un suivi médical plus rapide, plus transparent et plus efficace. Fini les attentes interminables : eSanté Connect place la santé entre vos mains, favorise la réactivité des professionnels, et renforce la confiance entre patients, laboratoires et médecins.",
  },

];

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: custom => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.3, duration: 0.6, ease: 'easeOut' },
  }),
};

const ProjectsSection = () => (
  <Box
    id="projets"
    sx={{
      background: 'linear-gradient(135deg, #111317, #0d0d0d)',
      py: { xs: 6, md: 10 },
    }}
  >
    <Container maxWidth="lg">
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 700,
          color: '#00ffff',
          mb: { xs: 4, md: 8 },
        }}
      >
        Nos Réalisations
      </Typography>

      {projects.map((p, i) => (
        <motion.div
          key={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={i}
          variants={fadeIn}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: i % 2 === 0 ? 'row' : 'row-reverse' },
              alignItems: 'center',
              mb: 6,
            }}
          >
           <Box
  component="img"
  src={p.image}
  alt={p.title}
  sx={{
    width: { xs: '100%', md: '50%' },   // même largeur responsive
    height: 'auto',                    // hauteur automatique
    maxHeight: { xs: 200, md: 400 },   // limite la hauteur sur desktop/mobile
    objectFit: 'contain',              // affiche toute l’image
    borderRadius: 2,
    boxShadow: '0 8px 30px rgba(0,255,255,0.1)',
  }}
/>
            <Box
              sx={{
                width: { xs: '100%', md: '50%' },
                p: { xs: 2, md: 4 },
                background: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(6px)',
                color: '#fff',
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: 'Orbitron, sans-serif',
                  color: '#00ffff',
                  mb: 2,
                  letterSpacing: 0.5,
                }}
              >
                {p.title}
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.6, mb: 2 }}>
                {p.description}
              </Typography>
              <Box
                component="a"
                href="#contact"
                sx={{
                  display: 'inline-block',
                  mt: 2,
                  px: 3,
                  py: 1,
                  border: '1px solid #00ffff',
                  color: '#00ffff',
                  borderRadius: 1,
                  textDecoration: 'none',
                  transition: 'background 0.3s',
                  '&:hover': { background: 'rgba(0,255,255,0.2)' },
                }}
              >
                En savoir plus
              </Box>
            </Box>
          </Box>
        </motion.div>
      ))}
    </Container>
  </Box>
);

export default ProjectsSection;
