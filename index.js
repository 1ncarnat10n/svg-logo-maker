const fs = require('fs');
const inquirer = require('inquirer');
const generateLogo = require('./utils/generateLogo');

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