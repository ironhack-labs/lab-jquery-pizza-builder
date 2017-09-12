// Write your Pizza Builder JavaScript in this file.
$( document ).ready(function(){

  var total = 13;//default
  $('strong').text(total);
  var priceMushroom=1;
  var pricePepperoni=1;
  var priceGreenPeppers=1;
  var priceSauce=3;
  var priceCrust=5;

  //default

//Iteration 1: Add and remove toppings + Iteration 3

$('.btn').click(function(){
  $(this).toggleClass("active");
  //$('strong').text(total);
});

  $('.btn-mushrooms').click(function(event){

    if ( $( this ).is( ".active" )) {
      total+= priceMushroom;
    } else {
      total-=priceMushroom;
      }
      $('strong').text(total);
      $('.mushroom').toggle();
  });

  $('.btn-pepperonni').click(function(){
    //$(this).toggleClass("active");
    if ($( this ).is( ".active" )) {
      total+=pricePepperoni;
      //console.log("Hey if +"+total);
    } else {
      total-=pricePepperoni;
      //console.log("Hey -"+total);
    }
    $('strong').text(total);
    $('.pep').toggle();
  });

  $('.btn-green-peppers').click(function(){

    if ( $( this ).is( ".active" )) {
       total+= priceGreenPeppers;
    } else {
       total-= priceGreenPeppers;
    }
    $('strong').text(total);
    $('.green-pepper').toggle();
  });

  //Iteration 2: Sauce and crust options

  //default
 $('.crust').removeClass('crust-gluten-free');
 $('.sauce').removeClass('sauce-white');
 $('.btn-sauce, .btn-crust').removeClass('active');

 $('.btn-sauce').click(function(event){
   $('.sauce').toggleClass('sauce-white');
   if ( $( this ).is( ".active" ) ) {
     total+=priceSauce;
   } else {
     total-=priceSauce;
   }
   $('strong').text(total);
 });


 $('.btn-crust').click(function(event){
   $('.crust').toggleClass('crust-gluten-free');

   if ( $( this ).is( ".active" ) ) {
     total+=priceCrust;
     console.log("total+" +total);
   } else {
     total-=priceCrust;
   }
   $('strong').text(total);
 });

//Iteration 4: Ingredients and prices

$(".price li:nth-child(4), .price li:nth-child(5)").hide(); //, strong ? total price


//Iteration 5: Update price


$('strong').text(total);

});
