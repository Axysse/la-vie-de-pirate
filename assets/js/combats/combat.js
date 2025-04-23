const attacks = [
    { name: "Insulte grossière", damage: 5, image: "./assets/img/combats/insulte.jpg" },
    { name: "P'tit coup de schlass'", damage: 8, image: "./assets/img/combats/slash.jpg" },
];

function combat(enemyName){
    const enemy = enemies.find(e => e.name === enemyName);
    if (!enemy) {
        console.error(`Ennemi "${enemyName}" non trouvé !`);
        return;
    }

    let playerHP = PV; // Points de vie du joueur
    let enemyHP = enemy.hp; // Points de vie de l'ennemi
    let isPlayerTurn = true; // Indique si c'est le tour du joueur

    function updateDisplay() {
        gameArea.innerHTML = "";

        // Afficher l'image de l'ennemi
        const enemyImage = document.createElement("img");
        enemyImage.src = enemy.image;
        enemyImage.alt = enemy.name;
        enemyImage.classList.add("enemy-image");

        const enemyHPDisplay = document.createElement("p");
        enemyHPDisplay.textContent = `PV Ennemi (${enemy.name}): ${enemyHP}`;
        enemyHPDisplay.classList.add("enemy-hp");

        const playerHPDisplay = document.createElement("p");
        playerHPDisplay.textContent = `PV Joueur: ${playerHP}`;
        playerHPDisplay.classList.add("player-hp");

        gameArea.appendChild(enemyImage);
        gameArea.appendChild(enemyHPDisplay);
        gameArea.appendChild(playerHPDisplay);
    }

    function updateEnemyDisplay() {
        gameArea.innerHTML = ""; // Réinitialise la zone de jeu
        const enemyImage = document.createElement("img");
        enemyImage.src = enemy.image;
        enemyImage.alt = enemy.name;
        enemyImage.classList.add("enemy-image"); // Classe pour styliser
        gameArea.appendChild(enemyImage);
    }

    function playerTurn() {
        updateDisplay();

        // Conteneur des choix d'attaques
        const attackContainer = document.createElement("div");
        attackContainer.classList.add("attack-container");

        attacks.forEach(attack => {
            const attackButton = document.createElement("button");
            attackButton.textContent = attack.name;
            attackButton.addEventListener("click", () => {
                enemyHP -= attack.damage;
                console.log(`Vous infligez ${attack.damage} dégâts à ${enemy.name}.`);
                if (enemyHP <= 0) {
                    endCombat(true, enemy);
                } else {
                    isPlayerTurn = false;
                    enemyTurn();
                }
            });
            attackContainer.appendChild(attackButton);
        });

        gameArea.appendChild(attackContainer);
    }

    function enemyTurn() {
        // Sélectionne une attaque aléatoire
        const attack = enemy.attacks[Math.floor(Math.random() * enemy.attacks.length)];
    
        // Mise à jour de l'image d'attaque
        gameArea.innerHTML = ""; // Efface la zone de jeu
        const attackImage = document.createElement("img");
        attackImage.src = attack.image;
        attackImage.alt = attack.name;
        attackImage.classList.add("attack-image"); // Ajoute une classe pour le style
        gameArea.appendChild(attackImage);
    
        // Délai pour montrer l'attaque, puis revenir à l'image de l'ennemi
        setTimeout(() => {
            PV -= attack.damage;
            pvIn.innerText = PV;
    
            // Vérifie si le joueur est K.O.
            if (PV <= 0) {
                gameArea.innerHTML = `<h2>Tu as été vaincu !</h2>`;
                return;
            }
                   // Retour à l'image de l'ennemi
                   updateEnemyDisplay();
                   playerTurn(); // Retourne au tour du joueur
               }, 3000); // Affiche l'attaque pendant 2 secondes
           
               console.log(`L'ennemi utilise ${attack.name}, infligeant ${attack.damage} dégâts.`);
           }

           
    function endCombat(playerWon, enemy) {
        gameArea.innerHTML = "";
        const endMessage = document.createElement("p");
        endMessage.textContent = playerWon 
            ? `Félicitations ! Vous avez vaincu ${enemy.name}.` 
            : `Vous avez été vaincu par ${enemy.name}.`;
        gameArea.appendChild(endMessage);

        const backButton = document.createElement("button");
        backButton.textContent = "Victoire!";
        backButton.addEventListener("click", () => {
                goToScreen(victorySuccube); // Remplacer par la fonction pour revenir au menu principal 
        });
        gameArea.appendChild(backButton);
    }

    function executePlayerAttack(attack) {
        // Efface la zone de jeu pour afficher l'attaque du joueur
        gameArea.innerHTML = "";
    
        // Crée et affiche l'image de l'attaque du joueur
        const attackImage = document.createElement("img");
        attackImage.src = attack.image;
        attackImage.alt = attack.name;
        attackImage.classList.add("attack-image");
        gameArea.appendChild(attackImage);
    
        console.log(`Tu utilises ${attack.name}, infligeant ${attack.damage} dégâts.`);
    
        // Délai pour afficher l'animation d'attaque du joueur
        setTimeout(() => {
            // Réduit les PV de l'ennemi
            currentEnemy.hp -= attack.damage;
    
            // Vérifie si l'ennemi est K.O.
            if (currentEnemy.hp <= 0) {
                gameArea.innerHTML = `<h2>${currentEnemy.name} a été vaincu !</h2>`;
                return;
            }
    
            // Retour à l'image de l'ennemi
            updateEnemyDisplay();
    
            // Passe au tour de l'ennemi après un délai
            setTimeout(() => {
                enemyTurn();
            }, 1500); // Temps d'attente avant que l'ennemi attaque
        }, 2000); // Temps pendant lequel l'animation d'attaque du joueur est visible
    }

        // Commencer avec le tour du joueur
        updateDisplay();
        playerTurn();
}