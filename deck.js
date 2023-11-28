//established 
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suits = ['♠', '♣', '♥', '♦'];

//comment
let deck = [];
for (let suit of suits) {
    for (let value of values) {
        deck.push(value + suit);
    }
}

//Fisher Yates algorithm for shuffling purposes
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i +1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

//shuffle
shuffleDeck(deck);
console.log(deck);

//used to deal cards to players
function dealCard() {
    return deck.pop();
}

//Who are the players
let Ada = [];
let Chauncey = [];

const declareWinner = () =>{
    if (Ada.points > Chauncey.points) {
        console.log( 'Ada wins! Mazel Tov!');
    }else if (Ada.points < Chauncey.points){
        console.log('Chauncey wins! Mazel Tov!')
    } else {
        console.log ('Oy vey, it is a tie game!');
    }
}

//dealing cards to the players with for loops
for (let i = 0; i < 26; i++) {
    Ada.push(dealCard());
    Chauncey.push(dealCard());
}

console.log(Ada);
console.log(Chauncey);

//who wins based on card number/value with help of if/ else if statements
function compareCards(card1, card2) {
    const value1 = values.indexOf(card1.slice(0, -1));
    const value2 = values.indexOf(card2.slice(0,-1));
    if (value1 > value2) {
        return 'Ada';
    } else if (value1 < value2) {
        return 'Chauncey';
    } else {
        return 'tie';
    }
}

//now the game
for (let i = 0; i < 26; i++) {
    const card1 = Ada[i];
    const card2 = Chauncey[i];
    console.log(`Ada: ${card1} | Chauncey: ${card2}`);
    const winner = compareCards(card1, card2);
    if (winner === 'Ada') {
        console.log('Ada won the round!');
    } else if (winner === 'Chauncey') {
        console.log('Chauncey won the round!');
    } else {
        console.log('Oy vey, they tied!');
    }
}

declareWinner();

