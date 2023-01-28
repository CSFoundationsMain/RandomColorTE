// DOM variables
const block = document.getElementById("block");
const displayHex = document.getElementById('displayHex');

// Array containing all possible hexidecimal values
const hex = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];

// Global variables
let randNum;
let randHex;
let color = "";

// Event Listeners
block.addEventListener("click",displayColor);


// Functions
function displayColor() {
    randHex = "#" + randColor();
    block.style.backgroundColor = randHex;
    displayHex.innerHTML = randHex;
    color = "";
}

// Function to generate a random hexadecimal color value
function randColor() {
    for (let i = 0; i < 6; i++)
    {
        randNum = getRndInteger(0,15);
        color = color + hex[randNum];
    }
    return color;
}

// Function to randomly generate a number from the values min to max inclusive of each
function getRndInteger (min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}