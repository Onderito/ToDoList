const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Merci d'ajouter un texte");
  } else {
    let li = document.createElement("li");
    // ici nous créons un élément li
    li.innerHTML = inputBox.value;
    // ici nous ajoutons le texte de l'input dans l'élément li
    listContainer.appendChild(li);
    // ici nous ajoutons l'élément li dans le conteneur ul
    let span = document.createElement("span");
    // ici nous créons un élément span
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    // ici nous ajoutons l'élément span dans l'élément li
  }
  inputBox.value = "";
  // ici nous vidons l'input
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      // ici nous vérifions si l'élément cliqué est un li
      e.target.classList.toggle("checked");
      // ici nous ajoutons la classe checked à l'élément li lors du clique sur celui-ci
      saveData();
    } else if (e.target.tagName === "SPAN") {
      // ici nous vérifions si l'élément cliqué est un span
      e.target.parentElement.remove();
      // ici nous supprimons l'élément li lors du clique sur le span
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
  // ici nous enregistrons les données dans le localStorage
}

function showList() {
  listContainer.innerHTML = localStorage.getItem("data");
  // ici nous affichons les données du localStorage
}
showList();
