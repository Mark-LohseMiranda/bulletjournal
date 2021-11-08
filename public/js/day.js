const editPage = document.querySelector("#editPage");
const deleteBtn = document.querySelector("#deleteNote");
const todoList = document.querySelector(".checker");
let screenWidth = 0;

//get the day from the URL

const day = window.location.toString().split("/")[
  window.location.toString().split("/").length - 1
];

if (day == dateNow) {
  editPage.removeAttribute("style")
}

//if edit button is clicked move to edit page

editPage.addEventListener("click", async (event) => {
  await fetch(`/api/notes/${day}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      location.href = `/note/${data[0].id}`;
    });
});

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
      })
        .then((response) => {
          if (response.ok) {
            // location.reload();
            return;
          }
        })
        .catch((err) => console.log(err));
    }
  });
}

//dragElement() dragMouseDown() elementDrag() closeDragElement() are mostly from https://www.w3schools.com/howto/howto_js_draggable.asp

function dragElement(elmnt) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0,
    topvw = 0,
    leftvw = 0,
    saveCSS = "";

  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  async function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
    // console.log(elmnt.style.cssText);
    topvw =
      ((elmnt.offsetTop - pos2) * 100) / document.documentElement.clientWidth +
      "vw";
    leftvw =
      ((elmnt.offsetLeft - pos2) * 100) / document.documentElement.clientWidth +
      "vw";
    saveCSS = `position:absolute;top:${topvw}; left:${leftvw};`;
    await fetch(
      `/api/${elmnt.getAttribute("data-thing")}/${elmnt.getAttribute(
        "data-id"
      )}`,
      {
        method: "PUT",
        body: JSON.stringify({ css: saveCSS }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => console.log("css saved"))
      .catch((err) => console.log(err));
  }
}

//if the element is present get the saved CSS and apply, then start the moving functions

async function movingToTheGroovin() {
  screenWidth = document.documentElement.clientWidth;
  if (screenWidth > 767) {
    await fetch(`/api/notes/${day}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then(async (data) => {
        if (document.getElementById("inspoMoving")) {
          document
            .getElementById("inspoMoving")
            .setAttribute("style", `${data[0].inspirations[0].css}`);
          dragElement(document.getElementById("inspoMoving"));
        }
        if (document.getElementById("braindumpMoving")) {
          document
            .getElementById("braindumpMoving")
            .setAttribute("style", `${data[0].braindumps[0].css}`);
          dragElement(document.getElementById("braindumpMoving"));
        }
        if (document.getElementById("postitMoving")) {
          document
            .getElementById("postitMoving")
            .setAttribute("style", `${data[0].post_its[0].css}`);
          dragElement(document.getElementById("postitMoving"));
        }
        if (document.getElementById("goalMoving")) {
          document
            .getElementById("goalMoving")
            .setAttribute("style", `${data[0].goals[0].css}`);
          dragElement(document.getElementById("goalMoving"));
        }
        if (document.getElementById("scheduleMoving")) {
          document
            .getElementById("scheduleMoving")
            .setAttribute("style", `${data[0].schedules[0].css}`);
          dragElement(document.getElementById("scheduleMoving"));
        }
        if (document.getElementById("todoMoving")) {
          document
            .getElementById("todoMoving")
            .setAttribute("style", `${data[0].todos[0].css}`);
          dragElement(document.getElementById("todoMoving"));
        }
      });
  }
}

//listen for browser resize; if size is greater than 767 start the move
//otherwise remove styling for smaller screens

window.addEventListener("resize", (e) => {
  screenWidth = document.documentElement.clientWidth;
  if (screenWidth > 767) {
    movingToTheGroovin();
  } else {
    if (document.getElementById("inspoMoving")) {
      document.getElementById("inspoMoving").removeAttribute("style");
    }
    if (document.getElementById("braindumpMoving")) {
      document.getElementById("braindumpMoving").removeAttribute("style");
    }
    if (document.getElementById("postitMoving")) {
      document.getElementById("postitMoving").removeAttribute("style");
    }
    if (document.getElementById("goalMoving")) {
      document.getElementById("goalMoving").removeAttribute("style");
    }
    if (document.getElementById("scheduleMoving")) {
      document.getElementById("scheduleMoving").removeAttribute("style");
    }
    if (document.getElementById("todoMoving")) {
      document.getElementById("todoMoving").removeAttribute("style");
    }
  }
});

movingToTheGroovin();
