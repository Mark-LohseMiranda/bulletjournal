const addPage = document.querySelector("#noteCreate");
const addList = document.querySelector("#newList");
const pageArchive = document.querySelector("pageArchive");
const includeSchedule = document.querySelector("#addSchedule");
const includeToDo = document.querySelector("#addToDo");
const includeInspo = document.querySelector("#addInspo");
const includeDump = document.querySelector("#addDump");
const includeGoal = document.querySelector("#addGoal");
const includePostit = document.querySelector("#addPostit");
const d = new Date();
const day = d.getDate();

async function checkForNote() {
  await fetch(`/api/notes/${day}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.length != 0) {
        const replace = `<a href="/day/${day}"><span class="uk-margin-small-right uk-icon"
        uk-icon="icon: plus"></span>See Today's Page</a>`;
        const addNewNote = document.getElementsByClassName("newnote");
        Array.from(addNewNote).forEach(function (element) {
          element.innerHTML = replace;
        });
      }
    });
}

window.onload = checkForNote;

addPage.addEventListener("submit", async (event) => {
  event.preventDefault();
  let note_id;
  await fetch(`/api/notes/${day}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.length != 0) {
        console.log("note already exists");
      } else {
        fetch("/api/notes", {
          method: "POST",
          body: JSON.stringify({ day }),
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
          .then(async (notes) => {
            note_id = notes.id;
            console.log(notes);

            if (includeSchedule.checked) {
              const responseSch = await fetch("/api/schedules", {
                method: "POST",
                body: JSON.stringify({ note_id }),
                headers: { "Content-Type": "application/json" },
              });
              if (!responseSch.ok) {
                alert(responseSch.statusText);
              }
            }
            if (includeToDo.checked) {
              const responseTodo = await fetch("/api/todos", {
                method: "POST",
                body: JSON.stringify({ note_id }),
                headers: { "Content-Type": "application/json" },
              });
              if (!responseTodo.ok) {
                alert(responseTodo.statusText);
              }
            }
            if (includeDump.checked) {
              const responseDump = await fetch("/api/braindumps", {
                method: "POST",
                body: JSON.stringify({ note_id }),
                headers: { "Content-Type": "application/json" },
              });
              if (!responseDump.ok) {
                alert(responseDump.statusText);
              }
            }
            //inspo quote
            if (includeInspo.checked) {
              const responseInspo = await fetch("/api/inspirations", {
                method: "POST",
                body: JSON.stringify({ note_id }),
                headers: { "Content-Type": "application/json" },
              });
              if (!responseInspo.ok) {
                alert(responseInspo.statusText);
              }
            }
            if (includeGoal.checked) {
              const responseGoal = await fetch("/api/goals", {
                method: "POST",
                body: JSON.stringify({ note_id }),
                headers: { "Content-Type": "application/json" },
              });
              if (!responseGoal.ok) {
                alert(responseGoal.statusText);
              }
            }
            if (includePostit.checked) {
              const responsePostit = await fetch("/api/postits", {
                method: "POST",
                body: JSON.stringify({ note_id }),
                headers: { "Content-Type": "application/json" },
              });
              if (!responsePostit.ok) {
                alert(responsePostit.statusText);
              }
            }
            document.location.replace(`/note/${note_id}`);
          });
      }
    });
});

fetch('/sessions', {
  method: 'GET'
}).then((res) => res.json())
.then((res) => {
  const id = res.user.id;
  fetch("/api/users/"+id, {
    method:'GET',
    headers: { "Content-Type": "application/json" }
  })
  .then((response) => response.json())
  .then((data) => {
    const userNotes = data.notes.map(note => ({day:note.day}));
    for (let i = 0; i < userNotes.length; i++) {
      const element = userNotes[i].day;
      let dayId = document.getElementById(`${element}`);
      dayId.setAttribute('style','display:block')
    }
  })
})
