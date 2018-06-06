// Write your Pizza Builder JavaScript in this file.
// $( document ).ready(function() {
//   $('.btn').click(function(){
//     $(this).addClass('on');
//   });
// });

// // hide/unhide/toggle

// $
// .add()
// .append()
// .remove

// :button
// .click()


// var initialPrice = 10;
// var totalPrice =


$(".btn-pepperonni").click(function(){
  $(".pep").toggle();
  $(".price ul li:nth-child(1)").toggle();
});

$(".btn-mushrooms").click(function(){
  $(".mushroom").toggle();
  $(".price ul li:nth-child(2)").toggle();
});

$(".btn-green-peppers").click(function(){
  $(".green-pepper").toggle();
  $(".price ul li:nth-child(3)").toggle();
});

$(".btn-sauce").click(function(){
  event.preventDefault();
  $(".sauce").toggleClass("sauce-white");
  $(".price ul li:nth-child(4)").toggle();
});

$(".btn-crust").click(function(){
  event.preventDefault();
  $(".crust").toggleClass("crust-gluten-free");
  $(".price ul li:nth-child(5)").toggle();
});

$(".btn").click(function() {
  $(this).toggleClass("active");
});

$(".btn-crust").removeClass("active");
$(".btn-sauce").removeClass("active");
$(".crust-gluten-free").removeClass("crust-gluten-free");
$(".sauce-white").removeClass("sauce-white");

$(".price li:contains('sauce')").hide();
$(".price li:contains('crust')").hide();

// var ingredients = newArray();
// ingredients[pepperonni] = 1;
// ingredients[peppers] = 1;
// ingredients[mushrooms] = 1;
// ingredients[crust] = 1;
// ingredients[sauce-white] = 1;

// var options = [
//   {
//     option: "pepperonni",
//     price: 1,
//     isActive: true;
//   }
//   {
//     option: "mushroom",
//     price: 1,
//     isActive: true;
//   }
//   {
//     option: "green-peppers",
//     price: 1,
//     isActive: true;
//   }
//   {
//     option: "sauce",
//     price: 1,
//     isActive: true;
//   }
//   {
//     option: "crust",
//     price: 1,
//     isActive: true;
//   }
// ]

// $(".price stong")event:change or update funtion()
// $()
// var totalPrice
// add 10 + li [1]
// innerHTML
// $([attribute^='$'])
//Selects all input elements of type text	$(":text")
//Selects all enabled elements	$(":enabled")


//---------------------------------------------


// default show b & li 1-3
// .click add sauce-white & crust-gluten-free

// $('.heart').on('green', function() {
//   $(this).toggleClass('green')
//   $(this).prevAll().addClass('green');
// });

// $( "a" ).click(function( event ) {
//   event.preventDefault();
//   $( "<div>" )
//     .append( "default " + event.type + " prevented" )
//     .appendTo( "#log" );
// });