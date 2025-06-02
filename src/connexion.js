// Importation des utilisateurs depuis data.js
import { users } from './data.js';
import { NomInput,messageError, messageSucces,checkLenght, checkRequired, checkPhone,validerChamps,normalizePhone } from './validator.js'; 

// === GESTION DE LA CONNEXION ===

// Gestion de la soumission du formulaire de connexion
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Valider tous les champs avant de continuer
    if (!validerChamps()) {
        return; // Arrêter si la validation échoue
    }

    const phoneInput = document.getElementById('phone').value;
    const code = document.getElementById('code').value;

    login(phoneInput, code);
});

// Fonction de connexion
function login(phone, code) {
    const normalizedPhone = normalizePhone(phone);

    const user = users.find(u => normalizePhone(u.telephone) === normalizedPhone && u.password === code);

    if (!user) {
        // Afficher l'erreur sur les champs
        const phoneInput = document.getElementById('phone');
        const codeInput = document.getElementById('code');
        messageError(phoneInput, "Numéro incorrect");
        messageError(codeInput, "Code incorrect");
        return;
    }

    // Connexion réussie - marquer les champs comme valides
    const phoneInput = document.getElementById('phone');
    const codeInput = document.getElementById('code');
    messageSucces(phoneInput);
    messageSucces(codeInput);

    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('mainMenu').classList.remove('hidden');

    // Stocker en mémoire
    window.userSession = {
        isLoggedIn: true,
        userPhone: normalizedPhone
    };
}

// Déconnexion
function logout() {
    window.userSession = null;
    
    document.getElementById('mainMenu').classList.add('hidden');
    document.getElementById('loginPage').classList.remove('hidden');
    document.getElementById('loginForm').reset();
    
    // Réinitialiser les styles des champs avec Tailwind
    const phoneInput = document.getElementById('phone');
    const codeInput = document.getElementById('code');
    
    // Retirer toutes les classes de validation
    [phoneInput, codeInput].forEach(input => {
        input.classList.remove('border-red-500', 'focus:border-red-500', 'border-green-500', 'focus:border-green-500');
        const small = input.parentElement.querySelector("small");
        if (small) {
            small.classList.add('hidden');
        }
    });
}

// Vérification de l'état de connexion au chargement
window.addEventListener('load', function () {
    if (window.userSession && window.userSession.isLoggedIn) {
        document.getElementById('loginPage').classList.add('hidden');
        document.getElementById('mainMenu').classList.remove('hidden');
    }
});

// === GESTION DU MENU ===

// Gestion du menu latéral
// document.addEventListener('DOMContentLoaded', function () {
//     const menuItems = [
//         { selector: '.message', name: 'Messages' },
//         { selector: '.groupe', name: 'Groupes' },
//         { selector: '.diffusion', name: 'Diffusions' },
//         { selector: '.archive', name: 'Archives' },
//         { selector: '.nouveau', name: 'Nouveau' }
//     ];

//     menuItems.forEach(item => {
//         document.addEventListener('click', function (e) {
//             const element = e.target.closest(item.selector);
//             if (element) {
//                 document.querySelectorAll('.message, .groupe, .diffusion, .archive, .nouveau').forEach(el => {
//                     el.classList.remove('bg-[#e0b44b]');
//                 });

//                 element.classList.add('bg-[#e0b44b]');
//                 console.log(`Navigué vers: ${item.name}`);
//             }
//         });
//     });
// });

// === FORMATAGE DES CHAMPS ===

// Animation champ code (uniquement chiffres)
document.getElementById('code').addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/\D/g, '');
    
    // Validation en temps réel
    if (e.target.value.length >= 4) {
        checkLenght(e.target, 4, 8);
    }
});

// Formatage automatique du numéro de téléphone
document.getElementById('phone').addEventListener('input', function (e) {
    let value = e.target.value.replace(/[^\d+]/g, '');
    
    // Permettre + au début
    if (value.length > 0 && !value.startsWith('+') && !value.startsWith('0')) {
        value = '+' + value;
    }
    
    e.target.value = value;
    
    // Validation en temps réel
    if (value.length >= 7) {
        checkPhone(e.target);
    }
});

// Validation en temps réel quand on quitte un champ
document.getElementById('phone').addEventListener('blur', function (e) {
    if (e.target.value.trim()) {
        checkPhone(e.target);
    }
});

document.getElementById('code').addEventListener('blur', function (e) {
    if (e.target.value.trim()) {
        checkLenght(e.target, 4, 8);
    }
});

window.logout = logout;