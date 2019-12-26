let caz = [];
let skadi = {
  name: "Peter",
  age: 26,
  handsome: true,
  hometown: "Radovis",
  married: false,
  hobbies: ["coding", " gaming", " driving"],
  printAll: function() {
    if (this.handsome === true) {
      return `I'm ${this.name}, age ${this.age}, from ${this.hometown}, handsome: ${this.handsome}, married: ${this.married}, hobbies include: ${this.hobbies}`;
    } else {
      return `Get Hard`;
    }
  }
};

console.log(skadi.printAll());

skadi.name = "dusko";
skadi.age = 36;
skadi.handsome = false;
skadi.married = true;
skadi.hobbies = ["vmro", "narodna", "partija"];
console.log(skadi);

let presenter = {
  name: "Dejan",
  lastName: "Blazheski",
  academy: "SEDC",
  lecture: "Objects"
};

delete presenter.lecture;
// presenter.change = function() {
//   delete this.lecture;
//   this.academy = "Seavus";
// };
// presenter.getFullName = `${presenter.name} ${presenter.lastName}`;

presenter.getFullName = function() {
  console.log(`${this.name} ${this.lastName}`);
};

presenter.getFullName();
console.log(presenter);
// presenter.change();

function Person(name, age, hair, lastName) {
  this.name = name;
  this.age = age;
  this.hair = hair;
  this.lastName = lastName;
  this.getInfo = function() {
    return `${this.name} ${this.lastName}`;
  };
}

let vukashin = new Person("Vukashin", 26, false, "Obradovikj");
let dejan = new Person("Dejan", 23, false, "Blazheski");
