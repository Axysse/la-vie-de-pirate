function pont(){
    gameArea.innerHTML = null

    const text = "Vous êtes sur le pont. Votre équipage branle rien."
    const newText = document.createTextNode(text)
    gameArea.appendChild(newText)

    const img1 = document.createElement("img")
    img1.src = "./assets/img/location/pont.jpg"
    img1.setAttribute("class", "imgDiv")
    gameArea.appendChild(img1)

    const bttn1 = document.createElement("button")
    const textBttn1 = document.createTextNode("Aller dans la cabine")
    bttn1.appendChild(textBttn1)

    const bttn2 = document.createElement("button")
    const textBttn2 = document.createTextNode("Aller à la proue")
    bttn2.appendChild(textBttn2)

    const bttn3 = document.createElement("button")
    const textBttn3 = document.createTextNode("Aller à la barre")
    bttn3.appendChild(textBttn3)

    const bttn4 = document.createElement("button")
    const textBttn4 = document.createTextNode("Agresser gratuitement un de vos matelots squelette")
    bttn4.appendChild(textBttn4)

    callChoice()
    const choiceDiv = document.querySelector(".choiceDiv");
    choiceDiv.appendChild(bttn1)
    choiceDiv.appendChild(bttn2)
    choiceDiv.appendChild(bttn3)
    choiceDiv.appendChild(bttn4)

    bttn1.addEventListener("click", () =>{
        goToScreen(startCabine)
    })
    bttn2.addEventListener("click", () =>{
        goToScreen(proue)
    })
    bttn3.addEventListener("click", () =>{
        goToScreen(barre)
    })
    bttn4.addEventListener("click", () =>{
        combat("Larbin squelette")
    })
}