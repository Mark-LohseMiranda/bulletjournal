const todoItem = document.querySelector("#todo-item");
const todoList = document.querySelector("#todo-list");
let toDoValue;

toDoValue = document.getElementsByClassName("toDoValue");
if (toDoValue.length === 10) {
  todoItem.style.display = "none";
}

if (todoItem) {
  todoItem.addEventListener("click", (e) => {
    e.preventDefault();
    const li = document.createElement("li");
    const checkLabel = document.createElement("label");
    const checkInput = document.createElement("input");
    const inputField = document.createElement("input");

    checkInput.setAttribute("class", "uk-checkbox");
    checkInput.setAttribute("type", "checkbox");

    inputField.setAttribute(
      "class",
      "uk-input uk-form-blank uk-form-width-medium toDoValue"
    );
    inputField.setAttribute("type", "text");
    inputField.setAttribute("placeholder", "Enter an item...");

    checkLabel.appendChild(inputField);
    li.appendChild(checkLabel);

    todoList.appendChild(li);
    toDoValue = document.getElementsByClassName("toDoValue");
    if (toDoValue.length === 10) {
      todoItem.style.display = "none";
    }
  });
}
