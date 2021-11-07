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
const day = "" + (d.getMonth() + 1) + d.getDate() + d.getFullYear();

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

//gets all notes for user and places link on calendar showing which days

function getIcon() {
  fetch("/sessions", {
    method: "GET",
  })
    .then((res) => res.json())
    .then(async (res) => {
      const id = res.user.id;
      fetch("/api/users/" + id, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => {
          const userNotes = data.notes.map((note) => ({ day: note.day }));
          for (let i = 0; i < userNotes.length; i++) {
            const element = userNotes[i].day;
            let dayId = document.getElementById(`${element}`);
            if (dayId) {
              let old = dayId.innerHTML;
              let newhtml = `<a class="uk-icon-button calendar-note" href="day/${element}">${old}</a>`;
              dayId.innerHTML = newhtml;
            }
          }
        });
    });
}

checkForNote();
getIcon();

// Creates a note for today

if (addPage) {
  addPage.addEventListener("submit", async (event) => {
    event.preventDefault();
    let note_id;
    await fetch("/api/notes", {
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
        location.href = `/note/${note_id}`;
      });
  });
}

//the rest is mostly from https://medium.com/@nitinpatel_20236/challenge-of-building-a-calendar-with-pure-javascript-a86f1303267d

today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");

months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);

function next() {
  currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  showCalendar(currentMonth, currentYear);
  getIcon();
}

function previous() {
  currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  showCalendar(currentMonth, currentYear);
  getIcon();
}

function jump() {
  currentYear = parseInt(selectYear.value);
  currentMonth = parseInt(selectMonth.value);
  showCalendar(currentMonth, currentYear);
  getIcon();
}

function showCalendar(month, year) {
  let firstDay = new Date(year, month).getDay();

  tbl = document.getElementById("calendar-body"); // body of the calendar

  // clearing all previous cells
  tbl.innerHTML = "";

  // filing data about month and in the page via DOM.
  monthAndYear.innerHTML = months[month] + " " + year;
  selectYear.value = year;
  selectMonth.value = month;

  // creating all cells
  let date = 1;
  for (let i = 0; i < 6; i++) {
    // creates a table row
    let row = document.createElement("tr");

    //creating individual cells, filing them up with data.
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        cell = document.createElement("td");
        cellText = document.createTextNode("");
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (date > daysInMonth(month, year)) {
        break;
      } else {
        cell = document.createElement("td");
        cellText = document.createTextNode(date);
        if (
          date === today.getDate() &&
          year === today.getFullYear() &&
          month === today.getMonth()
        ) {
          cellText = document.createTextNode("-" + date + "-");
          cell.classList.add("uk-text-bold");
        } // color today's date
        cell.appendChild(cellText);
        cell.setAttribute("id", "" + (month + 1) + date + year);
        row.appendChild(cell);
        date++;
      }
    }

    tbl.appendChild(row); // appending each row into calendar body.
  }
}

// check how many days in a month code from https://dzone.com/articles/determining-number-days-month
function daysInMonth(iMonth, iYear) {
  return 32 - new Date(iYear, iMonth, 32).getDate();
}
