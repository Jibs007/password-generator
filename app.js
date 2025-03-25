let outputOne = document.getElementById("output-one")
let outputTwo = document.getElementById("output-two")

const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c",
    "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
    "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8",
    "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+",
    "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

function getRandomCharacter() {
    let randomStr = Math.floor(Math.random() * characters.length)
    return characters[randomStr]
}

function generateRandomPasswordOne() {
    let password = ""
    for (let i = 0; i < 15; i++) {
        password += getRandomCharacter()
    }
    return password
}

function generateRandomPasswordTwo() {
    let password = ""
    for (let i = 0; i < 15; i++) {
        password += getRandomCharacter()
    }
    return password
}

function generate() {
    outputOne.textContent = generateRandomPasswordOne()
    outputTwo.textContent = generateRandomPasswordTwo()

}
