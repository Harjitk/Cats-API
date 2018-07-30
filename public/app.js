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
//
// `${name}: ${Ollie}`, `${fav food}: ${chicken}`

// Refactor the code to make it easy to add a new cat, just like we did with the quotes.

var CATS_ARRAY = [
  {name: "Ollie", favFood: "Chicken", img: "puppy1.jpg"},
  {name: "Ben", favFood: "Ham", img: "puppy2.jpg"}
]


var addCat = function(name, favFood, url){
  var list = createList();
  var nameLi = createLi("name", name);
  var foodLi = createLi("food", favFood);
  var catImage = createImage(url);
  var catSection = document.querySelector('#cats');
  appendElements(list, nameLi, foodLi, catImage, catSection);

}


var createList = function(){
  var list = document.createElement('ul');
  list.classList.add('ul');
  return list
}

var createLi = function(key, value){
  var li = document.createElement('li');
  li.innerText = `${key}: ${value} `;
  return li

}

var createImage = function(url){
  var li = document.createElement('li');
  var image = document.createElement('img');
  image.src = url;
  li.appendChild(image);
  return li
}

var appendElements = function(list, nameLi, foodLi, catImage, catSection){

list.appendChild(nameLi);
list.appendChild(foodLi);
list.appendChild(catImage);
catSection.appendChild(list);

}

var app = function(){
addCat("Oliie", "Chicken", "puppy1.jpg");
}

var app = function(){
  for(var cat of CATS_ARRAY){
    addCat(cat.name, cat.favFood, cat.img);
  }
};


window.onload = app
