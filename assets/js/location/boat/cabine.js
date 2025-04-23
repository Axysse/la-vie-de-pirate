function startCabine(){
    gameArea.innerHTML = null

    const text = "Vous êtes dans la cabine du capitaine."
    const newText = document.createTextNode(text)
    gameArea.appendChild(newText)

    const img1 = document.createElement("img")
    img1.src = "./assets/img/location/cabine.jpg"
    img1.setAttribute("class", "imgDiv")
    gameArea.appendChild(img1)

    const bttn1 = document.createElement("button")
    const textBttn1 = document.createTextNode("Aller sur le pont")
    bttn1.appendChild(textBttn1)

    const bttn2 = document.createElement("button")
    const textBttn2 = document.createTextNode("Attendre")
    bttn2.appendChild(textBttn2)

    const bttn3 = document.createElement("button")
    const textBttn3 = document.createTextNode("Dormir jusqu'à l'aube")
    bttn3.appendChild(textBttn3)

    callChoice()
    const choiceDiv = document.querySelector(".choiceDiv");
    choiceDiv.appendChild(bttn1)
    choiceDiv.appendChild(bttn2)
    choiceDiv.appendChild(bttn3)

    bttn1.addEventListener("click", () =>{
        goToScreen(pont)
    })

    bttn2.addEventListener("click", () =>{
        time()
    })

    bttn3.addEventListener("click", () =>{
        aube()
    })

}