// retrieves a quote and puts it in a card

const quote = document.querySelector("#randomQuote");
function getQuote() {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var randomQuote = Math.floor(Math.random() * 1643);
      var author;
      if (!data[randomQuote].author) {
        author = "Unknown";
      } else {
        author = data[randomQuote].author;
      }
      quote.innerHTML =
        `<div class="quote pure-u-1"><div id="quoteText" style="font-style:italic;width:100%;height:auto;"> ${data[randomQuote].text} </div><div id="quoteAuthor" style="margin-left:40%;font-style:normal;">
                ${author} </div></div>`;
    });
}
getQuote();