const divs = document.querySelectorAll('.deletebtn');
const d = new Date();
const day = "" + (d.getMonth() + 1) + d.getDate() + d.getFullYear();

// deletes which ever list was clicked

divs.forEach(el => el.addEventListener('click', event => {
    console.log(event.currentTarget.getAttribute("data-id"))
    fetch(`/api/lists/${event.currentTarget.getAttribute("data-id")}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          location.href = "/longterm";
        } else {
          alert("uh oh, delete didn't go go");
        }
      });
}));

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