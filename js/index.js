const heading = document.getElementById('heading')
const paragraph = document.getElementById('paragraph')
const composerButton = document.getElementById('composer-button')
const startButton = document.getElementById('start-button')
const resetButton = document.getElementById('reset-button')
const mainMenuButton = document.getElementById('main-menu-button')
const popComposer = document.getElementById('pop-composer')
const music = new Audio("project-1/music/Gymnopedie-1.mp3")
const cardContainer = document.getElementById("card-container")
const gameScore = document.createElement('h2')
// gameScore.setAttribute("id", "game-score")
const turnMessage = document.createElement('h2')
// turnMessage.setAttribute("id", "turn-message")

let score = 0
let cardValue = null
let cardClass = null
//turn counter
let turn = 0

// Composer's inside composerArray
const vivaldi = "project-1/images/composers/Antonio-Vivaldi.png"
const bach = "project-1/images/composers/Johann-Sebastian-Bach.png"
const mendelssohn = "project-1/images/composers/Felix-Mendelssohn.png"
const chopin = "project-1/images/composers/Frederic-Chopin.png"
const handel = "project-1/images/composers/George-Frideric-Handel.png"
const rossini = "project-1/images/composers/Gioachino-Rossini.png"
const verdi = "project-1/images/composers/Giuseppe-Verdi.png"
const brahms = "project-1/images/composers/Johannes-Brahms.png"
const beethoven = "project-1/images/composers/Ludwig-van-Beethoven.png"
const wagner = "project-1/images/composers/Richard-Wagner.png"
const mozart = "project-1/images/composers/Wolfgang-Amadeus-Mozart.png"
const rachmaninov = "project-1/images/composers/Sergei-Rachmaninov.png"

const composerArray = [bach, vivaldi, mendelssohn, chopin, handel, rossini, verdi, brahms, beethoven, wagner]

startButton.style.display = 'none'
resetButton.style.display = 'none'
mainMenuButton.style.display = 'none'
popComposer.style.display = 'none'

// composers button
function showComposers() {
    createComposers()
    cardContainer.style.display = "flex"
    cardContainer.style.flexWrap = "wrap"
    cardContainer.style.justifyContent = "center"
    cardContainer.style.alignItems = "center"
    // change heading inner contents to famous composers
    heading.innerText = "Famous Composers"
    // change paragraph to game description
    paragraph.innerHTML = `Click card and reveal a famous composer. Match an image and receive a point. <br> Match as many composers as possible in ten tries. Less than five loses, five to nine is pretty good, ten matches is awesome.`
    startButton.style.display = 'flex'
    // popComposer.style.display = 'flex'
    composerButton.style.display = "none"
    mainMenuButton.style.display = "flex"
}

function clearComposers() {
            while (cardContainer.children.length > 0) {
                cardContainer.firstChild.remove()
            }

}
// popComposer.addEventListener('click', popComposerArray)
// function popComposerArray() {
//     if (composerArray.length > 10) {
//         composerArray.pop()
//         console.log(composerArray)
       
//     } else {
//         return
//     }
//}
function startGame() {
    console.log("Hello World")
    // heading hide
    heading.style.display = 'none'
    // paragraph hide
    paragraph.style.display = 'none'
    // Show score
    document.body.insertBefore(gameScore, document.body.firstChild)
    gameScore.innerText = "Score: " + score
    // Show move
    document.body.insertBefore(turnMessage, document.body.firstChild)
    turnMessage.innerText = "Match attempts: " + turn
    // hide cards
    // const images = document.querySelectorAll('img')    
    const imagesClass = document.querySelectorAll('.image')
    imagesClass.forEach(image => {image.style.visibility = 'hidden'})
    // hide start button
    startButton.style.display = 'none'
    resetButton.style.display = 'flex'

    music.play();
    music.loop =true;
    music.playbackRate = 1;
    //music.pause();qqazszdgfbgtyj
}

function reset() {
    turn = 0
    score = 0
    gameScore.innerText = "Score: " + score
    turnMessage.innerText = "Match attempts: " + turn
    clearComposers()
    showComposers()
    resetButton.style.display = "none"
}

function mainMenu() {
    clearComposers()
    composerButton.style.display = "flex"
    mainMenuButton.style.display = "none"
    startButton.style.display = 'none'
    heading.style.display = 'flex'
    paragraph.style.display = 'flex'
    turnMessage.style.display = 'none'   
    gameScore.style.direction = 'none'
    heading.innerHTML = 'Memoery Games'
    paragraph.innerHTML = "Find the cards with matching contents to win. Choose the theme of the game below"
}

