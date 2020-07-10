const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt ([
        {
            type: "input",
            message: "What is your project's title?",
            name: "title"
        },
        {
            type: "input",
            message: "What is your project's description?",
            name: "description"
        },
        {
            type: "input",
            message: "What is your project's table of contents?",
            name: "table of contents"
        },
        {
            type: "input",
            message: "What is your project's Installation instructions?",
            name: "installation"
        },
        {
            type: "input",
            message: "What is your project's usage guidelines?",
            name: "usage"
        },
        {
            type: "list",
            message: "What is your project's license?",
            name: "license",
            choices: [
                "license A",
                "license B",
                "license C",
            ]
        },
        {
            type: "input",
            message: "What is your project's contribution guidelines?",
            name: "contribution"
        },
        {
            type: "input",
            message: "What is your project's Test Instructions?",
            name: "test"
        },
        {
            type: "input",
            message: "What is your project's Questions?",
            name: "questions"
        }
    ])
    .then(function(response) {
        if (response.confirm === response.input) {
            console.log("Your information has been logged successfully!");
        } else {
            console.log ("You must enter the information. Try again!")
        }
    })
    
fs.
 
// array of questions for user
const questions = [ 
    

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
