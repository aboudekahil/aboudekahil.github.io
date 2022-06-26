
let changeQuote = async () => {
  let quote = await fetch('https://api.quotable.io/random');
  let quoteJson = await quote.json();
  let quoteText = quoteJson.content;
  let quoteAuthor = quoteJson.author;
  document.getElementsByTagName('q')[0].innerHTML = quoteText;
  document.getElementsByTagName('cite')[0].innerHTML = quoteAuthor;
};

document.getElementById("Q").addEventListener("click", changeQuote);
changeQuote();
