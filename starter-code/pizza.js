// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
    //exec on ready
  $(".pep, .green-pepper, .mushroom").hide();
  $(".sauce").removeClass("sauce-white");
  $(".crust").removeClass("crust-gluten-free");
  $(".controls button").removeClass("active");
  $(".price ul li").hide();
  $(".price ul").css("min-height", "105px");

  //click events
  $(".btn-pepperonni").click(function(event) {
    $(this).toggleClass("active");
    $(".pep").fadeToggle();
    $(".price ul li:first-child").fadeToggle();

    var actualNum = parseInt(priceContainer.text().split("$")[1]);
    evalState(1,actualNum,event);
  });
  $(".btn-mushrooms").click(function(event) {
    $(this).toggleClass("active");
    $(".mushroom").fadeToggle();
    $(".price ul li:nth-child(2)").fadeToggle();

    var actualNum = parseInt(priceContainer.text().split("$")[1]);
    evalState(1,actualNum,event);
  });
  $(".btn-green-peppers").click(function(event) {
    $(this).toggleClass("active");
    $(".green-pepper").fadeToggle();
    $(".price ul li:nth-child(3)").fadeToggle();

    var actualNum = parseInt(priceContainer.text().split("$")[1]);
    evalState(1,actualNum,event);
  });
  $(".btn-sauce").click(function(event) {
    $(this).toggleClass("active");
    $(".sauce").toggleClass("sauce-white");
    $(".price ul li:nth-child(4)").fadeToggle();

    var actualNum = parseInt(priceContainer.text().split("$")[1]);
    evalState(3,actualNum,event);
  });


  $(".btn-crust").click(function(event) {


    $(this).toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
    $(".price ul li:last-child").fadeToggle();

    var actualNum = parseInt(priceContainer.text().split("$")[1]);
    evalState(5,actualNum,event);
  });

  //html element for price
  var priceContainer = $(".price strong");

  //calc price
  function calcPrice(cost, price) {
    var sum = 0;

    sum = price + cost;
    priceContainer.text("$" + sum);
  }
  

  //evaluate operation +/-
  function evalState(cost,actualNum,ev) {
      var el = ev.currentTarget;
    if ($(el).hasClass("active")) {
      calcPrice(cost, actualNum);
    } else {
      calcPrice(-cost, actualNum);
    }
  }

  //initial price
  calcPrice(0, 10);
});
