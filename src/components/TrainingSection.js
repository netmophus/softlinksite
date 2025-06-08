import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Modal,
} from '@mui/material';
import { motion } from 'framer-motion';
import formation1 from '../assets/images/html.png';
import formation2 from '../assets/images/javascript.png';
import formation3 from '../assets/images/reactjs.png';
import formation4 from '../assets/images/bootstrap5.png';
import formation5 from '../assets/images/arduino1.png';
import formation6 from '../assets/images/network1.png';
import ModalParticipant from '../components/ModalParticipant';
import InscriptionModal from '../components/InscriptionModal';
import ModalListeInscriptions from '../components/ModalListeInscriptions'; // adapte le chemin

// const trainings = [
//   { title: 'HTML & CSS', description: 'Apprenez les bases du web moderne.', image: formation1 },
//   { title: 'JavaScript Avancé', description: 'Dominez les fonctions, closures et classes.', image: formation2 },
//   { title: 'React.js Pro', description: 'Créez des interfaces dynamiques avec React.', image: formation3 },
//   { title: 'Bootstrap 4', description: 'Créer des interfaces modernes avec Bootstrap.', image: formation4 },
//   { title: 'IOT avec Arduino', description: 'Créez vos premiers projets IOT avec Arduino.', image: formation5 },
//   { title: 'Etre un pro des reseaux IT', description: 'Maîtrisez les réseaux informatiques.', image: formation6 },
// ];

const trainings = [
  {
    title: 'HTML & CSS',
    description: 'Apprenez les bases du web moderne.',
    image: formation1,
    tarifEtudiant: '25 000 FCFA',
    tarifAutre: '45 000 FCFA',
  },
  {
    title: 'JavaScript Avancé',
    description: 'Dominez les fonctions, closures et classes.',
    image: formation2,
    tarifEtudiant: '30 000 FCFA',
    tarifAutre: '50 000 FCFA',
  },
  {
    title: 'React.js Pro',
    description: 'Créez des interfaces dynamiques avec React.',
    image: formation3,
    tarifEtudiant: '35 000 FCFA',
    tarifAutre: '65 000 FCFA',
  },
  {
    title: 'Bootstrap 4',
    description: 'Créer des interfaces modernes avec Bootstrap.',
    image: formation4,
    tarifEtudiant: '30 000 FCFA',
    tarifAutre: '50 000 FCFA',
  },
  {
    title: 'IOT avec Arduino',
    description: 'Créez vos premiers projets IOT avec Arduino.',
    image: formation5,
    tarifEtudiant: '40 000 FCFA',
    tarifAutre: '105 000 FCFA',
  },
  {
    title: 'Etre un pro des reseaux IT',
    description: 'Maîtrisez les réseaux informatiques.',
    image: formation6,
    tarifEtudiant: '40 000 FCFA',
    tarifAutre: '105 000 FCFA',
  },
];


