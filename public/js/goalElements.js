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