// Write your Pizza Builder JavaScript in this file.
var ingredients = [
  {
    name: "pepperonni",
    price: 1,
    selected: true
  },
  {
    name: "mushrooms",
    price: 1,
    selected: true
  },
  {
    name: "peppers",
    price: 1,
    selected: true
  },
  {
    name: "sauce",
    price: 3,
    selected: true
  },
  {
    name: "crust",
    price: 5,
    selected: true
  }
];

var pizzaTotal = 21;

var total = 11;
/*
var pepperonni = {
  price: 1,
  selected: true
};

var mushrooms = {
  price: 1,
  selected: true
};

var peppers = {
  price: 1,
  selected: true
};

var sauce = {
  price: 3,
  selected: true
};

var crust = {
  price: 5,
  selected: true
}
*/

$(document).ready(function() {

  


  $('.btn-pepperonni').click(() => {
    $('.btn-pepperonni').toggleClass('disabled');
    $('section.pep*').toggle();
    $('#pep').toggle();
    (ingredients[0].selected != true)? ingredients[0].selected = true : ingredients[0].selected = false;
    //alert(ingredients[0].selected);
  });

  $('.btn-mushrooms').click(() => {
    $('.btn-mushrooms').toggleClass('disabled');
    $('section.mushroom*').toggle();
    $('#mush').toggle();
    (ingredients[1].selected != true)? ingredients[1].selected = true : ingredients[1].selected = false;    
  }); 

  $('.btn-green-peppers').click(() => {
    $('.btn-green-peppers').toggleClass('disabled');
    $('section.green-pepper*').toggle();
    $('#green').toggle();
    (ingredients[2].selected != true)? ingredients[2].selected = true : ingredients[2].selected = false;
  });

  $('.btn-sauce').click(() => {
    $('.btn-sauce').toggleClass('btn-reg');
    //$('.btn-sauce').html("Regular Sauce");
    $('section.sauce-white').toggleClass('sauce-regular');
    $('.btn-sauce').html() == "Regular Sauce" ? $('.btn-sauce').html('White Sauce') : $('.btn-sauce').html('Regular Sauce');
    $('#white').toggle();
    (ingredients[3].selected != true)? ingredients[3].selected = true : ingredients[3].selected = false;
  });

  $('.btn-crust').click(() => {
    $('.btn-crust').toggleClass('btn-crust-reg');
    $('section.crust-gluten-free').toggleClass('crust-regular');
    $('.btn-crust').html() == "Regular Crust" ? $('.btn-crust').html('Gluten-free Sauce') : $('.btn-crust').html('Regular Crust'); 
    $('#gluten').toggle();
    (ingredients[4].selected != true)? ingredients[4].selected = true : ingredients[4].selected = false;
  });


  
  $('button').click(() => {
    for (let i = 0; i < ingredients.length; i++) {
      if (ingredients[i].selected != false) {
        total -= ingredients[i].price
      }
    }
    alert(total);
  })

});