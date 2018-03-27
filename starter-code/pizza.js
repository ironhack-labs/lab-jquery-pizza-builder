// Write your Pizza Builder JavaScript in this file.

// Total Price for the pizza
var pizzaPrice = 10;

// List of ingredients to use as toppings

var ingredients = [{
    id: 'pepperonni',
    price: 1,
    layer: '.pep'
  },
  {
    id: 'mushroom',
    price: 1,
    layer: '.mushroom'
  },
  {
    id: 'greenPeppers',
    price: 1,
    layer: '.green-pepper'
  },
  {
    id: 'sauce',
    price: 3,
    layer: '.sauce'
  },
  {
    id: 'gluten',
    price: 5,
    layer: '.crust-gluten-free'
  },
];


// Change state of a button
function changeState(button) {
  $(button).toggleClass('active')
}

function updatePrice(button, index) {

console.log(button);
  if (button.hasClass('active') == true){
    pizzaPrice += ingredients[index].price;
  
  } else{
    pizzaPrice -= ingredients[index].price;
  }
  $('.price > strong').text('$' + pizzaPrice);
}

function toggleVisuals(button, index){
  var element = $(ingredients[index].layer);
  var className = ingredients[index].layer;
  element.toggle();
}

function updatePannel(button, index){
  var panel = $('.price > ul >li:nth-child(' + (index + 1) +')');
  panel.toggle();
}


// JQuery functions start here
// ---------------------------

$(document).ready(function () {

  //Hide ingredients on pizza
  for (let i = 0; i < ingredients.length; i++){
    $(ingredients[i].layer).hide();
  }

  //Hide prices
  $('.price > ul >li').hide();

  $('button').click(function (e) {
    
    // Get ingredient index
    var index = parseInt($(this).attr("data-index"));
    
    // Change button state
    changeState($(this));
    // Add or remove topping price to pizza
    updatePrice($(this), index);
    // Toggle visuals (layer)
    toggleVisuals($(this), index);
    // Update price pannel
    updatePannel($(this), index);
    
  
  });

});