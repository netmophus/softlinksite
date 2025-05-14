// src/components/HeroSection.js

import React, { useState } from 'react';
import { Box, Container, Typography, Button, Grid, Modal } from '@mui/material';
import { motion } from 'framer-motion';

const features = [
  { icon: '🖥️', label: 'Web Sur‑mesure' },
  { icon: '📱', label: 'Mobile Immersif' },
  { icon: '🤖', label: 'IA & API' },
  { icon: '🔒', label: 'Sécurité 24/7' },
];

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const HeroSection = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Box
      id="accueil"
      sx={{
        position: 'relative',
        minHeight: 480,
        height: '100vh',
        maxHeight: 680,
        overflow: 'hidden',
        bgcolor: '#000',
      }}
    >
      {/* Vidéo de fond */}
      <Box
        component="video"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        autoPlay
        loop
        muted
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.4,
        }}
      />

      {/* Voile sombre */}
      <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.6)' }} />

      {/* Contenu principal */}
      <Container
        maxWidth="md"
        sx={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: 'Orbitron, sans-serif',
              color: '#00ffff',
              fontSize: { xs: '3rem', md: '5rem' },
              lineHeight: 1.1,
              mb: 2,
            }}
          >
            Future&nbsp;is&nbsp;Digital
          </Typography>
          <Typography variant="h6" sx={{ color: '#ccc', mb: 4 }}>
            Votre vision, notre expertise<br />en développement et digitalisation.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button
              variant="contained"
              onClick={() => scrollToSection('services')}
              sx={{
                background: 'linear-gradient(45deg, #00ffff, #0066ff)',
                color: '#000',
                px: 4,
                py: 1.5,
                fontFamily: 'Poppins, sans-serif',
                '&:hover': {
                  background: 'linear-gradient(45deg, #00e0e0, #0055cc)',
                },
              }}
            >
              Nos services
            </Button>
            <Button
              variant="outlined"
              onClick={() => scrollToSection('projets')}
              sx={{
                borderColor: '#00ffff',
                color: '#00ffff',
                px: 4,
                py: 1.5,
                fontFamily: 'Poppins, sans-serif',
                '&:hover': { backgroundColor: 'rgba(0,255,255,0.1)' },
              }}
            >
              Voir projets
            </Button>
            <Button
              variant="outlined"
              onClick={() => setOpenModal(true)}
              sx={{
                borderColor: '#00ffff',
                color: '#00ffff',
                px: 4,
                py: 1.5,
                fontFamily: 'Orbitron, sans-serif',
                mt: { xs: 2, sm: 0 },
                '&:hover': {
                  backgroundColor: 'rgba(0,255,255,0.2)',
                },
              }}
            >
              Nos Partenaires
            </Button>
          </Box>
        </motion.div>

        {/* Icônes en bas */}
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 6 }}>
          {features.map((f, idx) => (
            <Grid item xs={6} sm={4} md={3} key={idx}>
              <motion.div whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 200 }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    mx: 'auto',
                    mb: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    background: 'rgba(0,255,255,0.2)',
                    color: '#00ffff',
                    fontSize: '2rem',
                  }}
                >
                  {f.icon}
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#00ffff',
                    textAlign: 'center',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  {f.label}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Modal Partenaires */}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(4px)',
        }}
      >
        <Box
          sx={{
            bgcolor: '#111',
            color: '#fff',
            p: 4,
            borderRadius: 2,
            width: '90%',
            maxWidth: 600,
            boxShadow: '0 0 30px rgba(0,255,255,0.3)',
          }}
        >
          <Typography variant="h5" sx={{ color: '#00ffff', mb: 2 }}>
            Nos Partenaires Stratégiques
          </Typography>
          <Typography variant="body1">
            Découvrez les institutions, entreprises et partenaires technologiques qui soutiennent Softlink dans ses projets innovants.
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default HeroSection;

