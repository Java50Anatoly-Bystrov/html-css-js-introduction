//References to documents objects model
const guessinputElement = document.querySelector(".guess-input");
const guessLettersElement = document.querySelector(".guess-letters");
let lettersDivs;
const trialsElement = document.querySelector(".trials-remained");
const gameResultElement = document.querySelector(".game-result");
const playAgainElement = document.querySelector(".play-again");
//variables required for JS logic
const wordsForGuess = ["pappy", "apple", "table","gold","silver","index","script","peace","picture"];
let trials;
let word;
let flGameOver = false;
//Functions
function startGame(){
    word = getword();
    fillLettersDivs();
    flGameOver = true;
    trials = word.length + 1;
    playAgainElement.style.display = "none";
    gameResultElement.innerHTML = "";
    trialsElement.innerHTML = `remained trials ${trials}`;
}
function getword(){
    const index = Math.trunc(Math.random() * wordsForGuess.length);
    return wordsForGuess[index];
}
function fillLettersDivs(){
    const arrayWord = Array.from(word);
    guessLettersElement.innerHTML = arrayWord.reduce (function (res,cur){
        res = res + '<div class = "letter"></div>'
        return res;
    },'')
    lettersDivs = document.querySelectorAll(".letter");
}
function onChange(){
    //TODO
}
function finishGame(){
    //TODO
}
//actions 
startGame();