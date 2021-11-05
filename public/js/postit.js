const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const files = document.querySelector("[type=file]").files;
  let formData = new FormData();

  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    console.log(file);
    formData.append("file", file);
    formData.append("upload_preset", "docs_upload_example_us_preset");
    console.log(formData);
    fetch('/cloud', {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        document.getElementById("data").innerHTML += data;
      });
  }
});