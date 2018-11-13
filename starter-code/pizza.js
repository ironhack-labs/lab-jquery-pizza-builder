
$(function () { 

  //Initial state:

  $(".panel.price strong").text("$13");
  var priceTotal = 10;

  $(".btn-crust").toggleClass("active");
  $(".crust").toggleClass("crust-gluten-free");
  $("li:contains('$5 gluten-free crust')").hide();


  $(".btn-sauce").toggleClass("active");
  $(".sauce").toggleClass("sauce-white");
  $("li:contains('$3 white sauce')").hide();


  //Set events:

  clickButtonSelected(".btn-pepperonni",".pep","li:contains('$1 pepperonni')");
  clickButtonSelected(".btn-mushrooms",".mushroom","li:contains('$1 mushrooms')");
  clickButtonSelected(".btn-green-peppers",".green-pepper","li:contains('$1 green peppers')");
  clickButtonNonSelected(".btn-sauce",".sauce","sauce-white","li:contains('$3 white sauce')");
  clickButtonNonSelected(".btn-crust",".crust","crust-gluten-free","li:contains('$5 gluten-free crust')");

  updateTotalPrice();

  //Functions:

  function clickButtonSelected(btnClass, ingredientClass, ingredientPriceList) {
    $( btnClass ).click(function() {
      $(ingredientClass).toggle();
      $(this).toggleClass("active");
      $(ingredientPriceList).toggle();
    });
  }

  function clickButtonNonSelected(btnClass, ingredientClass, ingredientSecondaryClass, ingredientPriceList) {
    $( btnClass ).click(function() {
      $(this).toggleClass("active");
      $(ingredientClass).toggleClass(ingredientSecondaryClass);
      $(ingredientPriceList).toggle();
    });
  }

  function updateTotalPrice() {
    $(".btn").click(function() {
    $( ".panel.price li:visible" ).each(function() {
      var priceIngredient = parseInt($(this).text().substr(1,1));
      priceTotal += priceIngredient;
      });
    $(".panel.price strong").text("$" + priceTotal);
    priceTotal = 10;
    })
  }
    
})
