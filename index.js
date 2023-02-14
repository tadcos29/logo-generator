const inq = require('inquirer');
 const MLIP = require('inquirer-maxlength-input-prompt');
 const csscolors = require('css-color-names');
 inq.registerPrompt('maxLengthPrompt', MLIP)
const fs = require('fs');
const {Shape, Circle, Triangle, Square} = require('./lib/shapes.js');
let hexTest=  /^#[0-9a-f]{3,6}$/i
const ColourCheck = (str) => hexTest.test(str) || csscolors.hasOwnProperty(str.toLowerCase());


const userCriteria = [
    {type:'maxLengthPrompt', message: 'Please input up to three characters of text:', name:'sText', maxLength:3},
    {type:'input', message: `Please enter the text colour:`, name:'sTextColour'},
    {type:'list', message: 'Please select a shape:',choices:['Circle','Triangle','Square'], name:'sShape'},
    {type:'input', message: 'Please enter the shape colour:', name:'sShapeColour'},
];



function init() {
    console.log(ColourCheck('sarah'));
    let userInput = inq.prompt(userCriteria)
    .then((userInput) => {console.log(userInput);
        if (!ColourCheck(userInput.sTextColour)) {console.log(`Invalid text colour: ${userInput.sTextColour}. Defaulting to dark grey.`); userInput.sTextColour='darkgray'}
        if (!ColourCheck(userInput.sShapeColour)) {console.log(`Invalid shape colour: ${userInput.sShapeColour}. Defaulting to dark grey.`); userInput.sShapeColour='lightgray'}
        generateSVG(userInput.sText, userInput.sTextColour, userInput.sShape, userInput.sShapeColour);
        });

}

function generateSVG(gsText, gsTextColour, gsShape, gsShapeColour) {
    let theShape = eval(`new ${gsShape} (gsText,gsTextColour,gsShape,gsShapeColour);`);
    console.log('circle is first '+theShape);
    console.log('circle is '+theShape.render());
    let svgString = theShape.renderLogo();
    console.log(svgString);
    fs.writeFile('./examples/logo.svg', svgString, (err) => err ? console.error(err): console.log('SVG file written.'));
}

init();