// Create a table whose every 2nd row has a darker color.

function createTable(rows, columns, htmlElement, arr) {
  let tbl = document.createElement("table");
  let tbdy = document.createElement("tbody");

  tbl.style.width = "100%";
  tbl.style.height = "100px";
  //   tbl.setAttribute("border", "1");

  for (let i = 0; i < rows; i++) {
    let tr = document.createElement("tr");

    for (let j = 0; j < columns; j++) {
      let td = document.createElement("td");
      td.appendChild(document.createTextNode(arr[i]));
      tr.appendChild(td);
      td.setAttribute("style", "border: 2px solid black;");
    }
    if (i % 2 !== 0) {
      tr.style.backgroundColor = "gray";
    }
    tbdy.appendChild(tr);
  }

  tbl.appendChild(tbdy);
  htmlElement.appendChild(tbl);
}

createTable(4, 1, document.getElementById("root"), [
  "Reykjavík",
  "	Kópavogur",
  "Hafnarfjörður",
  "	Akureyri"
]);

// function createTable() {
//     let rootNode = document.getElementsByTagName("body")[0];
//     let tbl = document.createElement("table");
//     let tbdy = document.createElement("tbody");
//     rootNode.classList.add("grayColor");

//     tbl.style.width = "100%";
//     tbl.setAttribute("border", "1");

//     for (let i = 0; i < 4; i++) {
//       let tr = document.createElement("tr");
//       for (let j = 0; j < 1; j++) {
//         let td = document.createElement("td");
//         td.appendChild(document.createTextNode("\u0020"));
//         tr.appendChild(td);
//       }
//       if (i % 2 !== 0) {
//         tr.style.backgroundColor = "gray";
//       }
//       tbdy.appendChild(tr);
//     }

//     tbl.appendChild(tbdy);
//     rootNode.appendChild(tbl);
//   }

//   createTable();

//Task 1, Homework Part 2
// function createList() {
//     const list = [6, "Khan", 2, "Skadi", 5];

//     let rootNode = document.getElementById("root");
//     let ulNode = document.createElement("ul");

//     for (let i = 0; i < list.length; i++) {
//       let liNode = document.createElement("li");
//       ulNode.appendChild(liNode);
//       liNode.append(list[i]);
//     }
//     rootNode.append(ulNode);
//   }

function createList(arr, htmlElement) {
  let ulNode = document.createElement("ul");
  let liNode;
  ulNode.setAttribute("style", "list-style: none;");
  // For-of loop
  for (const el of arr) {
    liNode = document.createElement("li");
    liNode.textContent = el;
    ulNode.append(liNode);
  }

  htmlElement.append(ulNode);
  // For loop
  for (let i = 0; i < arr.length; i++) {
    liNode = document.createElement("li");
    liNode.append(arr[i]);
    ulNode.appendChild(liNode);
  }

  htmlElement.append(ulNode);
}

createList([6, 14, "Khan", "Skadi"], document.getElementById("listing"));

// Funkcijata sekogas treba da prima Kontekst,a vnatre da ima samo logika.
// I koga ke se povika da moze da se povika konkretno samo toa so ti treba i da moze
// da raboti kaj so ke sakas spored Kontekstot i Argumentite sto ke gi vnesis.

function recipe() {
  // Tuka fali
  rootNode.append(titleNode);

  let recipeInput = prompt("What is the name of the recipe");
  let ingNumInput = prompt("How many igredients do you need ?");

  let ingredients = [];

  for (let i = 0; i < parseInt(ingNumInput); i++) {
    let ingredientName = prompt(`What is the name of the ${ingNumInput}`);
    ingredients.push(ingredientName);
  }
  titleNode.textContent = recipeInput;

  let tableNode = document.createElement("table");
  rootNode.append(tableNode);
  let theadNode = document.createElement("thead");
  tableNode.append(thead);
  let tbodyNode = document.createElement("tbody");
  tableNode.append(tbody);

  for (let i = 0; i < ingredients.length; i++) {
    let trNode = document.createElement("tr");
    tbodyNode.append(trNode);

    let td = document.createElement("td");
    trNode.append(td);
    tdNode.textContent = i + 1;

    let tdIngNode = document.createElement("td");
    trNode.append(tdIngNode);
    tdIngNode.textContent = ingredients[i];
  }

  //   ingredients.forEach((e, i) => {
  // Za vo advanced
  //   })
}

recipe();
