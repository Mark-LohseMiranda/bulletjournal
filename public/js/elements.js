const todoItem = document.querySelector('#todo-item')
const goalAdd = document.querySelector('#goal-item');
const goalList = document.querySelector('goal-list')

if (todoItem) {
todoItem.addEventListener('click', (e) => {
    e.preventDefault();
    const li = document.createElement('li');
    const checkLabel = document.createElement('label');
    const checkInput = document.createElement('input')
    const inputField = document.createElement('input')

    checkInput.setAttribute('class',"uk-checkbox");
    checkInput.setAttribute('type','checkbox');

    inputField.setAttribute('class',"uk-input uk-form-blank uk-form-width-medium toDoValue" );
    inputField.setAttribute('type','text')
    inputField.setAttribute('placeholder',"Enter an item...");

    checkLabel.appendChild(checkInput);
    checkLabel.appendChild(inputField)
    li.appendChild(checkLabel)

    todoList.appendChild(li)
});
}

const goalAdd = document.querySelector('#goal-item');
const goalList = document.querySelector('goal-list')

if (goalAdd) {
goalAdd.addEventListener('click', (e) => {
  e.preventDefault();
  const li = document.createElement('li');
  const goalLabel = document.createElement('label');
  const starSpan = document.createElement('span')
  const inputField = document.createElement('input')

  starSpan.setAttribute('uk-icon', "icon: star");

  inputField.setAttribute('class', "uk-input uk-form-blank uk-form-width-medium");
  inputField.setAttribute('type', 'text')
  inputField.setAttribute('placeholder', "Enter an item...");

  goalLabel.appendChild(checkInput);
  goalLabel.appendChild(inputField)
  li.appendChild(goalLabel)

  goalList.appendChild(li)

})
}




// retrieves a quote and puts it on the top of the main page for now
// once pages/db start to take shape this needs to be altered to
// place the quote into a table
const quote = document.querySelector("#randomQuote");
function getQuote() {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var randomQuote = Math.floor(Math.random() * 1643);
      var author;
      if (!data[randomQuote].author) {
        author = "Unknown";
      } else {
        author = data[randomQuote].author;
      }
      quote.innerHTML =
        `<div class="quote pure-u-1"><div style="font-style:italic;width:100%;height:auto;"> ${data[randomQuote].text} <div style="margin-left:40%;font-style:normal;"> -
                ${author} </div></div></div>`;
    });
}
getQuote();