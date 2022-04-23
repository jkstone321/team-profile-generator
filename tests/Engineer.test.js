const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("getGithub", () => {
        it("displays the correct GitHub usename", () => {
            const engineer = new Engineer("Jordan", 12, "jordan", "jkstone321");

            const github = engineer.getGitHub();

            expect(github).toEqual("jkstone321");
        })
    });
    describe("getRole", () => {
        it("displays role as \"Engineer\"", () => {
            const engineer = new Engineer("Jordan", 12, "jordan", "jkstone321");

            const role = engineer.getRole();

            expect(role).toEqual("Engineer");
        })
    });
    describe("getName", () => {
        it("displays name as correct name", () => {
            const engineer = new Engineer("Jordan", 12, "jordan", "jkstone321");

            const fName = engineer.getName();

            expect(fName).toEqual("Jordan");
        })
    });
    describe("getId", () => {
        it("displays name as correct name", () => {
            const engineer = new Engineer("Jordan", 12, "jordan", "jkstone321");

            const id = engineer.getId();

            expect(id).toEqual(12);
        })
    });


});
