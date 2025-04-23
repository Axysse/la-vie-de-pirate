let gameArea = document.getElementById("gameArea")
let pvIn = document.getElementById("pvIn")
// let driveIn = document.getElementById("driveIn")
let reputaionIn = document.getElementById("reputationIn")
let argentIn = document.getElementById("argentIn")

// const bttnRelations = document.getElementById("bttnRelations")

let PV = 20
pvIn.innerText = PV

// let drive = 10
// driveIn.innerText = drive

let title = "Frère de la côte"
titleIn.innerText = title

let reputation = 5
reputationIn.innerText = reputation

let argent = 50
argentIn.innerText = argent

// bttnRelations.addEventListener("click", () => {
//     relationBoard();
// })

function updateTitle() {
    if (reputation >= 80) {
        title = "Terreur des mers";
    } else if (reputation >= 50) {
        title = "Fils de la mer";
    } else if (reputation >= 20) {
        title = "Forban";
    } else {
        title = "Frère de la côte";
    }
    titleIn.innerText = title;
    console.log(`Le titre a été mis à jour : ${title}`);
}

// addReputation(10); // Augmente la réputation de 10


function addMoney(amount) {
    if (amount > 0) {
        argent = (argent + amount);
        argentIn.innerText = argent;
        console.log(`Vous avez gagné ${amount} pièces. Argent actuel : ${argent}`);
    } else {
        console.log("Le montant à ajouter doit être positif.");
    }
}

function subtractMoney(amount) {
    if (amount > 0 && argent >= amount) {
        argent -= amount;
        argentIn.innerText = argent;
        console.log(`Vous avez dépensé ${amount} pièces. Argent restant : ${argent}`);
    } else if (amount > 0 && argent < amount) {
        console.log("Vous n'avez pas assez d'argent.");
    } else {
        console.log("Le montant à retirer doit être positif.");
    }
}

// addMoney(20);         // Ajoute 20 pièces
// subtractMoney(15);    // Retire 15 pièces

// function increaseDrive(amount) {
//     drive += amount; // Augmente le drive de la valeur donnée
//     driveIn.innerText = drive; // Met à jour l'affichage
//     console.log(`Drive increased by ${amount}. Current drive: ${drive}`);
// }

// function decreaseDrive(amount) {
//     drive = Math.max(0, drive - amount); // Réduit le drive sans aller en dessous de 0
//     driveIn.innerText = drive; // Met à jour l'affichage
//     console.log(`Drive decreased by ${amount}. Current drive: ${drive}`);
// }

// increaseDrive(5); // Ajoute 5 au drive
// decreaseDrive(3); // Réduit de 3 le drive