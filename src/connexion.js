  // Gestion de la connexion
        document.getElementById('loginForm').addEventListener('submit', function(e) 
        {
            e.preventDefault();
            
            const phone = document.getElementById('phone').value;
            const code = document.getElementById('code').value;
            
            // Validation simple (vous pouvez ajouter votre logique de validation ici)
            if (phone.length < 10) 
            {
                alert('Veuillez entrer un numéro de téléphone valide');
                return;
            }
            
            if (code.length !== 6) 
            {
                alert('Le code de vérification doit contenir 6 chiffres');
                return;
            }
            
            login(phone);
        });

        function login(phone) {
            // Masquer la page de connexion
            document.getElementById('loginPage').classList.add('hidden');
            
            // Afficher le menu principal
            document.getElementById('mainMenu').classList.remove('hidden');
            
            // Sauvegarder l'état de connexion (pour persister entre les rafraîchissements)
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('userPhone', phone);
        }

        function logout() {
            // Nettoyer les données de session
            sessionStorage.removeItem('isLoggedIn');
            sessionStorage.removeItem('userPhone');
            
            // Masquer le menu principal
            document.getElementById('mainMenu').classList.add('hidden');
            
            // Afficher la page de connexion
            document.getElementById('loginPage').classList.remove('hidden');
            
            // Réinitialiser le formulaire
            document.getElementById('loginForm').reset();
        }

        // Vérifier l'état de connexion au chargement de la page
        window.addEventListener('load', function() {
            const isLoggedIn = sessionStorage.getItem('isLoggedIn');
            const userPhone = sessionStorage.getItem('userPhone');
            
            if (isLoggedIn === 'true' && userPhone) {
                // L'utilisateur est déjà connecté, afficher le menu principal
                document.getElementById('loginPage').classList.add('hidden');
                document.getElementById('mainMenu').classList.remove('hidden');
            }
        });

        // Gestion des clics sur les éléments du menu latéral
        document.addEventListener('DOMContentLoaded', function() {
            // Ajouter les event listeners pour les éléments du menu latéral
            const menuItems = [
                { selector: '.message', name: 'Messages' },
                { selector: '.groupe', name: 'Groupes' },
                { selector: '.diffusion', name: 'Diffusions' },
                { selector: '.archive', name: 'Archives' },
                { selector: '.nouveau', name: 'Nouveau' }
            ];

            menuItems.forEach(item => {
                document.addEventListener('click', function(e) {
                    const element = e.target.closest(item.selector);
                    if (element) {
                        // Retirer la classe active de tous les éléments
                        document.querySelectorAll('.message, .groupe, .diffusion, .archive, .nouveau').forEach(el => {
                            el.classList.remove('bg-[#e0b44b]');
                        });
                        
                        // Ajouter la classe active à l'élément cliqué
                        element.classList.add('bg-[#e0b44b]');
                        
                        console.log(`Navigué vers: ${item.name}`);
                        // Ici vous pouvez ajouter votre logique de navigation spécifique
                    }
                });
            });
        });

        // Animation du code de vérification
        document.getElementById('code').addEventListener('input', function(e) {
            // Ne garder que les chiffres
            e.target.value = e.target.value.replace(/\D/g, '');
        });

        // Formatage automatique du numéro de téléphone
        document.getElementById('phone').addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value.startsWith('33')) {
                    value = '+' + value;
                } else if (value.startsWith('0')) {
                    value = '+33' + value.substring(1);
                }
            }
            e.target.value = value;
        });