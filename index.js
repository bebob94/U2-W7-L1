let newName = document.getElementById("name");
let newSurname = document.getElementById("surname");
let newDateOfBirth = document.getElementById("DateOfBirth");
let newButton = document.getElementById("myButton");
let myTable = document.getElementById("myTable");

const Utente = function () {
  this.name = "";
  this.surname = "";
  this.DateOfBirth = "";
};

let currentUser = new Utente();

newButton.onclick = function () {
  currentUser.name = newName.value;
  currentUser.surname = newSurname.value;
  currentUser.DateOfBirth = newDateOfBirth.value;
  let newTbody = document.createElement("tr");
  newTbody.innerHTML = `
  <td>${currentUser.name}</td>
  <td>${currentUser.surname}</td>
  <td>${currentUser.DateOfBirth}</td>
  
  `;

  myTable.appendChild(newTbody);
  myTable.classList.add("createTable");
  newName.value = "";
  newSurname.value = "";
};
