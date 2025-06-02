import { contacts, groups, users } from './data.js';
import { messageError, messageSucces, normalizePhone } from './validator.js'

let currentView ='';
let selectedContact = null;


// Elements DOM
const menuContainer = document.querySelector('.w-1\\/3'); // cible le mmenu de gauche
const discussionsContainer = document.querySelector('.flex-1');
const searchInput = document.getElementById('searchInput');

// Initialisation
document.addEventListener('DOMContentLoaded', function() 
{
    initializeEventListeners(); // ajoute les evenements
    renderContactsList(); // affiche la liste initiale des contaxts
});

// Event Listeners
function initializeEventListeners() {
    // chargement des vues depuis le sidebar
    document.querySelector('.message').addEventListener('click', () => switchView('messages'));
    document.querySelector('.groupe').addEventListener('click', () => switchView('groups'));
    document.querySelector('.diffusion').addEventListener('click', () => switchView('broadcasts'));
    document.querySelector('.archive').addEventListener('click', () => switchView('archives'));
    document.querySelector('.nouveau').addEventListener('click', () => showNewContactModal());

    // pour la recherche
    searchInput.addEventListener('input', handleSearch);

    //  envoie de message
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

// Add new group
function addNewGroup() {
    const groupName = document.getElementById('groupName').value.trim();
    const selectedMembers = Array.from(document.querySelectorAll('.group-member-checkbox:checked'))
        .map(checkbox => contacts.find(c => c.id == checkbox.value)?.nom)
        .filter(Boolean);

    // Gérer les doublons de nom de groupe
    let finalGroupName = groupName;
    let count = 1;
    while (groups.some(g => g.nom === finalGroupName)) {
        count++;
        finalGroupName = `${groupName}${count}`;
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
        
        // Afficher les groupes archivés
        groupesArchives.forEach(group => {
            const groupElement = createArchivedGroupElement(group);
            listContainer.appendChild(groupElement);
        });
    }
    
    replaceListContent(listContainer);
}

// Modifier les fonctions de rendu pour exclure les éléments archivés
function renderContactsList() {
    const listContainer = createListContainer();
    
    // Filtrer les contacts non archivés
    const contactsNonArchives = contacts.filter(contact => !contact.archive);
    
    contactsNonArchives.forEach(contact => {
        const contactElement = createContactElement(contact);
        listContainer.appendChild(contactElement);
    });

    // Add "New Contact" button
    const newContactBtn = createNewContactButton();
    listContainer.appendChild(newContactBtn);

    replaceListContent(listContainer);
}

function renderGroupsList() {
    const listContainer = createListContainer();
    
    // Filtrer les groupes non archivés
    const groupesNonArchives = groups.filter(group => !group.archive);
    
    groupesNonArchives.forEach(group => {
        const groupElement = createGroupElement(group);
        listContainer.appendChild(groupElement);
    });

    // Add "New Group" button
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
// 1. Ajouter les fonctions manquantes

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
    // Implémentation à ajouter selon vos besoins
}

function createBroadcastList() {
    console.log('Création d\'une liste de diffusion...');
    // Implémentation à ajouter selon vos besoins
}
// Corriger la fonction renderDiffusion
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

    // Insérer le modal dans le DOM
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Attacher les événements APRÈS que le modal soit dans le DOM
    setTimeout(() => {
        // Bouton Annuler
        const cancelBtn = document.getElementById('cancelBtn');
        if (cancelBtn) {
            cancelBtn.addEventListener('click', closeModal);
        }

        // Bouton Envoyer
        const sendBtn = document.getElementById('sendBtn');
        if (sendBtn) {
            sendBtn.addEventListener('click', sendBroadcastMessage);
        }

        // Boutons sélectionner/désélectionner tout
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

    console.log('Messages envoyés avec succès'); // Debug
    
    closeModal();
    showNotification(`Message envoyé à ${selectedRecipients.length} contact(s)`, 'success');
    
    // Actualiser l'affichage si on est dans la vue messages
    if (currentView === 'messages') {
        renderContactsList();
    }
}
// 2. Corriger la fonction envoyerMessage pour la cohérence des propriétés
// function envoyerMessage() {
//     const input = document.getElementById('champMessage');
//     const message = input.value.trim();
//     if (!message) return;

//     const now = new Date();
//     const heure = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

//     // Utiliser les mêmes noms de propriétés que dans l'affichage
//     if (!selectedContact.messages) selectedContact.messages = [];
//     selectedContact.messages.push({ 
//         texte: message, // Changé de 'text' à 'texte'
//         heure: heure,   // Cohérent
//         envoye: true    // Changé de 'fromMe' à 'envoye'
//     });

//     // Mettre à jour le dernier message du contact
//     selectedContact.dernierMessage = message;
//     selectedContact.heure = heure;

//     showChatInterface(selectedContact, !!selectedContact.membres); // Changé 'members' à 'membres'
//     input.value = '';
// }
// Fonction corrigée pour envoyer un message et mettre à jour l'affichage
function envoyerMessage() {
    const input = document.getElementById('champMessage');
    const message = input.value.trim();
    if (!message) return;

    const now = new Date();
    const heure = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

    // Initialiser le tableau de messages si nécessaire
    if (!selectedContact.messages) selectedContact.messages = [];
    
    // Ajouter le nouveau message
    selectedContact.messages.push({ 
        texte: message,
        heure: heure,
        envoye: true
    });

    // Mettre à jour le dernier message du contact
    selectedContact.dernierMessage = message;
    selectedContact.heure = heure;

    // Vider le champ de saisie
    input.value = '';

    // Supprimer le brouillon après envoi
    delete drafts[selectedContact.id];
    const draftIndicator = document.getElementById('draftIndicator');
    if (draftIndicator) {
        draftIndicator.classList.add('hidden');
    }

    // Mettre à jour uniquement la zone des messages au lieu de recharger toute l'interface
    updateMessagesDisplay(selectedContact);

    // Mettre à jour la liste des contacts si on est dans la vue messages
    if (currentView === 'messages') {
        renderContactsList();
    }
}
function updateMessagesDisplay(contact) {
    const messagesZone = document.getElementById('messagesZone');
    if (!messagesZone) return;

    // Générer le HTML des messages
    const messagesHTML = (contact.messages || []).map(msg => `
        <div class="flex ${msg.envoye ? 'justify-end' : 'justify-start'}">
            <div class="${msg.envoye ? 'bg-green-500 text-white' : 'bg-white'} p-3 rounded-lg max-w-xs shadow">
                <p>${msg.texte}</p>
                <span class="text-xs ${msg.envoye ? 'text-green-100' : 'text-gray-500'} mt-1 block">${msg.heure}</span>
            </div>
        </div>
    `).join('');

    // Mettre à jour le contenu
    messagesZone.innerHTML = messagesHTML;

    // Scroll automatique vers le bas pour voir le nouveau message
    messagesZone.scrollTop = messagesZone.scrollHeight;
}


// Modifier la fonction showChatInterface pour ajouter un bouton de gestion des membres


// 3. Corriger la fonction selectContact pour éviter les problèmes avec onclick
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
    // Remplacer les sélecteurs problématiques
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
    
    // Mettre à jour l'affichage du modal
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

        // Réattacher les événements
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
    // Récupérer les nouveaux membres sélectionnés
    const selectedMembers = Array.from(document.querySelectorAll('.add-member-checkbox:checked'))
        .map(checkbox => checkbox.value);

    // Ajouter les nouveaux membres
    selectedMembers.forEach(member => {
        if (!group.membres.includes(member)) {
            group.membres.push(member);
        }
    });

    // Mettre à jour l'affichage si on est dans la vue groupes
    if (currentView === 'groups') {
        renderGroupsList();
    }

    // Si le groupe est actuellement sélectionné, mettre à jour l'interface de chat
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

// Modifier la fonction showChatInterface pour inclure la gestion des brouillons
function showChatInterface(contact, isGroup = false) {
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
                        ${isGroup ? `<p class="text-sm text-gray-600">${contact.membres.join(', ')}</p>
                        <p class="text-xs text-blue-600 font-bold">${contact.admin === "Vous" ? "Vous : Admin du groupe" : ""}</p>` 
                        : `<p class="text-sm text-gray-600">En ligne</p>`}
                    </div>
                </div>
                <div class="flex gap-3 text-gray-600">
                    ${isGroup && contact.admin === "Vous" ? `
                        <button class="w-[30px] h-[30px] border-2 border-blue-500 rounded-full flex items-center justify-center" id="manageMembersBtn" title="Gérer les membres">
                            <i class="fas fa-users-cog text-blue-500"></i>
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

    // Charger le brouillon existant
    const messageInput = document.getElementById('champMessage');
    const draftText = loadDraft(contact.id);
    if (draftText) {
        messageInput.value = draftText;
        document.getElementById('draftIndicator').classList.remove('hidden');
    }

    // Sauvegarde automatique du brouillon
    let draftTimeout;
    messageInput.addEventListener('input', function() {
        const indicator = document.getElementById('draftIndicator');
        
        // Effacer le timeout précédent
        clearTimeout(draftTimeout);
        
        // Sauvegarder après 1 seconde d'inactivité
        draftTimeout = setTimeout(() => {
            const message = this.value.trim();
            if (message) {
                saveDraft(contact.id, message);
                indicator.classList.remove('hidden');
            } else {
                indicator.classList.add('hidden');
            }
        }, 1000);
    });

    // Ajout du gestionnaire d'envoi de message
    const form = document.getElementById('messageForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        envoyerMessage();
        // Supprimer le brouillon après envoi
        delete drafts[contact.id];
        document.getElementById('draftIndicator').classList.add('hidden');
    });

    // Autres gestionnaires d'événements...
    setTimeout(() => {
        const manageMembersBtn = document.getElementById('manageMembersBtn');
        if (manageMembersBtn && isGroup) {
            manageMembersBtn.addEventListener('click', () => showGroupMembersModal(contact));
        }

        const archiveBtn = chatContainer.querySelector('.fa-archive')?.closest('button');
        if (archiveBtn) {
            archiveBtn.onclick = () => archiverDiscussion(contact, isGroup);
        }
        
        // Scroll vers le bas
        const messagesZone = document.getElementById('messagesZone');
        messagesZone.scrollTop = messagesZone.scrollHeight;
    }, 0);
}

