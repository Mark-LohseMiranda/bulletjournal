const notesList = document.querySelector('#allnotes-list')
const d = new Date();
const day = "" + (d.getMonth() + 1) + d.getDate() + d.getFullYear();

// get all notes for the user and display them in a list

function getDay(){
    fetch("/sessions", {
        method:'GET',
    }).then((res) => res.json())
    .then((res) => {
        const id = res.user.id;
        fetch(`api/users/${id}`, {
            method:"GET",
            headers:{"Content-Type": "application/json"}
        }).then((response) => response.json())
        .then((data) => {
            const userNotes = data.notes.map((note) => ({ day: note.day }));
            for(let i = 0; i < userNotes.length; i++) {
                const element = userNotes[i].day;
                const li = document.createElement('li');
                notesList.append(li);
                li.innerHTML = `<li><a href='/day/${element}'>Note for ${element}</a></li>`
            }
        })
    })
};

//check if current day's note exists and if does then change add note to see note

function checkForNote() {
    fetch(`/api/notes/${day}`, {
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

checkForNote();
getDay();