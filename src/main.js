import './style.css'
const application = document.querySelector('#app')
application.innerHTML= 
   `
    <!-- ::::::::::::::::::::::::::::::::::::::::::::::::: Page de Connexion :::::::::::::::::::::::::::::::::::::::::::::-->
   
    <div id="loginPage" class="w-full max-w-md">
        <div class="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 fade-in">
            <!-- Logo et titre -->
            <div class="text-center mb-8">
                <div class="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 chat-bubble">
                    <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
                    </svg>
                </div>
                <h1 class="text-3xl font-bold text-gray-800 mb-2">Echoo</h1>
                <p class="text-gray-600">Bienvenue sur Echoo : ta voix, ton impact.</p>
            </div>
            

            <!-- ::::::::::::::::::::::::::::::::::::::::: Formulaire de connexion ::::::::::::::::::::::::::::::::::::::: -->
           
            <form id="loginForm" class="space-y-6">
                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Numéro de téléphone</label>
                        <div class="relative">
                            <input 
                                type="tel" 
                                id="phone"
                                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 pl-12"
                                placeholder="+33 6 12 34 56 78">
                            <span class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">ex:</span>
                             <small class="mess"></small>
                        </div>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Code de vérification</label>
                        <div class="relative">
                            <input 
                                type="text" 
                                id="code"
                                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 pl-12"
                                placeholder="000000"
                                maxlength="6">
                            <span class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">ex:</span>
                             <small class="mess"></small>
                        </div>
                    </div>
                </div>

                <button 
                    type="submit"
                    class="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg">
                    Se connecter
                </button>
            </form>

            <!-- :::::::::::::::::::::::::::::::::::::::::::::::::Options supplémentaires :::::::::::::::::::::::::::::::::::-->
           
            <div class="mt-6 text-center">
                <p class="text-sm text-gray-600">
                    Pas encore de compte ? 
                    <a href="#" class="text-green-600 hover:text-green-700 font-semibold">S'inscrire</a>
                </p>
            </div>
        </div>
    </div>

    <!-- ::::::::::::::::::::::::::::::::::::::::::::::::::::: Interface WhatsApp principale (cachée par défaut) :::::::::::::::::::::::::::::::::::::::::::: -->
   
    <div id="mainMenu" class="hidden w-full h-screen">
        <div class="w-[1700px] h-[900px] shadow-2xl rounded bg-[#a59f94] flex mx-auto mt-4">
            <!-- Barre latérale -->
            <div class="w-[140px] h-full bg-[#dfded8] place-content-center flex flex-col gap-3 relative justify-center items-center">
                <div class="message w-[120px] h-[120px] border-2 border-[#e0b44b] rounded-xl hover:bg-[#e0b44b] flex flex-col items-center justify-center cursor-pointer">
                    <i class="fa-solid fa-message text-2xl"></i>
                    <p>Messages</p>
                </div>
                <div class="groupe w-[120px] h-[120px] border-2 border-[#e0b44b] rounded-xl hover:bg-[#e0b44b] flex flex-col items-center justify-center cursor-pointer">
                    <i class="fa-solid fa-user-group text-2xl"></i>
                    <p>Groupes</p>
                </div>
                <div class="diffusion w-[120px] h-[120px] border-2 border-[#e0b44b] rounded-xl hover:bg-[#e0b44b] flex flex-col items-center justify-center cursor-pointer">
                    <i class="fas fa-broadcast-tower text-black text-2xl"></i>
                    <p>Diffusions</p>
                </div>
                <div class="archive w-[120px] h-[120px] border-2 border-[#e0b44b] rounded-xl hover:bg-[#e0b44b] flex flex-col items-center justify-center cursor-pointer">
                    <i class="fas fa-archive text-black text-2xl"></i>
                    <p>Archives</p>
                </div>
                <div class="nouveau w-[120px] h-[120px] border-2 border-[#e0b44b] rounded-xl hover:bg-[#e0b44b] flex flex-col items-center justify-center cursor-pointer">
                    <i class="fa-solid fa-plus text-black text-2xl"></i>
                    <p>Nouveau</p>
                </div>
                
                <!-- :::::::::::::::::::Bouton déconnexion repositionné:::::::::::::::::::::::::::::::: -->
              
                <button onclick="logout()" class="relative top-[95px] left-[-2px] w-[125px] h-[30px] border-2 bg-red-500 border-red-500 rounded-xl hover:bg-red-600 flex flex-col items-center justify-center cursor-pointer font-bold animate-bounce">
                    Déconnexion
                </button>

                <!-- photo profil -->
                <!-- <div class="fixed bottom-10 left-[150px] rounded-full w-[50px] h-[50px] border-2 border-[#e0b44b] flex justify-end items-end bg-image bg-cover"></div> -->
            </div>

            <!--:::::::::::::::::::::::::::::::::::::::::::::::::::::::::  Menu des discussions ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::-->
           
            <div class="w-1/3 h-full bg-[#f9f5f7]" id="menu">
                <div class="text-3xl font-bold border-b border-gray-200 pl-4 mt-4">Discussions</div>
                <div class="p-3">
                    <input type="text" placeholder="Rechercher ou commencez une nouvelle discussion" class="w-full pl-4 py-2 bg-white rounded-xl text-sm" id="searchInput">
                </div>
            </div>

            <!-- :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::  Zone de discussions ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: -->
          
            <div class="flex-1 h-full bg-[#d5cebf]" id="discus">
                <div class="">
                    <div class="flex justify-end gap-3 mt-[20px] mr-[10px] h-[60px] bg-[#d5cebf] border-b">
                        <div class="w-[30px] h-[30px] border-2 border-orange-500 rounded-full text-center flex items-center justify-center">
                            <i class="fa-solid fa-delete-left text-orange-500"></i>
                        </div>
                        <div class="w-[30px] h-[30px] border-2 border-gray-500 rounded-full text-center flex items-center justify-center">
                            <i class="fas fa-archive text-gray-500"></i>
                        </div>
                        <div class="w-[30px] h-[30px] border-2 border-black rounded-full text-center flex items-center justify-center">
                            <i class="fa-solid fa-square text-black"></i>
                        </div>
                        <div class="w-[30px] h-[30px] border-2 border-red-500 rounded-full text-center flex items-center justify-center">
                            <i class="fas fa-trash text-red-500"></i>
                        </div>
                    </div>

                    <div class="text-center mt-[170px]">
                        <div class="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
                            </svg>
                        </div>
                        <h2 class="text-3xl mb-2 text-center font-bold">WhatsApp Web</h2>
                        <p class="text-sm text-center">Envoyez et recevez des messages sans garder votre téléphone connecté.</p>
                        <p class="text-sm mt-2 text-center">Utilisez WhatsApp sur jusqu'à 4 appareils connectés et 1 téléphone en même temps.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

   `

