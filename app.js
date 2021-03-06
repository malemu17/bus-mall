
'use strict'

//  main array

var allProduct = [];
var viewed = [];

// Click counter to 25.

var totalClicks = 0;
var container = document.getElementById('Product_container');
var pictures = [document.getElementById('left'),
document.getElementById('center'),
document.getElementById('right')
];
var list = document.getElementById('productlist');

// Create constructor function for the Product images.

function Catalog(name, filepath) {

  this.filepath = filepath; /*`img/${name}.jpg`;*/
  //this.filepath= 'img/'+ name;
  this.name = name;
  this.votes = 0;

  this.views = 0;

  allProduct.push(this);
  //persit data in local storage

}

new Catalog('bag', 'img/bag.jpg');
new Catalog('banana', 'img/banana.jpg');
new Catalog('bathroom', 'img/bathroom.jpg');
new Catalog('boots', 'img/boots.jpg');
new Catalog('breakfast', 'img/breakfast.jpg');
new Catalog('bubblegum', 'img/bubblegum.jpg');
new Catalog('chair', 'img/chair.jpg');
new Catalog('cthulhu', 'img/cthulhu.jpg');
new Catalog('dog-duck', 'img/dog-duck.jpg');
new Catalog('dragon', 'img/dragon.jpg');
new Catalog('pen', 'img/pen.jpg');
new Catalog('pet-sweep', 'img/pet-sweep.jpg');
new Catalog('scissors', 'img/scissors.jpg');
new Catalog('shark', 'img/shark.jpg');
new Catalog('sweep', 'img/sweep.png');
new Catalog('tauntaun', 'img/tauntaun.jpg');
new Catalog('unicorn', 'img/unicorn.jpg');
new Catalog('usb', 'img/usb.gif');
new Catalog('water-can', 'img/water-can.jpg');
new Catalog('wine-glass', 'img/wine-glass.jpg');


if (localStorage.saveAll) {
  console.log('localStorage');
  allProduct = localStorage.getItem('saveAll');
  var allProduct = JSON.parse(this.allProduct);
  //console.log(this.allProduct);
} else {
  console.log('From scratch');
  for (var i = 0; i < allProduct.length; i++) {
    allProduct = this.allProduct;
  }
}
// Function Declarations
// Randomize the images.
// Make sure we get 3 random pictures/indexes.

function displayPictures() {
  function makerandom() {
    return Math.floor(Math.random() * allProduct.length);
  }

  while (viewed.length < 6) {
    var random = makerandom();
    while (!viewed.includes(random)) {
      viewed.push(random);
    }
  }
  for (var i = 0; i < 3; i++) {
    var temp = viewed.shift()
    console.log(temp);
    pictures[i].src = allProduct[temp].filepath;
    pictures[i].alt = allProduct[temp].name;
    pictures[i].name = allProduct[temp].name;
    allProduct[i].views += 1;

  }
}

//function handler that keeps track of the clicks.

function handleClick(event) {
  // Let the user know if they didn't click on an image.
  if (event.target === container) {
    return alert('Be sure to click on an image.');
  }
  totalClicks += 1;
  console.log(totalClicks);
  // Make sure that we have a way to remove the event listener.
  if (totalClicks >= 25) {
    for (var i = 0; i < 3; i++) {
      pictures[i].removeEventListener('click', handleClick);
      pictures[i].style.display = 'none';
    }
    //  container.removeEventListener('click', handleClick);
    // 	container.style.display = 'none';
    showList();
    createChart();
  }

  displayPictures();

  for (var i = 0; i < allProduct.length; i++) {
    // console.log(event.target.alt, "compare", allProduct[i].name);
    if (event.target.alt === allProduct[i].name) {
      allProduct[i].votes += 1;
      console.log(event.target.name + ' has ' + allProduct[i].votes + ' votes in ' + allProduct[i].views + ' views');
    }
  }
}
displayPictures();


var stringifyTotalClicks = JSON.stringify(allProduct);
localStorage.setItem('saveAll', stringifyTotalClicks);




displayPictures();


function showList() {
  for (var i = 0; i < allProduct.length; i++) {
    var liEl = document.createElement('li');
    var conversion = (allProduct[i].votes / allProduct[i].views * 100).toFixed(1);
    if (isNaN(conversion)) {
      conversion = 0;
    }
    liEl.textContent = allProduct[i].name + ' has ' + allProduct[i].votes + ' votes in ' + allProduct[i].views + ' views, for a click-through conversion rate of ' + conversion + '%';

    if (conversion > 49) {
      liEl.style.color = 'white';
      liEl.style.backgroundColor = "#2E89A7";
    }

    if (conversion < 30) {
      liEl.style.color = 'white';
      liEl.style.backgroundColor = 'red';
    }

    list.appendChild(liEl);

  }
}

displayPictures();
for (var i = 0; i < 3; i++) {
  pictures[i].addEventListener('click', handleClick);
}

function createChart() {
  var votes = [];
  for (var i = 0; i < allProduct.length; i++) {
    votes[i] = allProduct[i].votes;

  }
  var ctx = document.getElementById("myBarChart").getContext('2d');
  var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["bag", "banana", "bathroom", "boots", "breakfast", "bubblegum", "chair", "cthulhu", "dog-duck", "dragon", "pen", "pet-sweep", "scissors", "shark", "sweep", "tauntaun", "unicorn", "usb", "water-can", "wine-glass"],
      datasets: [{
        label: "Total Votes Per Product",
        data: votes,
        fill: false,
        backgroundColor: [
          '#71BF4A',
          '#2263AE',
          '#43C4DD',
          '#009E6D',
          '#71BF4A',
          '#2263AE',
          '#43C4DD',
          '#009E6D',
          '#71BF4A',
          '#2263AE',
          '#43C4DD',
          '#009E6D',
          '#71BF4A',
          '#2263AE',
          '#43C4DD',
          '#009E6D',
          '#71BF4A',
          '#2263AE',
          '#43C4DD',
          '#009E6D',
        ],
      }]
    },

  }

  );

}
