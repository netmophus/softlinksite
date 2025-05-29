


// import React, { useRef } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Grid,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { sendForm } from '../services/emailService';

// const ContactSection = () => {
//   const formRef = useRef();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await sendForm(formRef);
//       alert('✅ Message envoyé avec succès !');
//     } catch (error) {
//       console.error('❌ Erreur lors de l’envoi :', error);
//       alert('Une erreur est survenue. Veuillez réessayer.');
//     }
//   };

//   return (
//     <Box
//       id="contact"
//       sx={{
//         background: 'linear-gradient(135deg, #0d0d0d, #1a1a1a)',
//         py: { xs: 8, md: 12 },
//       }}
//     >
//       <Container maxWidth="sm">
//         {/* Titre & intro */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <Typography
//             variant="h3"
//             align="center"
//             gutterBottom
//             sx={{
//               fontFamily: 'Orbitron, sans-serif',
//               fontWeight: 700,
//               color: '#00ffff',
//               mb: 2,
//             }}
//           >
//             Contactez-nous
//           </Typography>
//           <Typography
//             variant="body1"
//             align="center"
//             sx={{ color: '#bbb', mb: 6 }}
//           >
//             Un projet ? Une idée ? <Box component="span" sx={{ color: '#fff' }}>Discutons-en.</Box>
//           </Typography>
//         </motion.div>

//         {/* Formulaire glassmorphique */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           <Box
//             component="form"
//             ref={formRef}
//             onSubmit={handleSubmit}
//             sx={{
//               background: 'rgba(255,255,255,0.05)',
//               backdropFilter: 'blur(10px)',
//               p: { xs: 3, md: 4 },
//               borderRadius: 3,
//               border: '1px solid rgba(255,255,255,0.1)',
//               boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
//             }}
//           >
//             <Grid container spacing={3}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   name="user_name"
//                   label="Nom"
//                   variant="filled"
//                   InputLabelProps={{ sx: { color: '#aaa' } }}
//                   InputProps={{
//                     disableUnderline: true,
//                     sx: {
//                       background: 'rgba(255,255,255,0.1)',
//                       borderRadius: 1,
//                       color: '#fff',
//                     },
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   name="user_email"
//                   label="Email"
//                   variant="filled"
//                   InputLabelProps={{ sx: { color: '#aaa' } }}
//                   InputProps={{
//                     disableUnderline: true,
//                     sx: {
//                       background: 'rgba(255,255,255,0.1)',
//                       borderRadius: 1,
//                       color: '#fff',
//                     },
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   name="user_message"
//                   label="Message"
//                   variant="filled"
//                   multiline
//                   rows={4}
//                   InputLabelProps={{ sx: { color: '#aaa' } }}
//                   InputProps={{
//                     disableUnderline: true,
//                     sx: {
//                       background: 'rgba(255,255,255,0.1)',
//                       borderRadius: 1,
//                       color: '#fff',
//                     },
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12} sx={{ textAlign: 'center' }}>
//                 <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
//                   <Button
//                     type="submit"
//                     variant="contained"
//                     sx={{
//                       background: 'linear-gradient(90deg, #00ffff, #00aaff)',
//                       color: '#000',
//                       px: { xs: 4, md: 6 },
//                       py: 1.5,
//                       fontWeight: 600,
//                     }}
//                   >
//                     Envoyer
//                   </Button>
//                 </motion.div>
//               </Grid>
//             </Grid>
//           </Box>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// };

// export default ContactSection;



import React, { useRef, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
} from '@mui/material';
import { motion } from 'framer-motion';
import { sendForm } from '../services/emailService';

const ContactSection = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.user_name.trim()) newErrors.user_name = 'Le nom est requis.';
    if (!formData.user_email.trim()) {
      newErrors.user_email = 'L’email est requis.';
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      newErrors.user_email = 'Adresse email invalide.';
    }
    if (!formData.user_message.trim()) newErrors.user_message = 'Le message est requis.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await sendForm(formRef);
      alert('✅ Message envoyé avec succès !');
      setFormData({ user_name: '', user_email: '', user_message: '' });
      setErrors({});
    } catch (error) {
      console.error('❌ Erreur lors de l’envoi :', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        background: 'linear-gradient(135deg, #0d0d0d, #1a1a1a)',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="sm">
        {/* Titre & intro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              fontFamily: 'Orbitron, sans-serif',
              fontWeight: 700,
              color: '#00ffff',
              mb: 2,
            }}
          >
            Contactez-nous
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ color: '#bbb', mb: 6 }}
          >
            Un projet ? Une idée ? <Box component="span" sx={{ color: '#fff' }}>Discutons-en.</Box>
          </Typography>
        </motion.div>

        {/* Formulaire */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Box
            component="form"
            ref={formRef}
            onSubmit={handleSubmit}
            sx={{
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(10px)',
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  name="user_name"
                  label="Nom"
                  variant="filled"
                  value={formData.user_name}
                  onChange={handleChange}
                  error={!!errors.user_name}
                  helperText={errors.user_name}
                  InputLabelProps={{ sx: { color: '#aaa' } }}
                  InputProps={{
                    disableUnderline: true,
                    sx: {
                      background: 'rgba(255,255,255,0.1)',
                      borderRadius: 1,
                      color: '#fff',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  name="user_email"
                  label="Email"
                  variant="filled"
                  value={formData.user_email}
                  onChange={handleChange}
                  error={!!errors.user_email}
                  helperText={errors.user_email}
                  InputLabelProps={{ sx: { color: '#aaa' } }}
                  InputProps={{
                    disableUnderline: true,
                    sx: {
                      background: 'rgba(255,255,255,0.1)',
                      borderRadius: 1,
                      color: '#fff',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  multiline
                  rows={4}
                  name="user_message"
                  label="Message"
                  variant="filled"
                  value={formData.user_message}
                  onChange={handleChange}
                  error={!!errors.user_message}
                  helperText={errors.user_message}
                  InputLabelProps={{ sx: { color: '#aaa' } }}
                  InputProps={{
                    disableUnderline: true,
                    sx: {
                      background: 'rgba(255,255,255,0.1)',
                      borderRadius: 1,
                      color: '#fff',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      background: 'linear-gradient(90deg, #00ffff, #00aaff)',
                      color: '#000',
                      px: { xs: 4, md: 6 },
                      py: 1.5,
                      fontWeight: 600,
                    }}
                  >
                    Envoyer
                  </Button>
                </motion.div>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ContactSection;
