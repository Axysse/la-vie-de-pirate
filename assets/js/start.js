// const gameArea = document.getElementById("gameArea")



let startButton = document.createElement("button")
startButton.innerText = "A l'abordage"
startButton.className = "px-8 py-2 border border-2 bg-red-600 text-xl font-semibold mt-64 m-auto"

gameArea.appendChild(startButton)

startButton.addEventListener("click", () => {
    goToScreen(startCabine)
})