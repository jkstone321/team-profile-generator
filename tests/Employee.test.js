const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("getName", () => {
        it("should give back the name given to employee", () => {
            const employee = new Employee("Jordan", 12, "jkstone321@gmail.com");

            const name = employee.getName();

            expect(name).toEqual("Jordan");
        });
    });
    describe("getId", () => {
        it("should give back the id given to employee", () => {
            const employee = new Employee("Jordan", 12, "jkstone321@gmail.com");

            const id = employee.getId();

            expect(id).toEqual(12);
        });
    });
    describe("getEmail", () => {
        it("should give back the email given to employee", () => {
            const employee = new Employee("Jordan", 12, "jkstone321@gmail.com");

            const email = employee.getEmail();

            expect(email).toEqual("jkstone321@gmail.com");
        });
    });
    describe("getRole", () => {
        it("should give back the role given to employee", () => {
            const employee = new Employee("Jordan", 12, "jkstone321@gmail.com");

            const role = employee.getRole();

            expect(role).toEqual("Employee");
        });
    });


});