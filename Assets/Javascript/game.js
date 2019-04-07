//a number randomly selected inbetween 19-120


var randomNumberValue,
    redjewelValue = null,
    bluejewelValue = null,
    yellowjewelValue = null,
    greenjewelValue = null,
    myWins = 0,
    myLosses = 0;



//variable for the total score and random number
var totalscore = document.getElementById("totalscore");
var randomNumber = document.getElementById("random-number");
var wins = document.getElementById('wins')
var losses = document.getElementById('losses')


//function for random integer
function getRndInteger (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//function to make jewel value resets so they aren't equal to each other
function reset() {
    totalscore.innerText = 0;
    randomNumber.innerHTML = getRndInteger(19,121);
    randomNumberValue = parseInt(randomNumber.innerHTML);

    redjewelValue = getRndInteger(1, 13);
    bluejewelValue = getRndInteger(1, 13);
    yellowjewelValue = getRndInteger(1, 13);
    greenjewelValue = getRndInteger(1, 13);
    console.log(redjewelValue)
    console.log(bluejewelValue)
    console.log(yellowjewelValue)
    console.log(greenjewelValue)

    if (redjewelValue == yellowjewelValue || redjewelValue == bluejewelValue || redjewelValue == greenjewelValue || bluejewelValue == yellowjewelValue || bluejewelValue == greenjewelValue || greenjewelValue == yellowjewelValue) {
        reset();
    }
}


// This logic determines the outcome of the game (wins and losses) and increments the appropriate number

function IncScore(jewelColor) {
    var totalValue = parseInt(totalscore.innerText)


    if (jewelColor == 'red') {
        totalValue += redjewelValue;
    }
    else if (jewelColor == 'blue'){
        totalValue += bluejewelValue;
    }
    else if (jewelColor == 'yellow'){
        totalValue += yellowjewelValue;
    }
    else if (jewelColor == 'green') {
        totalValue += greenjewelValue;
    }
    if (totalValue == randomNumberValue) {
        myWins++, 
        wins.innerText = myWins;
        reset();
    }
    else if (totalValue > randomNumberValue) {
        myLosses++,
        losses.innerText = myLosses;
        reset();
    }
    else {
        totalscore.innerText = totalValue
        reset();
    }
}
reset();

//on click of each button add to total score
