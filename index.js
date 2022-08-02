// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');
const generateTeam = require('./src/template.js');

teamArray = [];

function runApp() {
  function createTeam() {
    inquirer
      .prompt([
        {
          type: 'list',
          message: 'What type of employee would you like to add to your team?',
          name: 'addEmployeePrompt',
          choices: [
            'Manager',
            'Engineer',
            'Intern',
            'No more team members are needed.',
          ],
        },
      ])
      .then(function (userInput) {
        switch (userInput.addEmployeePrompt) {
          case 'Manager':
            addManager();
            break;
          case 'Engineer':
            addEngineer();
            break;
          case 'Intern':
            addIntern();
            break;

          default:
            htmlBuilder();
        }
      });
  }
  // OOP Functions

  function addManager() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'managerName',
          message: "What is the manager's name?",
        },

        {
          type: 'input',
          name: 'managerId',
          message: "What is the manager's employee ID number?",
        },

        {
          type: 'input',
          name: 'managerEmail',
          message: "What is the manager's email address?",
        },

        {
          type: 'input',
          name: 'managerOfficeNumber',
          message: "What is the manager's office number?",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        teamArray.push(manager);
        createTeam();
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'engineerName',
          message: "What is the engineer's name?",
        },

        {
          type: 'input',
          name: 'engineerId',
          message: "What is the engineer's employee ID number?",
        },

        {
          type: 'input',
          name: 'engineerEmail',
          message: "What is the engineer's email address?",
        },

        {
          type: 'input',
          name: 'engineerGithub',
          message: "What is the engineer's GitHub username?",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        teamArray.push(engineer);
        createTeam();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'internName',
          message: "What is the intern's name?",
        },

        {
          type: 'input',
          name: 'internId',
          message: "What is the intern's employee ID number?",
        },

        {
          type: 'input',
          name: 'internEmail',
          message: "What is the intern's email address?",
        },

        {
          type: 'input',
          name: 'internSchool',
          message: 'What school does the intern attend?',
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        teamArray.push(intern);
        createTeam();
      });
  }

  // return to menu with option to add another team member create team

  // Would you like to add a team member?
  // Yes || No
  // If Yes --> Then select an employee role for your new team member: Manager, Engineer, Intern
  // If No --> Create Team

  function htmlBuilder() {
    console.log('Team created!');

    fs.writeFileSync(outputPath, generateTeam(teamArray), 'UTF-8');
  }

  createTeam();
}

runApp();
