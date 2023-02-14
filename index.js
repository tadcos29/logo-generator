const inq = require('inquirer');
// const MLIP = require('inquirer-maxlength-input-prompt');
// inq.registerPrompt('userCriteria', MLIP)
const fs = require('fs');
const {Shape, Circle, Triangle, Square} = require('./lib/shapes.js')

let hexTest=  /^#[0-9a-f]{3,6}$/i

const userCriteria = [
    {type:'input', message: 'Please input up to three characters of text:', name:'sText'},
    {type:'input', message: `Please enter the text colour:`, name:'sTextColour'},
    {type:'list', message: 'Please select a shape:',choices:['Circle','Triangle','Square'], name:'sShape'},
    {type:'input', message: 'Please enter the shape colour:', name:'sShapeColour'},
];

function init() {

    let userInput = inq.prompt(userCriteria)
    .then((userInput) => {console.log(userInput);
    generateSVG(userInput.sText, userInput.sTextColour, userInput.sShape, userInput.sShapeColour);
    });

}

function generateSVG(gsText, gsTextColour, gsShape, gsShapeColour) {
    console.log('inside'+gsText);
    let theShape = eval(`new ${gsShape} (gsText,gsTextColour,gsShape,gsShapeColour);`);
    console.log('circle is first '+theShape);
    console.log('circle is '+theShape.render());
    let svgString = theShape.renderLogo();
    console.log(svgString);
    fs.writeFile('./examples/logo.svg', svgString, (err) => err ? console.error(err): console.log('SVG file written.'));
}

init();