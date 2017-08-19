var button;
var header;
var body;
var choice;

var students = [
  //"Johnathan",
  "Kevin",
  "Jonathan",
  "Angel",
  "Eric",
  "Janette",
  "Desmond",
  "Ashiya",
  "Monica",
  "Susana",
  "Darriun",
  "Deborah",
  "Thomas",
  //"Charon",
  "Julissa",
  "Kyla",
  "John",
  "Shonica",
  //"Diane",
  "Krystal"
];

var colors = [
  'hotpink',
  'orange',
  'fuchsia', 0,
  'lightblue', 0,
  'black'
];
var cur = 0;

document.addEventListener('DOMContentLoaded', () => {
  console.log('hello rand.js');

  body = document.getElementById('body');
  header = document.getElementById('header');
  button = document.getElementById('button');
  choice = document.getElementById('choice');

  button.addEventListener('click', (event) => {
    choice.innerHTML = '&nbsp;'
    var rand = students[Math.floor(Math.random() * students.length)];
    var x = window.setInterval(() => {
      if (colors[cur] === undefined) {
        window.clearInterval(x);
        cur = 0;
        choice.innerText = rand;
        return;
      }
      if (colors[cur]) header.style.color = colors[cur];
      if (colors[cur-1]) body.style.backgroundColor = colors[cur-1];
      cur += 1;
    }, 200);
  });
});
