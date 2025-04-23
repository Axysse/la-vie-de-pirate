function map(){
    gameArea.innerHTML = null

    const text = "Choisissez votre destination."
    const newText = document.createTextNode(text)
    gameArea.appendChild(newText)

    const img1 = document.createElement("img")
    img1.src = "./assets/img/location/map.jpg"
    img1.setAttribute("class", "imgDiv")
    gameArea.appendChild(img1)

    const bttn1 = document.createElement("button")
    const textBttn1 = document.createTextNode("Retour navire")
    bttn1.appendChild(textBttn1)

    // const bttn2 = document.createElement("button")
    // const textBttn2 = document.createTextNode("Voguer sur les mers!")
    // bttn2.appendChild(textBttn2)

   

    callChoice()
    const choiceDiv = document.querySelector(".choiceDiv");
    choiceDiv.appendChild(bttn1)
    // choiceDiv.appendChild(bttn2)
 

    bttn1.addEventListener("click", () =>{
        goToScreen(pont)
    })
    // bttn2.addEventListener("click", () =>{
    //     goToScreen(map)
    // })
}