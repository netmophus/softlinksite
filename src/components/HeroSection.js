

// import React from 'react';
// import { Box, Typography, Button, Container } from '@mui/material';

// const HeroSection = () => {
//   return (
//     <Box
//       id="accueil"
//       sx={{
//         bgcolor: '#0d0d0d',
//         color: 'white',
//         pt: 8,
//         pb: 10,
//         px: 2,
//         minHeight: '80vh',
//         display: 'flex',
//         alignItems: 'center',
//         background: 'linear-gradient(135deg, #0d0d0d 60%, #001f1f)',
//         borderTop: '8px solid #00ffff', // transition visuelle nette sous le header blanc
//       }}
//     >
//       <Container
//         maxWidth="lg"
//         sx={{
//           display: 'flex',
//           flexDirection: { xs: 'column', md: 'row' },
//           alignItems: 'center',
//           justifyContent: 'space-between',
//         }}
//       >
//         {/* Texte à gauche */}
//         <Box sx={{ flex: 1 }}>
//           <Typography
//             variant="h3"
//             component="h1"
//             gutterBottom
//             sx={{
//               fontWeight: 'bold',
//               color: '#00ffff',
//               fontFamily: 'Orbitron, sans-serif',
//               lineHeight: 1.2,
//             }}
//           >
//             Construisons l’avenir, <br /> une ligne de code à la fois.
//           </Typography>
//           <Typography variant="h6" paragraph sx={{ color: '#ccc' }}>
//             Softlink, votre partenaire pour le développement d'applications web et mobiles sur mesure,
//             et la digitalisation de vos services.
//           </Typography>
//           <Box sx={{ mt: 4 }}>
//             <Button
//               variant="contained"
//               sx={{
//                 bgcolor: '#00ffff',
//                 color: '#000',
//                 mr: 2,
//                 fontWeight: 'bold',
//                 px: 4,
//                 '&:hover': {
//                   bgcolor: '#00e0e0',
//                 },
//               }}
//             >
//               Nos services
//             </Button>
//             <Button
//               variant="outlined"
//               sx={{
//                 borderColor: '#00ffff',
//                 color: '#00ffff',
//                 fontWeight: 'bold',
//                 px: 4,
//                 '&:hover': {
//                   bgcolor: '#00ffff22',
//                 },
//               }}
//             >
//               Voir nos projets
//             </Button>
//           </Box>
//         </Box>

//         {/* Image à droite */}
//         <Box sx={{ flex: 1, mt: { xs: 5, md: 0 }, textAlign: 'center' }}>
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/4148/4148988.png"
//             alt="Futuristic"
//             style={{
//               maxWidth: '80%',
//               filter: 'drop-shadow(0 0 20px #00ffff)',
//               transition: 'transform 0.5s',
//             }}
//           />
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default HeroSection;



// // src/components/HeroSection.js
// import React from 'react';
// import { Box, Container, Typography, Button, Grid } from '@mui/material';
// import { motion } from 'framer-motion';

// const features = [
//   { icon: '🖥️', label: 'Web Sur-mesure' },
//   { icon: '📱', label: 'Mobile Immersif' },
//   { icon: '🤖', label: 'IA & API' },
//   { icon: '🔒', label: 'Sécurité 24/7' },
// ];

// const HeroSection = () => (
//   <Box
//     id="accueil"
//     sx={{
//       position: 'relative',
//     //   height: '100vh',
//     minHeight: 480,
//     height: '100vh',
//     maxHeight: 680,               // ne dépassera jamais 680 px
    
//       overflow: 'hidden',
//       bgcolor: '#000',
//     }}
//   >
//     {/* Background video or image */}
//     <Box
//       component="video"
//       src="https://www.w3schools.com/html/mov_bbb.mp4"
//       autoPlay
//       loop
//       muted
//       sx={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         objectFit: 'cover',
//         opacity: 0.4,
//       }}
//     />

//     {/* Dark overlay */}
//     <Box
//       sx={{
//         position: 'absolute',
//         inset: 0,
//         bgcolor: 'rgba(0,0,0,0.6)',
//       }}
//     />

//     {/* Content */}
//     <Container
//       maxWidth="md"
//       sx={{
//         position: 'relative',
//         zIndex: 1,
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         textAlign: 'center',
//         color: '#fff',
//       }}
//     >
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <Typography
//           variant="h1"
//           sx={{
//             fontFamily: 'Orbitron, sans-serif',
//             color: '#00ffff',
//             fontSize: { xs: '3rem', md: '5rem' },
//             lineHeight: 1.1,
//             mb: 2,
//           }}
//         >
//           Future is Digital
//         </Typography>
//         <Typography variant="h6" sx={{ color: '#ccc', mb: 4 }}>
//           Votre vision, notre expertise<br />en développement et digitalisation.
//         </Typography>
//         <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
//           <Button
//             variant="contained"
//             sx={{
//               background: 'linear-gradient(45deg, #00ffff, #0066ff)',
//               color: '#000',
//               px: 4,
//               py: 1.5,
//               fontFamily: 'Poppins, sans-serif',
//               transition: 'background 0.3s',
//               '&:hover': { background: 'linear-gradient(45deg, #00e0e0, #0055cc)' },
//             }}
//           >
//             Nos services
//           </Button>
//           <Button
//             variant="outlined"
//             sx={{
//               borderColor: '#00ffff',
//               color: '#00ffff',
//               px: 4,
//               py: 1.5,
//               fontFamily: 'Poppins, sans-serif',
//               transition: 'background 0.3s',
//               '&:hover': { backgroundColor: 'rgba(0,255,255,0.1)' },
//             }}
//           >
//             Voir projets
//           </Button>
//         </Box>
//       </motion.div>

//       {/* Features grid */}
//       <Grid container spacing={4} sx={{ mt: 6 }}>
//         {features.map((f, idx) => (
//           <Grid item xs={6} key={idx}>
//             <motion.div whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 200 }}>
//               <Box
//                 sx={{
//                   width: 80,
//                   height: 80,
//                   mx: 'auto',
//                   mb: 1,
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   borderRadius: '50%',
//                   background: 'rgba(0,255,255,0.2)',
//                   color: '#00ffff',
//                   fontSize: '2rem',
//                 }}
//               >
//                 {f.icon}
//               </Box>
//               <Typography variant="body1" sx={{ color: '#00ffff', textAlign: 'center', fontFamily: 'Poppins, sans-serif' }}>
//                 {f.label}
//               </Typography>
//             </motion.div>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   </Box>
// );

// export default HeroSection;






// src/components/HeroSection.js
import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const features = [
  { icon: '🖥️', label: 'Web Sur‑mesure' },
  { icon: '📱', label: 'Mobile Immersif' },
  { icon: '🤖', label: 'IA & API' },
  { icon: '🔒', label: 'Sécurité 24/7' },
];

const HeroSection = () => (
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

    {/* Contenu */}
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

        <Box
          sx={{
            display: 'flex',
            gap: 2,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Button
            variant="contained"
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
        </Box>
      </motion.div>

      {/* Grille d’icônes */}
     {/* Grille d’icônes */}
<Box sx={{ px: 4 /* compense spacing */ }}>
  <Grid
    container
    spacing={4}
    justifyContent="center"
    sx={{ mt: 6 }}
  >
    {features.map((f, idx) => (
      <Grid item xs={6} sm={4} md={3} key={idx}>
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
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
</Box>

    </Container>
  </Box>
);

export default HeroSection;
