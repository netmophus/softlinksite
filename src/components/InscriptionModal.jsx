



import React, { useState, useEffect } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
} from '@mui/material';


const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: 500 },
  bgcolor: '#111',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  color: '#fff',
};

const InscriptionModal = ({ open, onClose, formation }) => {

    const [formData, setFormData] = useState({
  nom: '',
  email: '',
  telephone: '',
  formation: formation || '',
  statut: '',
  etablissement: '',
  autres: '',
});


  useEffect(() => {
    setFormData((prev) => ({ ...prev, formation: formation || '' }));
  }, [formation]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await fetch('https://sheetdb.io/api/v1/1628940brtq4f', {
      method: 'POST',
      body: JSON.stringify({ data: formData }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    alert('Inscription envoyée avec succès ✔');
    setFormData({
      nom: '',
      email: '',
      telephone: '',
      formation: formation || '',
    });
    onClose();
  } catch (error) {
    console.error('Erreur SheetDB :', error);
    alert("Erreur lors de l'envoi");
  }
};


  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <Typography variant="h5" sx={{ mb: 2, color: '#00ffff', fontWeight: 'bold' }}>
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
       
       
 


{/* Champ formation lisible même désactivé */}
<TextField
  fullWidth
  label="Formation"
  name="formation"
  value={formData.formation}
  disabled
  sx={{
    mb: 2,
    '& .MuiOutlinedInput-notchedOutline': { borderColor: '#444' },
    '& .MuiInputBase-input.Mui-disabled': {
      WebkitTextFillColor: '#00ffff',
      color: '#00ffff',
      fontWeight: 600,
    },
  }}
  InputLabelProps={{ style: { color: '#ccc' } }}
/>

{/* Champ statut avec menu stylé */}
<TextField
  fullWidth
  select
  label="Statut"
  name="statut"
  value={formData.statut}
  onChange={handleChange}
  required
  sx={{
    mb: 2,
    '& .MuiSelect-select': { color: '#fff' },
    '& .MuiSelect-icon': { color: '#00ffff' },
  }}
  InputLabelProps={{ style: { color: '#ccc' } }}
  SelectProps={{
    MenuProps: {
      PaperProps: {
        sx: {
          bgcolor: '#222',
          color: '#fff',
        },
      },
    },
  }}
>
  <MenuItem value="">
    <em>Sélectionner un statut</em>
  </MenuItem>
  <MenuItem value="Etudiant">Étudiant</MenuItem>
  <MenuItem value="Professionnel">Professionnel</MenuItem>
  <MenuItem value="Autre">Autre</MenuItem>
</TextField>

{/* Champ conditionnel selon le statut */}
{formData.statut === 'Etudiant' && (
  <TextField
    fullWidth
    label="Nom de votre établissement"
    name="etablissement"
    value={formData.etablissement}
    onChange={handleChange}
    required
    sx={{ mb: 2 }}
    InputLabelProps={{ style: { color: '#ccc' } }}
    InputProps={{ style: { color: '#fff' } }}
  />
)}

{formData.statut && formData.statut !== 'Etudiant' && (
  <TextField
    fullWidth
    label="Autres précisions (ex : organisation, statut...)"
    name="autres"
    value={formData.autres}
    onChange={handleChange}
    sx={{ mb: 2 }}
    InputLabelProps={{ style: { color: '#ccc' } }}
    InputProps={{ style: { color: '#fff' } }}
  />
)}



          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ backgroundColor: '#00ffff', color: '#000' }}
          >
            Envoyer
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default InscriptionModal;
