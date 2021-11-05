const goalAdd = document.querySelector('#goal-item');
const goalList = document.querySelector('#goals-ul')
let goalValue

if (goalAdd) {
    goalAdd.addEventListener('click', (e) => {
      e.preventDefault();
      const li = document.createElement('li');
      const goalLabel = document.createElement('label');
      const starSpan = document.createElement('span')
      const inputField = document.createElement('input')
    
      starSpan.setAttribute('uk-icon', "icon: star");
    
      inputField.setAttribute('class', "uk-input uk-form-blank uk-form-width-medium goalValue");
      inputField.setAttribute('type', 'text')
      inputField.setAttribute('placeholder', "Enter an item...");
    
      goalLabel.appendChild(starSpan);
      goalLabel.appendChild(inputField)
      li.appendChild(goalLabel)
    
      goalList.appendChild(li)
      goalValue = document.getElementsByClassName('goalValue');
        if (goalValue.length === 10){
            goalAdd.style.display = 'none';
        }
    
    })
    }