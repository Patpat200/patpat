class CS2UtilityApp {
    constructor() {
        this.selectedMap = null;
        this.selectedType = null;
        this.selectedSide = null;

        
        this.initializeMapButtons();
        this.initializeSideButtons();
        this.initializeTypeButtons();
        this.renderNades();
    }
    
    initializeMapButtons() {
        const mapButtons = document.getElementById('mapButtons');
        nadeData.maps.forEach(map => {
            const button = document.createElement('button');
            button.textContent = map.charAt(0).toUpperCase() + map.slice(1);
            button.addEventListener('click', () => this.selectMap(map, button));
            mapButtons.appendChild(button);
        });
    }

    initializeTypeButtons() {
        const typeButtons = document.getElementById('typeButtons');
        nadeData.types.forEach(type => {
            const button = document.createElement('button');
            button.textContent = type.label;
            button.addEventListener('click', () => this.selectType(type.id, button));
            typeButtons.appendChild(button);
        });
    }

    initializeSideButtons() {
        const sideButtons = document.getElementById('sideButtons');
        const sides = [
            { id: 'T', label: 'Terrorists' },
            { id: 'CT', label: 'ConterTerrorists' }
        ];
    
        sides.forEach(side => {
            const button = document.createElement('button');
            button.textContent = side.label;
            button.addEventListener('click', () => this.selectSide(side.id, button));
            sideButtons.appendChild(button);
        });
    }
    

    selectMap(map, button) {
        this.selectedMap = this.selectedMap === map ? null : map;
        this.updateButtonStates('mapButtons', button);
        this.renderNades();
    }

    selectType(type, button) {
        this.selectedType = this.selectedType === type ? null : type;
        this.updateButtonStates('typeButtons', button);
        this.renderNades();
    }

    selectSide(side, button) {
        this.selectedSide = this.selectedSide === side ? null : side;
        this.updateButtonStates('sideButtons', button);
        this.renderNades();
    }
    


    updateButtonStates(containerId, clickedButton) {
        const container = document.getElementById(containerId);
        container.querySelectorAll('button').forEach(button => {
            button.classList.remove('active');
        });
        
        if (clickedButton && 
            ((containerId === 'mapButtons' && this.selectedMap) ||
             (containerId === 'typeButtons' && this.selectedType) ||
             (containerId === 'sideButtons' && this.selectedSide))) {
            clickedButton.classList.add('active');
        }
    }
    

    renderNades() {
        const nadeGrid = document.getElementById('nadeGrid');
        nadeGrid.innerHTML = '';
        
        const filteredNades = nadeData.nades.filter(nade => {
            if (this.selectedMap && nade.map !== this.selectedMap) return false;
            if (this.selectedType && nade.type !== this.selectedType) return false;
            if (this.selectedSide && nade.side !== this.selectedSide) return false;
        
            return true;
        });
        

        filteredNades.forEach(nade => {
            const template = document.getElementById('nadeCardTemplate');
            const card = template.content.cloneNode(true);

            // Mise à jour des éléments de la carte
            card.querySelector('.nade-image').src = nade.imageUrl;
            card.querySelector('.nade-image').alt = nade.title;
            card.querySelector('.nade-type').textContent = nade.type.toUpperCase();
            card.querySelector('.nade-side').textContent = nade.side;
            card.querySelector('.nade-title').textContent = nade.title;
            card.querySelector('.from').textContent = nade.position.from;
            card.querySelector('.to').textContent = nade.position.to;
            card.querySelector('.technique').textContent = nade.technique;
            card.querySelector('.difficulty').textContent = nade.difficulty;
            card.querySelector('.difficulty').textContent = nade.difficulty;
            card.querySelector('.difficulty').classList.add(`difficulty-${nade.difficulty}`);

            
            // Rendre la carte cliquable pour ouvrir la vidéo
            const nadeCard = card.querySelector('.nade-card');
            if (nade.videoUrl) {
                nadeCard.style.cursor = 'pointer';
                nadeCard.addEventListener('click', () => {
                    window.open(nade.videoUrl, '_blank');
                });
            }

            // Ajout des classes pour le style
            const typeSpan = card.querySelector('.nade-type');
            typeSpan.classList.add(`type-${nade.type}`);
            
            const sideSpan = card.querySelector('.nade-side');
            sideSpan.classList.add(`side-${nade.side.toLowerCase()}`);

            nadeGrid.appendChild(card);
        });
    }


    
}





document.getElementById('search-bar').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const nadeCards = document.querySelectorAll('.nade-card');

    nadeCards.forEach(card => {
        const title = card.querySelector('.nade-title').textContent.toLowerCase();
        
        if (title.includes(searchTerm)) {
            card.style.display = "block"; // Affiche la carte
        } else {
            card.style.display = "none"; // Cache la carte
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const discordBtn = document.getElementById("discordBtn");
    const discordOverlay = document.getElementById("discordOverlay");
    const closeBtn = document.querySelector(".close-btn");

    // 📌 Ouvrir l'overlay
    discordBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Empêche le lien de rediriger
        discordOverlay.style.display = "flex";
    });

    // 📌 Fermer l'overlay
    closeBtn.addEventListener("click", function() {
        discordOverlay.style.display = "none";
    });

    // 📌 Fermer l'overlay si on clique en dehors
    discordOverlay.addEventListener("click", function(event) {
        if (event.target === discordOverlay) {
            discordOverlay.style.display = "none";
        }
    });
});



document.getElementById('suggestion-button').addEventListener('click', function() {
    const userProposal = prompt("Your propositon (YT link for line up) :");
    if (userProposal) {
      sendToDiscord(userProposal);
    }
  });
  
  function sendToDiscord(message) {
    const webhookUrl = 'https://discord.com/api/webhooks/1344587321797906513/3eCeOdh5mJ8CSYzc14FvX7eH4xdaZeMiJ4P86EekeLnXjRMSAHn9_wVo6Feg9vmF79Au'; 
    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: message }),
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));
  }
  




// Initialisation de l'application
document.addEventListener('DOMContentLoaded', () => {
    new CS2UtilityApp();
});



