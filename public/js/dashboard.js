const addPage = document.querySelector('#noteCreate')
const addList = document.querySelector('#newList')
const pageArchive = document.querySelector('pageArchive');
const includeSchedule = document.querySelector('#addSchedule')
const includeToDo = document.querySelector('#addToDo')
const includeInspo = document.querySelector('#addInspo')
const includeDump = document.querySelector('#addDump')
const moment = require('moment');



addPage.addEventListener('submit', async (event) => {
  event.preventDefault();
  const response = await fetch('/api/note', {
    method: 'POST',
    body: JSON.stringify(),
    headers: { 'Content-Type': 'application/json' },
  });
  console.log('WORK BITCH');
  if (response.ok) {
    const note_id = response.id;
    console.log(response.id);
    if (includeSchedule.checked) {
      const responseSch = await fetch('/api/schedules', {
        method: 'POST',
        body: JSON.stringify({ note_id }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!responseSch.ok) {
        alert(responseSch.statusText);
      } else {
        console.log('schedule created');
        console.log(responseSch);
      }
    }
    if (includeToDo.checked) {
      const responseTodo = await fetch('/api/todos', {
        method: 'POST',
        body: JSON.stringify({ note_id }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!responseTodo.ok) {
        alert(responseTodo.statusText);
      } else {
        console.log('todo created');
        console.log(responseTodo);
      }
    }
    if (includeDump.checked) {
      const responseDump = await fetch('/api/braindumps', {
        method: 'POST',
        body: JSON.stringify({ note_id }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!responseDump.ok) {
        alert(responseDump.statusText);
      } else {
        console.log('braindump created');
        console.log(responseDump);
      }
    };
    console.log(response);
    document.location.replace('/note');
  } else {
    alert(response.statusText);
  }

});
