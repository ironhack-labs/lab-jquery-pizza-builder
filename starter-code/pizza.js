// Write your Pizza Builder JavaScript in this file.



$(document).ready(function() {

  //pepperoni
    $(".btn-pepperonni").click(function(event) {
    $(".pep").fadeToggle();
    $(".btn-pepperonni").toggleClass("active");
    $(".price ul li:nth-child(1)").fadeToggle();
    sumPrices();
  });

  //mushrooms
    $(".btn-mushrooms").click(function(event) {
    $(".mushroom").fadeToggle();
    $(".btn-mushrooms").toggleClass("active");
    $(".price ul li:nth-child(2)").fadeToggle();
    sumPrices();
  });

  //green peppers
    $(".btn-green-peppers").click(function(event) {
    $(".green-pepper").fadeToggle();
    $(".btn-green-peppers").toggleClass("active");
    $(".price ul li:nth-child(3)").fadeToggle();
    sumPrices();
  });

  //sauce
    $(".btn-sauce").removeClass("active");
    $(".price ul li:nth-child(4)").fadeToggle();


    $(".btn-sauce").click(function (event) {
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $(".price ul li:nth-child(4)").fadeToggle();
    sumPrices();
  });

  //crust
    $(".crust").removeClass("crust-gluten-free");
    $(".btn-crust").removeClass("active");
    $(".price ul li:nth-child(5)").fadeToggle();


    $(".btn-crust").click(function (event) {
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $(".price ul li:nth-child(5)").fadeToggle();
    sumPrices();
  });



  function sumPrices() {
    var thing = $("* .price-li:visible");
    var result = 0;
    for (let i = 0; i < thing.length; i++) {
      result += parseInt(thing[i].innerHTML.slice(1, 2));
    }
    $("strong").text("$" + (10 + result));
  }

});