const addPage = document.querySelector("#noteCreate");
const addList = document.querySelector("#newList");
const pageArchive = document.querySelector("pageArchive");
const includeSchedule = document.querySelector("#addSchedule");
const includeToDo = document.querySelector("#addToDo");
const includeInspo = document.querySelector("#addInspo");
const includeDump = document.querySelector("#addDump");
const includeGoal = document.querySelector("#addGoal");




if (addPage) {
addPage.addEventListener("submit", async (event) => {
  event.preventDefault();
  let note_id;
  const d = new Date()
  const day = d.getDate()
  await fetch(`/api/notes/${day}`, {
    method:"GET",
    headers:{'Content-Type':'application/json'}
  }).then(response => response.json()).then(data =>{
    if(data.length != 0) {
      console.log('note already exists')
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
          document.location.replace(`/note/${note_id}`);
        });

    }
  })
});
}
