// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';

//import generateMarkdown from './utils/generateMarkdown';

// TODO: Create an array of questions for user input
const questions = [
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
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`File ${fileName} created successfully.`);
    }
    });
}
// TODO: Create a function to initialize app
function init() {
    // Call inquirer.prompt to collect user input
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = `
# ${answers.projectTitle}
        
## Description
${answers.description}
        
## Table of Contents
${answers.tableofcontents}
        
## Installation
${answers.installation}
        
## Usage
${answers.usage}
        
## License
${answers.license}
        
## Contributing
${answers.contributing}
        
## Tests
${answers.tests}
        
## Questions
${answers.questions}
`;
      writeToFile('README.md', readmeContent); // Replace 'generateMarkdown' with your actual function
    });
}
// Function call to initialize app
init();