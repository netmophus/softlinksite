// src/components/TrainingSection.js
import React, { useState } from 'react'; // Assure-toi que useState est bien importé
import { Box, Container, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import formation1 from '../assets/images/html.png';
import formation2 from '../assets/images/javascript.png';
import formation3 from '../assets/images/reactjs.png';
import formation4 from '../assets/images/bootstrap5.png';
import formation5 from '../assets/images/arduino1.png';
import formation6 from '../assets/images/network1.png';
import ModalParticipant from '../components/ModalParticipant';

const trainings = [
  { title: 'HTML & CSS', description: 'Apprenez les bases du web moderne.', image: formation1 },
  { title: 'JavaScript Avancé', description: 'Dominez les fonctions, closures et classes.', image: formation2 },
  { title: 'React.js Pro', description: 'Créez des interfaces dynamiques avec React.', image: formation3 },
  { title: 'Bootstrap 4', description: 'créer des interfaces modernes avec Bootstrap.', image: formation4 },
  { title: 'IOT avec Arduino', description: 'Créez vos premiers projets IOT avec Arduino.', image: formation5 },
  { title: 'Etre un pro des reseaux IT', description: 'Maîtrisez les réseaux informatiques.', image: formation6 },

];

const TrainingSection = () => {

  const [openModal, setOpenModal] = useState(false);
  const [selectedTraining, setSelectedTraining] = useState('');
  return (
    <Box
    id="formations"
    sx={{
      py: { xs: 6, md: 10 },
      background: 'linear-gradient(135deg, #0d0d0d, #111317)',
    }}
  >
    <Container>
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontFamily: 'Orbitron, sans-serif',
          color: '#00ffff',
          fontWeight: 700,
          mb: 6,
        }}
      >
        Nos Formations
      </Typography>
  
      <Grid container spacing={4} justifyContent="center">
        {trainings.map((training, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
         <motion.div whileHover={{ scale: 1.05 }} onClick={() => {
  setSelectedTraining(training.title);
  setOpenModal(true);
}} style={{ cursor: 'pointer' }}>
  <Card
    sx={{
      height: '100%',
      backgroundColor: '#111',
      color: '#fff',
      borderRadius: 3,
      overflow: 'hidden',
      boxShadow: '0 0 20px rgba(0,255,255,0.1)',
      transition: '0.3s',
      '&:hover': {
        boxShadow: '0 0 30px rgba(0,255,255,0.3)',
      },
    }}
  >
    <CardMedia
      component="img"
      height="180"
      image={training.image}
      alt={training.title}
      sx={{ objectFit: 'cover' }}
    />
    <CardContent>
      <Typography variant="h6" sx={{ color: '#00ffff', fontWeight: 600 }}>
        {training.title}
      </Typography>
      <Typography variant="body2" sx={{ mt: 1, color: '#ccc' }}>
        {training.description}
      </Typography>
    </CardContent>
  </Card>
</motion.div>

          </Grid>
        ))}
      </Grid>
    </Container>

    <ModalParticipant
  open={openModal}
  onClose={() => setOpenModal(false)}
  trainingTitle={selectedTraining}
/>

  </Box>
  
  );
};

export default TrainingSection;