import { contacts, groups, users } from './data.js';

let currentView ='';
let selectedContact = null;

const menuContainer = document.querySelector('.w-1\\/3'); // cible le mmenu de gauche
const discussionsContainer = document.querySelector('.flex-1');
const searchInput = document.getElementById('searchInput');

document.addEventListener('DOMContentLoaded', function() 
{
    initializeEventListeners(); 
    renderContactsList(); 
});

function initializeEventListeners() {
    document.querySelector('.message').addEventListener('click', () => switchView('messages'));
    document.querySelector('.groupe').addEventListener('click', () => switchView('groups'));
    document.querySelector('.diffusion').addEventListener('click', () => switchView('broadcasts'));
    document.querySelector('.archive').addEventListener('click', () => switchView('archives'));
    document.querySelector('.nouveau').addEventListener('click', () => showNewContactModal());

    searchInput.addEventListener('input', handleSearch);

    const messageText = document.getElementById('messageText');
    const sendBtn = document.getElementById('sendBtn');
    const voiceBtn = document.getElementById('voiceBtn');

    messageText.addEventListener('input', toggleSendButton);
    sendBtn.addEventListener('click', sendMessage);
    voiceBtn.addEventListener('click', startVoiceMessage);
}


function handleSearch(event) {
    // On récupère le texte tapé par l'utilisateur et on le met en minuscules
    const texteRecherche = event.target.value.toLowerCase();

    // On prépare une liste filtrée selon la vue actuelle (messages ou groupes)
    let listeFiltree = [];

    if (currentView === 'messages') 
    {
        if (texteRecherche === '*') 
        {
        // Retourner tous les contacts triés par ordre alphabétique
        listeFiltree = contacts.slice().sort((a, b) =>
            a.nom.localeCompare(b.nom)
            );
        } 
        else 
        {
            // Filtrage sur le nom ou le téléphone
            listeFiltree = contacts.filter(contact =>
                contact.nom.toLowerCase().includes(texteRecherche) ||
                contact.telephone.toString().includes(texteRecherche)
            );
        }
    }
    else if (currentView === 'groups') {
        listeFiltree = groups.filter(groupe =>
            groupe.nom.toLowerCase().includes(texteRecherche)
        );
    }

    // On crée un nouvel élément HTML pour contenir la liste filtrée
    const nouveauConteneur = createListContainer();

    if (currentView === 'messages') {
        // On ajoute chaque contact filtré à la liste
        listeFiltree.forEach(contact => {
            const elementContact = createContactElement(contact);
            nouveauConteneur.appendChild(elementContact);
        });

        // On ajoute un bouton pour créer un nouveau contact
        nouveauConteneur.appendChild(createNewContactButton());

    } else if (currentView === 'groups') {
        // On ajoute chaque groupe filtré à la liste
        listeFiltree.forEach(groupe => {
            const elementGroupe = createGroupElement(groupe);
            nouveauConteneur.appendChild(elementGroupe);
        });

        // on ajoute un bouton pour creer un nouveau groupe
        nouveauConteneur.appendChild(createNewGroupButton());
    }

    //remplace lancienne liste par la nouvelle liste filtrée
    replaceListContent(nouveauConteneur);
}

// Corriger la fonction switchView pour la diffusion
function switchView(view) {
    currentView = view;
    
    // Update active state in sidebar
    document.querySelectorAll('.w-\\[138px\\]').forEach(btn => {
        btn.classList.remove('bg-[#e0b44b]');
    });
    
    switch(view) {
        case 'messages':
            document.querySelector('.message').classList.add('bg-[#e0b44b]');
            updateMenuTitle('Discussions');
            renderContactsList();
            break;
        case 'groups':
            document.querySelector('.groupe').classList.add('bg-[#e0b44b]');
            updateMenuTitle('Groupes');
            renderGroupsList();
            break;
        case 'archives':
            document.querySelector('.archive').classList.add('bg-[#e0b44b]');
            updateMenuTitle('Discussions archivées');
            renderArchivesList();
            break;
        case 'broadcasts':
            document.querySelector('.diffusion').classList.add('bg-[#e0b44b]');
            updateMenuTitle('Messages de diffusion');
            renderDiffusion();
            break;
    }
}

// Update menu title
function updateMenuTitle(title) {
    const titleElement = menuContainer.querySelector('.text-3xl');
    titleElement.textContent = title;
}

// Create contact element
function createContactElement(contact) {
    const div = document.createElement('div');
    div.className = 'flex items-center p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200';
    div.onclick = () => selectContact(contact); // Quand on **clique sur ce contact**, on appelle une fonction `selectContact(contact)` pour le sélectionner

    div.innerHTML = `
        <div class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-3 font-bold text-lg text-white">
            ${getInitiales(contact.nom)}
        </div>
        <div class="flex-1">
            <div class="flex justify-between items-center">
                <h3 class="font-medium">${contact.nom}</h3>
                <span class="text-xs text-gray-500">${contact.heure}</span>
            </div>
            <p class="text-sm text-gray-600 truncate">${contact.dernierMessage}</p>
        </div>
        ${contact.nonLus > 0 ? `<div class="bg-green-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center ml-2">${contact.nonLus}</div>` : ''}
    `;
    return div;
}
// Create group element
function createGroupElement(group) {
    const div = document.createElement('div');
    div.className = 'flex items-center p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200';
    div.onclick = () => selectGroup(group);

    div.innerHTML = `
        <div class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-3">
            <i class="fas fa-users text-gray-500"></i>
        </div>
        <div class="flex-1">
            <div class="flex justify-between items-center">
                <h3 class="font-medium">${group.nom}</h3>
                <span class="text-xs text-gray-500">${group.heure}</span>
            </div>
            <p class="text-sm text-gray-600 truncate">${group.dernierMessage}</p>
            <p class="text-xs text-gray-500">${group.membres.length} membres</p>
        </div>
        ${group.nonLus > 0 ? `<div class="bg-green-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center ml-2">${group.nonLus}</div>` : ''}
    `;
    return div;
}

// Create new contact button
function createNewContactButton() {
    const div = document.createElement('div');
    //div.className = 'flex items-center p-3 hover:bg-green-50 cursor-pointer border-b border-gray-200 text-green-600';
    div.onclick = showNewContactModal;
    
    div.innerHTML = `
        <div class="w-12 h-12 hidden bg-green-100 rounded-full flex items-center justify-center mr-3">
            <i class="fas fa-plus text-green-600"></i>
        </div>
    `;
    return div;
}

// Create new group button
function createNewGroupButton() 
{
    const div = document.createElement('div');
    div.className = 'flex items-center p-3 hover:bg-blue-50 cursor-pointer border-b border-gray-200 text-blue-600';
    div.onclick = showNewGroupModal;
    
    div.innerHTML = `
        <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
            <i class="fas fa-plus text-blue-600"></i>
        </div>
    `;
    return div;
}

