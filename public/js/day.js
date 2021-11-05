const deleteBtn = document.querySelector("#deleteNote");
let id;
const day = window.location.toString().split("/")[
  window.location.toString().split("/").length - 1
];

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
