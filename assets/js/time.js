const periodes = ["Aube", "Matin", "Midi", "Après-midi", "Soir", "Nuit"];

let periodeActuelle = 0;

const periodeSpan = document.getElementById("periode");

function time() {
    // Avancer à la période suivante
    periodeActuelle = (periodeActuelle + 1) % periodes.length; // Repart à zéro après "Nuit"
    console.log(`Période actuelle : ${periodes[periodeActuelle]}`);

    periodeSpan.textContent = periodes[periodeActuelle];
}

function aube() {
    periodeActuelle = 0; // Matin correspond à l'index 0
    periodeSpan.textContent = periodes[periodeActuelle];
    console.log("Forcé : Passage à la période 'Aube'");
}