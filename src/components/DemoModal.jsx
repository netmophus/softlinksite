// src/components/DemoModal.jsx
// Formulaire « Demander une démo » — s'ouvre au clic, pré-rempli avec la solution choisie.
// Style corporate clair (blanc · bleu profond · turquoise).
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Box, Typography, IconButton, TextField, Stack } from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import { sendDemoRequest } from '../services/emailService'

const C = { deep: '#0C2A4D', sub: '#5B6B82', turq: '#12A9A4', border: '#DCE4EE' }
const WHATSAPP_URL = `https://wa.me/22796648383?text=${encodeURIComponent('Bonjour Softlink, je souhaite une démonstration.')}`

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: C.border },
    '&:hover fieldset': { borderColor: '#B7C6DA' },
    '&.Mui-focused fieldset': { borderColor: C.turq },
  },
  '& label.Mui-focused': { color: C.turq },
  '& .MuiInputBase-input': { color: C.deep },
  '& label': { color: C.sub },
}

export default function DemoModal({ open, onClose, solution }) {
  const [form, setForm] = useState({ name: '', org: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  // Pré-remplit le message avec la solution choisie à l'ouverture
  useEffect(() => {
    if (open) {
      setForm((f) => ({ ...f, message: `Bonjour, je souhaite une démonstration de « ${solution} ».` }))
      setSent(false)
      setError('')
    }
  }, [open, solution])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const change = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      await sendDemoRequest({ ...form, solution })
      setSent(true)
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }}
          onClick={onClose}
          sx={{ position: 'fixed', inset: 0, zIndex: 1300, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2,
            bgcolor: 'rgba(6,12,24,0.6)', backdropFilter: 'blur(5px)' }}>
          <Box component={motion.div} onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.94, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            sx={{ width: '100%', maxWidth: 480, bgcolor: '#fff', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 40px 90px -30px rgba(6,12,24,0.6)' }}>
            <Box sx={{ height: 4, background: `linear-gradient(90deg, ${C.deep}, ${C.turq})` }} />
            <Box sx={{ p: { xs: 3, sm: 4 } }}>
              <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 2 }}>
                <Box>
                  <Typography sx={{ color: C.deep, fontWeight: 800, fontSize: '1.3rem' }}>Demander une démo</Typography>
                  <Typography sx={{ color: C.turq, fontWeight: 600, fontSize: '0.85rem', mt: 0.5 }}>{solution}</Typography>
                </Box>
                <IconButton onClick={onClose} sx={{ color: C.sub, mt: -1, mr: -1 }} aria-label="Fermer"><CloseRoundedIcon /></IconButton>
              </Stack>

              {sent ? (
                <Box sx={{ py: 4, textAlign: 'center' }}>
                  <CheckCircleRoundedIcon sx={{ fontSize: 48, color: C.turq, mb: 1.5 }} />
                  <Typography sx={{ color: C.deep, fontWeight: 700, fontSize: '1.1rem', mb: 0.5 }}>Demande prête !</Typography>
                  <Typography sx={{ color: C.sub, fontSize: '0.9rem' }}>Merci — l'envoi sera activé très bientôt. Nous vous recontacterons rapidement.</Typography>
                  <Box component="button" type="button" onClick={onClose}
                    sx={{ mt: 3, font: 'inherit', cursor: 'pointer', px: 3, py: 1, borderRadius: '9px', border: `1px solid ${C.border}`, bgcolor: '#fff', color: C.deep, fontWeight: 600 }}>
                    Fermer
                  </Box>
                </Box>
              ) : (
                <Box component="form" onSubmit={submit}>
                  <Stack spacing={2}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                      <TextField name="name" label="Nom complet" value={form.name} onChange={change} required fullWidth size="small" sx={fieldSx} />
                      <TextField name="org" label="Organisation" value={form.org} onChange={change} fullWidth size="small" sx={fieldSx} />
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                      <TextField name="email" type="email" label="Email" value={form.email} onChange={change} required fullWidth size="small" sx={fieldSx} />
                      <TextField name="phone" label="Téléphone" value={form.phone} onChange={change} fullWidth size="small" sx={fieldSx} />
                    </Stack>
                    <TextField name="message" label="Message" value={form.message} onChange={change} fullWidth multiline rows={3} size="small" sx={fieldSx} />
                    {error && (
                      <Typography variant="body2" sx={{ color: '#c0392b', fontSize: '0.85rem' }}>
                        L'envoi a échoué. Réessayez, ou{' '}
                        <Box component="a" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" sx={{ color: C.turq, fontWeight: 600, textDecoration: 'underline' }}>
                          écrivez-nous sur WhatsApp
                        </Box>.
                      </Typography>
                    )}
                    <Box component="button" type="submit" disabled={sending}
                      sx={{ font: 'inherit', cursor: sending ? 'default' : 'pointer', opacity: sending ? 0.7 : 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 1,
                        py: 1.25, borderRadius: '10px', border: 'none', color: '#fff', fontWeight: 700, fontSize: '0.92rem',
                        background: `linear-gradient(45deg, ${C.deep}, #16457A)`, transition: 'transform .2s ease', '&:hover': { transform: sending ? 'none' : 'translateY(-1px)' } }}>
                      {sending ? 'Envoi…' : 'Envoyer la demande'} <SendRoundedIcon sx={{ fontSize: 17, color: '#5EEAE4' }} />
                    </Box>
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
