const heading = document.getElementById('heading')
const paragraph = document.getElementById('paragraph')
const composerButton = document.getElementById('composer-button')
const trebleSpacesButton = document.getElementById('treble-spaces-button')
const trebleLinesButton = document.getElementById('treble-lines-button')
const keyNamesButton = document.getElementById('key-names-button')
const rhythmButton = document.getElementById('rhythm-button')
const startButton = document.getElementById('start-button')
const resetButton = document.getElementById('reset-button')
const mainMenuButton = document.getElementById('main-menu-button')
const music = new Audio("/music/Gymnopedie-1.mp3")
const cardContainer = document.getElementById("card-container")
const gameScore = document.getElementById('game-score')
const turnMessage = document.getElementById('turn-message')

let score = 0
let turn = 0
let cardValue = null
let cardClass = null
let cardBeats = null
let matchTwo = null

// Composer photos 
const vivaldi = "./images/composers/Antonio-Vivaldi.png"
const bach = "./images/composers/Johann-Sebastian-Bach.png"
const mendelssohn = "./images/composers/Felix-Mendelssohn.png"
const chopin = "./images/composers/Frederic-Chopin.png"
const handel = "./images/composers/George-Frideric-Handel.png"
const rossini = "./images/composers/Gioachino-Rossini.png"
const verdi = "./images/composers/Giuseppe-Verdi.png"
const brahms = "./images/composers/Johannes-Brahms.png"
const beethoven = "./images/composers/Ludwig-van-Beethoven.png"
const wagner = "./images/composers/Richard-Wagner.png"
const mozart = "./images/composers/Wolfgang-Amadeus-Mozart.png"
const rachmaninov = "./images/composers/Sergei-Rachmaninov.png"

const composerArray = [bach, vivaldi, mozart, chopin, rachmaninov, rossini, verdi, brahms, beethoven, wagner]
const doubleAComposerArray = [...composerArray, ...composerArray]

// Rhythm Photos
const rhythmArray = [
    {
        "symbol" : "whole note",
        "source" : "./images/Rhythms/whole-note.png",
        "beats" : 4,
    },
    {
        "symbol" : "whole rest",
        "source" : "./images/Rhythms/whole-rest.png",
        "beats" : 4
    },
    {
        "symbol" : "half note",
        "source" : "./images/Rhythms/half-note.png",
        "beats" : 2
    },
    {
        "symbol" : "half rest",
        "source" : "./images/Rhythms/half-rest.png",
        "beats" : 2
    },
    {
        "symbol" : "quarter note",
        "source" : "./images/Rhythms/quarter-note.png",
        "beats" : 1
    },
    {
        "symbol" : "quarter rest",
        "source" : "./images/Rhythms/quarter-rest.png",
        "beats" : 1
    },
    {
        "symbol" : "eight note",
        "source" : "./images/Rhythms/eighth-note.png",
        "beats" : 0.5
    },
    {
        "symbol" : "eighth rest",
        "source" : "./images/Rhythms/eighth-rest.png",
        "beats" : 0.5
    },
    {
       "symbol" : "sixteenth note",
        "source" : "./images/Rhythms/sixteenth-note.png",
        "beats" : 0.25
    },
    {
        "symbol" : "sixteenth rest",
        "source" : "./images/Rhythms/sixteenth-rest.png",
        "beats" : 0.25
    }
]
const chart = "./images/Rhythms/Chart.png"
const rhythmBackGround = ""

