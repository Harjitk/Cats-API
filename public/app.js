// Add JS code to allow a new cat to be added programmatically.

var app = function(){
  var catSection = document.querySelector('#cats');
  catSection.classList.add('cat');

var list = document.createElement('ul');

var catName = document.createElement('li');
catName.innerText = "Ollie";

var catFavFood = document.createElement('li');
catFavFood.innerText = "Chicken";
//
// `${key}: ${value}`

var catImageLi = document.createElement('li');
var catImage = document.createElement('img');
catImage.src = "puppy1.jpg"


list.appendChild(catName);
list.appendChild(catFavFood);
catImageLi.appendChild(catImage);
list.appendChild(catImageLi);
catSection.appendChild(list);

};
//
// careful of order of appending and appending smallest to biggest
// }



// Refactor the code to make it easy to add a new cat, just like we did with the quotes.

// var addCat = function(){
//   var list = createList();
//   var li = createLi (`${name}: ${Ollie}`, `${fav food}: ${chicken}`;
//   var catImageLi = createImageLi();
//   var catImage = createImage();
//   appendElements(catSection, li, catImageLi, catImage);
//
// }




window.onload = app
