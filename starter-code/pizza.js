// Write your Pizza Builder JavaScript in this file.



//when document is loaded, user has to see suce and gluten-free button disabled. Pizza foto has to be without white sauce and gluten-free pizza base.

$(document).ready(function () {

  //whit this code i do not have to edit HTML file and manualy delete class that HTML tag has.
  //after this two if statements I am sure that buttons want be active.
  if ($(".btn-sauce").hasClass("active")) {
    $(".btn-sauce").removeClass("active");
  }

  if ($(".btn-crust").hasClass("active")) {
    $(".btn-crust").removeClass("active");
  }

  //pizza foto has to be without white sauce and gluten-free crust.

  $(".sauce").removeClass("sauce-white");
  $(".crust").removeClass("crust-gluten-free");
  $("strong").text("$13"); // basoc price.
  $("ul:last > li:nth-child(4)").hide(); // price for ingredients which are not included has to be removed from list on right side.
  $("ul:last > li:nth-child(5)").hide(); // price for ingredients which are not included has to be removed from list on right side.
});

//add or remove pepperonni

$(".btn-pepperonni").click(function () {

  $(".btn-pepperonni").toggleClass("active"); // whit this line of code button will be deactivated if it is active or opposite.


  //with if-else statement I check if button is active or not, and based on it I decide about next steps.

  if ($(".btn-pepperonni").hasClass("active") == false) { //button is not active, so remove its ingredient from pizza foto and remove price from list
    var textIngredientPrice = $("ul:last > li:nth-child(1)").text(); //inside "li" is info about price. I need to manipulate with text and find the price.
    var textIngredientPriceToNumber = processText(textIngredientPrice); //processText is a function defined below. I call it for every ingredient.
    updatePrice($("strong").text(), textIngredientPriceToNumber, "sub"); // updatePrice add ingredient price to totalPrice or subtract it. General 
    //function defined below. 

    $(".pep").hide(); // edit photo / remove pepperonni from it.
    $("ul:last > li:nth-child(1)").hide(); // hide the price when ingredient is removed.



  } else {  // show element, update price list, update totalPrice
    $(".pep").show();
    $("ul:last > li:nth-child(1)").show();
    var textIngredientPrice = $("ul:last > li:nth-child(1)").text();
    var textIngredientPriceToNumber = processText(textIngredientPrice);
    updatePrice($("strong").text(), textIngredientPriceToNumber, "add");
  }

});

//add or remove mushrooms. Same logic as for pepperonni

$(".btn-mushrooms").click(function () {

  $(".btn-mushrooms").toggleClass("active");

  if ($(".btn-mushrooms").hasClass("active") == false) {
    var textIngredientPrice = $("ul:last > li:nth-child(2)").text();
    var textIngredientPriceToNumber = processText(textIngredientPrice);
    updatePrice($("strong").text(), textIngredientPriceToNumber, "sub");
    $(".mushroom").hide();
    $("ul:last > li:nth-child(2)").hide();



  } else {
    $(".mushroom").show();
    $("ul:last > li:nth-child(2)").show();
    var textIngredientPrice = $("ul:last > li:nth-child(2)").text();
    var textIngredientPriceToNumber = processText(textIngredientPrice);
    updatePrice($("strong").text(), textIngredientPriceToNumber, "add");
  }

});


//add or remove green-peppers. Same logic as in code for pepperonni.

$(".btn-green-peppers").click(function () {

  $(".btn-green-peppers").toggleClass("active");

  if ($(".btn-green-peppers").hasClass("active") == false) {
    var textIngredientPrice = $("ul:last > li:nth-child(3)").text();
    var textIngredientPriceToNumber = processText(textIngredientPrice);
    updatePrice($("strong").text(), textIngredientPriceToNumber, "sub");
    $(".green-pepper").hide();
    $("ul:last > li:nth-child(3)").hide();



  } else {
    $(".green-pepper").show();
    $("ul:last > li:nth-child(3)").show();
    var textIngredientPrice = $("ul:last > li:nth-child(3)").text();
    var textIngredientPriceToNumber = processText(textIngredientPrice);
    updatePrice($("strong").text(), textIngredientPriceToNumber, "add");
  }

});


