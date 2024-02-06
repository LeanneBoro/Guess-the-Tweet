'use strict'
const gQuests = createQuests()

var gCurrQuestIdx = 0
var gImg = 1
//do this on init
// didnt need the g Img - use gCurrQuestIdx


function initGame() {
    renderQuest()
}
function renderQuest() {
    getImagesHTML()
    getButtonsHTML()
}
function checkAnswer(index) {
    console.log(index)

    if (gQuests[gCurrQuestIdx].correctOptIdx === index) {
        if (gCurrQuestIdx === (gQuests.length - 1)) {
            stopGame()
        }
        gCurrQuestIdx++
        renderQuest()
    } else {
        openModal()
    }
}

//*------------------------------*
function startOver() {

    document.querySelector('.start-over').style.display = 'none'
    document.querySelector('.picture-frame').style.display = 'block'
    document.querySelector('.click').style.display = 'block'
    gImg = 1
    gCurrQuestIdx = 0
    renderQuest()
}
function stopGame() {
    document.querySelector('.picture-frame').style.display = 'none'
    document.querySelector('.click').style.display = 'none'
    document.querySelector('.start-over').style.display = 'block'
}

//*------------------------------*
function createQuests() {
    return [
        { id: 1, opts: ['Barack Obama', 'Kim Kardashian', 'Greta Thunberg'], correctOptIdx: 0 },
        { id: 2, opts: ['Paris Hilton', 'Donald Trump', 'Jeffree Star'], correctOptIdx: 1 },
        { id: 3, opts: ['Christina Aguilera', 'Selena Gomez', 'Kylie Jenner'], correctOptIdx: 2 },
        { id: 4, opts: ['Lana Del Rey', 'Eminem', 'Nicki Minaj'], correctOptIdx: 0 },
        { id: 5, opts: ['Kanye West', 'Rihanna', 'Azealia Banks'], correctOptIdx: 2 },
    ]
}
function getImagesHTML() {
    var strHTML = ""
    strHTML += `<img src="img/0${gImg++}.JPEG" alt=""></img>`
    // dont render the whole picture just change source, this loop not needed
    const elPictureFrame = document.querySelector('.picture-frame')
    elPictureFrame.innerHTML = strHTML
}
function getButtonsHTML() {
    var strHTML = ""
    for (var i = 0; i < gQuests[gCurrQuestIdx].opts.length; i++) {
        strHTML += `<button data-idx="${i}" onClick="checkAnswer(${i})">${gQuests[gCurrQuestIdx].opts[i]}</button>`
        // id not a good idea.....  send the i in the function
    }
    const elClick = document.querySelector('.click')
    elClick.innerHTML = strHTML
}
function openModal() {
    const elModal = document.querySelector('.modal')
    elModal.style.display = 'block'
    setTimeout(() => {
        elModal.style.display = 'none'
    }, 600)
}

