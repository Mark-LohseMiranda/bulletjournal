const deleteBtn = document.querySelector("#deleteNote");
const todoList = document.querySelector(".checker");

//get the day from the URL

const day = window.location.toString().split("/")[
  window.location.toString().split("/").length - 1
];

//if delete button is clicked use the day to find the note.id then delete the note

deleteBtn.addEventListener("click", async (event) => {
  await fetch(`/api/notes/${day}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      id = data[0].id;
    });

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

//if todo list is present listen for clicks
//if a list item is clicked grab the todoId and todoItem to use
//to grab the current value of that item then update it to the opposite

if (todoList) {
  todoList.addEventListener("click", async (e) => {
    id = e.target.getAttribute("data-todoId");
    item = e.target.getAttribute("data-todoItem");
    let trueFalse;

    if (id) {
      await fetch(`/api/todos/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => {
          trueFalse = data[item];
        })
        .catch((err) => console.log(err));

      const putObj = {
        [item]: !trueFalse,
      };
      await fetch(`/api/todos/${id}`, {
        method: "PUT",
        body: JSON.stringify(putObj),
        headers: { "Content-Type": "application/json" },
      }).catch((err) => console.log(err));
      location.reload();
    }
  });
}
