// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';

//import generateMarkdown from './utils/generateMarkdown';

// TODO: Create an array of questions for user input
inquirer
    .prompt([
{
    type: "input",
    message: "What is the title of your project?",
    name: "title",
},
{
    type: "input",
    message: "Describe your project to a user.",
    name: "description",
},
{
    type: "input",
    message: "",
    name: "tablecontents",
},
{
    type: "input",
    message: "How would a user install your project?",
    name: "Installation",
},
{
    type: "input",
    message: "How does a user use your project?",
    name: "usage",
},
{
    type: "input",
    message: "",
    name: "license",
},
{
    type: "input",
    message: "Did anyone contribute to your project?",
    name: "contributions",
},
{
    type: "input",
    message: "What further testing will be involved?",
    name: "tests",
},
{
    type: "input",
    message: "Remaining questions you may have?",
    name: "questions",
},
    ])
// TODO: Create a function to write README file

// TODO: Create a function to initialize app

// Function call to initialize app
init();