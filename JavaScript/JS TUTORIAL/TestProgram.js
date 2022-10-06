const amount = 16562;

const twoThousandNotes = parseInt(amount / 2000) ;
var reminder = amount % 2000;

const fiveHundred = parseInt(reminder / 500) ;
reminder = fiveHundred % 500;

const hundredNotes = parseInt(reminder / 100) ;
reminder = hundredNotes % 100;

const fiftyNotes = parseInt(reminder / 50) ;
reminder = fiftyNotes % 50;

const twentyNotes = parseInt(reminder / 20) ;
reminder = twentyNotes % 20;

const tenNotes = parseInt(reminder / 10) ;
reminder = tenNotes % 10;

const fiveCoins = parseInt(reminder / 5) ;
reminder = fiveCoins % 5;

const twoCoins = parseInt(reminder / 2) ;
reminder = twoCoins % 2;

const oneCoins = parseInt(reminder / 1) ;

console.log("Amount : ", amount);
console.log("2K notes:", twoThousandNotes);
console.log("500 notes:", fiveHundred);
console.log("100 notes:", hundredNotes);
console.log("50 notes:", fiftyNotes);
console.log("10 notes:", tenNotes);
console.log("5 coins:", fiveCoins);
console.log("2 coins:", twoCoins);
console.log("1 coins:", oneCoins);