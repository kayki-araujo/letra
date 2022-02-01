const cont = document.querySelector('#cont');
const body = document.querySelector('body')
const alphabet = "abcdefghijklmnopqrstuvwxyz"
const luckyLetter = getRandomLetter();
console.log({ luckyLetter })

let trys = 0;

function eventListener(event) {
  if(trys >= 26) {
    lose();
  }   
  addLetterBlock(event.key);
}

document.addEventListener("keydown", eventListener);

function addLetterBlock(letterPressed) {
  letterPressed = letterPressed.toLowerCase();
  if(letterPressed.length > 1 || !alphabet.includes(letterPressed)) {
    return
  } 
  
  trys++
  
  const text = document.createElement('div')
  text.classList.add("text");
  text.innerHTML = letterPressed.toLowerCase();
  
  const letter = document.createElement('div')
  letter.classList.add("item");
      
  letter.appendChild(text)
  cont.appendChild(letter)
  
  window.scrollTo(0,document.body.scrollHeight);
  
  if(letterPressed == luckyLetter) {
    letter.classList.add("lucky")
    win()
  }
  
}

function getRandomLetter() {
  return alphabet[Math.floor(Math.random() * alphabet.length)]
}

function win() {
  document.removeEventListener("keydown",eventListener)
  const winDiv = document.createElement('div')
  winDiv.classList.add("win")
  
  body.appendChild(winDiv)
  
  alert(`em ${trys} tentativas você venceu o jogo mais facil do brasil`)
}

function lose() {
  document.removeEventListener("keydown",eventListener)
  const loseDiv = document.createElement('div')
  loseDiv.classList.add("lose")
  
  body.appendChild(loseDiv)
  
  alert(`de algum modo em 26 tentativas você perdeu este jogo`)
}