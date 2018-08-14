
 //CREATE A LIST OF ALL THE CARDS //

let cardsArray = [];
const allCards = document.querySelector('.deck');
console.log(allCards);
const elements = allCards.getElementsByClassName('card');
console.log(elements);

const [...index] = elements;

for (cards of index){
    cards.classList.add('show');
    cards.classList.remove('open');
    cards.classList.remove('match');
    cardsArray.push(cards);
}
console.log(cardsArray);

// CLICK EVENT ON REFRESH ICON TO SHUFFLE CARDS AND RETURN NEW ARRAY //
const r = document.querySelector('.restart');
const refresh = r.firstElementChild;


refresh.addEventListener('click', function(){
    let shuffled = shuffle(cardsArray);
    let newCardsArray = [];
    newCardsArray = shuffled;
    cardsArray = [];
    cardsArray = newCardsArray;
    console.log(cardsArray);
});

//LOOP THROUGH CARDS AND CREATE EACH HTML //
// ADD EACH CARDS HTML TO THE PAGE //

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;

    }

    return array;



}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
