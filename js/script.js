const quoteText = document.querySelector('.text'),
quoteId = document.querySelector('#adviceId'),
quoteBtn = document.querySelector('#dice');


function randomQuote() {
fetch("https://api.adviceslip.com/advice").then(res => res.json()).then(result => {
 console.log(result)
 quoteText.innerHTML = result.slip.advice;
 quoteId.innerHTML ='#' + result.slip.id;
});
}
quoteBtn.addEventListener("click", randomQuote)