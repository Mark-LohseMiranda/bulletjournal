const addPage = document.querySelector('#noteCreate');
const addList = document.querySelector('#newList');
const pageArchive = document.querySelector('pageArchive');
const includeSchedule = document.querySelector('#addSchedule');
const includeToDo = document.querySelector('#addToDo');
const includeInspo = document.querySelector('#addInspo');
const includeDump = document.querySelector('#addDump');



addPage.addEventListener('submit', async (event) => {
    event.preventDefault();
    let note_id;
    fetch('/api/notes', {
        method: 'POST',
        body: JSON.stringify(),
        headers: {'Content-Type' : 'application/json'},
    }).then((response) => response.json())
    .then((notes)=> {
        note_id = notes.id;
        console.log(notes.id);
    })
   
        if(includeSchedule.checked) {
            const responseSch = await fetch('/api/schedules', {
                method: 'POST',
                body: JSON.stringify({note_id}),
             headers: {'Content-Type' : 'application/json'},
            });
            if(!responseSch.ok) {
                alert(responseSch.statusText);
            } 
        }
        if(includeToDo.checked) {
            const responseTodo = await fetch('/api/todos', {
                method: 'POST',
                body: JSON.stringify({note_id}),
             headers: {'Content-Type' : 'application/json'},
            });
            if(!responseTodo.ok) {
                alert(responseTodo.statusText);
            } 
        }
        if(includeDump.checked) {
            const responseDump = await fetch('/api/braindumps', {
                method: 'POST',
                body: JSON.stringify({note_id}),
             headers: {'Content-Type' : 'application/json'},
            });
            if(!responseDump.ok) {
                alert(responseDump.statusText);
            } 
        };
        // document.location.replace('/note');
    

});
