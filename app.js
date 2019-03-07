'use strict'

var catalog  = document.getElementById('catalog');
var allCatalog  = [];

function Catalog (name,filetype,filepath) {
  this.filepath = `img/${name}.jpg` || `img/${name}.png` ||`img/${name}.gif`;
  this.name = name;
  this.filetype= filetype;
  this.views = 0;
  allCatalog.push(this);
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
  var random = Math.floor(Math.random() * allCatalog.length);
  catalog.src = allCatalog[random].filepath;
  catalog.alt = allCatalog[random].name;
  catalog.title = allCatalog[random].name;
  allCatalog[random].views++;
  console.log('current catalog,', allCatalog[random]);
}

showRandomCatalog();

catalog.addEventListener('click', handleClick);
function handleClick(event) {
  
    console.log('target, ', event.target);
  
  showRandomCatalog();
  
}



