const todoItem = document.querySelector('#todo-item')
const todoList = document.querySelector('todo-list')


todoItem.addEventListener('click', (e) => {
    e.preventDefault();
    const li = document.createElement('li');
    const checkLabel = document.createElement('label');
    const checkInput = document.createElement('input')
    const inputField = document.createElement('input')

    checkInput.setAttribute('class',"uk-checkbox");
    checkInput.setAttribute('type','checkbox');

    inputField.setAttribute('class',"uk-input uk-form-blank uk-form-width-medium" );
    inputField.setAttribute('type','text')
    inputField.setAttribute('placeholder',"Enter an item...");

    checkLabel.appendChild(checkInput, inputField);
    li.appendChild(checkLabel)

    todoList.appendChild(li)

})