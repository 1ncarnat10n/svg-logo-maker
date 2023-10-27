const fs = require('fs');
const inquirer = require('inquirer');
const generateLogo = require('./lib/generateLogo');

// questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter text for the logo. (Must not be more than 3 characters.)',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Enter a text color',
        name: 'text_color',
    },
    {
        type: 'list',
        message: 'Select a shape for the logo',
        choices: ["Circle", "Square", "Triangle"],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'Enter a shape color',
        name: 'shape_color',
    },
];

function writeToFile(fileName, data) {
    console.log("Data to be written: ", data);
    fs.writeFile(fileName, data, function (error) {
        if (error) {
            return console.log(error);
        }
        console.log("Generated a logo.svg"); 
    });
 }

 function init() {
    inquirer
    .prompt(questions)
    .then(function(data) {
        writeToFile('examples/logo.svg', generateLogo((data)));
    });
}

init();