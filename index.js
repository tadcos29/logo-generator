const inq = require('inquirer');

// Import maxlength-input-prompt, a package to control the length of user input in inquirer.

 const MLIP = require('inquirer-maxlength-input-prompt');

// Import css-color-names, a json containing valid css colour presets as its properties.

 const csscolors = require('css-color-names');
 
 // define a maxLengthPrompt input type for inquirer.
 inq.registerPrompt('maxLengthPrompt', MLIP)

const fs = require('fs');
const {Shape, Circle, Triangle, Square} = require('./lib/shapes.js');
let hexTest=  /^#[0-9a-f]{3,6}$/i
// Check for either a valid preset or a valid hexcode.
const ColourCheck = (str) => hexTest.test(str) || csscolors.hasOwnProperty(str.toLowerCase());


const userCriteria = [
    {type:'maxLengthPrompt', message: 'Please input up to three characters of text:', name:'sText', maxLength:3},
    {type:'input', message: `Please enter the text colour:`, name:'sTextColour'},
    {type:'list', message: 'Please select a shape:',choices:['Circle','Triangle','Square'], name:'sShape'},
    {type:'input', message: 'Please enter the shape colour:', name:'sShapeColour'},
];


function init() {
    let userInput = inq.prompt(userCriteria)
    .then((userInput) => {
        // If colours are invalid, inform the user and default to light and dark grey for fill and text respectively.
        if (!ColourCheck(userInput.sTextColour)) {console.log(`Invalid text colour: ${userInput.sTextColour}. Defaulting to dark grey.`); userInput.sTextColour='darkgray'}
        if (!ColourCheck(userInput.sShapeColour)) {console.log(`Invalid shape colour: ${userInput.sShapeColour}. Defaulting to dark grey.`); userInput.sShapeColour='lightgray'}
        // Generate the SVG based on user input.
        generateSVG(userInput.sText, userInput.sTextColour, userInput.sShape, userInput.sShapeColour);
        });

}

function generateSVG(gsText, gsTextColour, gsShape, gsShapeColour) {
    // Let the new object be of the class selected in gsShape. As far as eval() calls go, this is fairly
    // safe, because all of the variables are pre-filtered.
    let theShape = eval(`new ${gsShape} (gsText,gsTextColour,gsShape,gsShapeColour);`);
    let svgString = theShape.renderLogo();
    fs.writeFile('./examples/logo.svg', svgString, (err) => err ? console.error(err): console.log('SVG file written.'));
}

init();