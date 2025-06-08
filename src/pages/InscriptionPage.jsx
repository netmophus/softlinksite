import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
} from '@mui/material';
import { useLocation } from 'react-router-dom';

const InscriptionPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const formationParam = queryParams.get('formation') || '';

  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    formation: formationParam,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Inscription envoyée :', formData);
    alert('Inscription envoyée avec succès !');
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Paper elevation={4} sx={{ p: 4, backgroundColor: '#111', color: '#fff' }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#00ffff', fontWeight: 'bold' }}>
          Formulaire d'inscription
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Nom complet"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
            sx={{ mb: 2 }}
            InputLabelProps={{ style: { color: '#ccc' } }}
            InputProps={{ style: { color: '#fff' } }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            sx={{ mb: 2 }}
            InputLabelProps={{ style: { color: '#ccc' } }}
            InputProps={{ style: { color: '#fff' } }}
          />
          <TextField
            fullWidth
            label="Téléphone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            required
            sx={{ mb: 2 }}
            InputLabelProps={{ style: { color: '#ccc' } }}
            InputProps={{ style: { color: '#fff' } }}
          />
          <TextField
            fullWidth
            label="Formation"
            name="formation"
            value={formData.formation}
            onChange={handleChange}
            disabled
            sx={{ mb: 3 }}
            InputLabelProps={{ style: { color: '#ccc' } }}
            InputProps={{ style: { color: '#00ffff', fontWeight: 600 } }}
          />

          <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: '#00ffff', color: '#000' }}>
            Envoyer
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default InscriptionPage;