// Keys Photos
const keysArray = [
    {
        "symbol" : "Key A",
        "source" : "./images/keys/AQ.png",
        "pitch" : "A"
    },
    {
        "symbol" : "Key B",
        "source" : "./images/keys/BQ.png",
        "pitch" : "B"
    },
    {
        "symbol" : "Key C",
        "source" : "./images/keys/CQ.png",
        "pitch" : "C"
    },
    {
        "symbol" : "Key D",
        "source" : "./images/keys/DQ.png",
        "pitch" : "D"
    },
    {
        "symbol" : "Key E",
        "source" : "./images/keys/EQ.png",
        "pitch" : "E"
    },
    {
        "symbol" : "Key F",
        "source" : "./images/keys/FQ.png",
        "pitch" : "F"
    },
    {
        "symbol" : "Key G",
        "source" : "./images/keys/GQ.png",
        "pitch" : "G"
    },
    {
        "symbol" : "Letter A",
        "source" : "./images/keys/A.png",
        "pitch" : "A"
    },
    {
        "symbol" : "Letter B",
        "source" : "./images/keys/B.png",
        "pitch" : "B"
    },
    {
        "symbol" : "Letter C",
        "source" : "./images/keys/C.png",
        "pitch" : "C"
    },
    {
        "symbol" : "Letter D",
        "source" : "./images/keys/D.png",
        "pitch" : "D"
    },
    {
        "symbol" : "Letter E",
        "source" : "./images/keys/E.png",
        "pitch" : "E"
    },
    {
        "symbol" : "Letter F",
        "source" : "./images/keys/F.png",
        "pitch" : "F"
    },
    {
        "symbol" : "Letter G",
        "source" : "./images/keys/G.png",
        "pitch" : "G"
    }
]

// Treble Clef Spaces Photos
const trebleSpacesArray = [
    {
        "symbol" : "Space A",
        "source" : "./images/Note-Names/A-space.png",
        "pitch" : "A"
    },
    {
        "symbol" : "Space C",
        "source" : "./images/Note-Names/C-space.png",
        "pitch" : "C-space"
    },
    {
        "symbol" : "Space E",
        "source" : "./images/Note-Names/E-space.png",
        "pitch" : "E-space"
    },
    {
        "symbol" : "Space F",
        "source" : "./images/Note-Names/F-space.png",
        "pitch" : "F-space"
    },
    {
        "symbol" : "Space A, Letter",
        "source" : "./images/Note-Names/A-spaceA.png",
        "pitch" : "A"
    },
    {
        "symbol" : "Space C, Letter",
        "source" : "./images/Note-Names/C-spaceC.png",
        "pitch" : "C-space"
    },
    {
        "symbol" : "Space E, Letter",
        "source" : "./images/Note-Names/E-spaceE.png",
        "pitch" : "E-space"
    },
    {
        "symbol" : "Space F, Letter",
        "source" : "./images/Note-Names/F-spaceF.png",
        "pitch" : "F-space"
    },
]

// Treble Clef Lines Photos
const trebleLinesArray = [
    {
        "symbol" : "Line B",
        "source" : "./images/Note-Names/B-line.png",
        "pitch" : "B"
    },
     {
        "symbol" : "Line C",
        "source" : "./images/Note-Names/Middle-C.png",
        "pitch" : "C-line"
    },
    {
        "symbol" : "Line D",
        "source" : "./images/Note-Names/D-line.png",
        "pitch" : "D"
    },
    {
        "symbol" : "Space E",
        "source" : "./images/Note-Names/E-space.png",
        "pitch" : "E-space"
    },
    {
        "symbol" : "Line E",
        "source" : "./images/Note-Names/E-line.png",
        "pitch" : "E-line"
    },
    {
        "symbol" : "Line F",
        "source" : "./images/Note-Names/F-line.png",
        "pitch" : "F-line"
    },
     {
        "symbol" : "Line G",
        "source" : "./images/Note-Names/G-line.png",
        "pitch" : "G"
    },
     {
        "symbol" : "Line B, Letter",
        "source" : "./images/Note-Names/B-lineB.png",
        "pitch" : "B"
    },
    {
        "symbol" : "Line C, Letter",
        "source" : "./images/Note-Names/Middle-C-C.png",
        "pitch" : "C-line"
    },
    {
        "symbol" : "Line D, Letter",
        "source" : "./images/Note-Names/D-lineD.png",
        "pitch" : "D"
    },
    {
        "symbol" : "Line E, Letter",
        "source" : "./images/Note-Names/E-lineE.png",
        "pitch" : "E-line"
    },
    {
        "symbol" : "Line F, Letter",
        "source" : "./images/Note-Names/F-lineF.png",
        "pitch" : "F-line"
    },
    {
        "symbol" : "Line G, Letter",
        "source" : "./images/Note-Names/G-lineG.png",
        "pitch" : "G"
    }
]

