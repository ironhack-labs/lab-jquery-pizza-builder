// Write your Pizza Builder JavaScript in this file.

$(window).load(function(){
//Defaults
  $(".sauce").removeClass("sauce-white");
  $(".crust").removeClass("crust-gluten-free");
  $(".pep").toggle();
  $(".mushroom").toggle();
  $(".green-pepper").toggle();
  $(".btn-pepperonni").removeClass("active")
  $(".btn-mushrooms").removeClass("active")
  $(".btn-green-peppers").removeClass("active")
  $(".btn-crust").removeClass("active")
  $(".btn-sauce").removeClass("active")
  $("#pepperonni").remove();
  $("#mushrooms").remove();
  $("#green-peppers").remove();
  $("#gluten-free-crust").remove();
  $("#white-sauce").remove();
  $("strong")[0].innerHTML = "$10";
});

$(document).ready(function() {
//1st Iteration (works!!)
  $(".btn-pepperonni").on("click", function(){
    $(".pep").toggle();
  });

  $(".btn-mushrooms").on("click", function(){
    $(".mushroom").toggle();
  });

  $(".btn-green-peppers").on("click", function(){
    $(".green-pepper").toggle();
  });


//2nd Iteration & partial 4th Iteration (works!!)
  $(".btn-crust").on("click", function(){
    if ($(".crust").hasClass("crust-gluten-free")) {
      $(".crust").removeClass("crust-gluten-free");
      $("#gluten-free-crust").remove();
    }
    else {
      $(".crust").addClass("crust-gluten-free");
      $("aside ul").append("<li id='gluten-free-crust'>$5 gluten-free crust</li>");
    }
  });

  $(".btn-sauce").on("click", function(){
    if ($(".sauce").hasClass("sauce-white")) {
      $(".sauce").removeClass("sauce-white");
      $("#white-sauce").remove();
    }
    else {
      $(".sauce").addClass("sauce-white");
      $("aside ul").append("<li id='white-sauce'>$3 white sauce</li>");
    }
  });


  //3rd Iteration (works!!)
  $(".btn-pepperonni").click(function(){
    if ($("section.pep").attr("style") !== "display: block;") {
      $(".btn-pepperonni").removeClass("active")
    }
  });

  $(".btn-pepperonni").click(function(){
    if ($("section.pep").attr("style") == "display: block;") {
      $(".btn-pepperonni").addClass("active")
    }
  });

  $(".btn-mushrooms").click(function(){
    if ($("section.mushroom").attr("style") !== "display: block;") {
      $(".btn-mushrooms").removeClass("active")
    }
  });

  $(".btn-mushrooms").click(function(){
    if ($("section.mushroom").attr("style") == "display: block;") {
      $(".btn-mushrooms").addClass("active")
    }
  });

  $(".btn-green-peppers").click(function(){
    if ($("section.green-pepper").attr("style") !== "display: block;") {
      $(".btn-green-peppers").removeClass("active")
    }
  });

  $(".btn-green-peppers").click(function(){
    if ($("section.green-pepper").attr("style") == "display: block;") {
      $(".btn-green-peppers").addClass("active")
    }
  });

  $(".btn-crust").click(function(){
    if ($(".crust").hasClass("crust-gluten-free")) {
      $(".btn-crust").addClass("active")
    }
  });

  $(".btn-crust").click(function(){
    if (!$(".crust").hasClass("crust-gluten-free")) {
      $(".btn-crust").removeClass("active")
    }
  });

  $(".btn-sauce").click(function(){
    if ($(".sauce").hasClass("sauce-white")) {
      $(".btn-sauce").addClass("active")
    }
  });

  $(".btn-sauce").click(function(){
    if (!$(".sauce").hasClass("sauce-white")) {
      $(".btn-sauce").removeClass("active")
    }
  });


  //4th Iteration (works!!)
  $(".btn-pepperonni").click(function(){
      if ($("section.pep").attr("style") !== "display: block;") {
        $("#pepperonni").remove();
      }
  });

  $(".btn-pepperonni").click(function(){
      if ($("section.pep").attr("style") == "display: block;") {
        $("aside ul").append("<li id='pepperonni'>$1 pepperonni</li>");
      }
  });

  $(".btn-mushrooms").click(function(){
      if ($("section.mushroom").attr("style") !== "display: block;") {
        $("#mushrooms").remove();
      }
  });

  $(".btn-mushrooms").click(function(){
      if ($("section.mushroom").attr("style") == "display: block;") {
        $("aside ul").append("<li id='mushrooms'>$1 mushrooms</li>");
      }
  });

  $(".btn-green-peppers").click(function(){
      if ($("section.green-pepper").attr("style") !== "display: block;") {
        $("#green-peppers").remove();
      }
  });

  $(".btn-green-peppers").click(function(){
    if ($("section.green-pepper").attr("style") == "display: block;") {
      $("aside ul").append("<li id='green-peppers'>$1 green peppers</li>");
    }
  });


  //5th Iteration
  var pizzaPrice = [10];
  var pepperonniPrice = 1;
  var mushroomsPrice = 1;
  var greenPeppersPrice = 1;
  var whiteSaucePrice = 3;
  var glutenFreeCrustPrice = 5;

  $(".btn-pepperonni").click(function(){
      if ($("section.pep").attr("style") !== "display: block;") {
        pizzaPrice.splice(pizzaPrice.indexOf(pepperonniPrice), 1);
      }
      else if ($("section.pep").attr("style") == "display: block;") {
        pizzaPrice.push(pepperonniPrice);
      }
  });

  $(".btn-mushrooms").click(function(){
      if ($("section.mushroom").attr("style") !== "display: block;") {
        pizzaPrice.splice(pizzaPrice.indexOf(mushroomsPrice), 1);
      }
      else if ($("section.mushroom").attr("style") == "display: block;") {
        pizzaPrice.push(mushroomsPrice);
      }
  });

  $(".btn-green-peppers").click(function(){
      if ($("section.green-pepper").attr("style") !== "display: block;") {
        pizzaPrice.splice(pizzaPrice.indexOf(greenPeppersPrice), 1);
      }
      else if ($("section.green-pepper").attr("style") == "display: block;") {
        pizzaPrice.push(greenPeppersPrice);
      }
  });

  $(".btn-crust").on("click", function(){
    if ($(".crust").hasClass("crust-gluten-free")) {
      pizzaPrice.push(glutenFreeCrustPrice);
    }
    else {
      pizzaPrice.splice(pizzaPrice.indexOf(glutenFreeCrustPrice), 1);
    }
  });

  $(".btn-sauce").on("click", function(){
    if ($(".sauce").hasClass("sauce-white")) {
      pizzaPrice.push(whiteSaucePrice);
    }
    else {
      pizzaPrice.splice(pizzaPrice.indexOf(whiteSaucePrice), 1);
    }
  });

  function sum (a, b) {
    return a + b;
  }

  function calculatePrice() {
    var pizzaPriceNumbers = pizzaPrice.map(Number)
    var sumTotal = Number(pizzaPrice.reduce(sum, 0));
    return sumTotal
  }

  $(".btn").on("click", function(){
    var show = calculatePrice()
    $("strong")[0].innerHTML = "$"+show;
  });

//End of JQuery
});
