// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter the title of your project:',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project:',
        name: 'description',
    },
    {
        type: 'checkbox',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        name: 'license', 
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'install',
        default: '(npm i)',
    },
    {
        type: 'input',
        mesage: 'What command should be run to run tests?',
        name: 'test',
        default: '(npm test)',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'user_info',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contribution',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        
        const readmePge = generate.generateMarkdown(answers);
    });
}

// Function call to initialize app
init();
