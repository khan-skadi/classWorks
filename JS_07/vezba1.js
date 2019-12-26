let nameInputNode = document.getElementById("nameInput");
let phoneInputNode = document.getElementById("phoneInput");
let addBtnNode = document.getElementById("nameInput");
let contactsListNode = document.getElementById("contactsList");

addBtnNode.addEventListener("click", () => {
  let liNode = document.createElement("li");
  liNode.textContent = `${nameInputNode.value} ${phoneInputNode.value}`;
});
