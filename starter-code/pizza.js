// Write your Pizza Builder JavaScript in this file.

// Write your Pizza Builder JavaScript in this file.

// Constants 
$(document).ready(function() {
  

var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}


// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`

$('.btn-pepperonni').click(function() {

  state.pepperonni = !state.pepperonni;
    renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
$('.btn-mushrooms').click(function() {
state.mushrooms = !state.mushrooms;
renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
$('.btn-green-peppers').click(function() {
state.greenPeppers = !state.greenPeppers;
renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
$('.btn-sauce').click(function() {
//  alert('clekewasd');
state.whiteSauce = !state.whiteSauce;
renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
$('.btn-crust').click(function() {
state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
  console.log(state);
}

function renderPepperonni() {

    if (state.pepperonni) {
      $('.pep').css('visibility','visible');
        }
        else {
          $('.pep').css('visibility','hidden');
        }
  
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  
    if (state.mushrooms) {
      $('.mushroom').css('visibility','visible');
        }
        else {
          $('.mushroom').css('visibility','hidden');
        }

}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  if (state.greenPeppers) {
    $('.green-pepper').css('visibility','visible');
      }
      else {
        $('.green-pepper').css('visibility','hidden');
      }
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (state.whiteSauce) {
    $('.sauce').removeClass('sauce-white');
      }
      else {
        $('.sauce').addClass('sauce-white');
      }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    $('.crust').addClass('crust-gluten-free');
      }
      else {
        $('.crust').removeClass('crust-gluten-free');
      }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  var nameattr = $('.btn').one('click',function(){
      console.log(' button pressed: ' + this.className );
      $(this).toggleClass('active');
  });

  /* 
  $('.btn').one('click', function(){
      $(this).toggleClass('active');
       // console.log($(this).attr("class"));
       console.log($(this).text());

  });
  */

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
    let total = 10;
    let dpanel = "";
    
        if(state.pepperonni) {
          total = total + 1;
          dpanel = dpanel + `<li>$1 pepperonni</li>`;
        }

        if(state.mushrooms) {
          total = total + 1;
          dpanel = dpanel + `<li>$1 mushrooms</li>`;
        }
        if(state.greenPeppers) {
          total = total + 1;
          dpanel = dpanel + `<li>$1 green peppers</li>`;
        }
        if(state.whiteSauce) {
          total = total + 3;
          dpanel = dpanel + `<li>$3 white sauce</li>`;
        }
        if(state.glutenFreeCrust) {
          total = total + 5;
          dpanel = dpanel + `<li>$5 gluten-free crust</li>`;
        }

        $(".panel.price ul").html(dpanel);
        let dtotal = "$" + total;
        console.log("dtotal is")
        $(".panel.price strong").html(dtotal);
}

renderEverything();
}); // document load ends
