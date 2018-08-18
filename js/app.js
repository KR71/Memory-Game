
let toggledCards = [];
const deck = document.querySelector('.deck');
let moves = 0;

(function start() {
    const cards = document.querySelectorAll('.deck li');
    for (let card of cards) {
        card.className = 'card';
    }
})();

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;



    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);

        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;

    }

    return array;



}

//SHUFFLE CARDS AND ADD TO DECK ARRAY

function shuffleCards () {
    //CREATES AN ARRAY FROM THE NODE LIST, NEED AN ARRAY FOR SHUFFLE FUNCTION, NODELIST IS IMMUTABLE
    const cardsForShuffle = Array.from(document.querySelectorAll('.deck li'));
    const shuffledCards = shuffle(cardsForShuffle);
    for (card of shuffledCards) {
        deck.appendChild(card);
    }
}

shuffleCards();

//SET UP EVENT LISTENER FOR EACH CARD

deck.addEventListener('click', event => {
   const clickedTarget = event.target;
   if (isClicked(clickedTarget)) {
       toggleCards(clickedTarget);
       addToggledCards(clickedTarget);
       if (toggledCards.length === 2) {
           matchCheck(clickedTarget);
           addMoves();
           checkScore();
       }

   }

});

//CLICKED FUNCTION TO CHECK CARD, LENTGH 2 AND DOESN'T ALREADY EXIST SET UP IN IF STATEMENT IN DECK LISTENER
function isClicked(clickedTarget){
    return(
    clickedTarget.classList.contains('card') && toggledCards.length < 2 && !toggledCards.includes(clickedTarget)
    );
}

//TOGGLE CLASSES OPEN AND SHOW
function toggleCards(clickedTarget) {
    clickedTarget.classList.toggle('open');
    clickedTarget.classList.toggle('show');
}

//ADD TOGGLED CARDS TO TOGGLE CARD ARRAY
function addToggledCards(clickedTarget) {
    toggledCards.push(clickedTarget);

}

// CHECK FOR MATCHED CARDS PUSHED TO TOGGLED CARDS
function matchCheck () {
    if ( toggledCards[0].firstElementChild.className === toggledCards[1].firstElementChild.className) {


        toggledCards[0].classList.toggle('match');
        toggledCards[1].classList.toggle('match');
        toggledCards = [];

    } else {
        setTimeout(() => {
            console.log('Not a match');
            toggleCards(toggledCards[0]);
            toggleCards(toggledCards[1]);
            toggledCards = [];

        }, 1500);

    }
}

//FUNCTION TO ADD THE MOVES MADE IN THE GAME
function addMoves(){
    moves++;
    const movesText = document.querySelector('.moves');
    movesText.innerHTML = moves;
}

//FUNCTION TO CHECK SCORE AND GIVE STAR RATING
function checkScore(){
    if(moves === 16 || moves === 24){
        removeStar();
    }
}

// FUNCTION FOR REMOVING STAR RATING
function removeStar(){
    const starTotal = document.querySelectorAll('.stars li');
    for(star of starTotal){
       if( star.style.display !== 'none') {
           star.style.display = 'none';
           break;
       }
    }
}
removeStar();
removeStar();


// END OF GAME MODAL POP UP FUNCTIONALITY
//FUNCTION TO TOGGLE HIDE ON STATS MODAL AT END OF GAME
function toggleModal() {
    const modal = document.querySelector('.modal');
    modal.classList.toggle('hide');
}
toggleModal(); // OPENS STATS MODAL
toggleModal(); // CLOSES STATS MODAL

function modalStats() {
    const moveStats = document.querySelector('.modal_moves');
    const starStats = document.querySelector('.modal_stars');
    const stars = getStars();

    moveStats.innerHTML = `Moves = ${moves}`;
    starStats.innerHTML = `Moves = ${moves}`;
}

//FUNCTION TO GET STARS FOR MODAL STATS MODAL
function getStars() {
    stars = document.querySelectorAll('stars li');
    starTotal = 0;
    for(star of stars) {
        if(star.style.display !== 'none') {
            starTotal++;
        }
    }
    return starTotal;
}

//CANCEL BUTTON IN MODAL FUNCTION
document.querySelector('.modal_cancel').addEventListener('click', () => {
   toggleModal();
});

//REPLAY BUTTON IN MODAL FUNCTION
document.querySelector('.modal_replay').addEventListener('click', () => {
   //TODO: CALL RESET GAME HERE
});

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
