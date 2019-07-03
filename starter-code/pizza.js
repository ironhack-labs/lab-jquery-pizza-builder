$(document).ready(function(){
  
  // SET UP MY DEFAULT PIZZA
  // default sauce and crust
  // hidden prices of ingredients we don't want

  var buttonSauce = $(".btn-sauce");
  var buttonCrust = $(".btn-crust");
  var sauce = $(".sauce");
  var crust = $(".crust");

  function defaultPizza() {
    sauce.removeClass("sauce-white");
    crust.removeClass("crust-gluten-free");
    buttonSauce.removeClass("active");
    buttonCrust.removeClass("active");
    $(".panel ul li:contains('white')").hide();
    $(".panel ul li:contains('gluten')").hide();
  }

  defaultPizza();

  // DISPLAY INGREDIENTS (MUSHROOMS/PEPERONNIS/GREENPEPPERS) DEPENDING ON THE PRESSED BUTTONS
  // when we press a given button it adds/removes the ingredients we target

  var buttonPepperonnis = $(".btn-pepperonni");
  var buttonMushrooms = $(".btn-mushrooms");
  var buttonGreenpeppers = $(".btn-green-peppers");
  var pepperonnis = $(".pep");
  var mushrooms = $(".mushroom");
  var greenpeppers = $(".green-pepper");

  function toggleIngredients(button,ingredients) {
    button.click(function(){
      ingredients.toggle();
      button.toggleClass("active");
    })
  }

  toggleIngredients(buttonPepperonnis,pepperonnis);
  toggleIngredients(buttonMushrooms,mushrooms);
  toggleIngredients(buttonGreenpeppers,greenpeppers);

  // SWITCH BETWEEN TWO TYPES FOR ONE GIVEN TOPPING (SAUCE/CRUST)
  // for one given topping, adds/removes a class that changes the type of topping

  buttonSauce.click(function(){
    sauce.toggleClass("sauce-white");
    buttonSauce.toggleClass("active");
    $(".panel ul li:contains('white')").toggle();
  })

  buttonCrust.click(function(){
    crust.toggleClass("crust-gluten-free");
    buttonCrust.toggleClass("active");
    $(".panel ul li:contains('gluten')").toggle();
  })

  // DISPLAY PRICES DEPENDING ON THE PRESSED BUTTONS
  // when we press a given button (mushrooms Button for ex.), using a keyword (ex:"mushroom") that is inside the <li> we target (thanks to the selector)
  // it shows/hides this price of this element

  function togglePrices(button,keyword,selector) {
    button.click(function(){
      $(selector + ":contains('" + keyword + "')").toggle();
    })
  }

  togglePrices(buttonPepperonnis,"pepperonni",".panel ul li");
  togglePrices(buttonMushrooms, "mushrooms",".panel ul li");
  togglePrices(buttonGreenpeppers, "green",".panel ul li");

  // CHECK FOR TOTAL PRICE
  // everytime a ingredient button is pressed, and depending if this item is shown or not on the page, we add its price to the total price

  $(".btn").click(function(){
    let myTotalPriceContainer = $("strong");
    myTotalPriceContainer.text("$"+checkTotalPrice());
  })

  function checkTotalPrice() {
    let myTotalPrice = 10;
    let myAdditionalPricesContainer = $(".price  ul li");
    myAdditionalPricesContainer.each(function(){
      if ($(this).css("display") !== "none") {
        myTotalPrice += parseInt($(this).text().substr(1,1));
      }
    });
    return myTotalPrice;
  }

})