//add or remove white-sauce



$(".btn-sauce").click(function () {
  $(".btn-sauce").toggleClass("active"); // add or remove active class from btn-sauce

  if ($(".btn-sauce").hasClass("active") == true) { // if button has class = "active" , add white-sauce on picture and add price in the list and change
  //totalPrice.

    $(".sauce").addClass("sauce-white"); // class="sauce-white" will edit photo with white sauce.
    var textIngredientPrice = $("ul:last > li:nth-child(4)").text(); //price for white sauce is always 4th element in the list on right.
    var textIngredientPriceToNumber = processText(textIngredientPrice); // same function as for other ingredients.
    updatePrice($("strong").text(), textIngredientPriceToNumber, "add");
    $("ul:last > li:nth-child(4)").show();
  } else {
    $(".sauce").removeClass("sauce-white");
    var textIngredientPrice = $("ul:last > li:nth-child(4)").text();
    var textIngredientPriceToNumber = processText(textIngredientPrice);
    updatePrice($("strong").text(), textIngredientPriceToNumber, "sub");
    $("ul:last > li:nth-child(4)").hide();
  }
});



//add or remove gluten-free crust. same logic as for white-sauce.


$(".btn-crust").click(function () {
  $(".btn-crust").toggleClass("active");

  if ($(".btn-crust").hasClass("active") == true) {
    $(".crust").addClass("crust-gluten-free");
    var textIngredientPrice = $("ul:last > li:nth-child(5)").text();
    var textIngredientPriceToNumber = processText(textIngredientPrice);
    updatePrice($("strong").text(), textIngredientPriceToNumber, "add");
    $("ul:last > li:nth-child(5)").show();
  } else {
    $(".crust").removeClass("crust-gluten-free");
    var textIngredientPrice = $("ul:last > li:nth-child(5)").text();
    var textIngredientPriceToNumber = processText(textIngredientPrice);
    updatePrice($("strong").text(), textIngredientPriceToNumber, "sub");
    $("ul:last > li:nth-child(5)").hide();
  }
});




//------------------processText functio start------------------------------///

//function which returns price of added pizza ingredient. general function.
function processText(stringText) { // stringText = text inside li element. for example "$1 pepperonni". Func will return number 1 (price)

  stringTextArray = stringText.split(''); //make array from every string char.
  priceOfIngredient = parseInt(stringTextArray[1], 10); //take only second element index=1 (second element is equal to price); Make a number from it.


  return priceOfIngredient; // this is second argument in function updatePrice()
}

//-----------------------processText functio start end -------------------------//



//--------------------------updatePrice function start-----------------------------//

//general function which will return total price as a string. It takes 3 arguments.

//First argument: current total price that we have to edit (string)
//second argument: price of ingredient  (number)
//3rd argument : operation. it can be add or subtract. ingredient price has to be added or subtracted from total price. (string)

function updatePrice(stringTotalPriceCurrent, priceOfIngredient, operation) {
  
  
  stringTotalPriceArray = stringTotalPriceCurrent.split(""); // make array from string. It is easy to find price.

  stringTotalPriceArray.shift(); // only removes $ sign...then we have onlynumbers in array.

 

  var totalCurrentPriceString = stringTotalPriceArray.join(""); //make a string from array elements


  if (operation == "add") {

    var totalPrice = parseInt(totalCurrentPriceString, 10) + priceOfIngredient;
  } else {
    var totalPrice = parseInt(totalCurrentPriceString, 10) - priceOfIngredient;
  }

  console.log(totalPrice);

  $("strong").text(`$${totalPrice}`);

}

//--------------------------updatePrice function end-----------------------------//