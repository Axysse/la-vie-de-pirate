function callEvent(){
    const eventDiv = document.createElement("div")
    eventDiv.setAttribute("class", "eventDiv")
    gameArea.appendChild(eventDiv)
}

function callChoice(){
    const choiceDiv = document.createElement("div")
    choiceDiv.setAttribute("class", "choiceDiv")
    gameArea.appendChild(choiceDiv)
}

function callDialog(){
    const dialogDiv = document.createElement("div")
    dialogDiv.setAttribute("class", "dialogDiv")
    gameArea.appendChild(dialogDiv)
}

function cleanDialog(dialogDiv){
    dialogDiv.innerHTML = null
}

function cleanChoice(choiceDiv){
    choiceDiv.innerHTML = null
}