// import React from 'react';
// import { Box, Container, Grid, Typography, Link, Divider } from '@mui/material';
// import { Facebook, LinkedIn, Twitter, Email } from '@mui/icons-material';

// const Footer = () => {
//   return (
//     <Box sx={{ bgcolor: '#0d0d0d', color: '#ccc', pt: 8, pb: 4 }}>
//       <Container maxWidth="lg">
//         <Grid container spacing={4}>
//           {/* Branding */}
//           <Grid item xs={12} md={4}>
//             <Typography variant="h6" sx={{ color: '#00ffff', mb: 2 }}>
//               Softlink
//             </Typography>
//             <Typography variant="body2">
//               Startup spécialisée dans le développement d'applications sur mesure et la transformation digitale. 
//               Innovation, performance et design au service de votre vision.
//             </Typography>
//           </Grid>

//           {/* Liens rapides */}
//           <Grid item xs={12} md={4}>
//             <Typography variant="h6" sx={{ color: '#00ffff', mb: 2 }}>
//               Liens rapides
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//               <Link href="#" underline="hover" color="#ccc">Accueil</Link>
//               <Link href="#" underline="hover" color="#ccc">Services</Link>
//               <Link href="#" underline="hover" color="#ccc">Projets</Link>
//               <Link href="#" underline="hover" color="#ccc">Contact</Link>
//             </Box>
//           </Grid>

//           {/* Contact & Réseaux */}
//           <Grid item xs={12} md={4}>
//             <Typography variant="h6" sx={{ color: '#00ffff', mb: 2 }}>
//               Nous contacter
//             </Typography>
//             <Typography variant="body2" sx={{ mb: 1 }}>
//               Email : contact@softlink.com
//             </Typography>
//             <Typography variant="body2" sx={{ mb: 2 }}>
//               Téléphone : +227 90 00 00 00
//             </Typography>
//             <Box sx={{ display: 'flex', gap: 2 }}>
//               <Link href="#" target="_blank" rel="noopener" color="#00ffff">
//                 <Facebook />
//               </Link>
//               <Link href="#" target="_blank" rel="noopener" color="#00ffff">
//                 <LinkedIn />
//               </Link>
//               <Link href="#" target="_blank" rel="noopener" color="#00ffff">
//                 <Twitter />
//               </Link>
//               <Link href="mailto:contact@softlink.com" color="#00ffff">
//                 <Email />
//               </Link>
//             </Box>
//           </Grid>
//         </Grid>

//         <Divider sx={{ borderColor: '#00ffff20', my: 4 }} />

//         <Typography variant="body2" align="center" sx={{ color: '#666' }}>
//           © {new Date().getFullYear()} Softlink. Tous droits réservés.
//         </Typography>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;



// src/components/Footer.js

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  IconButton,
} from '@mui/material';
import { Facebook, LinkedIn, Twitter, Email } from '@mui/icons-material';
import logo from '../assets/images/logo.png';

const quickLinks = ['Accueil', 'Services', 'Projets', 'Équipe', 'Contact'];
const social = [
  { icon: <Facebook />, url: '#' },
  { icon: <LinkedIn />, url: '#' },
  { icon: <Twitter />, url: '#' },
  { icon: <Email />, url: 'mailto:contact@softlink.com' },
];

const Footer = () => (
  <Box
    component="footer"
    sx={{
      background: 'linear-gradient(135deg, #111111, #0d0d0d)',
      color: '#ccc',
      pt: 8,
      pb: 4,
    }}
  >
    {/* Ligne horizontale néon */}
    <Divider
      sx={{
        height: 3,
        mb: 6,
        border: 'none',
        background: 'linear-gradient(90deg, rgba(0,255,255,0.3), rgba(0,255,255,1), rgba(0,255,255,0.3))',
      }}
    />

    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {/* Branding */}
        <Grid item xs={12} md={4}>
          <Box
            component={Link}
            href="#accueil"
            underline="none"
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 2,
              '&:hover img': { transform: 'scale(1.05)' },
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Softlink"
              sx={{
                height: 40,
                mr: 1,
                transition: 'transform 0.3s',
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Orbitron, sans-serif',
                color: '#00ffff',
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              Technologies
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: '#aaa' }}>
            Startup experte en digitalisation et développement d’applications
            sur mesure. Votre vision, notre expertise.
          </Typography>
        </Grid>

        {/* Liens rapides */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            sx={{
              color: '#00ffff',
              mb: 2,
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
            }}
          >
            Liens rapides
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {quickLinks.map((label) => (
              <Link
                key={label}
                href={`#${label.toLowerCase()}`}
                underline="none"
                sx={{
                  position: 'relative',
                  color: '#ccc',
                  py: 0.5,
                  transition: 'color 0.3s',
                  '&:hover': { color: '#00ffff' },
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    height: '2px',
                    width: 0,
                    backgroundColor: '#00ffff',
                    transition: 'width 0.3s',
                  },
                  '&:hover:after': { width: '100%' },
                }}
              >
                {label}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Contact & Réseaux */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            sx={{
              color: '#00ffff',
              mb: 2,
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
            }}
          >
            Contact
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Mail:{' '}
            <Link href="mailto:contact@softlink.com" color="#ccc">
              contact@softlink.com
            </Link>
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Tel: +227 90 00 00 00
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {social.map((s, i) => (
              <IconButton
                key={i}
                component="a"
                href={s.url}
                sx={{
                  border: '1px solid #00ffff',
                  color: '#00ffff',
                  transition: 'background 0.3s, transform 0.3s',
                  '&:hover': {
                    backgroundColor: 'rgba(0,255,255,0.2)',
                    transform: 'scale(1.1)',
                  },
                }}
              >
                {s.icon}
              </IconButton>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Bas de page */}
      <Typography
        variant="caption"
        align="center"
        sx={{ display: 'block', mt: 6, color: '#666' }}
      >
        © {new Date().getFullYear()} Softlink Technologies. Tous droits réservés.
      </Typography>
    </Container>
  </Box>
);

export default Footer;

