// Write your Pizza Builder JavaScript in this file.
$('document').ready(function(){
  var total = 10;  //priceTotal
 $('.crust').removeClass('crust-gluten-free');
 $('.sauce').removeClass('sauce-white');
 $("li:contains('$3 white sauce')").hide();
 $("li:contains('$5 gluten-free crust')").hide();
 $("li:contains('$1 pepperonni')").hide();
 $("li:contains('$1 mushrooms')").hide();
 $("li:contains('$1 green peppers')").hide();
  var pepperonniPressed = true;
  $('.btn-pepperonni').click(function(){
    if (pepperonniPressed) {
      total += 1;
      $('.price strong').html('$'+total);
      $('.pep').show();
      $("li:contains('$1 pepperonni')").show();
      $(this).addClass("active");
      pepperonniPressed = false;

   }
   else {
     total -= 1;
     $('.price strong').html('$'+total);
     $('.pep').hide();
     $("li:contains('$1 pepperonni')").hide();
     $(this).removeClass("active");
       pepperonniPressed = true;
   }
  });

  var mushroomsPressed = true;
  $('.btn-mushrooms').click(function(){
    if (mushroomsPressed) {
      total += 1;
      $('.price strong').html('$'+total);
      $('.mushroom').show();
      $("li:contains('$1 mushroom')").show();
      $(this).addClass("active");
      mushroomsPressed = false;

   }
   else {
     total -= 1;
     $('.price strong').html('$'+total);
     $('.mushroom').hide();
      $("li:contains('$1 mushroom')").hide();
     $(this).removeClass("active");
       mushroomsPressed = true;
   }
  });

  var peppersPressed = true;
  $('.btn-green-peppers').click(function(){
    if (peppersPressed) {
      total += 1;
      $('.price strong').html('$'+total);
      $('.green-pepper').show();
      $("li:contains('$1 green peppers')").show();
      $(this).addClass("active");
      peppersPressed = false;

   }
   else {
     total -= 1;
     $('.price strong').html('$'+total);
     $('.green-pepper').hide();
     $("li:contains('$1 green peppers')").hide();
     $(this).removeClass("active");
       peppersPressed = true;
   }
  });

  var glutenFreePressed = true;
  $('.btn-crust').click(function(){
    if (glutenFreePressed) {
      total +=5;
      $('.price strong').html('$'+total);
      $('.crust').addClass('crust-gluten-free');
      $("li:contains('$5 gluten-free crust')").show();
      $(this).addClass("active");
      glutenFreePressed = false;

   }
   else {
     total -= 5;
     $('.price strong').html('$'+total);
     $('.crust').removeClass('crust-gluten-free');
       $("li:contains('$5 gluten-free crust')").hide();
     $(this).removeClass("active");
       glutenFreePressed = true;
   }
  });

  var whiteSaucePressed = true;
  $('.btn-sauce').click(function(){
    if (whiteSaucePressed) {
      total += 3;
      $('.price strong').html('$'+total);
      $('.sauce').addClass('sauce-white');
      $("li:contains('$3 white sauce')").show();
      $(this).addClass("active");
      whiteSaucePressed = false;

   }
   else {
        total -= 3;
        $('.price strong').html('$'+total);
       $('.sauce').removeClass('sauce-white');
         $("li:contains('$3 white sauce')").hide();
     $(this).removeClass("active");
       whiteSaucePressed = true;
   }
  });





});
