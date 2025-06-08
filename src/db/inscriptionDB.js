// src/db/inscriptionDB.js
import Dexie from 'dexie';

const db = new Dexie('InscriptionsDB');

db.version(1).stores({
  inscriptions: '++id, nom, email, telephone, formation', // id auto-incrémenté
});

export default db;
