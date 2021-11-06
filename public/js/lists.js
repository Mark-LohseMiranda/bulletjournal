const saveList = document.querySelector('#savePage');

saveList.addEventListener("click", (event) => {
    event.preventDefault();
    const contentData = {
        title:document.querySelector('#listTitle').value,
        content1:document.querySelector('#listText1').value,
        content2:document.querySelector('#listText2').value,
        content3:document.querySelector('#listText3').value,
        content4:document.querySelector('#listText4').value,
        content5:document.querySelector('#listText5').value,
        content6:document.querySelector('#listText6').value,
        content7:document.querySelector('#listText7').value,
        content8:document.querySelector('#listText8').value,
        content9:document.querySelector('#listText9').value,
        content10:document.querySelector('#listText10').value,
    };
    fetch('/api/lists/', {
      method: "POST",
      body: JSON.stringify(contentData),
      headers: { "Content-Type": "application/json" }
    }).then((res) => {
      if (res.ok) {
        alert("list saved!");
        location.href = "/longterm";
      } else {
        alert("uh oh, save didn't go go");
      }
    });
});