// buttons 
composerButton.addEventListener('click', showComposers)
keyNamesButton.addEventListener('click', showKeys)
trebleSpacesButton.addEventListener('click', showTrebleSpaceNotes)
trebleLinesButton.addEventListener('click', showTrebleLineNotes)
startButton.addEventListener('click', startGame)
resetButton.addEventListener('click', reset)
mainMenuButton.addEventListener('click', mainMenu)
rhythmButton.addEventListener('click', showRhythms)

startButton.style.display = 'none'
resetButton.style.display = 'none'
mainMenuButton.style.display = 'none'
gameScore.style.display = 'none'
turnMessage.style.display = 'none'

// Start Game Button
function startGame() {
    console.log("Hello World")
    // heading hide
    heading.style.display = 'none'
    // paragraph hide
    paragraph.style.display = 'none'
    // Show score
    gameScore.style.display = 'flex'
    //document.body.insertBefore(gameScore, document.body.firstChild)
    gameScore.innerText = "Score: " + score
    // Show move
    turnMessage.style.display = 'flex'
    //document.body.insertBefore(turnMessage, document.body.firstChild)
    turnMessage.innerText = "Match attempts: " + turn
    // hide cards
    const imagesClass = document.querySelectorAll('.image')
    imagesClass.forEach(image => {image.style.visibility = 'hidden'})
    // hide start button
    startButton.style.display = 'none'
    resetButton.style.display = 'flex'
    score = 0
    turn = 0
    cardBeats = null
    cardValue = null
    cardClass = null
    music.play();
    music.loop =true;
    music.playbackRate = 1;
    //music.pause();qqazszdgfbgtyj
}

// Reset Button
function reset() {
    let nextGame = null
    if (cardContainer.dataset.game === "rhythm") {
        nextGame = "rhythm"
    }
    if (cardContainer.dataset.game === "keys") {
        nextGame = "keys"
    }
    if (cardContainer.dataset.game === "spaces") {
        nextGame = "spaces"
    }
    if (cardContainer.dataset.game === "lines") {
        nextGame = "lines"
    }
    if (cardContainer.dataset.game === "composers") {
        nextGame = "composers"
    }
    clearComposers()
    turn = 0
    score = 0
    gameScore.innerText = "Score: " + score
    turnMessage.innerText = "Match attempts: " + turn
    resetButton.style.display = "none"
    heading.style.display = 'flex'
    paragraph.style.display = 'flex'
    turnMessage.style.display = 'none'
    gameScore.style.display = 'none'
    if (nextGame === "rhythm") {
        showRhythms()
    } else if (nextGame === "keys") {
        showKeys()
    } else if (nextGame === "composers") {
        showComposers()
    } else if (nextGame === "spaces") {
        showTrebleSpaceNotes()
    } else {
        showTrebleLineNotes()
    }
}

// Main Menu Button
function mainMenu() {
    clearComposers()
    cardContainer.dataset.game = ''
    composerButton.style.display = "flex"
    rhythmButton.style.display = "flex"
    keyNamesButton.style.display = 'flex'
    trebleSpacesButton.style.display = 'flex'
    trebleLinesButton.style.display = 'flex'
    mainMenuButton.style.display = "none"
    startButton.style.display = 'none'
    heading.style.display = 'flex'
    paragraph.style.display = 'flex'
    turnMessage.style.display = 'none'   
    gameScore.style.display = 'none'
    heading.innerHTML = 'Memory Games'
    resetButton.style.display = 'none'
    paragraph.innerHTML = "Find the cards with matching contents to win. Choose the theme of the game below"
    score = 0
    turn = 0
}