// Replace list content
function replaceListContent(newContent) 
{
    const existingList = menuContainer.querySelector('.overflow-y-auto');
    if (existingList) 
    {
        existingList.remove();
    }
    menuContainer.appendChild(newContent);
}

// Modifier la fonction showChatInterface pour ajouter un bouton de gestion des membres
// Fonction pour afficher le modal de gestion des membres (Admin seulement)
// Show new contact modal
function showNewContactModal() {
    const modal = createModal('Ajouter un Nouveau Contact', `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                <input type="text" id="contactName" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500" placeholder="Nom du contact">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Numéro de téléphone</label>
                <input type="tel" id="contactPhone" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500" placeholder="+33123456789">
            </div>
        </div>
    `, [
        {
            text: 'Annuler',
            class: 'px-4 py-2 text-gray-600 hover:text-gray-800',
            onClick: closeModal
        },
        {
            text: 'Ajouter',
            class: 'px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600',
            onClick: addNewContact
        }
    ]);
    
    showModal(modal, [
        {
            text: 'Annuler',
            class: 'px-4 py-2 text-gray-600 hover:text-gray-800',
            onClick: closeModal
        },
        {
            text: 'Ajouter',
            class: 'px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600',
            onClick: addNewContact
        }
    ]);
}

// Show new group modal
function showNewGroupModal() {
    const modal = createModal('Nouveau Groupe', `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Nom du groupe</label>
                <input type="text" id="groupName" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Nom du groupe">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Membres</label>
                <div class="space-y-2 max-h-40 overflow-y-auto">
                    ${contacts.map(contact => `
                        <label class="flex items-center">
                            <input type="checkbox" value="${contact.id}" class="mr-2 group-member-checkbox">
                            <span>${contact.nom}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        </div>
    `, [
        {
            text: 'Annuler',
            class: 'px-4 py-2 text-gray-600 hover:text-gray-800',
            onClick: closeModal
        },
        {
            text: 'Créer',
            class: 'px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600',
            onClick: addNewGroup
        }
    ]);
    showModal(modal, [
        {
            text: 'Annuler',
            class: 'px-4 py-2 text-gray-600 hover:text-gray-800',
            onClick: closeModal
        },
        {
            text: 'Créer',
            class: 'px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600',
            onClick: addNewGroup
        }
    ]);
}

// Create modal
function createModal(title, content, buttons) {
    return `
        <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" id="modal">
            <div class="bg-white rounded-lg p-6 w-96 max-w-md mx-4">
                <h2 class="text-xl font-bold mb-4">${title}</h2>
                ${content}
                <div class="flex justify-end space-x-2 mt-6">
                    ${buttons.map(btn => `<button class="${btn.class}" onclick="${btn.onClick.name}()">${btn.text}</button>`).join('')}
                </div>
            </div>
        </div>
    `;
}

// Show modal
function showModal(modalHTML, buttons = []) {
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    // Ajoute les listeners JS pour chaque bouton
    buttons.forEach((btn, i) => {
        const el = document.querySelectorAll('#modal button')[i];
        if (el && typeof btn.onClick === 'function') {
            el.onclick = btn.onClick;
        }
    });
}

// Close modal
function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.remove();
    }
}

// Add new contact
function addNewContact() {
    const name = document.getElementById('contactName').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();

    // Expression régulière générale pour numéro international : + suivi de 8 à 15 chiffres
    const phoneRegex = /^\+?\d{8,15}$/;

    if (!name || !phone) {
        showNotification('Veuillez remplir tous les champs', 'error');
        return;
    }

    if (!phoneRegex.test(phone)) {
        showNotification('Numéro de téléphone invalide ! Utilisez le format international, ex : +221771234567', 'error');
        return;
    }

    if (contacts.some(c => c.telephone === phone)) {
        showNotification('Ce numéro de téléphone existe déjà !', 'error');
        return;
    }

    // Gérer les doublons de nom
    let finalName = name;
    let count = 1;
    while (contacts.some(c => c.nom === finalName)) {
        count++;
        finalName = `${name}${count}`;
    }

    const newContact = {
        id: contacts.length + 1,
        nom: finalName,
        telephone: phone,
        dernierMessage: "Nouveau contact ajouté",
        heure: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
        nonLus: 0,
        messages: []
    };

    contacts.unshift(newContact);
    renderContactsList();
    closeModal();
    showNotification(`Contact "${finalName}" ajouté avec succès !`, 'success');
}

// 1. FONCTION DE NORMALISATION DES NOMS (à ajouter en haut de votre fichier)
function normaliserNom(nom) {
    return nom.trim()
        .toLowerCase()
        .split(' ')
        .map(mot => {
            if (mot.length === 0) return '';
            return mot.charAt(0).toUpperCase() + mot.slice(1).toLowerCase();
        })
        .filter(mot => mot.length > 0) // Supprimer les mots vides
        .join(' ');
}

// Fonction pour comparer deux noms (insensible à la casse)
function comparerNoms(nom1, nom2) {
    return nom1.toLowerCase().trim() === nom2.toLowerCase().trim();
}

// Fonction pour générer un nom unique en cas de doublon
function genererNomUnique(nomBase, listeExistante) {
    const nomNormalise = normaliserNom(nomBase);
    
    // Si le nom n'existe pas, le retourner tel quel
    if (!listeExistante.some(nom => comparerNoms(nom, nomNormalise))) {
        return nomNormalise;
    }
    
    // Sinon, chercher le prochain numéro disponible
    let compteur = 2;
    let nomAvecCompteur;
    
    do {
        nomAvecCompteur = `${nomNormalise} ${compteur}`;
        compteur++;
    } while (listeExistante.some(nom => comparerNoms(nom, nomAvecCompteur)));
    
    return nomAvecCompteur;
}

// 2. FONCTION MODIFIÉE POUR CRÉER UN NOUVEAU GROUPE (avec normalisation des noms)
function addNewGroup() {
    const groupName = document.getElementById('groupName').value.trim();
    let selectedMembers = Array.from(document.querySelectorAll('.group-member-checkbox:checked'))
        .map(checkbox => contacts.find(c => c.id == checkbox.value)?.nom)
        .filter(Boolean);

    // Normaliser les noms des membres sélectionnés
    selectedMembers = selectedMembers.map(nom => normaliserNom(nom));

    // Gérer les doublons de nom de groupe avec normalisation
    let finalGroupName = normaliserNom(groupName);
    let count = 1;
    while (groups.some(g => g.nom.toLowerCase() === finalGroupName.toLowerCase())) {
        count++;
        finalGroupName = `${normaliserNom(groupName)}${count}`;
    }

    if (groupName && selectedMembers.length > 0) {
        const newGroup = {
            id: groups.length + 1,
            nom: finalGroupName,
            membres: selectedMembers,
            admin: "Vous",
            dernierMessage: "Groupe créé",
            heure: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
            nonLus: 0,
            messages: []
        };

        groups.unshift(newGroup);
        if (currentView === 'groups') {
            renderGroupsList();
        }
        closeModal();
        showNotification(`Groupe "${finalGroupName}" créé avec succès !`, 'success');
    } else {
        showNotification('Veuillez remplir le nom du groupe et sélectionner au moins un membre', 'error');
    }
}
// Fonction pour archiver une discussion
function archiverDiscussion(contact, isGroup = false) {
    contact.archive = true;
    showNotification(`${isGroup ? 'Groupe' : 'Contact'} archivé avec succès !`, 'success');
    
    // Mettre à jour l'affichage selon la vue actuelle
    if (isGroup) {
        renderGroupsList();
    } else {
        renderContactsList();
    }
    // Masquer la discussion si elle est affichée
    discussionsContainer.innerHTML = `
        <div class="flex items-center justify-center h-full text-gray-500">
            <div class="text-center">
                <i class="fas fa-archive text-6xl mb-4"></i>
                <p class="text-xl">Discussion archivée</p>
            </div>
        </div>
    `;
}
// Fonction pour désarchiver une discussion
function desarchiverDiscussion(contact, isGroup = false) {
    contact.archive = false;
    showNotification(`${isGroup ? 'Groupe' : 'Contact'} désarchivé avec succès !`, 'success');
    
    // Recharger la liste des archives
    renderArchivesList();
}

// Modifier la fonction renderArchivesList pour afficher les discussions archivées
function renderArchivesList() {
    const listContainer = createListContainer();
    
    // Récupérer les contacts et groupes archivés
    const contactsArchives = contacts.filter(contact => contact.archive);
    const groupesArchives = groups.filter(group => group.archive);
    
    if (contactsArchives.length === 0 && groupesArchives.length === 0) {
        const emptyState = document.createElement('div');
        emptyState.className = 'text-center text-gray-500 mt-8 p-4';
        emptyState.innerHTML = `
            <i class="fas fa-archive text-4xl mb-4 text-gray-400"></i>
            <p>Aucune discussion archivée</p>
        `;
        listContainer.appendChild(emptyState);
    } else {
        // Afficher les contacts archivés
        contactsArchives.forEach(contact => {
            const contactElement = createArchivedContactElement(contact);
            listContainer.appendChild(contactElement);
        });
        
        groupesArchives.forEach(group => {
            const groupElement = createArchivedGroupElement(group);
            listContainer.appendChild(groupElement);
        });
    }
    
    replaceListContent(listContainer);
}

function renderContactsList() {
    const listContainer = createListContainer();
    
    const contactsNonArchives = contacts.filter(contact => !contact.archive);
    
    contactsNonArchives.forEach(contact => {
        const contactElement = createContactElement(contact);
        listContainer.appendChild(contactElement);
    });

    const newContactBtn = createNewContactButton();
    listContainer.appendChild(newContactBtn);

    replaceListContent(listContainer);
}

function renderGroupsList() {
    const listContainer = createListContainer();
    
    const groupesNonArchives = groups.filter(group => !group.archive);
    
    groupesNonArchives.forEach(group => {
        const groupElement = createGroupElement(group);
        listContainer.appendChild(groupElement);
    });

    const newGroupBtn = createNewGroupButton();
    listContainer.appendChild(newGroupBtn);

    replaceListContent(listContainer);
}

// Fonction pour afficher les notifications
function showNotification(message, type = 'info') 
{
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 
    ${
        type === 'success' ? 'bg-green-500 text-white' : 
        type === 'error' ? 'bg-red-500 text-white' : 
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => 
    {
        notification.remove();
    }, 3000);
}

function getInitiales(nom) {
    return nom.split(' ') // On découpe la chaîne nom en mots
        .map(part => part.charAt(0).toUpperCase()) // Pour chaque mot (part), on prend la première lettre (charAt(0)) et on la met en majuscule (toUpperCase()).
        .slice(0, 2) // On ne garde que les deux premières lettres 
        .join(''); // On colle les lettres ensemble sans espace
}

function createListContainer() {
    const container = document.createElement('div');
    container.className = 'overflow-y-auto flex-1';
    return container;
}

function toggleSendButton() {
    const messageText = document.getElementById('messageText');
    const sendBtn = document.getElementById('sendBtn');
    const voiceBtn = document.getElementById('voiceBtn');
    
    if (messageText && sendBtn && voiceBtn) {
        if (messageText.value.trim()) {
            sendBtn.style.display = 'flex';
            voiceBtn.style.display = 'none';
        } else {
            sendBtn.style.display = 'none';
            voiceBtn.style.display = 'flex';
        }
    }
}

function sendMessage() {
    const messageText = document.getElementById('messageText');
    if (messageText && messageText.value.trim()) {
        envoyerMessage();
    }
}

function startVoiceMessage() {
    console.log('Démarrage de l\'enregistrement vocal...');
}

function createBroadcastList() {
    console.log('Création d\'une liste de diffusion...');
}
function renderDiffusion() {
    const listContainer = createListContainer();
    
    // Bouton pour créer une nouvelle diffusion
    const newBroadcastBtn = document.createElement('div');
    newBroadcastBtn.className = 'flex items-center p-3 hover:bg-green-50 cursor-pointer border-b border-gray-200 text-green-600';
    newBroadcastBtn.onclick = showNewBroadcastModal;
    
    newBroadcastBtn.innerHTML = `
        <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
            <i class="fas fa-bullhorn text-green-600"></i>
        </div>
        <div>
            <h3 class="font-medium">Nouvelle diffusion</h3>
            <p class="text-sm text-gray-600">Envoyer un message à plusieurs contacts</p>
        </div>
    `;
    
    listContainer.appendChild(newBroadcastBtn);
    replaceListContent(listContainer);
}

// Modal pour créer une nouvelle diffusion
function showNewBroadcastModal() {
    const modalHTML = `
        <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" id="modal">
            <div class="bg-white rounded-lg p-6 w-96 max-w-md mx-4">
                <h2 class="text-xl font-bold mb-4">Nouvelle diffusion</h2>
                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Message à diffuser</label>
                        <textarea id="broadcastMessage" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500" placeholder="Tapez votre message..."></textarea>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Sélectionner les destinataires</label>
                        <div class="space-y-2 max-h-40 overflow-y-auto border rounded p-2">
                            ${contacts.filter(c => !c.archive).map(contact => `
                                <label class="flex items-center hover:bg-gray-50 p-1 rounded">
                                    <input type="checkbox" value="${contact.id}" class="mr-2 broadcast-recipient-checkbox">
                                    <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-2 text-xs font-bold text-white">
                                        ${getInitiales(contact.nom)}
                                    </div>
                                    <span>${contact.nom}</span>
                                </label>
                            `).join('')}
                        </div>
                        <div class="mt-2">
                            <button type="button" id="selectAllBtn" class="text-sm text-blue-500 hover:text-blue-700">
                                Tout sélectionner
                            </button>
                            <button type="button" id="deselectAllBtn" class="text-sm text-gray-500 hover:text-gray-700 ml-4">
                                Tout désélectionner
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flex justify-end space-x-2 mt-6">
                    <button id="cancelBtn" class="px-4 py-2 text-gray-600 hover:text-gray-800">Annuler</button>
                    <button id="sendBtn" class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Envoyer</button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    setTimeout(() => {
        const cancelBtn = document.getElementById('cancelBtn');
        if (cancelBtn) {
            cancelBtn.addEventListener('click', closeModal);
        }

        const sendBtn = document.getElementById('sendBtn');
        if (sendBtn) {
            sendBtn.addEventListener('click', sendBroadcastMessage);
        }

        const selectAllBtn = document.getElementById('selectAllBtn');
        if (selectAllBtn) {
            selectAllBtn.addEventListener('click', () => {
                document.querySelectorAll('.broadcast-recipient-checkbox').forEach(cb => cb.checked = true);
            });
        }
        
        const deselectAllBtn = document.getElementById('deselectAllBtn');
        if (deselectAllBtn) {
            deselectAllBtn.addEventListener('click', () => {
                document.querySelectorAll('.broadcast-recipient-checkbox').forEach(cb => cb.checked = false);
            });
        }
    }, 100);
}

// Fonction pour envoyer le message de diffusion - VERSION CORRIGÉE
function sendBroadcastMessage() {
    console.log('Tentative d\'envoi du message de diffusion...'); // Debug
    
    const messageElement = document.getElementById('broadcastMessage');
    const message = messageElement ? messageElement.value.trim() : '';
    
    console.log('Message:', message); // Debug
    
    const selectedRecipients = Array.from(document.querySelectorAll('.broadcast-recipient-checkbox:checked'))
        .map(checkbox => {
            const contactId = parseInt(checkbox.value);
            return contacts.find(c => c.id === contactId);
        })
        .filter(contact => contact !== undefined);

    console.log('Destinataires sélectionnés:', selectedRecipients); // Debug

    if (!message) {
        showNotification('Veuillez saisir un message', 'error');
        return;
    }

    if (selectedRecipients.length === 0) {
        showNotification('Veuillez sélectionner au moins un destinataire', 'error');
        return;
    }

    const now = new Date();
    const heure = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

    // Envoyer le message à chaque destinataire
    selectedRecipients.forEach(contact => {
        if (!contact.messages) {
            contact.messages = [];
        }
        
        contact.messages.push({
            texte: message,
            heure: heure,
            envoye: true
        });

        // Mettre à jour le dernier message
        contact.dernierMessage = message;
        contact.heure = heure;
    });
    
    closeModal();
    showNotification(`Message envoyé à ${selectedRecipients.length} contact(s)`, 'success');
    
    if (currentView === 'messages') {
        renderContactsList();
    }
}
function envoyerMessage() {
    const input = document.getElementById('champMessage');
    const message = input.value.trim();
    if (!message) return;

    const now = new Date();
    const heure = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

    if (!selectedContact.messages) selectedContact.messages = [];
    
    selectedContact.messages.push({ 
        texte: message,
        heure: heure,
        envoye: true
    });

    selectedContact.dernierMessage = message;
    selectedContact.heure = heure;

    input.value = '';

    // Supprimer le brouillon après envoi
    delete drafts[selectedContact.id];
    const draftIndicator = document.getElementById('draftIndicator');
    if (draftIndicator) {
        draftIndicator.classList.add('hidden');
    }

    updateMessagesDisplay(selectedContact);

    if (currentView === 'messages') {
        renderContactsList();
    }
}
function updateMessagesDisplay(contact) {
    const messagesZone = document.getElementById('messagesZone');
    if (!messagesZone) return;

    const messagesHTML = (contact.messages || []).map(msg => `
        <div class="flex ${msg.envoye ? 'justify-end' : 'justify-start'}">
            <div class="${msg.envoye ? 'bg-green-500 text-white' : 'bg-white'} p-3 rounded-lg max-w-xs shadow">
                <p>${msg.texte}</p>
                <span class="text-xs ${msg.envoye ? 'text-green-100' : 'text-gray-500'} mt-1 block">${msg.heure}</span>
            </div>
        </div>
    `).join('');

    messagesZone.innerHTML = messagesHTML;

    messagesZone.scrollTop = messagesZone.scrollHeight;
}

function selectContact(contact) {
    selectedContact = contact;
    showChatInterface(contact);
}

function selectGroup(group) {
    selectedContact = group;
    showChatInterface(group, true);
}

function createArchivedContactElement(contact) {
    const div = document.createElement('div');
    div.className = 'flex items-center p-3 hover:bg-gray-100 border-b border-gray-200';

    div.innerHTML = `
        <div class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-3 font-bold text-lg text-white">
            ${getInitiales(contact.nom)}
        </div>
        <div class="flex-1 cursor-pointer">
            <div class="flex justify-between items-center">
                <h3 class="font-medium">${contact.nom}</h3>
                <span class="text-xs text-gray-500">${contact.heure}</span>
            </div>
            <p class="text-sm text-gray-600 truncate">${contact.dernierMessage}</p>
        </div>
        <div class="flex gap-2 ml-2">
            <button class="unarchive-btn w-8 h-8 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200" 
                title="Désarchiver">
                <i class="fas fa-undo text-green-600"></i>
            </button>
            <span class="text-xs text-orange-500 bg-orange-100 px-2 py-1 rounded-full">Archivé</span>
        </div>
    `;
    
    // Ajouter les event listeners après création
    const contactElement = div.querySelector('.cursor-pointer');
    contactElement.addEventListener('click', () => selectContact(contact));
    
    const unarchiveBtn = div.querySelector('.unarchive-btn');
    unarchiveBtn.addEventListener('click', () => desarchiverDiscussion(contact, false));
    
    return div;
}

// 5. Même correction pour createArchivedGroupElement
function createArchivedGroupElement(group) {
    const div = document.createElement('div');
    div.className = 'flex items-center p-3 hover:bg-gray-100 border-b border-gray-200';

    div.innerHTML = `
        <div class="w-12 h-12 bg-blue-300 rounded-full flex items-center justify-center mr-3">
            <i class="fas fa-users text-blue-600"></i>
        </div>
        <div class="flex-1 cursor-pointer">
            <div class="flex justify-between items-center">
                <h3 class="font-medium">${group.nom}</h3>
                <span class="text-xs text-gray-500">${group.heure}</span>
            </div>
            <p class="text-sm text-gray-600 truncate">${group.dernierMessage}</p>
            <p class="text-xs text-gray-500">${group.membres.length} membres</p>
        </div>
        <div class="flex gap-2 ml-2">
            <button class="unarchive-btn w-8 h-8 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200" 
                title="Désarchiver">
                <i class="fas fa-undo text-green-600"></i>
            </button>
            <span class="text-xs text-orange-500 bg-orange-100 px-2 py-1 rounded-full">Archivé</span>
        </div>
    `;
    
    // Ajouter les event listeners après création
    const groupElement = div.querySelector('.cursor-pointer');
    groupElement.addEventListener('click', () => selectGroup(group));
    
    const unarchiveBtn = div.querySelector('.unarchive-btn');
    unarchiveBtn.addEventListener('click', () => desarchiverDiscussion(group, true));
    
    return div;
}

// Vérifier que les classes CSS avec échappement fonctionnent
function updateActiveButton(activeClass) {
    document.querySelectorAll('[class*="w-[138px]"]').forEach(btn => {
        btn.classList.remove('bg-[#e0b44b]');
    });
    
    const activeBtn = document.querySelector(activeClass);
    if (activeBtn) {
        activeBtn.classList.add('bg-[#e0b44b]');
    }
}
// Fonction pour afficher le modal de gestion des membres (Admin seulement)
function showGroupMembersModal(group) {
    if (group.admin !== "Vous") {
        showNotification('Seul l\'administrateur peut gérer les membres du groupe', 'error');
        return;
    }

    const modal = createModal('Gérer les membres du groupe', `
        <div class="space-y-4">
            <h3 class="font-medium text-gray-700">Membres actuels :</h3>
            <div class="space-y-2 max-h-32 overflow-y-auto border rounded p-2" id="currentMembers">
                ${group.membres.map(membre => `
                    <div class="flex items-center justify-between bg-gray-50 p-2 rounded">
                        <span>${membre}</span>
                        <button class="text-red-500 hover:text-red-700 remove-member-btn" data-member="${membre}">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                `).join('')}
            </div>
            
            <h3 class="font-medium text-gray-700">Ajouter des membres :</h3>
            <div class="space-y-2 max-h-32 overflow-y-auto border rounded p-2">
                ${contacts
                    .filter(contact => !group.membres.includes(contact.nom))
                    .map(contact => `
                        <label class="flex items-center hover:bg-gray-50 p-1 rounded">
                            <input type="checkbox" value="${contact.nom}" class="mr-2 add-member-checkbox">
                            <span>${contact.nom}</span>
                        </label>
                    `).join('')}
            </div>
        </div>
    `, [
        {
            text: 'Annuler',
            class: 'px-4 py-2 text-gray-600 hover:text-gray-800',
            onClick: closeModal
        },
        {
            text: 'Sauvegarder',
            class: 'px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600',
            onClick: () => updateGroupMembers(group)
        }
    ]);

    showModal(modal, [
        {
            text: 'Annuler',
            class: 'px-4 py-2 text-gray-600 hover:text-gray-800',
            onClick: closeModal
        },
        {
            text: 'Sauvegarder',
            class: 'px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600',
            onClick: () => updateGroupMembers(group)
        }
    ]);

    // Ajouter les événements pour retirer des membres
    setTimeout(() => {
        document.querySelectorAll('.remove-member-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const memberName = this.getAttribute('data-member');
                removeMemberFromGroup(group, memberName);
            });
        });
    }, 100);
}

