// import functions and grab DOM elements
import { crystals } from './crystals.js';
import { renderCrystal } from './utils.js';
import { plants } from './plants.js';
import { renderPlant } from './utils.js';
// let state
const crystalListElem = document.getElementById('crystals');
const plantListElem = document.getElementById('plants');
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
