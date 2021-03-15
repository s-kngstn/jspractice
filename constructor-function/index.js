// Constructor Function
function BellBoy (name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.moveSuitcase = function () {
        alert("May I take your suitcase?");
    }
    this.callTaxi = function () {
        alert("Calls for a taxi");
    }
}

// Initialise Object

const bellBoy1 = new BellBoy('Joe', 22, true, ['English', 'French']);