const TrainingSection = () => {
  const [selectedTraining, setSelectedTraining] = useState('');
  const [openParticipantModal, setOpenParticipantModal] = useState(false);
  const [openInscriptionModal, setOpenInscriptionModal] = useState(false);
const [openListModal, setOpenListModal] = useState(false);
const [openAvantageModal, setOpenAvantageModal] = useState(false);


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

<Grid container justifyContent="center" sx={{ mt: 8 }}>
  <Grid item xs={12} sm={10} md={8}>
    <Box
      sx={{
        background: 'linear-gradient(145deg, #0d0d0d, #1a1a1a)',
        borderRadius: 4,
        boxShadow: '0 0 25px rgba(0,255,255,0.15)',
        p: { xs: 3, sm: 4 },
        textAlign: 'center',
        border: '1px solid #00ffff',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: '#00ffff',
          fontWeight: 700,
          mb: 2,
          fontSize: { xs: '1.2rem', sm: '1.5rem' },
        }}
      >
        🎓 Pourquoi vous inscrire ?
      </Typography>

      <Typography sx={{ color: '#ccc', mb: 3, lineHeight: 1.8 }}>
        Pour vous inscrire à une formation, cliquez sur le bouton <strong>« S’inscrire à cette formation »</strong> puis renvoyez le formulaire.
        <br />
        Un membre de notre équipe vous contactera pour vous expliquer les modalités.
        <br /><br />
        En participant à une formation, vous accédez également à de nombreux avantages exclusifs.
      </Typography>

      <Button
        variant="outlined"
        sx={{
          borderColor: '#00ffff',
          color: '#00ffff',
          fontWeight: 'bold',
          px: 3,
          py: 1.2,
          borderRadius: 2,
          '&:hover': {
            backgroundColor: 'rgba(0,255,255,0.08)',
            borderColor: '#00ffff',
          },
        }}
        onClick={() => setOpenAvantageModal(true)}
      >
        🌟 En savoir plus sur les avantages
      </Button>
    </Box>
  </Grid>
</Grid>



<Grid container justifyContent="center" sx={{ mb: 6 }}>
  <Grid item xs={12} sm={10} md={8}>
    <Box
      sx={{
        backgroundColor: '#111',
        borderRadius: 3,
        boxShadow: '0 0 20px rgba(0,255,255,0.1)',
        transition: '0.3s',
        '&:hover': {
          boxShadow: '0 0 30px rgba(0,255,255,0.3)',
        },
        p: 3,
      }}
    >
      <Typography
        variant="h6"
        align="center"
        sx={{ color: '#00ffff', fontWeight: 700, mb: 2 }}
      >
        Calendrier prévisionnel des formations 2025
      </Typography>

      <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse' }}>
        <Box component="thead" sx={{ backgroundColor: '#1a1a1a' }}>
          <Box component="tr">
            <Box
              component="th"
              sx={{
                color: '#00ffff',
                p: 1,
                textAlign: 'left',
                borderBottom: '1px solid #333',
                fontWeight: 'bold',
              }}
            >
              Formations
            </Box>
            <Box
              component="th"
              sx={{
                color: '#00ffff',
                p: 1,
                textAlign: 'left',
                borderBottom: '1px solid #333',
                fontWeight: 'bold',
              }}
            >
              Dates prévues
            </Box>
          </Box>
        </Box>
        <Box component="tbody">
          {[
            { formations: 'HTML & CSS – JavaScript Avancé', date: 'Juillet / Août 2025' },
            { formations: 'React.js Pro – Bootstrap 4', date: 'Septembre / Octobre 2025' },
            { formations: 'IOT avec Arduino – Réseaux IT', date: 'Novembre / Décembre 2025' },
          ].map((row, i) => (
            <Box component="tr" key={i} sx={{ borderBottom: '1px solid #222' }}>
              <Box component="td" sx={{ color: '#ccc', p: 1 }}>{row.formations}</Box>
              <Box component="td" sx={{ color: '#fff', p: 1 }}>{row.date}</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  </Grid>
</Grid>

        

       {/* <Box display="flex" justifyContent="center" mb={8}>
  <Button
    variant="outlined"
    size="small"
    sx={{
      color: '#00ffff',
      borderColor: '#00ffff',
      '&:hover': { backgroundColor: 'rgba(0,255,255,0.1)' },
    }}
    onClick={() => setOpenListModal(true)}
  >
    📋 Voir les inscriptions 
  </Button>
</Box>  */}


        <Grid container spacing={4} justifyContent="center">
          {trainings.map((training, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              {/* Carte cliquable */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  setSelectedTraining(training.title);
                  setOpenParticipantModal(true);
                }}
                style={{ cursor: 'pointer' }}
              >
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

                  <Box
  sx={{
    backgroundColor: '#1a1a1a',
    px: 2,
    py: 1.5,
    mx: 2,
    mb: 2,
    borderRadius: 2,
  }}
>
  <Typography
    sx={{
      color: '#00ffff',
      fontWeight: 500,
      fontSize: '0.75rem',
      lineHeight: 1.4,
    }}
  >
    Étudiant partenaire : {training.tarifEtudiant}
  </Typography>
  <Typography
    sx={{
      color: '#ffa726',
      fontWeight: 500,
      fontSize: '0.75rem',
      lineHeight: 1.4,
    }}
  >
    Autres participants : {training.tarifAutre}
  </Typography>
  <Typography
    sx={{
      color: '#ccc',
      fontSize: '0.7rem',
      mt: 0.5,
    }}
  >
    + 5 000 FCFA frais d’inscription (NITA : <strong>+22796648383</strong>)
  </Typography>
</Box>

                </Card>
              </motion.div>

              {/* Bouton indépendant */}
              <Box mt={1.5} display="flex" justifyContent="center">
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    borderColor: '#00ffff',
                    color: '#00ffff',
                    fontSize: '0.8rem',
                    '&:hover': {
                      backgroundColor: 'rgba(0,255,255,0.1)',
                    },
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedTraining(training.title);
                    setOpenInscriptionModal(true);
                  }}
                >
                  S'inscrire à cette formation
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ✅ Modal participant (carte) */}
      <ModalParticipant
        open={openParticipantModal}
        onClose={() => setOpenParticipantModal(false)}
        trainingTitle={selectedTraining}
      />

      {/* ✅ Modal inscription (bouton) */}
      <InscriptionModal
        open={openInscriptionModal}
        onClose={() => setOpenInscriptionModal(false)}
        formation={selectedTraining}
      />


      <ModalListeInscriptions
  open={openListModal}
  onClose={() => setOpenListModal(false)}
/>

<Modal open={openAvantageModal} onClose={() => setOpenAvantageModal(false)}>
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: { xs: '90%', sm: 750 },
      bgcolor: '#111',
      color: '#fff',
      boxShadow: 24,
      p: 4,
      borderRadius: 2,
      maxHeight: '85vh',
      overflowY: 'auto',
    }}
  >
    <Typography variant="h5" sx={{ color: '#00ffff', fontWeight: 700, mb: 3, textAlign: 'center' }}>
      🌟 Avantages d’une inscription à nos formations
    </Typography>

    {[
      "Intégration dans un club d’intelligence collective dédié à votre spécialité.",
      "Séminaires et ateliers sur les nouvelles tendances technologiques.",
      "Mentorat personnalisé par des professionnels expérimentés.",
      "Projets concrets supervisés pour renforcer l’expertise pratique.",
      "Prise en charge des coûts liés aux projets et outils pédagogiques.",
      "Accès facilité aux stages académiques grâce à nos partenaires.",
      "Aide à la rédaction de CV, rapports et préparation aux entretiens.",
      "Assistance à la recherche d'emploi ou poursuite d’études supérieures.",
      "Salle de formation équipée pour un apprentissage optimal.",
      "Appartenance à une communauté dynamique pour se perfectionner.",
    ].map((item, i) => (
      <Box
        key={i}
        sx={{
          border: '1px solid #00ffff',
          borderRadius: 2,
          p: 2,
          mb: 2,
          display: 'flex',
          alignItems: 'start',
          backgroundColor: '#1a1a1a',
        }}
      >
        <Box
          sx={{
            minWidth: 28,
            minHeight: 28,
            backgroundColor: '#00ffff',
            borderRadius: '50%',
            color: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            mr: 2,
          }}
        >
          {i + 1}
        </Box>
        <Typography>{item}</Typography>
      </Box>
    ))}

    <Box mt={4} display="flex" justifyContent="center">
      <Button
        variant="contained"
        onClick={() => setOpenAvantageModal(false)}
        sx={{ backgroundColor: '#00ffff', color: '#000', fontWeight: 'bold' }}
      >
        Fermer
      </Button>
    </Box>
  </Box>
</Modal>


    </Box>
  );
};

export default TrainingSection;
