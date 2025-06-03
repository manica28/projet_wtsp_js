// Données simulées
let contacts = [
    { 
        id: 1, 
        nom: "Coumba Ba", 
        telephone: "+221774093057", 
        dernierMessage: "N'oublies pas qu'on doit sortir cikanam!!!", 
        heure: "15:30", 
        nonLus: 2, 
        messages: [
            { texte: "Salut, comment ça va ?", heure: "14:30", envoye: false },
            { texte: "Ça va bien merci ! Et toi ?", heure: "14:32", envoye: true },
            { texte: "Boy t'es là?", heure: "15:30", envoye: false },
            { texte: "N'oublies pas qu'on doit sortir cikanam!!!", heure: "15:30", envoye: false }
        ]
    },
    { 
        id: 2, 
        nom: "Marius Dieng", 
        telephone: "+33987654321", 
        dernierMessage: "On se voit demain ?", 
        heure: "13:15", 
        nonLus: 0, 
        messages: [
            { texte: "On se voit demain ?", heure: "13:15", envoye: false },
            { texte: "Oui bien sûr !", heure: "13:16", envoye: true }
        ]
    },
    { 
        id: 3, 
        nom: "Madame Damas", 
        telephone: "+221772670098", 
        dernierMessage: "Merci pour l'info !", 
        heure: "12:45", 
        nonLus: 1, 
        messages: [
            { texte: "Merci pour l'info !", heure: "12:45", envoye: false }
        ]
    }
];

let groups = [
    { 
        id: 1, 
        nom: "Famille", 
        membres: ["Coumba Ba", "Madame Damas"], 
        admin: "Vous", 
        dernierMessage: "Bonne soirée à tous !", 
        heure: "16:20", 
        nonLus: 3, 
        messages: [
            { texte: "Bonne soirée à tous !", heure: "16:20", envoye: false, expediteur: "Coumba Ba" }
        ]
    },
    { 
        id: 2, 
        nom: "Travail", 
        membres: ["Marius Dieng", "Coumba Ba"], 
        admin: "Vous", 
        dernierMessage: "Réunion demain à 9h", 
        heure: "15:10", 
        nonLus: 0, 
        messages: [
            { texte: "Réunion demain à 9h", heure: "15:10", envoye: false, expediteur: "Marius Dieng" }
        ]
    }
];

// data.js
export const users= [
  { username: "admin", password: "1234", telephone: "770000000" },
  { username: "user1", password: "0000", telephone: "781234567" }
];


export { contacts, groups };