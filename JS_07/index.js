// function studentExercise1(myName) {
//   myName = prompt("What is your name");
//   alert(`Hello ${myName}`);
// }

// buttonNode.addEventListener("click", studentExercise1);
// ---- //
// buttonNode.addEventListener("click", function() {
//   let nameInput = prompt("Enter your name:");
//   alert(`Hello from ${nameInput}`);
// });

// let buttonNode = document.getElementById("btn1");

// let showMyName = function(name) {
//   alert(`Hello from ${name}`);
// };

// buttonNode.addEventListener("click", () => {
//   let nameInput = prompt("Enter your name:");
//   showMyName(nameInput);
// });

// // Create button via JS and set class and style to it.
// let secondaryDivNode = document.getElementById("secondaryDiv");
// let button2Node = document.createElement("button");
// secondaryDivNode.append(button2Node);
// button2Node.setAttribute("id", "btn2");

// Student Exercise 2

let inputNode = document.getElementById("input1");
let buttonNode = document.getElementById("btn1");
let h1Node = document.getElementById("h1bro");

let printName = function() {
  h1Node.textContent = inputNode.value;
};

buttonNode.addEventListener("click", printName);

// Student Exercise 3

let phoneNode = document.getElementById("phone");
let nameNode = document.getElementById("name");
let addNode = document.getElementById("addValues");

// let ulNode = document.createElement("ul");
// let liNode = document.createElement("li");

let list = document.getElementById("demo");

// secondaryDiv.append(ulNode);
// ulNode.append(liNode);

let printList = function() {
  let listac = document.getElementById("listac").value;
  let lista = document.createElement("lista");
  lista.appendChild(document.createTextNode(listac));
  list.appendChild(li);
  //   liNode.textContent = `${phoneNode.value}  ${nameNode.value}`;
};

addNode.addEventListener("click", printList);
