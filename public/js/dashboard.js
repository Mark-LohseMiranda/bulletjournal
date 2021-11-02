const addPage = document.querySelector('#confirmPageAdd')
const addList = document.querySelector('#newList')
const pageArchive = document.querySelector('pageArchive');
const includeSchedule = document.querySelector('#addSchedule')
const includeToDo = document.querySelector('#addToDo')
const includeInspo = document.querySelector('#addInspo')
const includeDump = document.querySelector('#addDump')
const moment = require('moment');

const pageAdd = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/note', {
        method: 'POST',
        body: JSON.stringify(),
        headers: {'Content-Type' : 'application/json'},
    });
    if(response.ok) {
        const note_id = response.id;
        console.log(response.id);
        if(includeSchedule.checked) {
            const responseSch = await fetch('/api/schedules', {
                method: 'POST',
                body: JSON.stringify({note_id}),
             headers: {'Content-Type' : 'application/json'},
            });
            if(!responseSch.ok) {
                alert(responseSch.statusText);
            };
        }
        if(includeToDo.checked) {
            const responseTodo = await fetch('/api/todos', {
                method: 'POST',
                body: JSON.stringify({note_id}),
             headers: {'Content-Type' : 'application/json'},
            });
            if(!responseTodo.ok) {
                alert(responseTodo.statusText);
            };
        }
        if(includeDump.checked) {
            const responseDump = await fetch('/api/braindumps', {
                method: 'POST',
                body: JSON.stringify({note_id}),
             headers: {'Content-Type' : 'application/json'},
            });
            if(!responseDump.ok) {
                alert(responseDump.statusText);
            };
        };

        document.location.replace('/note');
    } else {
        alert(response.statusText);
    }

addPage.addEventListener('click', (e) => {
  document.location.replace('/note')
  
})

}


addPage.addEventListener('click', pageAdd);
