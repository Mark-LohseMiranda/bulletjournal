const divs = document.querySelectorAll('.deletebtn');

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

