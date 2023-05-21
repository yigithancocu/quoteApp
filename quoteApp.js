let quote=document.querySelector("#quote");
let author=document.getElementById("author");
let btn=document.getElementById("btn");

const url="https://api.quotable.io/random";

let getQuote= () => {
    fetch(url).then((data) => data.json())
    .then((item) => {
        quote.innerText=item.content;
        author.innerText=item.author;
    });
};

btn.addEventListener("click",getQuote);