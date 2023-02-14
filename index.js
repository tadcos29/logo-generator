const inq = require('inquirer');
// const MLIP = require('inquirer-maxlength-input-prompt');
// inq.registerPrompt('userCriteria', MLIP)

let hexTest=  /^#[0-9a-f]{3,6}$/i

const userCriteria = [
    {type:'input', message: 'Please input up to three characters of text:', name:'sText'},
    {type:'input', message: `Please enter the text colour:`, name:'sTextColour'},
    {type:'list', message: 'Please select a shape:',choices:['Circle','Triangle','Square'], name:'sShape'},
    {type:'input', message: 'Please enter the shape colour:', name:'sShapeColour'},
];

function init() {

    let userInput = inq.prompt(userCriteria)
    .then((userInput) => {console.log(userInput);});

}

function generateSVG({userInput}) {

}

init();