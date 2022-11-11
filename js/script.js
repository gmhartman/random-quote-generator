/*** 
 quotes and colors array 
***/
const colors = [
  'blue',
  'green',
  'red',
  'orange',
  'purple'
]

const quotes = [
  {
    quote: "I'm sick of following my dreams, man. I'm just going to ask where they're going and hook up with 'em later.",
    source: "Mitch Hedberg",
    tag: "Comedian"
  },
  {
    quote: "Insomnia sharpens your math skills because you spend all night calculating how much sleep you’ll get if you’re able to ‘fall asleep right now.",
    source: "Anonymous",
    tag: "Unknown"
  },
  {
    quote: "I'm not superstitious, but I am a little stitious.",
    source: "Michael Scott",
    tag: "Regional Manager"
  },
  {
    quote: "I just want to lie on the beach and eat hot dogs. That's all I've ever wanted.",
    source: "Kevin Malone",
    tag: "Accounting",
    year: '2008'
  },
  {
    quote: "If I'm not back in five minutes, just wait longer.",
    source: "Ace Ventura",
    tag: "Pet Detective",
    citation: "Ace Ventura, Pet Detective"
  }
];

// function selects and random phrase using the 'quotes' variable
function getRandomQuote() {
  let selectQuote = Math.floor(Math.random() * 5);
  for (let i = 0; i < quotes.length; i++) {
    let randomQuote = quotes[selectQuote];
    return randomQuote;
  }
}

// print result to the console
console.log(getRandomQuote());

/***
 * function to insert the randomly chosen quote
 * into the HTML, as well as change the background color
***/

function printQuote() {
  //assign randomly chosen quote to variable
let quoteGenerator = getRandomQuote();
// creates html to insert
let insertQuote = `<p class="quote">${quoteGenerator.quote}</p>
                   <p class="source">${quoteGenerator.source}`;
// function for changing the background color using the 'colors' variable
document.body.style.backgroundColor = changeColor();

//conditional statements detecting properties
if (quoteGenerator.hasOwnProperty('citation')) {
  insertQuote += `<span class="citation">${quoteGenerator.citation}</span>`;
}

if (quoteGenerator.hasOwnProperty('year')) {
  insertQuote += `<span class="year">${quoteGenerator.year}</span>`;
}

if (quoteGenerator.hasOwnProperty('tag')) {
  insertQuote += `<span class="tag">, ${quoteGenerator.tag}</span>`;
}

insertQuote += `</p>`;
  
document.getElementById('quote-box').innerHTML = insertQuote;

}


// auto change colors function

function changeColor() {
  return colors[Math.floor(Math.random() * 5)];
}

setInterval(printQuote, 5000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);




