// utils.js - Fonctions utilitaires communes

// Fonction pour afficher les notifications
export function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 
    ${
        type === 'success' ? 'bg-green-500 text-white' : 
        type === 'error' ? 'bg-red-500 text-white' : 
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Fonction pour créer un modal
export function createModal(title, content, buttons = []) {
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

// Fonction pour afficher un modal
export function showModal(modalHTML, buttons = []) {
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    // Ajoute les listeners JS pour chaque bouton
    buttons.forEach((btn, i) => {
        const el = document.querySelectorAll('#modal button')[i];
        if (el && typeof btn.onClick === 'function') {
            el.onclick = btn.onClick;
        }
    });
}

// Fonction pour fermer un modal
export function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.remove();
    }
}

// Fonction pour remplacer le contenu d'une liste
export function replaceListContent(newContent) {
    const menuContainer = document.querySelector('.w-1\\/3');
    const existingList = menuContainer.querySelector('.overflow-y-auto');
    if (existingList) {
        existingList.remove();
    }
    menuContainer.appendChild(newContent);
}