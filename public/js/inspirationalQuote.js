// retrieves a quote and puts it on the top of the main page for now

// once pages/db start to take shape this needs to be altered to 
// place the quote into a table 

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
        $(".main").prepend(
          '<div class="quote pure-u-1"><div style="font-style:italic;width:100%;height:auto;color:#DBD8E3;">' +
            data[randomQuote].text +
            '<div style="margin-left:40%;font-style:normal;color:#DBD8E3"> -' +
            author +
            "</div></div></div>"
        );
      });
  }

  module.exports = { getQuote };