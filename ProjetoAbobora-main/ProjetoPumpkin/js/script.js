const OlhosImg = document.querySelector("#pumpkinsEyes")
const BocasImg = document.querySelector("#pumpkinsMounths")
const arrayOlhos = []
const arrayBocas = []

let bocaIndex = 1
let olhoIndex = 0

BocasImg.addEventListener('click', () => {
    if (bocaIndex != 3) {
        bocaIndex++
        BocasImg.src = `./Img/AboboraBoca${bocaIndex}.png`
    } else {
        BocasImg.src = `./Img/AboboraBoca${1}.png`
        bocaIndex = 1
    }
    
})

OlhosImg.addEventListener('click', () => {
    if (olhoIndex != 2) {
        olhoIndex++
        OlhosImg.src = `./Img/aboboraOlho${olhoIndex}.png`
    } else {
        OlhosImg.src = `./Img/aboboraOlho${0}.png`
        olhoIndex = 1
    }
})
