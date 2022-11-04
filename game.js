// const prompt = require('prompt-sync')();

const button = document.getElementById("start")
const failureLetters = document.getElementById("wrong")
const choice = document.querySelector("input")
const knightsLetter = document.querySelector(".secret-word-container")
const endGameMessage = document.getElementById("end-game-message")

// 1. Criar array com as palavras
const words = ["Jabu", "Ichi", "Nachi", "Ban", "Geki", "June", "Marin", "Shaina", "Misty", "Moses", "Babel", "Asterion", "Jamian", "Algol", "Capella", "Algethi", "Dante", "Dio", "Sirius", "Ptolemeu", "Daidalos", "Orpheu", "Suikyo", "Mu", "Aldebaran", "Saga", "Kanon", "Deathmask", "Aiolia", "Shaka", "Dohko", "Milo", "Aiolos", "Shura", "Camus", "Aphrodite", "Siegfried", "Hagen", "Thor", "Alberich", "Fenrir", "Syd", "Bud", "Mime", "Seiya", "Shun", "Shiryu", "Hyoga", "Ikki"]
// 2. Sortear uma palavra aleatória dentro desse array

const randomWord = Math.floor(Math.random()*words.length)
console.log(words[randomWord])
const MAX_ERRORS = 6
let correctAttempts = 0
let failures = 0
const secretWord = words[randomWord].toUpperCase()

const correctLetters = []
const wrongLetters = []

function hasTheLetter (letter, secretWord) {
    // let letterFound = false
    letterFound = secretWord.includes(letter)
    if (letterFound) {
        for (let i = 0; i < secretWord.length; i++) {
            if (letter === secretWord[i]) {
                correctLetters[i] = letter
                correctAttempts++
                // knightsLetter.innerHTML = correctLetters.join(" ")
                endGame()
            } else if (!correctLetters[i]){ 
                correctLetters[i] = "_"
                }
        } 
        knightsLetter.innerHTML = correctLetters.join(" ")
    }
    
    if(!letterFound){
        wrongLetters.push(letter);
        failures++
        failureLetters.innerText = wrongLetters.join("")
        endGame()
    }
    // return letterFound
}

function playGame()  {
        let letter = choice.value.toUpperCase() 
        hasTheLetter(letter, secretWord)
        choice.value = ""
}

function endGame() {
    if (failures === 6) {
        endGameMessage.innerHTML = "Você perdeu!!!"
    } else if (correctLetters.join("") === secretWord) {
        endGameMessage.innerHTML = "Parabéns, você acertou!!!"
    }
  }

button.addEventListener('click', playGame)
    // let letter = prompt('DIGITE UMA LETRA');
//     playGame(letter)
//   }
// function showWrongLetters () {
//     }

// function showCorrectLetters() {

// }

// function desenharForca (){

// }



