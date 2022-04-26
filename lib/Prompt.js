const inquirer = require("inquirer");
const Intern = require("./Intern");
const Engineer = require("./Engineer");
const Manager = require("./Manager");
const Building = require("./Building");

const building = new Building;

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
                    validate: (answer) => {
                        if (isNaN(answer)) {
                          return "Please enter a number";
                        }
                        return true;
                      },
                },
                {
                    type: "input",
                    name: "email",
                    message: "Enter your manager's email: ",
                    validate: function (email) {
                        if(!/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)) {
                            return "Please use correct email format"
                        }
                        return true
                        
                    }
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
                this.getNext()
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
                    validate: (answer) => {
                        if (isNaN(answer)) {
                          return "Please enter a number";
                        }
                        return true;
                      },
                },
                {
                    type: "input",
                    name: "email",
                    message: "Enter your intern's email: ",
                    validate: function (email) {
                        if(!/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)) {
                            return "Please use correct email format"
                        }
                        return true
                        
                    }
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
                this.getNext();
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
                    validate: (answer) => {
                        if (isNaN(answer)) {
                          return "Please enter a number";
                        }
                        return true;
                      },
                },
                {
                    type: "input",
                    name: "email",
                    message: "Enter your engineer's email: ",
                    validate: function (email) {
                        if(!/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)) {
                            return "Please use correct email format"
                        }
                        return true
                        
                    }
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
                this.getNext();
            })
    }

    getNext() {
        inquirer
            .prompt({
                type: "list",
                name: "choice",
                message: "What employee would you like to add next?",
                choices: (["Engineer", "Intern", "Quit"])
            })
            .then(data => {
                if(data.choice == "Engineer") {
                    this.getEngineer();
                }
                if(data.choice == "Intern") {
                    this.getIntern();
                }
                if(data.choice == "Quit") {
                    building.getConsole(allEmployees);
                    process.exit();
                }
            })
    }

}

module.exports = Prompt