// Fonction pour retirer un membre du groupe
function removeMemberFromGroup(group, memberName) {
    if (group.membres.length <= 1) {
        showNotification('Un groupe doit avoir au moins un membre', 'error');
        return;
    }

    // Retirer le membre de la liste
    group.membres = group.membres.filter(membre => membre !== memberName);
    
    const currentMembersDiv = document.getElementById('currentMembers');
    if (currentMembersDiv) {
        currentMembersDiv.innerHTML = group.membres.map(membre => `
            <div class="flex items-center justify-between bg-gray-50 p-2 rounded">
                <span>${membre}</span>
                <button class="text-red-500 hover:text-red-700 remove-member-btn" data-member="${membre}">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `).join('');

        currentMembersDiv.querySelectorAll('.remove-member-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const memberName = this.getAttribute('data-member');
                removeMemberFromGroup(group, memberName);
            });
        });
    }

    showNotification(`${memberName} a été retiré du groupe`, 'success');
}

function updateGroupMembers(group) {
    const selectedMembers = Array.from(document.querySelectorAll('.add-member-checkbox:checked'))
        .map(checkbox => checkbox.value);

    selectedMembers.forEach(member => {
        if (!group.membres.includes(member)) {
            group.membres.push(member);
        }
    });

    if (currentView === 'groups') {
        renderGroupsList();
    }

    if (selectedContact && selectedContact.id === group.id) {
        showChatInterface(group, true);
    }

    closeModal();
    
    if (selectedMembers.length > 0) {
        showNotification(`${selectedMembers.length} membre(s) ajouté(s) au groupe`, 'success');
    }
}

