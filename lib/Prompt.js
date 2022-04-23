const inquirer = require("inquirer");
const Intern = require("./Intern");
const Engineer = require("./Engineer");
const Manager = require("./Manager");

const allEmployees = [];

class Prompt {
    getManager() {
        console.log("Lets start with your manager.")
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Enter your manager's name: ",
                },
                {
                    type: "input",
                    name: "id",
                    message: "Enter your manager's ID: ",
                },
                {
                    type: "input",
                    name: "email",
                    message: "Enter your manager's email: ",
                },
                {
                    type: "input",
                    name: "officeNum",
                    message: "Enter your manager's office number: ",
                }
            ])
            .then(data => {
                const manager = new Manager(data.name, data.id, data.email, data.officeNum);
                allEmployees.push(manager);
                console.log(allEmployees);
            })
    }

    getIntern() {
        console.log("Enter your intern's information.");
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Enter your intern's name: ",
                },
                {
                    type: "input",
                    name: "id",
                    message: "Enter your intern's ID: ",
                },
                {
                    type: "input",
                    name: "email",
                    message: "Enter your intern's email: ",
                },
                {
                    type: "input",
                    name: "school",
                    message: "Enter your intern's school: ",
                }
            ])
            .then(data => {
                const intern = new Intern(data.name, data.id, data.email, data.school);
                allEmployees.push(intern);
                console.log(allEmployees);
            })
    }

    getEngineer() {
        console.log("Enter your engineer's information.");
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Enter your engineer's name: ",
                },
                {
                    type: "input",
                    name: "id",
                    message: "Enter your engineer's ID: ",
                },
                {
                    type: "input",
                    name: "email",
                    message: "Enter your engineer's email: ",
                },
                {
                    type: "input",
                    name: "github",
                    message: "Enter your engineer's GitHub: ",
                }
            ])
            .then(data => {
                const engineer = new Engineer(data.name, data.id, data.email, data.github);
                allEmployees.push(engineer);
                console.log(allEmployees);
            })
    }

}
module.exports = Prompt