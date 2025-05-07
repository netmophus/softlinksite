



// src/components/Header.js
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/images/logo.png';

const navItems = [
  { label: 'Accueil',  id: 'accueil'  },
  { label: 'Services', id: 'services' },
  { label: 'Projets',  id: 'projets'  },
  { label: 'Formations', id: 'formations' }, // 👈 ajouté ici
  { label: 'Équipe',   id: 'equipe'   },
  { label: 'Contact',  id: 'contact'  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const theme      = useTheme();
  const isDesktop  = useMediaQuery(theme.breakpoints.up('md'));   // ≥ 960 px

  const toggle   = () => setOpen(o => !o);
  const scrollTo = id => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
<AppBar
  position="fixed"
  elevation={0}
  sx={{
    left: 0,
    right: 0,
    width: '100%',
    bgcolor: 'rgba(0,0,0,0.6)',
    backdropFilter: 'blur(10px)',
    zIndex: theme.zIndex.modal + 2,   // ✓ plus haut que tout le reste
  }}
>


        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Box
            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            onClick={() => scrollTo('accueil')}
          >
            <Box
              component="img"
              src={logo}
              alt="Softlink"
              sx={{ height: 48, filter: 'drop-shadow(0 0 8px #00ffff)' }}
            />
            <Box
              component="span"
              sx={{
                ml: 1,
                fontFamily: 'Orbitron, sans-serif',
                color: '#00ffff',
                fontSize: { xs: '1rem', md: '1.2rem' },
                letterSpacing: 1,
                whiteSpace: 'nowrap',
              }}
            >
              Technologies
            </Box>
          </Box>

          {/* Navigation : desktop vs mobile */}
          {isDesktop ? (
            <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
              {navItems.map(item => (
                <Button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  sx={{
                    color: '#00ffff',
                    fontFamily: 'Poppins, sans-serif',
                    textTransform: 'none',
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </Button>
              ))}

              <Button
                variant="contained"
                onClick={() => scrollTo('contact')}
                sx={{
                  bgcolor: '#00ffff',
                  color: '#000',
                  px: 3,
                  py: 1.2,
                  fontFamily: 'Orbitron, sans-serif',
                  '&:hover': { bgcolor: '#00e0e0' },
                }}
              >
                Demander un devis
              </Button>
            </Box>
          ) : (
            <IconButton
              edge="end"
              onClick={toggle}
              sx={{
                color: '#fff',                     // hamburger blanc
                p: 1.2,
                bgcolor: 'rgba(0,0,0,0.4)',
                '&:hover': { bgcolor: 'rgba(0,0,0,0.6)' },
              }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Décalage pour l’AppBar fixe */}
      {/* <Toolbar /> */}
      {/* <Toolbar sx={{ minHeight: { xs: 40, md: 64 } }} /> */}

      <Toolbar sx={{ display: { xs: 'none', md: 'flex' } }} />


      {/* Drawer mobile */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggle}
        ModalProps={{ keepMounted: true }}     // perf mobile
        sx={{
          '& .MuiDrawer-paper': {
            width: '100%',
            bgcolor: '#111',
            color: '#fff',
          },
        }}
      >
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
          <IconButton onClick={toggle} sx={{ color: '#00ffff' }}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Toolbar>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

        <List sx={{ textAlign: 'center', mt: 2 }}>
          {navItems.map(item => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton onClick={() => scrollTo(item.id)}>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    variant: 'h5',
                    fontFamily: 'Poppins, sans-serif',
                    color: '#00ffff',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}

          <ListItem sx={{ mt: 4, justifyContent: 'center' }}>
            <Button
              variant="contained"
              onClick={() => scrollTo('contact')}
              sx={{
                bgcolor: '#00ffff',
                color: '#000',
                px: 4,
                py: 1.5,
                fontFamily: 'Orbitron, sans-serif',
                '&:hover': { bgcolor: '#00e0e0' },
              }}
            >
              Demander un devis
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
