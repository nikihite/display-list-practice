// import functions and grab DOM elements
import { crystals } from './crystals.js';
import { renderCrystal } from './utils.js';
import { plants } from './plants.js';
import { renderPlant } from './utils.js';
import { zodiacs } from './zodiacs.js';
import { renderZodiac } from './utils.js';

// let state
const crystalListElem = document.getElementById('crystals');
const plantListElem = document.getElementById('plants');
const zodiacListElem = document.getElementById('zodiacs');

// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state
for (let crystal of crystals) {
    const crystalDiv = renderCrystal(crystal);
    crystalListElem.append(crystalDiv);
}


for (let plant of plants) {
    const plantDiv = renderPlant(plant);
    plantListElem.append(plantDiv);
}

for (let zodiac of zodiacs) {
    const zodiacDiv = renderZodiac(zodiac);
    zodiacListElem.append(zodiacDiv);
}