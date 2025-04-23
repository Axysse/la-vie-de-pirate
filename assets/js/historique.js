const navigationHistory = [];

function goToScreen(screenFunction) {
    // Ajoute l'écran actuel dans l'historique
    navigationHistory.length = 0;
    navigationHistory.push(screenFunction);

    // Charge l'écran demandé
    screenFunction();
}

function goBack() {
    if (navigationHistory.length > 0) {
        // Retire le dernier écran visité de l'historique
        const previousScreen = navigationHistory.pop();

        // Charge cet écran
        previousScreen();
    } else {
        console.log("Aucun écran précédent.");
    }
}