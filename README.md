# SVG Logo Generator (Bootcamp Challenge 10)

## Introduction and Purpose:

I used this exercise to become better acquainted with unit testing, with the installation and integration of npm packages, with the rudiments of JavaScript class inheritance structure (including the new Class extends syntax), and with SVG.

## Scenario:

A fictional web developer wishes to generate simple logos for their projects.

## Technical Overview:

### Usage Video

(Please view at full screen for best results)

https://user-images.githubusercontent.com/121476474/218721677-db65d4b5-3954-43c3-a8d5-f50e5bc02cda.mp4


Following installation (npm i) the application is initialised from the command line using 'node index.js'. It will prompt the user for the text (restricted to 3 characters), text colour, shape (chosen from a list containing Circle, Triangle, and Square), and shape colour. It will then validate the colours against a regex and a list of valid hex codes and substitute default colours (light grey for the shape and/or dark grey for the text) if the user-inputted colours are invalid.

Thereupon, it will produce a 300x200 svg file in the examples directory, and display a success message in the console.

### Output samples: 

![massive green-on-almond circle](/examples/logo(circle).svg)![generated square](/examples/logo(square).svg)![generated triangle](/examples/logo(triangle).svg)

## Testing and Dependencies

This project uses the jest testing framework. Please run 'npm test' to test the shape classes.

This project uses [inquirer](https://www.npmjs.com/package/inquirer) to collect user input.

Additionally, this project makes use of the [Inquirer Max Input Prompt](https://github.com/jwarby/inquirer-maxlength-input-prompt) package by [jwarby](https://github.com/jwarby) and the [css-color-names](https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json) JSON by [bahamas10](https://github.com/bahamas10)