// Clear cards function, actually clears all cards not just composers
function clearComposers() {
    while (cardContainer.children.length > 0) {
         cardContainer.firstChild.remove()
    }
}

/// Composer Page ///
function createComposers() {
    const shuffleArray = doubleAComposerArray.sort((a, b) => 0.5 - Math.random())
    for(let i = 0; i < shuffleArray.length; i++) {
        const composerDiv = document.createElement('div')
        composerDiv.style.backgroundColor = "rgb(0, 255, 255)"
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

function showComposers() {
    createComposers()
    cardContainer.style.display = "flex"
    cardContainer.style.flexWrap = "wrap"
    cardContainer.style.justifyContent = "center"
    cardContainer.style.alignItems = "center"
    rhythmButton.style.display = "none"
    cardContainer.dataset.game = "composers"
    // change heading inner contents to famous composers
    heading.innerText = "Famous Composers"
    // change paragraph to game description
    paragraph.innerHTML = `Click card and reveal a famous composer. Match an image and receive a point. <br> Match as many composers as possible in ten tries. Less than five loses, five to nine is pretty good, ten matches is awesome.`
    startButton.style.display = 'flex'
    composerButton.style.display = 'none'
    rhythmButton.style.display = 'none'
    keyNamesButton.style.display = 'none'
    trebleSpacesButton.style.display = 'none'
    trebleLinesButton.style.display = 'none'
    mainMenuButton.style.display = 'flex'
}

function checkCards(event) {
    //function check if cards are matching
    // First card clicked: check if variable is empty, flip card to show contents, store card type, 
    //end game after 10 turns
    if (turn > 10) {
        return
    }
    // On card Match
    if (event.target.className === cardClass) {
        event.target.firstChild.style.visibility = "visible"
        console.log("It's a match")
        console.log(score)
        // update gameScore.innerText
        score += 1
        turn += 1
        gameScore.innerText = "Score: " + score
        gameScore.style.backgroundColor = "rgb(0, 255, 255)"
        gameScore.style.color = "black"
        function restGameScore() {
            gameScore.style.backgroundColor = "black"
            gameScore.style.color = "white"
        }
        setTimeout(restGameScore, 1000)
        turnMessage.innerText = "Match attempts: " + turn
        // Second Card clicked: if cards match: add one point to score. Turn plus one. Remove div from array. 
        const match = document.getElementsByClassName(`${event.target.className}`)
        match[0].firstChild.classList.remove('image')
        match[1].firstChild.classList.remove('image')
        cardClass = null 
    } else if ((cardClass != null) && (event.target.className != cardClass)) {
        ///// && (event.target.firstChild.src != cardValue) ////
        // hide cards
        const noMatchOne = document.getElementsByClassName(`${event.target.className}`)
        const noMatchTwo = document.getElementsByClassName(cardClass)
        event.target.firstChild.style.visibility = "visible"
        // update turn message
        turn += 1
        turnMessage.innerText = "Match attempts: " + turn
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
        // console.log("Null value: ", cardValue)
        // console.log("I clicked on this ", event.target)
        // console.log(event.target.firstChild)
        event.target.firstChild.style.visibility = "visible"
        cardClass = event.target.className
        cardValue = event.target
        console.log("card Class", cardClass)
        //console.log("CardValue " + cardValue)
        // console.log(cardValue)
        console.log("class name: ")
        console.log(event.target.className)  
    }
    // End game after 10 turns
    if (turn >= 10 ) {
      if (score === 10) {
        turnMessage.innerHTML = "GAME OVER <br> You Bussin!"
        } else if (score < 5) {
        turnMessage.innerHTML = `GAME OVER <br> Far from fleek`
        } else {
        turnMessage.innerHTML = "GAME OVER <br> Straight mid"
    }
    turn += 1
    gameScore.style.display = 'none'
    }
}

/// Rhythms Page ///
function showRhythms() {
    createRhythms()
    cardContainer.style.display = "flex"
    cardContainer.style.flexWrap = "wrap"
    cardContainer.style.justifyContent = "center"
    cardContainer.style.alignItems = "center"
    cardContainer.dataset.game = "rhythm"
    // change heading inner contents to famous composers
    heading.innerText = "Rhythm Match"
    // change paragraph to game description
    paragraph.innerHTML = `Click card and reveal a card. Match a rhythm note and rest value and receive a point. <br> Match as many rhythms as possible in ten tries. Less than five loses, five to nine is pretty good, ten matches is awesome.`
    startButton.style.display = 'flex'
    composerButton.style.display = "none"
    rhythmButton.style.display = "none"
    keyNamesButton.style.display = 'none'
    trebleLinesButton.style.display = 'none'
    trebleSpacesButton.style.display = 'none'
    mainMenuButton.style.display = "flex"
}

function createRhythms() {
    const shuffleArray = rhythmArray.sort((a, b) => 0.5 - Math.random())
     for(let i = 0; i < shuffleArray.length; i++) {
         const rhythmDiv = document.createElement('div')
         rhythmDiv.style.backgroundColor = "rgb(25, 25, 112)"
         rhythmDiv.style.margin = "6px"
         rhythmDiv.style.border = "3px black solid"
         rhythmDiv.style.borderRadius = "5%"
         rhythmDiv.addEventListener('click', checkRhythmCards)
         const image = document.createElement('img')
         image.setAttribute("data-beats", shuffleArray[i].beats)
         image.setAttribute('class', 'image')
         image.setAttribute("data-id", i)
         image.src = shuffleArray[i].source
         image.style.height = "200px"
         image.style.width = "200px"
         rhythmDiv.appendChild(image)
         cardContainer.appendChild(rhythmDiv)
         startButton.style.display = 'flex'
 }
}

function checkRhythmCards(event) {
    //function check if cards are matching
    // First card clicked: check if variable is empty, flip card to show contents,  store card type, 
    if (turn > 5) {
        return
    }
    if ((cardValue != null) && (event.target.firstChild.dataset.id !=  cardValue)) {
        // If Cards Match
        if (event.target.firstChild.dataset.beats === cardBeats) {
            event.target.firstChild.style.visibility = "visible"
            console.log("It's a match")
            score += 1
            turn += 1
            gameScore.innerText = "Score: " + score
            gameScore.style.backgroundColor = "darkBlue"
            turnMessage.innerText = "Match attempts: " + turn
            function resetGameScore() {
                gameScore.style.backgroundColor = "black"
                gameScore.style.color = "white"
            }
            setTimeout(resetGameScore, 1000)
            event.target.firstChild.classList.remove('image')
            matchTwo.firstChild.classList.remove('image')
            cardBeats = null 
            cardValue = null
            matchTwo = null
    } else if ((cardBeats != null) && (event.target.firstChild.dataset.beats != cardBeats)) {
        // Cards don't Match
        event.target.firstChild.style.visibility = "visible"
        turn += 1
        turnMessage.innerText = "Match attempts: " + turn
        const imagesCards = document.querySelectorAll('.image')
        function hideCards() {
            imagesCards.forEach(image => {image.style.visibility = "hidden"})
        }
        setTimeout(hideCards, 2000)
        cardBeats = null
        cardValue = null
        matchTwo = null
    }  
}   else {
        console.log("Null value: ", cardValue)
        console.log("I clicked on this ", event.target)
        event.target.firstChild.style.visibility = "visible"
        cardBeats = event.target.firstChild.dataset.beats
        cardValue = event.target.firstChild.dataset.id
        matchTwo = event.target
    }
        console.log('turn', turn)
    if (turn >= 5 ) {
      if (score === 5) {
        turnMessage.innerHTML = "GAME OVER <br> You Bussin!"
        } else if (score < 5) {
        turnMessage.innerHTML = `GAME OVER <br> Far from fleek  `
        } else {
        turnMessage.innerHTML = "GAME OVER <br> Straight mid"
        
    }
    turn += 1
    gameScore.style.display = 'none'
    }
}
///////////////////

//// Keys Page /////
function createKeys() {
    const shuffleArray = keysArray.sort((a, b) => 0.5 - Math.random())
        for(let i = 0; i < shuffleArray.length; i++) {
            const keysDiv = document.createElement('div')
            keysDiv.style.backgroundColor = "rgb(25, 25, 112)"
            keysDiv.style.margin = "6px"
            keysDiv.style.border = "3px black solid"
            keysDiv.style.borderRadius = "5%"
            keysDiv.addEventListener('click', checkKeys)
            const image = document.createElement('img')
            image.setAttribute("data-pitch", shuffleArray[i].pitch)
            image.setAttribute('class', 'image')
            image.setAttribute("data-id", i)
            image.src = shuffleArray[i].source
            keysDiv.appendChild(image)
            cardContainer.appendChild(keysDiv)
            startButton.style.display = 'flex'
    }
}

function showKeys() {
    createKeys()
    cardContainer.style.display = "flex"
    cardContainer.style.flexWrap = "wrap"
    cardContainer.style.justifyContent = "center"
    cardContainer.style.alignItems = "center"
    cardContainer.dataset.game = "keys"
    // change heading inner contents to famous composers
    heading.innerText = "Matching Piano Keys"
    // change paragraph to game description
    paragraph.innerHTML = `Click card and reveal a card. Match earch cooresponding key and receive a point. <br> Match as many keys as possible in seven tries. Less than four loses, four to six is pretty good, seven matches is awesome.`
    startButton.style.display = 'flex'
    composerButton.style.display = "none"
    rhythmButton.style.display = "none"
    keyNamesButton.style.display = "none"
    trebleLinesButton.style.display = "none"
    trebleSpacesButton.style.display = "none"
    mainMenuButton.style.display = "flex"
}

function checkKeys(event) {
    //function check if cards are matching
    // First card clicked: check if variable is empty, flip card to show contents,  store card type, 
    if (turn > 7) {
        return
    }
    if ((cardValue != null) && (event.target.firstChild.dataset.id !=  cardValue)) {
        // Cards Match
        if (event.target.firstChild.dataset.pitch === cardBeats) {
            event.target.firstChild.style.visibility = "visible"
            console.log("It's a match")
            score += 1
            turn += 1
            gameScore.innerText = "Score: " + score
            turnMessage.innerText = "Match attempts: " + turn
            gameScore.style.backgroundColor = "darkBlue"
            function resetGameScore() {
                gameScore.style.backgroundColor = "black"
            }
            setTimeout(resetGameScore, 1000)
            event.target.firstChild.classList.remove('image')
            matchTwo.firstChild.classList.remove('image')
            cardBeats = null 
            cardValue = null
            matchTwo = null
        } else if ((cardBeats != null) && (event.target.firstChild.dataset.pitch !=  cardBeats)) {
            event.target.firstChild.style.visibility = "visible"
            turn += 1
            turnMessage.innerText = "Match attempts: " + turn
            const imagesCards = document.querySelectorAll('.image')
            function hideCards() {
            imagesCards.forEach(image => {image.style.visibility = "hidden"})
            }
            console.log("card clicked", event.target.firstChild.dataset.pitch)
            setTimeout(hideCards, 2000)
            cardBeats = null
            cardValue = null
            matchTwo = null
        }  
    } else {
        event.target.firstChild.style.visibility = "visible"
        cardBeats = event.target.firstChild.dataset.pitch
        cardValue = event.target.firstChild.dataset.id
        matchTwo = event.target
        if (turn >= 7 ) {
            if (score === 7) {
            turnMessage.innerHTML = "GAME OVER <br> You Bussin!"
        } else if (score < 4) {
        turnMessage.innerHTML = `GAME OVER <br> Far from fleek  `
        } else {
        turnMessage.innerHTML = "GAME OVER <br> Straight mid"
        }
        turn += 1
        gameScore.style.display = 'none'
    }
}
}

//// Treble Space Page ///////////////////////////////
function createTrebleSpaceNotes() {
    const shuffleArray = trebleSpacesArray.sort((a, b) => 0.5 - Math.random())
        for(let i = 0; i < shuffleArray.length; i++) {
            const keysDiv = document.createElement('div')
            keysDiv.style.backgroundColor = "rgb(25, 25, 112)"
            keysDiv.style.margin = "6px"
            keysDiv.style.border = "3px black solid"
            keysDiv.style.borderRadius = "5%"
            keysDiv.addEventListener('click', checkKeys)
            const image = document.createElement('img')
            image.setAttribute("data-pitch", shuffleArray[i].pitch)
            image.setAttribute('class', 'image')
            image.setAttribute("data-id", i)
            image.src = shuffleArray[i].source
            keysDiv.appendChild(image)
            cardContainer.appendChild(keysDiv)
            startButton.style.display = 'flex'
    }
}

function showTrebleSpaceNotes() {
    createTrebleSpaceNotes()
    cardContainer.style.display = "flex"
    cardContainer.style.flexWrap = "wrap"
    cardContainer.style.justifyContent = "center"
    cardContainer.style.alignItems = "center"
    cardContainer.dataset.game = "spaces"
    // change heading inner contents to famous composers
    heading.innerText = "Matching Treble Cleff Spaces"
    // change paragraph to game description
    paragraph.innerHTML = `Click card and reveal a card. Match earch cooresponding key and receive a point. <br> Match as many keys as possible in four tries. Less than three loses, four matches is awesome.`
    startButton.style.display = 'flex'
    composerButton.style.display = "none"
    rhythmButton.style.display = "none"
    keyNamesButton.style.display = "none"
    trebleSpacesButton.style.display = "none"
    trebleLinesButton.style.display = "none"
    mainMenuButton.style.display = "flex"
}

// function checkNotes(event) {
//     //function check if cards are matching
//     // First card clicked: check if variable is empty, flip card to show contents,  store card type, 
//     if (turn > 7) {
//         return
//     }
//     if ((cardValue != null) && (event.target.firstChild.dataset.id !=  cardValue)) {
//         if (event.target.firstChild.dataset.pitch === cardBeats) {
//             event.target.firstChild.style.visibility = "visible"
//             console.log("It's a match")
//             score += 1
//             turn += 1
//             gameScore.innerText = "Score: " + score
//             turnMessage.innerText = "Match attempts: " + turn
//             event.target.firstChild.classList.remove('image')
//             matchTwo.firstChild.classList.remove('image')
//             cardBeats = null 
//             cardValue = null
//             matchTwo = null
//         } else if ((cardBeats != null) && (event.target.firstChild.dataset.pitch !=  cardBeats)) {
//             event.target.firstChild.style.visibility = "visible"
//             turn += 1
//             turnMessage.innerText = "Match attempts: " + turn
//             const imagesCards = document.querySelectorAll('.image')

//             function hideCards() {
//             imagesCards.forEach(image => {image.style.visibility = "hidden"})
//             }
//             console.log("card clicked", event.target.firstChild.dataset.pitch)

//             setTimeout(hideCards, 2000)
//             cardBeats = null
//             cardValue = null
//             matchTwo = null
//         }  
//     } else {
//         event.target.firstChild.style.visibility = "visible"
//         cardBeats = event.target.firstChild.dataset.pitch
//         cardValue = event.target.firstChild.dataset.id
//         matchTwo = event.target
//         if (turn >= 7 ) {
//             if (score === 7) {
//             turnMessage.innerHTML = "GAME OVER <br> You Bussin!"
//         } else if (score < 4) {
//         turnMessage.innerHTML = `GAME OVER <br> Far from fleek  `
//         } else {
//         turnMessage.innerHTML = "GAME OVER <br> Straight mid"
//         }
//         turn += 1
//         gameScore.style.display = 'none'
//     }
// }
// }


//// Treble Lines Page /////

function createTrebleLineNotes() {
    const shuffleArray = trebleLinesArray.sort((a, b) => 0.5 - Math.random())
        for(let i = 0; i < shuffleArray.length; i++) {
            const keysDiv = document.createElement('div')
            keysDiv.style.backgroundColor = "rgb(25, 25, 112)"
            keysDiv.style.margin = "6px"
            keysDiv.style.border = "3px black solid"
            keysDiv.style.borderRadius = "5%"
            keysDiv.addEventListener('click', checkKeys)
            const image = document.createElement('img')
            image.setAttribute("data-pitch", shuffleArray[i].pitch)
            image.setAttribute('class', 'image')
            image.setAttribute("data-id", i)
            image.src = shuffleArray[i].source
            keysDiv.appendChild(image)
            cardContainer.appendChild(keysDiv)
            startButton.style.display = 'flex'
    }
}

function showTrebleLineNotes() {
    createTrebleLineNotes()
    cardContainer.style.display = "flex"
    cardContainer.style.flexWrap = "wrap"
    cardContainer.style.justifyContent = "center"
    cardContainer.style.alignItems = "center"
    cardContainer.dataset.game = "lines"
    // change heading inner contents to famous composers
    heading.innerText = "Matching Treble Clef Lines"
    // change paragraph to game description
    paragraph.innerHTML = `Click card and reveal a card. Match earch cooresponding key and receive a point. <br> Match as many notes as possible in seven tries. Less than five loses, four to seven is pretty good, seven matches is awesome.`
    startButton.style.display = 'flex'
    composerButton.style.display = "none"
    rhythmButton.style.display = "none"
    keyNamesButton.style.display = "none"
    trebleSpacesButton.style.display = "none"
    trebleLinesButton.style.display = "none"
    mainMenuButton.style.display = "flex"
}

// function checkNotes(event) {
//     //function check if cards are matching
//     // First card clicked: check if variable is empty, flip card to show contents,  store card type, 
//     if (turn > 7) {
//         return
//     }
//     if ((cardValue != null) && (event.target.firstChild.dataset.id !=  cardValue)) {
//         if (event.target.firstChild.dataset.pitch === cardBeats) {
//             event.target.firstChild.style.visibility = "visible"
//             console.log("It's a match")
//             score += 1
//             turn += 1
//             gameScore.innerText = "Score: " + score
//             turnMessage.innerText = "Match attempts: " + turn
//             event.target.firstChild.classList.remove('image')
//             matchTwo.firstChild.classList.remove('image')
//             cardBeats = null 
//             cardValue = null
//             matchTwo = null
//         } else if ((cardBeats != null) && (event.target.firstChild.dataset.pitch !=  cardBeats)) {
//             event.target.firstChild.style.visibility = "visible"
//             turn += 1
//             turnMessage.innerText = "Match attempts: " + turn
//             const imagesCards = document.querySelectorAll('.image')

//             function hideCards() {
//             imagesCards.forEach(image => {image.style.visibility = "hidden"})
//             }
//             console.log("card clicked", event.target.firstChild.dataset.pitch)

//             setTimeout(hideCards, 2000)
//             cardBeats = null
//             cardValue = null
//             matchTwo = null
//         }  
//     } else {
//         event.target.firstChild.style.visibility = "visible"
//         cardBeats = event.target.firstChild.dataset.pitch
//         cardValue = event.target.firstChild.dataset.id
//         matchTwo = event.target
//         if (turn >= 7 ) {
//             if (score === 7) {
//             turnMessage.innerHTML = "GAME OVER <br> You Bussin!"
//         } else if (score < 4) {
//         turnMessage.innerHTML = `GAME OVER <br> Far from fleek  `
//         } else {
//         turnMessage.innerHTML = "GAME OVER <br> Straight mid"
//         }
//         turn += 1
//         gameScore.style.display = 'none'
//     }
// }
// }