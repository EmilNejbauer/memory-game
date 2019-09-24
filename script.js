const cards = document.querySelectorAll('.card');
let firstCard, secondCard = null;
let playable = true;

cards.forEach(card => card.addEventListener('click', pickCard));

function pickCard() {
    if(!playable) return;
    if(this === firstCard) return;
    this.classList.toggle('flip');
    if(!firstCard) {
        firstCard = this;
        return;
    }
    secondCard = this;
    playable = false;
    checkForPair();
}

function checkForPair() {
    if(firstCard.dataset.logo === secondCard.dataset.logo) {
        firstCard.removeEventListener('click', pickCard);
        secondCard.removeEventListener('click', pickCard);
        resetState();
        return;
    }
    setTimeout(rotate, 1200);
}

function rotate() {
    firstCard.classList.toggle('flip');
    secondCard.classList.toggle('flip');
    resetState();
}

function resetState() {
    [firstCard, secondCard] = [null, null];
    playable = true;
}

function shuffle() {
    cards.forEach(card => {
        card.style.order = Math.floor(Math.random() * 16);
    })
}

shuffle();