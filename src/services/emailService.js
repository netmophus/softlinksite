// src/services/emailService.js
// Envoi des formulaires via Web3Forms → boîte mlkane8383@gmail.com (aucun backend).
const ACCESS_KEY = 'c7232e74-3921-4e85-a84e-dbf656f3410b'
const ENDPOINT = 'https://api.web3forms.com/submit'

async function submit(payload) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ access_key: ACCESS_KEY, ...payload }),
  })
  const data = await res.json()
  if (!data.success) throw new Error(data.message || "Échec de l'envoi")
  return data
}

// Formulaire « Nous écrire »
export async function sendContact({ name, email, message }) {
  return submit({
    subject: `Nouveau message du site — ${name}`,
    from_name: 'Site Softlink Technologies',
    replyto: email,
    Nom: name,
    Email: email,
    Message: message,
  })
}

// Formulaire « Demander une démo »
export async function sendDemoRequest({ name, org, email, phone, message, solution }) {
  return submit({
    subject: `Demande de démo — ${solution}`,
    from_name: 'Site Softlink Technologies',
    replyto: email,
    Solution: solution,
    Nom: name,
    Organisation: org,
    Email: email,
    Téléphone: phone,
    Message: message,
  })
}
