//References to documents objects model
const guessInputElement = document.querySelector(".guess-input");
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
    flGameOver = false;
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
    if(flGameOver){
        alert("Game is over, press play-again")
    } else{
        const trialWord = guessInputElement.value; 
        trials --;
        trialsElement.innerHTML = `remained trials ${trials}`;
        if (trialWord.length != word.length){
            alert("wrong numbers of letters")
        } else{
            coloringWord(trialWord);
        }
    }
 

}
function coloringWord(trialWord){
    const arrayWord = Array.from(trialWord);
    arrayWord.forEach(function(letter, index){
        lettersDivs[index].innerHTML = letter;
        lettersDivs[index].style.color = getColor (letter,index);
    });
}
function getColor(letter, index){
    let res = "red"
    if(word.includes(letter)){
        res = word[index] == letter ?  "green" : "yellow";
    }
    return res;
}
function finishGame(){
    //TODO
}
//actions 
startGame();