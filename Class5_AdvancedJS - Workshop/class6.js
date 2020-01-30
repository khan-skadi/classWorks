let p1Node = document.getElementById("p1");
let p2Node = document.getElementById("p2");
let p3Node = document.getElementById("p3");
let p4Node = document.getElementById("p4");
let p5Node = document.getElementById("p5");
let h41Node = document.getElementById("h41");
let h42Node = document.getElementById("h42");
let h43Node = document.getElementById("h43");
let h44Node = document.getElementById("h44");
let h45Node = document.getElementById("h45");

// All students with an average grade higher than 3
// All female student names with an average grade of 5
// All male student full names who live in Skopje and are over 18 years old
// The average grades of all female students over the age of 24
// All male students with a name starting with B and average grade over 2
fetch(
  "https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g3/Class%206%20-%20Functions%20Part%202/materials/students.json"
)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    let filteredData = data
      .filter(s => s.averageGrade > 3)
      .map(n => `${n.firstName}`);
    h41Node.textContent = "Students with grade higher than 3: ";
    p1Node.textContent = filteredData;
    console.log(filteredData);

    let femaleStudents = data
      .filter(s => s.gender === "Female")
      .filter(n => n.averageGrade === 5)
      .map(k => `${k.firstName}`);
    h42Node.textContent = "Female student with grade of 5: ";
    p2Node.textContent = femaleStudents;
    console.log(femaleStudents);

    let maleSkopje = data
      .filter(s => s.city === "Skopje")
      .filter(s => s.gender === "Male")
      .filter(n => n.age > 18)
      .map(k => `${k.firstName} ${k.lastName}`);
    h43Node.textContent =
      "Male student full names who live in Skopje and are over 18 years old: ";
    p3Node.textContent = maleSkopje;
    console.log(maleSkopje);

    let femaleAverage = data
      .filter(s => s.gender === "Female")
      .filter(s => s.age > 24)
      .map(n => `${n.firstName}: ` + n.averageGrade);
    h44Node.textContent = "Average grade of females over 24 years old: ";
    p4Node.textContent = femaleAverage;
    console.log(femaleAverage);

    let bMale = data
      .filter(s => s.firstName[0] === "B")
      .filter(s => s.gender === "Male")
      .filter(s => s.averageGrade > 2)
      .map(n => n.firstName);
    h45Node.textContent =
      "Male students whose name starts with 'B' and grade > 2: ";
    p5Node.textContent = bMale;
    console.log(bMale);
  })
  .catch(err => {
    console.log("something went wrong" + err);
  });
