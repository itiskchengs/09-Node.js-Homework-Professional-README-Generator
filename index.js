// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const {generateMarkdown} = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input

inquirer
.prompt([
    {
        name: 'project',
        type: 'input',
        message: 'What is your project name?',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project',
        name: 'description',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT','APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'dependencies',
    },
    {
        type: 'input',
        message: 'What command should be run to run test?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'repo',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing',
    },
])
.then((data) => {
    console.log('success');
    init('README.md', data);
});



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if(err) throw err;
        console.log('Success');
    });
}

// TODO: Create a function to initialize app
function init(fileName, data) {
    
    writeToFile(fileName, data);
}

// Function call to initialize app
//init('README.md', number(data));
