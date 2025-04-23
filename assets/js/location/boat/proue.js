function proue(){
    gameArea.innerHTML = null

    const text = "Il fait beau."
    const newText = document.createTextNode(text)
    gameArea.appendChild(newText)

    const img1 = document.createElement("img")
    img1.src = "./assets/img/location/proue.jpg"
    img1.setAttribute("class", "imgDiv")
    gameArea.appendChild(img1)

    const bttn1 = document.createElement("button")
    const textBttn1 = document.createTextNode("Aller au pont")
    bttn1.appendChild(textBttn1)

    callChoice()
    const choiceDiv = document.querySelector(".choiceDiv");
    choiceDiv.appendChild(bttn1)

    bttn1.addEventListener("click", () =>{
        goToScreen(pont)
    })
}