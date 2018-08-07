// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {

  var price = 10;
  $("strong").text("$" + price);
  areElementsOnPizza = [,false,false,false,false,false];

  $(".green-pepper, .mushroom, .pep").hide();
  $("section").removeClass("crust-gluten-free sauce-white");
  $(".price > ul > li").hide()

  $(".btn").removeClass("active");

  $(".btn-pepperonni").click(function() {
    $(".btn-pepperonni").toggleClass("active");
    $(".pep").toggle();
    $(".price > ul > li:nth-child(1)").toggle();

    areElementsOnPizza[1] = !areElementsOnPizza[1];
    if(areElementsOnPizza[1])
      price++
    else
      price--
    $("strong").text("$" + price);
  });

  $(".btn-mushrooms").click(function() {
    $(".btn-mushrooms").toggleClass("active");
    $(".mushroom").toggle();
    $(".price > ul > li:nth-child(2)").toggle();

    areElementsOnPizza[2] = !areElementsOnPizza[2];
    if(areElementsOnPizza[2])
      price++
    else
      price--
    $("strong").text("$" + price);
  });

  $(".btn-green-peppers").click(function() {
    $(".btn-green-peppers").toggleClass("active");    
    $(".green-pepper").toggle();
    $(".price > ul > li:nth-child(3)").toggle();

    areElementsOnPizza[3] = !areElementsOnPizza[3];
    if(areElementsOnPizza[3])
      price++
    else
      price--
    $("strong").text("$" + price);
  });

  $(".btn-sauce").click(function() {
    $(".btn-sauce").toggleClass("active");
    $("section > .sauce").toggleClass("sauce-white");
    $(".price > ul > li:nth-child(4)").toggle();

    areElementsOnPizza[4] = !areElementsOnPizza[4];
    if(areElementsOnPizza[4])
      price += 3
    else
      price -= 3
    $("strong").text("$" + price);
  })

  $(".btn-crust").click(function() {
    $(".btn-crust").toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
    $(".price > ul > li:nth-child(5)").toggle();

    areElementsOnPizza[5] = !areElementsOnPizza[5];
    if(areElementsOnPizza[5])
      price += 5
    else
      price -= 5
    $("strong").text("$" + price);
  })

});
