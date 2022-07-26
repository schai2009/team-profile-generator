# Team Profile Generator
## Description

The objective of this unit was testing and Object Oriented Programming. The objective for this project was to build a Node.js command-line application that takes in information about employees on a software engineering team, and with that information generates an HTML webpage that displays the user input data. One requirement of the application was to make use of Constructors and Classes to create the employee objects. Among these were the Employee, Manager, Engineer, and Intern classes. In addition to building the application.

Table of Contents
User Story
Acceptance Criteria
Screenshot
Walkthrough Video
Credits
License
User Story
AS A manager
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated


## Screenshot

This is a screenshot of the generated HTML webpage.

![image](https://user-images.githubusercontent.com/101296284/183323662-4fc9f2bb-4021-4613-bec5-a333b2b15548.png)

## Demo Video
https://github.com/schai2009/team-profile-generator/blob/main/assets/Team%20Profile%20Generator.mp4

## Credits

NodeJS: https://nodejs.org/en/

Jest: https://www.npmjs.com/package/jest

Inquirer: https://www.npmjs.com/package/inquirer


