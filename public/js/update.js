const saveBtn = document.querySelector("#saveData");
const deleteBtn = document.querySelector("#deleteNote");
const timeEight = document.querySelector("#timeEight");
const timeNine = document.querySelector("#timeNine");
const timeTen = document.querySelector("#timeTen");
const timeEleven = document.querySelector("#timeEleven");
const timeTwelve = document.querySelector("#timeTwelve");
const timeThirteen = document.querySelector("#timeThirteen");
const timeFourteen = document.querySelector("#timeFourteen");
const timeFifteen = document.querySelector("#timeFifteen");
const timeSixteen = document.querySelector("#timeSixteen");
const timeSeventeen = document.querySelector("#timeSeventeen");
const timeEighteen = document.querySelector("#timeEighteen");
const timeTwenty = document.querySelector("#timeTwenty");
const timeNineteen = document.querySelector("#timeNineteen");
const braindumpText = document.querySelector("#braindumpText");

let scheduleId;
let braindumpId;
let todoId;
let inspoId;
let goalId;

//gets associated note id from url

const id = window.location.toString().split("/")[
  window.location.toString().split("/").length - 1
];

//deletes the currently displayed note

deleteBtn.addEventListener("click", (event) => {
  fetch(`/api/notes/${id}`, {
    method: "DELETE",
  }).then((res) => {
    if (res.ok) {
      location.href = "/dashboard";
    } else {
      alert("uh oh, delete didn't go go");
    }
  });
});

//updates note elements if they exist

saveBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  const d = new Date();
  await fetch(`/api/notes/${d.getDate()}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then(async (data) => {
      console.log(data);
      if (data[0].schedules[0]) {
        scheduleId = data[0].schedules[0].id;
        const contentData = {
          content8am: timeEight.value,
          content9am: timeNine.value,
          content10am: timeTen.value,
          content11am: timeEleven.value,
          content12pm: timeTwelve.value,
          content1pm: timeThirteen.value,
          content2pm: timeFourteen.value,
          content3pm: timeFifteen.value,
          content4pm: timeSixteen.value,
          content5pm: timeSeventeen.value,
          content6pm: timeEighteen.value,
          content7pm: timeNineteen.value,
          content8pm: timeTwenty.value,
        };
        fetch(`/api/schedules/${scheduleId}`, {
          method: "PUT",
          body: JSON.stringify(contentData),
          headers: { "Content-Type": "application/json" },
        }).catch((err) => console.log(err));
      }
      if (data[0].braindumps[0]) {
        braindumpId = data[0].braindumps[0].id;
        fetch(`/api/braindumps/${braindumpId}`, {
          method: "PUT",
          body: JSON.stringify({ content: braindumpText.value }),
          headers: { "Content-Type": "application/json" },
        }).catch((err) => console.log(err));
      }
      if (data[0].todos[0]) {
        todoId = data[0].todos[0].id;
        const toDoValue = document.getElementsByClassName("toDoValue");
        let postObj = {};
        for (i = 0; i < toDoValue.length; i++) {
          postObj["content" + (i + 1)] = toDoValue[i].value;
        }
        fetch(`/api/todos/${todoId}`, {
          method: "PUT",
          body: JSON.stringify(postObj),
          headers: { "Content-Type": "application/json" },
        }).catch((err) => console.log(err));
      }
      if (data[0].inspirations[0]) {
        inspoId = data[0].inspirations[0].id;
        const quoteText = document.getElementById("quoteText").textContent;
        const quoteAuthor = document
          .getElementById("quoteAuthor")
          .textContent.trim();
        content = quoteText.concat(quoteAuthor);

        fetch(`/api/inspirations/${inspoId}`, {
          method: "PUT",
          body: JSON.stringify({ content }),
          headers: { "Content-Type": "application/json" },
        }).catch((err) => console.log(err));
      }
      if (data[0].goals[0]) {
        goalId = data[0].goals[0].id;
        const goalValue = document.getElementsByClassName("goalValue");
        postObj = {};
        for (i = 0; i < goalValue.length; i++) {
          postObj["content" + (i + 1)] = goalValue[i].value;
        }
        fetch(`/api/goals/${goalId}`, {
          method: "PUT",
          body: JSON.stringify(postObj),
          headers: { "Content-Type": "application/json" },
        }).catch((err) => console.log(err));
      }
      if (data[0].post_its[0]) {
        postitID = data[0].post_its[0].id;
        const postitValue = document.getElementsByClassName("postitValue");
        fetch(`/api/postits/${postitID}`, {
          method: "PUT",
          body: JSON.stringify({ content: postitValue.value }),
          headers: { "Content-Type": "application/json" },
        }).catch((err) => console.log(err));
      }
      location.href = "/dashboard";
    });
});
