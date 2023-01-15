//references to HTML elements
const questionElement = document.getElementById('question');
const wordInputElement = document.getElementById('word-input');
wordInputElement.addEventListener("input", checkWord);
const remainedLettersElement = document.getElementById('letters-remained');
const letterInputElement = document.getElementById('letter-input');
const wordElement = document.querySelector(".word");
const resultMessage = document.getElementById("result-message");
const playAgain = document.getElementById("play-again");
let wordLettersElement;
const questionsWords = [["What is the capital of USA?", "washington"], 
    ["What is the capital of France?", "paris"],
    ["What is the capital of Germany?", "berlin"],
    ["What is the capital of Italy?", "rome"],
    ["What is the capital of Spain?", "madrid"],
    ["What is the capital of China?", "beijing"],
    ["What is the capital of Japan?", "tokyo"],
    ["What is the capital of Russia?", "moscow"],
    ["What is the capital of Australia?", "canberra"],
    ["What is the capital of Canada?", "ottawa"]
];
let currentIndex = 0;
let initialLettersNumber;
let remainedLettersNumber;
let score = 0;
let wrongGuesses = 0;
let usedLetters = [];
let answer = '';

window.onload = startGame;

function startGame() {
    let wordInput = wordInputElement.value = '';
    wordInputElement.addEventListener("input", checkWord);
    wordInputElement.readOnly = true;
    letterInputElement.readOnly = false;
    letterInputElement.value = '';
    questionElement.innerHTML = questionsWords[currentIndex][0];
    answer = questionsWords[currentIndex][1];
    playAgain.style.display = 'none';
    resultMessage.innerHTML = '';
    wordElement.innerHTML = getWordDivs();
    initialLettersNumber = questionsWords[currentIndex][1].length;
    remainedLettersNumber = initialLettersNumber;
    remainedLettersElement.innerHTML = remainedLettersNumber;
}

function getWordDivs() {
  let word = questionsWords[currentIndex][1];
  let wordDivs = '';
  for (let i = 0; i < word.length; i++) {
    wordDivs += `<div class="word-letter" id="word-letter-${i}"></div>`;
  }
  return wordDivs;
}

function checkWord() {
    let word = wordInputElement.value.toLowerCase();
    if (word === questionsWords[currentIndex][1].toLowerCase()) {
        resultMessage.innerHTML = 'Congratulations! You have successfully guessed the word.';
        for (let i = 0; i < word.length; i++) {
            let letterElement = document.getElementById(`word-letter-${i}`);
            letterElement.innerHTML = word[i];
            letterElement.style.backgroundColor = 'green';
        }
        playAgain.style.display = 'block';
        // increment current index to move on to the next question
        currentIndex++; 
        if(currentIndex < questionsWords.length) {
            startGame();
        } else {
            resultMessage.innerHTML = 'Congratulations! You have completed all the questions.';
            playAgain.innerHTML = 'Play Again';
        }
    } else {
        resultMessage.innerHTML = 'Sorry, that is not the correct word.';
        playAgain.style.display = 'block';
        // increment current index to move on to the next question
        currentIndex++; 
        if(currentIndex < questionsWords.length) {
            startGame();
        } else {
            resultMessage.innerHTML = 'Congratulations! You have completed all the questions.';
            playAgain.innerHTML = 'Play Again';
        }
    }
    wordInputElement.value = '';
}
function processLetter() {
    let letter = letterInputElement.value.toLowerCase();
    if (usedLetters.includes(letter)) {
      resultMessage.innerHTML = 'You have already used that letter. Please try again.';
      letterInputElement.value = '';
      return;
    }
    usedLetters.push(letter);
    let word = questionsWords[currentIndex][1];
    let correct = false;
    for (let i = 0; i < word.length; i++) {
      if (letter === word[i]) {
        correct = true;
        remainedLettersNumber--;
        remainedLettersElement.innerHTML = remainedLettersNumber;
        let letterElement = document.getElementById(`word-letter-${i}`);
        letterElement.innerHTML = letter;
        letterElement.style.backgroundColor = 'green';
      }
    }
    if (!correct) {
      resultMessage.innerHTML = 'Sorry, that letter is not in the word.';
      wrongGuesses++;
      let letterElements = document.querySelectorAll('.word-letter');
      for (let i = 0; i < letterElements.length; i++) {
        if(letterElements[i].innerHTML == letter){
          letterElements[i].style.backgroundColor = 'red';
        }
      }
    }
    letterInputElement.value = '';
  }
  
  let maxChances = 6;
let remainingChances = maxChances;

function takeChance() {
    let letter = letterInputElement.value.toLowerCase();
    if (usedLetters.includes(letter)) {
        resultMessage.innerHTML = 'You have already used that letter. Please try again.';
        letterInputElement.value = '';
        return;
    }
    usedLetters.push(letter);
    let word = questionsWords[currentIndex][1];
    let correct = false;
    for (let i = 0; i < word.length; i++) {
        if (letter === word[i]) {
            correct = true;
            remainedLettersNumber--;
            let letterElement = document.getElementById(`word-letter-${i}`);
            letterElement.innerHTML = letter;
            letterElement.style.backgroundColor = 'green';
        }
    }
    if (!correct) {
        wrongGuesses++;
        remainingChances--;
    }
    if (remainingChances === 0) {
        finishGame(0);
    }
    if (remainedLettersNumber === 0) {
        finishGame(1);
    }
    letterInputElement.value = '';
    remainedLettersElement.innerHTML = remainedLettersNumber;
}

function finishGame(result) {
    wordInputElement.readOnly = false;
    letterInputElement.readOnly = true;
    if (result === 1) {
        resultMessage.innerHTML = 'Congratulations! You have successfully guessed the word.';
        score++;
    } else {
        resultMessage.innerHTML = 'Sorry, you ran out of chances. The correct word was ' + answer;
    }
    playAgain.style.display = 'block';
    remainingChances = maxChances;
}
currentIndex++;
startGame();