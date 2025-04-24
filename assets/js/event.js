let events = [];

async function loadEvents() {
  try {
    const response = await fetch('./assets/json/events.json');
    events = await response.json();
    console.log("Événements chargés :", events);
  } catch (error) {
    console.error("Erreur de chargement des événements :", error);
  }
}

function triggerEvent(triggerName) {
    const matchedEvent = events.events.find(event => event.trigger === triggerName);
    if (!matchedEvent) {
      console.log("Aucun événement trouvé pour le déclencheur :", triggerName);
      return;
    }
  
    if (matchedEvent.type === "dialogue") {
        showDialogue(matchedEvent.dialogue);
      } else if (matchedEvent.type === "quest_start") {
        console.log("Quête commencée :", matchedEvent.quest.title);
        // Tu pourrais mettre à jour une interface ou ajouter la quête au journal ici
      } else if (matchedEvent.type === "item_found") {
        alert(matchedEvent.message);
        // Ajout à l'inventaire potentiel
      }
    }

    function showDialogue(dialogues) {
        const box = document.getElementById("dialogueBox");
        let index = 0;
        box.innerHTML = dialogues[index].text;
      
        box.addEventListener("click", function nextLine() {
          index++;
          if (index < dialogues.length) {
            box.innerHTML = dialogues[index].text;
          } else {
            box.innerHTML = "";
            box.removeEventListener("click", nextLine);
          }
        });
      } 

      loadEvents();

    //   EXEMPLE utiisation

    //   document.getElementById("enterVillageBtn").addEventListener("click", () => {
    //     triggerEvent("enter_village");
    //   });