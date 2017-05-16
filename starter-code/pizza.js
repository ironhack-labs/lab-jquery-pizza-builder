// Write your Pizza Builder JavaScript in this file.
//resetting pizza parameters
$(".crust").removeClass("crust-gluten-free");
$(".crust section.sauce").removeClass("sauce-white");
$(".panel.price ul li:nth-child(4)").hide();
$(".panel.price ul li:nth-child(5)").hide();
$(".btn-crust").removeClass("active");
$(".btn-sauce").removeClass("active");


//for every button
//toggle class (active) to update prices
//we print the price list, call get price function, update price
$(".btn-pepperonni").on("click", function(){
  $("#pizza section.pep")
    .toggle();
    $(this).toggleClass("active");
    $(".panel.price ul li:nth-child(1)").toggle();
    getPrice();
});
//mushrooms(hide)
$(".btn-mushrooms").on("click", function(){
  $("#pizza section.mushroom").toggle();
  $(this).toggleClass("active");
  $(".panel.price ul li:nth-child(2)").toggle();
  getPrice();
});
//green peppers (hide)
$(".btn-green-peppers").on("click", function(){
  $("#pizza section.green-pepper").toggle();
  $(this).toggleClass("active");
  $(".panel.price ul li:nth-child(3)").toggle();
   getPrice();
});
//crust
$(".btn-crust").on("click", function(){
  $(".crust").toggleClass("crust-gluten-free");
  $(this).toggleClass("active");
  $(".panel.price ul li:nth-child(5)").toggle();
   getPrice();
});
//sauce
$(".btn-sauce").on("click", function(){
  $("#pizza section section.sauce").toggleClass("sauce-white");
  $(this).toggleClass("active");
  $(".panel.price ul li:nth-child(4)").toggle();
 getPrice();
});

function getPrice(){
  var basicPizza = 10;
  var pepperonni = 0;
  var mushrooms = 0;
  var greenPeppers = 0;
  var glutenFree = 0;
  var whiteSauce = 0;

  if($(".btn-pepperonni").hasClass("active")){
    pepperonni = 1;
  }
  if($(".btn-mushrooms").hasClass("active")){
    mushrooms = 1;
  }
  if($(".btn-green-peppers").hasClass("active")){
    greenPeppers = 1;
  }
  if($(".btn-sauce").hasClass("active")){
    whiteSauce = 3;
  }
  if($(".btn-crust").hasClass("active")){
    glutenFree = 5;
  }

  var totalPrice = basicPizza + pepperonni + mushrooms + greenPeppers + glutenFree + whiteSauce;

  $(".panel.price strong").html("$"+totalPrice);

}
