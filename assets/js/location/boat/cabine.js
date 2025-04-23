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

    callChoice()
    const choiceDiv = document.querySelector(".choiceDiv");
    choiceDiv.appendChild(bttn1)

    bttn1.addEventListener("click", () =>{
        goToScreen(pont)
    })

}