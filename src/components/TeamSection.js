

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import dgImg from '../assets/images/dg.png';
import consultantImg from '../assets/images/consultant.png';


const team = [
  {
    name: 'Mme KANE DJAMILA',
    role: 'CEO',
    photo: dgImg,
    quote: 'Innover pour transformer les idées en réalités numériques.',
  },
  {
    name: 'Mr KANE ML',
    role: 'Consultant UI/UX et Développeur Full stack MERN et Phyton',
    photo: consultantImg,
    quote: 'L’expérience utilisateur, au cœur de chaque projet.',
  },
  {
    name: 'Mr ABDOULRAZAK H',
    role: 'Ingénieure DevOps',
    photo: consultantImg,
    quote: 'Un code performant, un déploiement fluide.',
  },
  {
    name: 'Mr OMAR SOULEY',
    role: 'Consultant en Digitalisation',
    photo: consultantImg,
    quote: 'La digitalisation comme levier de croissance.',
  },
];


const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const TeamSection = () => (
  <Box
    id="equipe"
    sx={{
      // Nouveau fond : motif géométrique léger + dégradé néon
      background: `
        linear-gradient(135deg, rgba(13,13,13,0.9), rgba(26,26,26,0.9)),
        url('https://www.transparenttextures.com/patterns/cubes.png')
      `,
      backgroundBlendMode: 'overlay',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      py: { xs: 8, md: 12 },
    }}
  >
    <Container maxWidth="lg">
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 700,
          color: '#00ffff',
          mb: { xs: 6, md: 10 },
        }}
      >
        Notre Équipe
      </Typography>

      <Box
        component={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: 'repeat(4,1fr)',
          },
          gap: 4,
        }}
      >
        {team.map((member, i) => (
          <Box
            key={i}
            component={motion.div}
            custom={i}
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            style={{ perspective: 800 }}
          >
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 4,
                bgcolor: 'rgba(255,255,255,0.02)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 3,
                boxShadow: '0 15px 40px rgba(0,255,255,0.1)',
                height: '100%',
                textAlign: 'center',
                transition: 'box-shadow 0.3s',
                '&:hover': {
                  boxShadow: '0 20px 50px rgba(0,255,255,0.25)',
                },
              }}
            >
              <Box
                component="img"
                src={member.photo}
                alt={member.name}
                sx={{
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  border: '3px solid #00ffff',
                  mb: 2,
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.1)' },
                }}
              />
              <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600 }}>
                {member.name}
              </Typography>
              <Typography variant="body2" sx={{ color: '#bbb', mb: 1 }}>
                {member.role}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: '#ddd', fontStyle: 'italic', mt: 'auto' }}
              >
                “{member.quote}”
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  </Box>
);

export default TeamSection;

