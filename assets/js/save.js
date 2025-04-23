function saveGame() {
    const gameState = {
        // relations: relations,
        reputation: reputation,
        title: title,
        argent: argent,
        // background: document.querySelector(".eventDiv img").src,
    };
    localStorage.setItem("gameSave", JSON.stringify(gameState));
    console.log("Partie sauvegardée !");
}

function loadGame() {
    const savedGame = localStorage.getItem("gameSave");
    if (savedGame) {
        const gameState = JSON.parse(savedGame);

        // Restaure l'état du jeu
        // relations = gameState.relations || [];
        // guntherEventProgression = gameState.guntherEventProgression
        // mayorQuest = gameState.mayorQuest
        reputation = gameState.reputation
        title = gameState.title
        argent = gameState.argent
        console.log("Partie chargée !");
        updateUI();
        startCabine();
    } else {
        console.log("Aucune sauvegarde trouvée.");
    }
}

function resetGame() {
    localStorage.removeItem("gameSave");
    console.log("Sauvegarde supprimée !");
}

function updateUI() {
    // Mettre à jour l'affichage des valeurs
    pvIn.innerText = PV; // Exemple : si PV est modifiable
    titleIn.innerText = title; // Met à jour le titre
    argentIn.innerText = argent; // Met à jour l'argent
    reputationIn.innerText = reputation;
}

const saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", saveGame);
const loadButton = document.getElementById("loadButton");
loadButton.addEventListener("click", loadGame);
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetGame);