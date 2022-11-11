/**
 * TO-DO LIST
 */

let todo = ["Eat", "Bath", "Play", "Procrastinate", "Watch", "Sleep"];

i = 0;

while (true) {
  let item = todo[i];
  createLiElem(item);
  i++;
  if (i == todo.length) {
    break;
  }
}

// Loops through the grocery list to add it to the checklist
function createLiElem(item) {
  //   Create <li></li>
  var list = document.createElement("li");
  list.classList.add("list-group-item");

  // Create <input>
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "list";
  checkbox.value = "list";
  checkbox.classList.add("input-list");

  //   Create <label></label>
  var label = document.createElement("label");
  label.htmlFor = item;
  label.appendChild(document.createTextNode(item));
  label.classList.add("label-list");

  //   Append
  var container = document.getElementById("todo-list");
  container.appendChild(list);
  list.appendChild(checkbox);
  list.appendChild(label);
}

// Add additional  items
document.getElementById("button-addon2").onclick = function () {
  var item = document.getElementById("new-item").value;

  //   Disables adding an item when input field is empty
  if (item == "") {
    return;
  } else {
  }

  createLiElem(item);
};

// Clear input field after submission
const btn = document.getElementById("button-addon2");

btn.addEventListener("click", function handleClick(event) {
  // 👇️ if you are submitting a form (prevents page reload)
  event.preventDefault();

  const firstNameInput = document.getElementById("new-item");

  // Send value to server
  console.log(firstNameInput.value);

  // 👇️ clear input field
  firstNameInput.value = "";
});
