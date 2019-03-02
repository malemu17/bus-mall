'use strict'

var catalog  = document.getElementById('catalog');
var allcatalog  = [];

function Catalog (name,filetype) {
  this.filepath = `img/${name}.jpg` || `img/${name}.png` ||`img/${name}.gif`;
  this.name = name;
  this.filetype= filetype;
  this.views = 0;
  allcatalog.push(this);
}

new Catalog('bag');
new Catalog('banana');
new Catalog('bathroom');
new Catalog('boots');
new Catalog('breakfast');
new Catalog('bubblegum');
new Catalog('chair');
new Catalog('cthulhu');
new Catalog('dog-duck');
new Catalog('dragon');
new Catalog('pen');
new Catalog('pet-sweep');
new Catalog('scissors');
new Catalog('shark');
new Catalog('sweep');
new Catalog('tauntaun');
new Catalog('unicorn');
new Catalog('usb');
new Catalog('water-can');
new Catalog('wine-glass');



function showRandomCatalog() {
  var random = Math.floor(Math.random() * allcatalog.length);
  Catalog.src = allcatalog[random].filepath;
  Catalog.alt = allcatalog[random].name;
  Catalog.title = allcatalog[random].name;
  allcatalog[random].views++;
  console.log('current catalog, ', allcatalog[random]);
}

showRandomCatalog();

Catalog.addEventListener('click', handleClick);
function handleClick(event) {
  console.log('target, ', event.target);
  showRandomCatalog();
}
