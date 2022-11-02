const prompt = require('prompt-sync')();


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

document.addEventListener("keydown", (event) => {
    const code = event.keyCode
    if(isLetters(code)) {
        const letters = event.key
    }
}
)



function hasTheLetter (letter, secretWord) {
    let letterFound = false
    for (let i = 0; i < secretWord.length; i++) {
        if (letter === secretWord[i]) {
            console.log(letter === secretWord[i])
            letterFound = true 
            correctLetters[i] = letter
            correctAttempts++
        }
    }
    if(!letterFound){
        wrongLetters.push(letter);
        failures++
    }
    return letterFound
}

function playGame()  {
    
    do { 
        const letter = prompt('type a letter: ').toUpperCase();
        hasTheLetter(letter, secretWord)
        console.log("correctletters")
        console.log(correctLetters)
        console.log("wrongLetters")
        console.log(wrongLetters)
    } while (failures < MAX_ERRORS && correctAttempts < secretWord.length)


}

playGame()

function showWrongLetters () {
    const div = document.querySelector(".wrong-letters")
    div.innerHTML = "<h3>Letras erradas</h3>"
    wrongLetters.forEach((letter) => {
        div.innerHTML += `<span>${letter}</span>`
    });
}




// 3. Separar as letras da palavra
// 4. Fazer um teclado virtual
// 5. Colocar as letras usadas e erradas dentro de um array ou inutilizar o botão com a letra? 
// 6. Exibir as letras certas nas posições corretas
// 7. Para cada letra errada exibir um pedaço do bonequinho
// 8. Exibir mensagem de vitória ou derrota
// 9. Começar o jogo novamente