composerButton.addEventListener('click', showComposers)
startButton.addEventListener('click', startGame)
resetButton.addEventListener('click', reset)
mainMenuButton.addEventListener('click', mainMenu)

const doubleAComposerArray = [...composerArray, ...composerArray]
const shuffleArray = doubleAComposerArray.sort((a, b) => 0.5 - Math.random())

function createComposers() {
for(let i = 0; i < shuffleArray.length; i++) {

    const composerDiv = document.createElement('div')
    composerDiv.style.backgroundColor = "rgb(0, 255, 0)"
    composerDiv.style.margin = "6px"
    composerDiv.style.border = "3px black solid"
    composerDiv.style.borderRadius = "5%"
    composerDiv.classList.add(`${shuffleArray[i]}`)

    const image = document.createElement('img')
    image.setAttribute('class', 'image')
    image.src = shuffleArray[i]
    composerDiv.append(image)
    cardContainer.appendChild(composerDiv)
    composerDiv.addEventListener('click', checkCards)
}
}

// use .style.display = 'hidden' to hide all images on default
// reveal images on click

// if turnPlay is 10 turns, game over

// If points are more than five, win game
//create a variable that stores a cards value

function checkCards(event) {
    //function check if cards are matching
// First card clicked: check if variable is empty, flip card to show contents, store card type, 
if (turn > 10) {
    return
}
// function checkIfWin()
if (event.target.className === cardClass) {
        event.target.firstChild.style.visibility = "visible"
        console.log("It's a match")
        console.log(score)
        // update gameScore.innerText
        score += 1
        turn += 1
        gameScore.innerText = "Score: " + score
        turnMessage.innerText = "Match attempts: " + turn
        console.log("bla bla")
        // Second Card clicked: if cards match: add one point to score. Turn plus one. Remove div from array. 
        //const match = document.getElementsByClassName(`${event.target.className}`)
        const match = document.getElementsByClassName(`${event.target.className}`)
       // const MatchTwo = document.getElementsByClassName(cardClass)
        match[0].firstChild.classList.remove('image')
        match[1].firstChild.classList.remove('image')
        //console.log(MatchOne[0])
        //console.log(MatchTwo[0])
        event.target.removeEventListener('click', checkCards)
        cardClass = null 
        //event.target.firstChild.src = matchPhoto
        //event.target.firstChild.()
        // while (match.length > 0) {
        //     match[0].remove()
        //     //match[0].removeChild
        // }
    } else if ((cardClass != null) && (event.target.className != cardClass) ) {
        ///// && (event.target.firstChild.src != cardValue) ////
        // hide cards
        const noMatchOne = document.getElementsByClassName(`${event.target.className}`)
        const noMatchTwo = document.getElementsByClassName(cardClass)

        event.target.firstChild.style.visibility = "visible"
        turn += 1
        turnMessage.innerText = "Match attempts: " + turn
        // update turn message
        // add event listener once
        console.log("no match")
        //console.log(cardValue)
        const imagesClass = document.querySelectorAll('.image')

        function hideCards() {
            imagesClass.forEach(image => {image.style.visibility = "hidden"})
        }
        console.log(noMatchTwo)
        console.log(noMatchOne)

        setTimeout(hideCards, 600)
        cardClass = null

    }  else {
        console.log("Null value:")
        //console.log(cardValue)
    
    console.log("I clicked on this ")
    //console.log(event.target.firstChild.src)
    console.log(event.target.firstChild)

    event.target.firstChild.style.visibility = "visible"

    // console.log("cardValue Previous: ")
    // console.log(cardValue)
    // cardValue = event.target.firstChild.src
    //cardValue = event.target.firstChild.src
    cardClass = event.target.className
    cardValue = event.target
    console.log(event.target)
    console.log("card Class", cardClass)
    //console.log("CardValue " + cardValue)
   // console.log(cardValue)
    console.log("class name: ")
    console.log(event.target.className)
   
}
console.log(turn)
if (turn >= 10 ) {
    if (score === 10) {
        turnMessage.innerHTML = "GAME OVER <br> You Bussin!"
        } else if (score < 5) {
        turnMessage.innerHTML = `GAME OVER <br> No cap you suck`
        } else {
        turnMessage.innerHTML = "GAME OVER <br> Straight mid"
        
}
turn += 1
}

}


// Second Card clicked: if cards match: add one point to score. Turn plus one. Remove div from array. 