let userInput = prompt("What would you like to drink ?");
let quantity = prompt(`How many drinks ${userInput} would you like ?`);

quantity = parseInt(quantity);

if (!isNaN(quantity)) {
  switch (userInput) {
    case "coffee":
      let price = 2;
      alert(
        `Type: ${userInput}, Quantity: ${quantity}, Total: ${price * quantity}`
      );
      break;
    case "water":
      let price = 3;
      alert(
        `Type: ${userInput}, Quantity: ${quantity}, Total: ${price * quantity}`
      );
      break;
    case "wine":
      let price = 4;
      alert(
        `Type: ${userInput}, Quantity: ${quantity}, Total: ${price * quantity}`
      );
      break;
    case "juice":
      let price = 5;
      alert(
        `Type: ${userInput}, Quantity: ${quantity}, Total: ${price * quantity}`
      );
      break;
    default:
      alert(`We are not serving ${userInput}`);
      break;
  }
} else {
  alert("Please enter a number");
}

function sayHello() {
  alert("Hello");
}