// Objet pour stocker les brouillons
let drafts = {};

// Fonction pour sauvegarder automatiquement les brouillons
function saveDraft(contactId, message) {
    if (message.trim()) {
        drafts[contactId] = message;
    } else {
        delete drafts[contactId];
    }
}

// Fonction pour charger un brouillon
function loadDraft(contactId) {
    return drafts[contactId] || '';
}

// 3. FONCTION MODIFIÉE POUR AFFICHER L'INTERFACE DE CHAT (affichage limité des membres)
function showChatInterface(contact, isGroup = false) {
    let membresAffichage = '';
    let boutonVoirTous = '';
    
    if (isGroup) {
        const maxMembresAffiches = 3;
        const membresAffiches = contact.membres.slice(0, maxMembresAffiches);
        const membresRestants = contact.membres.length - maxMembresAffiches;
        
        membresAffichage = membresAffiches.join(', ');
        
        if (membresRestants > 0) {
            boutonVoirTous = `<button id="voirTousMembres" class="text-blue-600 hover:text-blue-800 text-sm ml-2">
                +${membresRestants} autre${membresRestants > 1 ? 's' : ''}
            </button>`;
        }
    }

    const chatContainer = discussionsContainer;
    chatContainer.innerHTML = `
        <div class="flex flex-col h-full">
            <!-- En-tête -->
            <div class="flex items-center justify-between p-4 border-b border-gray-300 bg-[#d5cebf]">
                <div class="flex items-center">
                    <div class="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                        <i class="fas fa-${isGroup ? 'users' : 'user'} text-gray-600"></i>
                    </div>
                    <div>
                        <h2 class="font-medium">${contact.nom}</h2>
                        ${isGroup ? `
                            <div class="flex items-center">
                                <p class="text-sm text-gray-600">${membresAffichage}</p>
                                ${boutonVoirTous}
                            </div>
                            <p class="text-xs text-blue-600 font-bold">${contact.admin === "Vous" ? "Vous : Admin du groupe" : ""}</p>
                        ` : `<p class="text-sm text-gray-600">En ligne</p>`}
                    </div>
                </div>
                <div class="flex gap-3 text-gray-600">
                    ${isGroup && contact.admin === "Vous" ? `
                        <button class="w-[30px] h-[30px] border-2 border-blue-500 rounded-full flex items-center justify-center" id="manageMembersBtn" title="Gérer les membres">
                            <i class="fas fa-users-cog text-blue-500"></i>
                        </button>
                        <button class="w-[30px] h-[30px] border-2 border-green-500 rounded-full flex items-center justify-center" id="addMemberBtn" title="Ajouter un membre">
                            <i class="fas fa-user-plus text-green-500"></i>
                        </button>
                    ` : ''}
                    <div class="w-[30px] h-[30px] border-2 border-orange-500 rounded-full text-center flex items-center justify-center">
                        <i class="fa-solid fa-delete-left text-orange-500"></i>
                    </div>
                    <button class="w-8 h-8 border-2 border-gray-500 rounded-full flex items-center justify-center">
                        <i class="fas fa-archive text-gray-500"></i>
                    </button>
                    <div class="w-[30px] h-[30px] border-2 border-black rounded-full text-center flex items-center justify-center">
                        <i class="fa-solid fa-square text-black"></i>
                    </div>
                    <div class="w-[30px] h-[30px] border-2 border-red-500 rounded-full text-center flex items-center justify-center">
                        <i class="fas fa-trash text-red-500"></i>
                    </div>
                </div>
            </div>
            <!-- Zone messages -->
            <div id="messagesZone" class="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                ${
                    (contact.messages || []).map(msg => `
                        <div class="flex ${msg.envoye ? 'justify-end' : 'justify-start'}">
                            <div class="${msg.envoye ? 'bg-green-500 text-white' : 'bg-white'} p-3 rounded-lg max-w-xs shadow">
                                <p>${msg.texte}</p>
                                <span class="text-xs ${msg.envoye ? 'text-green-100' : 'text-gray-500'} mt-1 block">${msg.heure}</span>
                            </div>
                        </div>
                    `).join('')
                }
            </div>
            <!-- Barre de saisie -->
            <form id="messageForm" class="p-4 bg-gray-100 border-t border-gray-300">
                <div class="flex items-center space-x-2">
                    <button type="button" class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                        <i class="fas fa-smile text-gray-600"></i>
                    </button>
                    <button type="button" class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                        <i class="fas fa-paperclip text-gray-600"></i>
                    </button>
                    
                    <div class="flex-1 relative">
                        <input type="text" id="champMessage" placeholder="Tapez un message..." 
                            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500" 
                            autocomplete="off" required>
                        <div id="draftIndicator" class="absolute -top-6 left-0 text-xs text-orange-500 hidden">
                            <i class="fas fa-edit"></i> Brouillon sauvegardé
                        </div>
                    </div>
                    <button type="submit"
                        class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 text-white">
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </form>
        </div>
    `;

    // Gestion des événements après création du DOM
    setTimeout(() => {
        // Bouton "Voir tous les membres"
        const voirTousMembresBtn = document.getElementById('voirTousMembres');
        if (voirTousMembresBtn && isGroup) {
            voirTousMembresBtn.addEventListener('click', () => showAllMembersModal(contact));
        }

        // Bouton "Ajouter un membre"
        const addMemberBtn = document.getElementById('addMemberBtn');
        if (addMemberBtn && isGroup) {
            addMemberBtn.addEventListener('click', () => showAddMemberModal(contact));
        }

        // Autres gestionnaires d'événements existants...
        const manageMembersBtn = document.getElementById('manageMembersBtn');
        if (manageMembersBtn && isGroup) {
            manageMembersBtn.addEventListener('click', () => showGroupMembersModal(contact));
        }

        const archiveBtn = chatContainer.querySelector('.fa-archive')?.closest('button');
        if (archiveBtn) {
            archiveBtn.onclick = () => archiverDiscussion(contact, isGroup);
        }
        
        // Gestion des brouillons et envoi de messages
        const messageInput = document.getElementById('champMessage');
        const draftText = loadDraft(contact.id);
        if (draftText) {
            messageInput.value = draftText;
            document.getElementById('draftIndicator').classList.remove('hidden');
        }

        let draftTimeout;
        messageInput.addEventListener('input', function() {
            const indicator = document.getElementById('draftIndicator');
            clearTimeout(draftTimeout);
            draftTimeout = setTimeout(() => {
                const message = this.value.trim();
                if (message) {
                    saveDraft(contact.id, message);
                    indicator.classList.remove('hidden');
                } else {
                    indicator.classList.add('hidden');
                }
            }, 2000);
        });

        const form = document.getElementById('messageForm');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            envoyerMessage();
            delete drafts[contact.id];
            document.getElementById('draftIndicator').classList.add('hidden');
        });
        
        // Scroll vers le bas
        const messagesZone = document.getElementById('messagesZone');
        messagesZone.scrollTop = messagesZone.scrollHeight;
    }, 0);
}
function showAllMembersModal(group) {
    const modal = createModal('Tous les membres du groupe', `
        <div class="space-y-3">
            <p class="text-sm text-gray-600">${group.membres.length} membre${group.membres.length > 1 ? 's' : ''} au total</p>
            <div class="max-h-60 overflow-y-auto space-y-2">
                ${group.membres.map(membre => `
                    <div class="flex items-center p-2 bg-gray-50 rounded">
                        <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-3 text-xs font-bold text-white">
                            ${getInitiales(membre)}
                        </div>
                        <span class="font-medium">${membre}</span>
                        ${membre === "Vous" || group.admin === membre ? 
                            `<span class="ml-auto text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Admin</span>` : 
                            ''
                        }
                    </div>
                `).join('')}
            </div>
        </div>
    `, [
        {
            text: 'Fermer',
            class: 'px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600',
            onClick: closeModal
        }
    ]);
    
    showModal(modal, [
        {
            text: 'Fermer',
            class: 'px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600',
            onClick: closeModal
        }
    ]);
}
// 5. MODAL POUR AJOUTER UN MEMBRE (existant ou nouveau)
// 2. CORRECTION DE LA FONCTION showAddMemberModal (remplacer la partie des boutons)
function showAddMemberModal(group) {
    const modalContent = `
        <div class="space-y-4">
            <!-- Onglets -->
            <div class="flex border-b">
                <button id="tabExistant" class="px-4 py-2 border-b-2 border-blue-500 text-blue-600 font-medium">
                    Contact existant
                </button>
                <button id="tabNouveauMembre" class="px-4 py-2 text-gray-600 hover:text-gray-800">
                    Nouveau membre
                </button>
            </div>

            <!-- Contenu contact existant -->
            <div id="contentExistant" class="space-y-3">
                <p class="text-sm text-gray-600">Sélectionner des contacts à ajouter :</p>
                <div class="max-h-40 overflow-y-auto border rounded p-2 space-y-2">
                    ${contacts
                        .filter(contact => !group.membres.some(membre => comparerNoms(membre, contact.nom)))
                        .map(contact => `
                            <label class="flex items-center hover:bg-gray-50 p-1 rounded">
                                <input type="checkbox" value="${contact.nom}" class="mr-2 add-existing-member-checkbox">
                                <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-2 text-xs font-bold text-white">
                                    ${getInitiales(contact.nom)}
                                </div>
                                <span>${contact.nom}</span>
                                <span class="ml-auto text-xs text-gray-500">${contact.telephone}</span>
                            </label>
                        `).join('')}
                </div>
            </div>

            <!-- Contenu nouveau membre -->
            <div id="contentNouveauMembre" class="space-y-3 hidden">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Nom du membre</label>
                    <input type="text" id="nouveauMembreNom" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500" placeholder="Nom du nouveau membre">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Numéro de téléphone (optionnel)</label>
                    <input type="tel" id="nouveauMembreTel" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500" placeholder="+221771234567">
                    <p class="text-xs text-gray-500 mt-1">Le membre sera ajouté au groupe. S'il a WhatsApp, il recevra une invitation.</p>
                </div>
            </div>
        </div>
    `;

    // Créer le modal avec le contenu
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
        <div class="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <h2 class="text-lg font-semibold mb-4">Ajouter un membre au groupe</h2>
            ${modalContent}
            <div class="flex justify-end space-x-2 mt-6">
                <button id="btnAnnuler" class="px-4 py-2 text-gray-600 hover:text-gray-800">
                    Annuler
                </button>
                <button id="btnAjouter" class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                    Ajouter
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Gestion des événements après création du DOM
    setTimeout(() => {
        // Boutons principaux
        const btnAnnuler = document.getElementById('btnAnnuler');
        const btnAjouter = document.getElementById('btnAjouter');
        
        btnAnnuler.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        btnAjouter.addEventListener('click', () => {
            addMembersToGroup(group, modal);
        });

        // Gestion des onglets
        const tabExistant = document.getElementById('tabExistant');
        const tabNouveauMembre = document.getElementById('tabNouveauMembre');
        const contentExistant = document.getElementById('contentExistant');
        const contentNouveauMembre = document.getElementById('contentNouveauMembre');

        tabExistant.addEventListener('click', () => {
            tabExistant.className = 'px-4 py-2 border-b-2 border-blue-500 text-blue-600 font-medium';
            tabNouveauMembre.className = 'px-4 py-2 text-gray-600 hover:text-gray-800';
            contentExistant.classList.remove('hidden');
            contentNouveauMembre.classList.add('hidden');
        });

        tabNouveauMembre.addEventListener('click', () => {
            tabNouveauMembre.className = 'px-4 py-2 border-b-2 border-blue-500 text-blue-600 font-medium';
            tabExistant.className = 'px-4 py-2 text-gray-600 hover:text-gray-800';
            contentNouveauMembre.classList.remove('hidden');
            contentExistant.classList.add('hidden');
        });
    }, 100);
}

