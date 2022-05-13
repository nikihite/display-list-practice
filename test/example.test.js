// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderCrystal } from '../utils.js';
import { crystals } from '../crystals.js';
import { plants } from '../plants.js';
import { renderPlant } from '../utils.js';
import { renderZodiac } from '../utils.js';
import { zodiacs } from '../zodiacs.js';


const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="crystal"><h1>Amethyst</h1><img src="./assets/Amethyst.jpeg"><p>Amethyst is used for calming and intuition</p><h2>Chakras:</h2><ul><li>Third Eye &amp; Crown</li></ul></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCrystal(crystals[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('time to test a function', (expect) => {
    const expected = `<div class="plant"><h1>Snake Plant</h1><img src="./assets/snake-plant.webp"><p>Snake Plant should be kept in indirect light , kept within a temperature of 70-90° , and a humidity of average</p></div>`;
    
    const actual = renderPlant(plants[0]);

    expect.equal(actual.outerHTML, expected);
});

test('time to test a function', (expect) => {
    const expected = `<div class="zodiac"><h1>Geminis</h1><img src="./assets/gemini.jpeg"><p>Geminis are the first air sign of the zodiac. Under the tropical zodiac, the sun transits this sign between May 21- June 21. Geminis are ruled by Mercury, and their symbol is "The Twins"</p></div>`;
    
    const actual = renderZodiac(zodiacs[0]);

    expect.equal(actual.outerHTML, expected);
});