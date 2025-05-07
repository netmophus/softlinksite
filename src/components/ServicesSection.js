

// src/components/ServicesSection.js
import React from 'react';
import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Computer, PhoneAndroid, SyncAlt, Security } from '@mui/icons-material';

const services = [
  {
    title: 'Plateformes Web Futuristes',
    description: "Découvrez une expérience numérique hors du commun grâce à nos plateformes web futuristes. Plongez au cœur d'univers 3D immersifs, où l'interaction, la créativité et l'innovation fusionnent pour offrir une navigation spectaculaire et captivante. Avec Softlink, repoussez les limites du possible et transformez chaque clic en un voyage inoubliable.",
    icon: <Computer sx={{ fontSize: 40, color: '#00ffff' }} />,
  },
  {
    title: 'Apps Mobiles AR/VR',
    description: "Vivez des expériences mobiles inédites grâce à nos applications intégrant réalité augmentée et virtuelle. Ouvrez les portes de mondes interactifs où le virtuel enrichit votre quotidien et transforme chaque instant en aventure immersive. Avec Softlink, dépassez les frontières du réel.",
    icon: <PhoneAndroid sx={{ fontSize: 40, color: '#00ffff' }} />,
  },
  {
    title: 'Orchestrations IA',
    description: "Libérez tout le potentiel de vos workflows grâce à nos orchestrations basées sur l'IA. Boostez votre productivité, gagnez en précision et transformez chaque tâche en une expérience fluide et autonome. Avec Softlink, faites entrer votre entreprise dans l’ère de l’intelligence augmentée.",
    icon: <SyncAlt sx={{ fontSize: 40, color: '#00ffff' }} />,
  },
  {
    title: 'Sécurité Quantique',
    description: "Entrez dans une ère où vos données sont protégées par la puissance inviolable de la cryptographie quantique. Profitez d'une surveillance proactive en temps réel, assurant une sécurité absolue et permanente, 24h/24 et 7j/7. Avec Softlink, sécurisez aujourd’hui ce qui comptera demain.",
    icon: <Security sx={{ fontSize: 40, color: '#00ffff' }} />,
  },
];

const ServicesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // <600 px

  return (
    <Box id="services" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#000', color: '#fff' }}>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        {/* Titre */}
        <Typography
          variant="h3"
          align="center"
          sx={{ fontFamily: 'Orbitron, sans-serif', color: '#00ffff', mb: 8 }}
        >
          Nos&nbsp;Services
        </Typography>

        {/* Ligne centrale (cachée sur mobile) */}
        {!isMobile && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '50%',
              width: '4px',
              bgcolor: '#00ffff',
              opacity: 0.2,
              transform: 'translateX(-50%)',
            }}
          />
        )}

        {/* Cartes */}
        {services.map((s, i) => {
          const isLeft = i % 2 === 0;

          return (
            <Box
              key={i}
              component={motion.div}
              initial={{ opacity: 0, x: isMobile ? 0 : isLeft ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              sx={{
                position: 'relative',
                width: { xs: '100%', sm: '50%' },
                pl: { xs: 0, sm: isLeft ? 0 : 4 },
                pr: { xs: 0, sm: isLeft ? 4 : 0 },
                mb: 8,
                ml: { xs: 0, sm: isLeft ? 0 : '50%' },
              }}
            >
              {/* Point lumineux */}
              {!isMobile && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 24,
                    left: isLeft ? '100%' : '-12px',
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    bgcolor: '#00ffff',
                    boxShadow: '0 0 8px rgba(0,255,255,0.6)',
                  }}
                />
              )}

              {/* Carte */}
              <Box
                sx={{
                  bgcolor: 'rgba(0,0,0,0.5)',
                  p: 4,
                  borderRadius: 2,
                  border: '1px solid #00ffff',
                  boxShadow: '0 0 20px rgba(0,255,255,0.2)',
                  textAlign: { xs: 'center', sm: 'left' },
                }}
              >
                <Box sx={{ mb: 2, display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                  {s.icon}
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    color: '#00ffff',
                    mb: 1,
                  }}
                >
                  {s.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#ccc' }}>
                  {s.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Container>
    </Box>
  );
};

export default ServicesSection;
