const Intern = require("./Intern");
const Engineer = require("./Engineer");
const Manager = require("./Manager");


const testArray = [
        new Manager("Jordan", "1", "jkstone321@gmail.com", "42"),
        new Engineer("Theodore", "2", "theodore@gmail.com", "theowritescode"),
        new Intern("Tyler", "3", "tyler@gmail.com", "Center Grove"),
        new Intern("Josh", "4", "josh@gmail.com", "Carmel High School")
    ]

class Building {
    getConsole() {
        let managers = [];
        let engineers = [];
        let interns = [];

        for(let x = 0; x < testArray.length; x++) {
            if(testArray[x].officeNum !== undefined) {
                managers.push(testArray[x]);
            } else if(testArray[x].school !== undefined) {
                interns.push(testArray[x]);
            } else if(testArray[x].github !== undefined) {
                engineers.push(testArray[x]);
            }
        }

    }

    getManagerCard(data) {
        return `<div class="col-12 col-md-6 col-lg-4 my-3">
        <div class="card shadow">
            <div class="card-header">
                <h1>${data.name}</h1>
                <h2><i class="fa-solid fa-mug-hot"></i> Manager</h2>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${data.id}</li>
                    <li class="list-group-item">Email: ${data.email}</li>
                    <li class="list-group-item">Office Number: ${data.officeNum}</li>
                </ul>
            </div>
        </div>
    </div>`
    }

    getEngineerCard(data) {
        return `<!-- Engineer Template-->
        <div class="col-12 col-md-6 col-lg-4 my-3">
            <div class="card shadow">
                <div class="card-header">
                    <h1>${data.name}</h1>
                    <h2><i class="fa-solid fa-glasses"></i> Engineer</h2>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${data.id}</li>
                        <li class="list-group-item">Email: ${data.email}</li>
                        <li class="list-group-item">GitHub Username: ${data.github}</li>
                    </ul>
                </div>
            </div>
        </div>`

    }

    getInternCard(data) {
        return `<!-- Intern Template-->
        <div class="col-12 col-md-6 col-lg-4 my-3">
            <div class="card shadow">
                <div class="card-header">
                    <h1>${data.name}</h1>
                    <h2><i class="fa-solid fa-user-graduate"></i> Intern</h2>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${data.id}</li>
                        <li class="list-group-item">Email: ${data.email}</li>
                        <li class="list-group-item">School: ${data.school}</li>
                    </ul>
                </div>
            </div>
        </div>`

    }
}









module.exports = Building;