import React, { useEffect, useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@mui/material';


const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: 700 },
  bgcolor: '#111',
  color: '#fff',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  maxHeight: '80vh',
  overflowY: 'auto',
};

const ModalListeInscriptions = ({ open, onClose }) => {
  const [inscriptions, setInscriptions] = useState([]);

 useEffect(() => {
  if (open) {
    fetch('https://sheetdb.io/api/v1/1628940brtq4f')
      .then((res) => res.json())
      .then((data) => setInscriptions(data))
      .catch((err) => {
        console.error('Erreur de récupération SheetDB:', err);
        setInscriptions([]);
      });
  }
}, [open]);


  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <Typography variant="h5" sx={{ mb: 2, color: '#00ffff', fontWeight: 'bold' }}>
          📋 Inscriptions enregistrées 
        </Typography>

        {inscriptions.length === 0 ? (
          <Typography>Aucune inscription enregistrée.</Typography>
        ) : (
          <Paper sx={{ bgcolor: '#1a1a1a', overflow: 'auto' }}>
            <Table>
            <TableHead>
  <TableRow>
    <TableCell sx={{ color: '#00ffff', fontWeight: 'bold' }}>Nom</TableCell>
    <TableCell sx={{ color: '#00ffff', fontWeight: 'bold' }}>Email</TableCell>
    <TableCell sx={{ color: '#00ffff', fontWeight: 'bold' }}>Téléphone</TableCell>
    <TableCell sx={{ color: '#00ffff', fontWeight: 'bold' }}>Formation</TableCell>
    <TableCell sx={{ color: '#00ffff', fontWeight: 'bold' }}>Établissement</TableCell>
  </TableRow>
</TableHead>

              <TableBody>
                {inscriptions.map((item, i) => (
                <TableRow key={i}>
  <TableCell sx={{ color: '#fff' }}>{item.nom}</TableCell>
  <TableCell sx={{ color: '#fff' }}>{item.email}</TableCell>
  <TableCell sx={{ color: '#fff' }}>{item.telephone}</TableCell>
  <TableCell sx={{ color: '#00ffff', fontWeight: 'bold' }}>{item.formation}</TableCell>
  <TableCell sx={{ color: '#ccc' }}>{item.etablissement}</TableCell>
</TableRow>

                ))}
              </TableBody>
            </Table>
          </Paper>
        )}
      </Box>
    </Modal>
  );
};

export default ModalListeInscriptions;
