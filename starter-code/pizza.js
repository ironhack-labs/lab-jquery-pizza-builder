$(document).ready(function(){
  
  // MY ELEMENTS

  var buttonPepperonnis = $(".btn-pepperonni");
  var buttonMushrooms = $(".btn-mushrooms");
  var buttonGreenpeppers = $(".btn-green-peppers");
  var buttonSauce = $(".btn-sauce");
  var buttonCrust = $(".btn-crust");

  var pepperonnis = $(".pep");
  var mushrooms = $(".mushroom");
  var greenpeppers = $(".green-pepper");
  var sauce = $(".sauce");
  var crust = $(".crust");

  // SET UP MY DEFAULT PIZZA

  function defaultPizza() {
    sauce.removeClass("sauce-white");
    crust.removeClass("crust-gluten-free");
    buttonSauce.removeClass("active");
    buttonCrust.removeClass("active");
    $(".panel ul li:contains('white')").hide();
    $(".panel ul li:contains('gluten')").hide();
  }

  defaultPizza();

  // DISPLAY INGREDIENTS DEPENDING ON THE PRESSED BUTTONS

  function toggleIngredients(button,ingredients) {
    button.click(function(){
      ingredients.toggle();
      button.toggleClass("active");
    })
  }

  toggleIngredients(buttonPepperonnis,pepperonnis);
  toggleIngredients(buttonMushrooms,mushrooms);
  toggleIngredients(buttonGreenpeppers,greenpeppers);

  // DISPLAY PRICES DEPENDING ON THE PRESSED BUTTONS

  function togglePrices(button,keyword,selector) {
    button.click(function(){
      $(selector + ":contains('" + keyword + "')").toggle();
    })
  }

  togglePrices(buttonPepperonnis,"pepperonni",".panel ul li");
  togglePrices(buttonMushrooms, "mushrooms",".panel ul li");
  togglePrices(buttonGreenpeppers, "green",".panel ul li");

  // SWITCH BETWEEN TWO TYPES OF INGREDIENTS FOR ONE GIVEN TOPPING

  $(".btn-sauce").click(function(){
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $(".panel ul li:contains('white')").toggle();
  })

  $(".btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $(".panel ul li:contains('gluten')").toggle();
  })

  // CHECK FOR TOTAL PRICE

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
