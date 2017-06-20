$(document).ready(function() {
  var i=0;
  var price = 0;
  var ingredient = [];
  for(i=0; i<5; i++) {}


function ingredientPrice (position) {
  var string = $(position).text() ;
  price = string.substring(1,2);
  return price;
}

function ingredientActive (btnClass, ingredient,i){
  if($(btnClass).hasClass("active")){
    ingredient[i] = 0;
    return ingredient;
  }else{
    ingredient [i] = price;
    return ingredient;
  }
}






//btn-functions
  $(".btn-pepperonni").removeClass("active");
  $(".btn-pepperonni").click(function() {
    $(".btn-pepperonni").toggleClass("active");
    $(".pep").toggle();
    $(".price ul li:first").toggle();
    ingredientPrice(".price ul li:first");
    ingredientActive(".btn-pepperonni", ingredient, 0);
  });

  $(".btn-mushrooms").removeClass("active");
  $(".btn-mushrooms").click(function() {
    $(".btn-mushrooms").toggleClass("active");
    $(".mushroom").toggle();
    $(".price ul li:contains('mushrooms')").toggle();
    ingredientPrice(".price ul li:contains('mushrooms')");
    ingredientActive(".btn-mushrooms", ingredient, 1);
  });

  $(".btn-green-peppers").removeClass("active");
  $(".btn-green-peppers").click(function() {
    $(".btn-green-peppers").toggleClass("active");
    $(".green-pepper").toggle();
    $(".price ul li:contains('green')").toggle();
    ingredientPrice(".price ul li:contains('green')");
    ingredientActive(".btn-green-peppers", ingredient, 2);
  });

  $(".sauce").removeClass("sauce-white");
  $(".price ul li:contains('white')").hide();
  $(".btn-sauce").click(function() {
    $(".btn-sauce").toggleClass("active");
    $(".sauce").toggleClass("sauce-white");
    $(".price ul li:contains('white')").toggle();
    ingredientPrice(".price ul li:contains('white')");
    ingredientActive(".btn-sauce", ingredient, 3);
  });

  $(".crust").removeClass("crust-gluten-free");
  $(".price ul li:last").hide();
  $(".btn-crust").click(function() {
    $(".btn-crust").toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
    $(".price ul li:last").toggle();
    ingredientPrice(".price ul li:last");
    ingredientActive(".btn-crust", ingredient, 4);
  });
  total = 10 + ingredient[0] + ingredient[1] + ingredient[2] + ingredient[3] + ingredient[4];


    $(".btn").click(function() {console.log(total);});

});
