const words = ['JAVASCRIPT', 'HTML', 'CSS', 'PYTHON', 'JAVA'];
const selectedWord = words[Math.floor(Math.random() * words.length)];
const wordLetters = selectedWord.split('');
const guessedLetters = new Set();

let incorrectGuesses = 0;
const maxIncorrectGuesses = 6;

function displayWord() {
    const wordElement = document.getElementById('word');
    const displayWord = wordLetters.map(letter => guessedLetters.has(letter) ? letter : '_').join(' ');
    wordElement.textContent = displayWord;
}

function displayLetters() {
    const lettersElement = document.getElementById('letters');
    lettersElement.innerHTML = '';
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (const letter of alphabet) {
        const letterButton = document.createElement('button');
        letterButton.textContent = letter;
        letterButton.classList.add('letter');
        letterButton.id = letter;
        letterButton.addEventListener('click', () => guessLetter(letter));
        lettersElement.appendChild(letterButton);
    }
}

function guessLetter(letter) {
    if (!guessedLetters.has(letter)) {
        guessedLetters.add(letter);
        if (!wordLetters.includes(letter)) {
            incorrectGuesses++;
            if (incorrectGuesses === maxIncorrectGuesses) {
                setTimeout(() => {
                    alert('Você perdeu! A palavra era: ' + selectedWord);
                    resetGame();
                }, 100);
            }
        }
        displayWord();
        checkWin();
        disableLetter(letter);
    }
}

function disableLetter(letter) {
    const letterButton = document.getElementById(letter);
    
    if(wordLetters.includes(letter)){
        letterButton.classList.add('correct');
    }else{
        letterButton.classList.add('guessed');
    }
}

function checkWin() {
    if (wordLetters.every(letter => guessedLetters.has(letter))) {
        setTimeout(() => {
            alert('Parabéns! Você venceu!');
            resetGame();
        }, 100);
    }
}

function resetGame() {
    guessedLetters.clear();
    incorrectGuesses = 0;
    const lettersElement = document.getElementById('letters');
    lettersElement.innerHTML = '';
    init();
}

function init() {
    displayWord();
    displayLetters();
}

init();