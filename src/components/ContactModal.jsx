// src/components/ContactModal.jsx
// Modal "Nous écrire" : BASCULE et JAILLIT DU COIN haut-droit (près du bouton),
// puis se stabilise au centre. Animation via framer-motion (transformOrigin = top right).
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Box, Typography, IconButton, TextField, Button, Stack } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import { tokens, glow } from '../theme'
import { sendContact } from '../services/emailService'

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    bgcolor: 'rgba(255,255,255,0.03)',
    '& fieldset': { borderColor: tokens.border },
    '&:hover fieldset': { borderColor: tokens.borderAccent },
    '&.Mui-focused fieldset': { borderColor: tokens.indigo },
  },
  '& .MuiInputLabel-root.Mui-focused': { color: tokens.violet },
}

// Slider : le panneau glisse depuis le bord droit et se pose dans le coin haut-droit.
const panelVariants = {
  hidden: { opacity: 0, x: '110%' },
  visible: { opacity: 1, x: 0 },
}

const WHATSAPP_URL = `https://wa.me/22796648383?text=${encodeURIComponent('Bonjour Softlink, je vous écris depuis le site.')}`

export default function ContactModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      await sendContact(form)
      setSent(true)
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setSent(false)
      setSending(false)
      setError('')
      setForm({ name: '', email: '', message: '' })
    }, 350)
  }

  // Fermeture avec la touche Échap (la page reste librement scrollable)
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && handleClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={handleClose}
          sx={{
            position: 'fixed',
            inset: 0,
            zIndex: 1300,
            display: 'flex',
            alignItems: 'flex-start',       // ancré en haut
            justifyContent: 'flex-end',     // ancré à droite → coin haut-droit
            pt: { xs: '64px', md: '76px' }, // sous la topbar
            pr: { xs: 2, md: 3 },
            pl: 2,
            pb: 2,
            bgcolor: 'rgba(5,5,10,0.62)',
            backdropFilter: 'blur(5px)',
          }}
        >
          <Box
            component={motion.div}
            onClick={(e) => e.stopPropagation()}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'top right' }}
            sx={{
              width: '100%',
              maxWidth: 460,
              bgcolor: tokens.surface,
              border: `1px solid ${tokens.border}`,
              borderRadius: 3,
              boxShadow: glow.card,
              overflow: 'hidden',
            }}
          >
            {/* Liseré dégradé en haut */}
            <Box sx={{ height: 3, background: `linear-gradient(90deg, ${tokens.indigoDeep}, ${tokens.violet})` }} />

            <Box sx={{ p: { xs: 3, sm: 4 } }}>
              <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 1 }}>
                <Box>
                  <Typography variant="h5" sx={{ color: tokens.textMain, fontWeight: 700 }}>
                    Nous écrire
                  </Typography>
                  <Typography variant="body2" sx={{ color: tokens.textDim, mt: 0.5 }}>
                    Parlez-nous de votre projet, on vous répond vite.
                  </Typography>
                </Box>
                <IconButton onClick={handleClose} sx={{ color: tokens.textDim, mt: -1, mr: -1 }} aria-label="Fermer">
                  <CloseIcon />
                </IconButton>
              </Stack>

              {sent ? (
                <Box sx={{ py: 5, textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ color: tokens.violet, mb: 1 }}>
                    Merci ! ✓
                  </Typography>
                  <Typography variant="body2" sx={{ color: tokens.textDim }}>
                    Votre message a bien été envoyé. Nous vous répondrons rapidement.
                  </Typography>
                  <Button onClick={handleClose} sx={{ mt: 3 }} variant="outlined" color="primary">
                    Fermer
                  </Button>
                </Box>
              ) : (
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                  <Stack spacing={2.5}>
                    <TextField name="name" label="Nom" value={form.name} onChange={handleChange} required fullWidth size="small" sx={fieldSx} />
                    <TextField name="email" type="email" label="Email" value={form.email} onChange={handleChange} required fullWidth size="small" sx={fieldSx} />
                    <TextField name="message" label="Votre message" value={form.message} onChange={handleChange} required fullWidth multiline rows={4} sx={fieldSx} />
                    {error && (
                      <Typography variant="body2" sx={{ color: '#ff7a7a' }}>
                        L'envoi a échoué. Réessayez, ou{' '}
                        <Box component="a" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                          sx={{ color: tokens.violet, fontWeight: 600, textDecoration: 'underline' }}>
                          écrivez-nous sur WhatsApp
                        </Box>.
                      </Typography>
                    )}
                    <Button type="submit" variant="contained" color="primary" disabled={sending} endIcon={<SendRoundedIcon />} sx={{ alignSelf: 'flex-start' }}>
                      {sending ? 'Envoi…' : 'Envoyer'}
                    </Button>
                  </Stack>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      )}
    </AnimatePresence>
  )
}
