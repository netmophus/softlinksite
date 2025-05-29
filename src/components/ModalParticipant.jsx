import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Typography,
  Avatar,
  IconButton,
  Slide,
  Box,
  TextField,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import participantsData from '../data/participantsData';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Informations enrichies pour chaque formation
const formationDetails = {
 "HTML & CSS": {
  image: require('../assets/images/html.png'),
  description: "Apprenez à structurer des pages web avec HTML et les styliser avec CSS.",
  contenu: [
    "Aborder le langage HTML",
    "Aborder le fonctionnement du langage HTML",
    "Marquer le texte en HTML",
    "Ajouter des éléments multimédias",
    "Structurer des pages",
    "Mettre en place les liens",
    "Créer des formulaires",
    "Finaliser notre site web",
    "Améliorer l’accessibilité et le référencement des sites",
  ],
  photos: [
    require('../assets/participants/html-css/photo1.jpg'),
    require('../assets/participants/html-css/photo2.jpg'),
    require('../assets/participants/html-css/photo3.jpg'),
    require('../assets/participants/html-css/photo4.jpg'),
  ],
},

};

const ModalParticipant = ({ open, onClose, trainingTitle }) => {
  const allParticipants = participantsData[trainingTitle] || [];
  const [searchTerm, setSearchTerm] = useState('');

  const filteredParticipants = allParticipants.filter((participant) =>
    participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    participant.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formation = formationDetails[trainingTitle];

  return (
    <Dialog
      open={open}
      onClose={() => {
        setSearchTerm('');
        onClose();
      }}
      maxWidth="md"
      fullWidth
      TransitionComponent={Transition}
      keepMounted
    >
      <DialogTitle sx={{ display: 'flex', mt: 5, justifyContent: 'space-between', alignItems: 'center' }}>
        Participants à la formation : {trainingTitle}
        <IconButton onClick={() => {
          setSearchTerm('');
          onClose();
        }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>

        {/* Présentation de la formation */}
      {formation && (
  <Grid container spacing={2} sx={{ mb: 4 }}>
    {/* Image de la formation */}
    <Grid item xs={12} sm={4}>
      <img
        src={formation.image}
        alt={trainingTitle}
        style={{ width: '100%', borderRadius: 8 }}
      />
    </Grid>

    {/* Détails de la formation */}
    <Grid item xs={12} sm={8}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        {trainingTitle}
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        {formation.description}
      </Typography>

      <ul style={{ paddingLeft: '1.2rem' }}>
        {formation.contenu.map((item, index) => (
          <li key={index}>
            <Typography variant="body2" color="text.secondary">
              {item}
            </Typography>
          </li>
        ))}
      </ul>

      {/* Affichage du certificat */}
      <Box sx={{ mt: 3 }}>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Certificat délivré à la fin de la formation :
        </Typography>
        <Box
          component="img"
          src={require('../assets/images/certificat.jpg')}
          alt="Certificat de participation"
          sx={{
            width: '100%',
            maxWidth: 350,
            borderRadius: 2,
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        />
      </Box>
    </Grid>
  </Grid>
)}


        {/* Recherche */}
        {allParticipants.length > 0 && (
          <TextField
            fullWidth
            label="Rechercher un participant"
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ mb: 3 }}
          />
        )}

        {/* Liste des participants */}
        {filteredParticipants.length === 0 ? (
          <Typography variant="body1" align="center" sx={{ py: 5 }}>
            Aucun participant ne correspond à votre recherche.
          </Typography>
        ) : (
          <Grid container spacing={3} justifyContent="center">
            {filteredParticipants.map((participant, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
             

<Box
  sx={{
    width: '100%',
    bgcolor: '#fff',
    borderRadius: 3,
    boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
    overflow: 'hidden',
    position: 'relative',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-6px)',
      boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
    },
  }}
>
  {/* Badge certifié */}
  <Box
    sx={{
      position: 'absolute',
      top: 10,
      right: 10,
      bgcolor: '#00c9c9',
      color: '#fff',
      px: 1.5,
      py: 0.5,
      fontSize: 12,
      fontWeight: 'bold',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      zIndex: 1,
    }}
  >
    Certifié
  </Box>

  {/* Image rectangle */}
  <Box
    component="img"
    src={participant.photo}
    alt={participant.name}
    sx={{
      width: '100%',
      height: 180,
      objectFit: 'cover',
      objectPosition: 'top center',
    }}
  />

  {/* Texte */}
  <Box sx={{ p: 2, textAlign: 'center' }}>
    <Typography variant="h6" fontWeight="600" gutterBottom>
      {participant.name}
    </Typography>
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{
        wordBreak: 'break-word',
        overflowWrap: 'break-word',
        mb: 1,
      }}
    >
      {participant.role}
    </Typography>
    <Typography variant="caption" color="text.secondary">
      {participant.date}
    </Typography>
  </Box>
</Box>




             
              </Grid>
            ))}
          </Grid>
        )}

        {/* Photos de la formation */}
        {formation && formation.photos && formation.photos.length > 0 && (
          <>
            <Typography variant="h6" sx={{ mt: 5, mb: 2 }}>
              Quelques photos de la formation
            </Typography>
            <Grid container spacing={2}>
              {formation.photos.map((photo, index) => (
                <Grid item xs={6} sm={4} md={3} key={index}>
                  <img
                    src={photo}
                    alt={`Photo formation ${index + 1}`}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 8,
                      boxShadow: '0 0 6px rgba(0,0,0,0.3)',
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ModalParticipant;