// 6. FONCTION POUR AJOUTER DES MEMBRES AU GROUPE
function addMembersToGroup(group, modal) {
    const contentExistant = document.getElementById('contentExistant');
    const contentNouveauMembre = document.getElementById('contentNouveauMembre');
    
    let nouveauxMembres = [];
    
    // Vérifier quel onglet est actif
    if (!contentExistant.classList.contains('hidden')) {
        // Onglet contacts existants
        const selectedMembers = Array.from(document.querySelectorAll('.add-existing-member-checkbox:checked'))
            .map(checkbox => normaliserNom(checkbox.value));
        nouveauxMembres = selectedMembers;
        
    } else {
        // Onglet nouveau membre
        const nomNouveauMembre = document.getElementById('nouveauMembreNom').value.trim();
        const telNouveauMembre = document.getElementById('nouveauMembreTel').value.trim();
        
        if (!nomNouveauMembre) {
            showNotification('Veuillez saisir le nom du nouveau membre', 'error');
            return;
        }
        
        const nomNormalise = normaliserNom(nomNouveauMembre);
        
        // Vérifier si le nom existe déjà dans le groupe
        if (group.membres.some(membre => comparerNoms(membre, nomNormalise))) {
            showNotification('Ce membre est déjà dans le groupe', 'error');
            return;
        }
        
        // Si un numéro est fourni, créer un nouveau contact
        if (telNouveauMembre) {
            const phoneRegex = /^\+?\d{8,15}$/;
            if (!phoneRegex.test(telNouveauMembre)) {
                showNotification('Numéro de téléphone invalide', 'error');
                return;
            }
            
            // Vérifier si le contact existe déjà
            const contactExistant = contacts.find(c => c.telephone === telNouveauMembre);
            if (!contactExistant) {
                // Créer le nouveau contact
                const newContact = {
                    id: contacts.length + 1,
                    nom: nomNormalise,
                    telephone: telNouveauMembre,
                    dernierMessage: "Nouveau contact ajouté",
                    heure: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
                    nonLus: 0,
                    messages: []
                };
                
                contacts.push(newContact);
            }
        }
        
        nouveauxMembres = [nomNormalise];
    }
    
    if (nouveauxMembres.length === 0) {
        showNotification('Veuillez sélectionner au moins un membre à ajouter', 'error');
        return;
    }
    
    // Ajouter les nouveaux membres au groupe
    nouveauxMembres.forEach(membre => {
        // Vérifier si le membre n'existe pas déjà (comparaison insensible à la casse)
        if (!group.membres.some(membreExistant => comparerNoms(membreExistant, membre))) {
            group.membres.push(membre);
        }
    });
    
    // Mettre à jour l'affichage
    if (currentView === 'groups') {
        renderGroupsList();
    }
    
    if (selectedContact && selectedContact.id === group.id) {
        showChatInterface(group, true);
    }
    
    // Fermer le modal
    document.body.removeChild(modal);
    showNotification(`${nouveauxMembres.length} membre(s) ajouté(s) au groupe`, 'success');
}