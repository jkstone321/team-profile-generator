const fs = require("fs")

let managerCards = ``;
let engineerCards = ``;
let internCards = ``;

class Building {
    getConsole(array) {
        let managers = [];
        let engineers = [];
        let interns = [];

        for(let x = 0; x < array.length; x++) {
            if(array[x].officeNum !== undefined) {
                managers.push(array[x]);
            } else if(array[x].school !== undefined) {
                interns.push(array[x]);
            } else if(array[x].github !== undefined) {
                engineers.push(array[x]);
            }
        }
        
        for(let x = 0; x < managers.length; x++) {
            managerCards = managerCards.concat(this.getManagerCard(managers[x]));
        }
        
        for(let x = 0; x < engineers.length; x++) {
            engineerCards = engineerCards.concat(this.getEngineerCard(engineers[x]));
        }
        
        for(let x = 0; x < interns.length; x++) {
            internCards = internCards.concat(this.getInternCard(interns[x]));
        }
        
        this.makeHTML();
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
                    <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
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
                        <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                        <li class="list-group-item">GitHub Username: <a href="https://github.com/${data.github}"  target="_blank">${data.github}</a></li>
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
                        <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                        <li class="list-group-item">School: ${data.school}</li>
                    </ul>
                </div>
            </div>
        </div>`

    }
    makeHTML() {
        fs.writeFileSync("./dist/index.html", `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
            <script src="https://kit.fontawesome.com/fa20cadb5e.js" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="./style.css">
        </head>
        <body>
            <!-- Heading of page-->
            <div class="jumbotron jumbotron-fluid bg-secondary">
                <div class="container">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
            <!-- Card Container -->
            <div class="container row mx-auto justify-content-center">
                <!-- Cards -->
                ${managerCards}
                ${engineerCards}
                ${internCards}
            </div>
        </body>
        </html>`, (err) => {if (err) throw err})

    }
}

module.exports = Building;