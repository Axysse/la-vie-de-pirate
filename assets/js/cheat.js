const buttonUpRep = document.getElementById("cheatRepUp")

function addReputation() {
    if(reputation == 100){
        reputation == 100
    } else{
        reputation = (reputation + 1)
        if (reputationIn) {
        reputationIn.innerText = reputation;
        }
        updateTitle();
        console.log(`La réputation a été mise à jour : ${reputation}`); 
    }

}

buttonUpRep.addEventListener("click", () => {
    addReputation()
})