// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderCrystal } from '../utils.js';
import { crystals } from '../crystals.js';
import { plants } from '../plants.js';
import { renderPlant } from '../utils.js';


const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div id="crystals"><h1 id="header">Amethyst</h1><img src="./assets/Amethyst.jpeg"><p>Amethyst is used for calming and intuition</p><h2>Chakras</h2><ul><li>Third Eye</li><li>Crown</li></ul></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCrystal(crystals[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('time to test a function', (expect) => {
    const expected = `<div id="plants"><h1 id="header">Snake Plant</h1><img src="./assets/snake-plant.webp"><p>Snake Plants should be kept in indirect sunlight, between 70-90° with a humidity of average</p></div>`;
    
    const actual = renderPlant(plants[0]);

    expect.equal(actual.outerHTML, expected);
});