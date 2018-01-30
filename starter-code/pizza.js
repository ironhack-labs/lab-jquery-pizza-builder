// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){

//Add Price to Total
  function addTotalPrice(price){
  var total = $("aside strong").text();
  //Convert from Currency to Number
  var number =Number(total.replace(/[^0-9\.]+/g,""))
  //Subtract Price of Ingredient from Total
  var newTotal = (number + price).toString();
  //Send new total to the Browser
  $("aside strong").html(newTotal);
  }

  //Subtract Price From Total
  function subtractTotalPrice(price){
    var total = $("aside strong").text();
    //Convert from Currency to Number
    var number =Number(total.replace(/[^0-9\.]+/g,""))
    //Subtract Price of Ingredient from Total
    var newTotal = (number - price).toString();
    //Send new total to the Browser
    $("aside strong").html(newTotal);
  }



  //Remove and Add Green Peppers on Click
$('.btn-green-peppers').click(function(){
$("#pizza .green-pepper").toggle();
$(".btn-green-peppers").toggleClass("active");
$("li:contains('$1 green peppers')").toggle();

//Chnage price according to active state of button
if ($(".btn-green-peppers").hasClass("active")){
     addTotalPrice(1)}
else {
  subtractTotalPrice(1)}
}
)

//Remove and Add Pepperoni on Click
$(".btn-pepperonni").click(function(){
  $("#pizza .pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
  $("li:contains('$1 pepperonni')").toggle();
  
  if ($(".btn-pepperonni").hasClass("active")){
     addTotalPrice(1)}
else {
  subtractTotalPrice(1)}
}
)


//Remove and Add Mushrooms on Click
$(".btn-mushrooms").on("click", function() {
  $("#pizza .mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
  $("li:contains('$1 mushrooms')").toggle();
  
  if ($(".btn-mushrooms").hasClass("active")){
    addTotalPrice(1)}
else {
 subtractTotalPrice(1)}
})


//Toggle White-Sauce on Click
$(".btn-sauce").click(function(){
    $("#pizza .sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $("li:contains('$3 white sauce')").toggle();
    if ($(".btn-sauce").hasClass("active")){
    addTotalPrice(3)}
    else {
     subtractTotalPrice(3)}
})


//Toggle Crust on Click
$(".btn-crust").click(function(){
  $("#pizza .crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
  $("li:contains('$5 gluten-free crust')").toggle();
  if ($(".btn-crust").hasClass("active")){
    addTotalPrice(5)}
    else {
     subtractTotalPrice(5)}
})

})