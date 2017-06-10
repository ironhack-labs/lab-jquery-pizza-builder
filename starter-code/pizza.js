// Write your Pizza Builder JavaScript in this file.
var totalAmount =13;
//Iteration1
$(document).ready(function(){
  // $('.green-pepper').hide();
  // $('.mushroom').hide();
  // $('.pep').hide();
  var isPepperOn = true;
  var isMushroomOn =true;
  var ispeperoniOn =true;


  //pepperoni
  $('.btn-pepperonni').click(function(){
    //put pepperoni
    if(ispeperoniOn === false){
      $(".btn-pepperonni").addClass("active");
      ispeperoniOn = true;
      $('.pep').show();
      $(".price li:contains('pepperonni')").show();
      totalAmount +=1;
    }
    else{
      ispeperoniOn = false;
      $(".btn-pepperonni").removeClass("active");
      $('.pep').hide();
      $(".price li:contains('pepperonni')").hide();
      totalAmount -=1;
    }
    $(".price strong").html("$" + totalAmount);
  });

  //mushroom
  $('.btn-mushrooms').click(function(){
    if(isMushroomOn === false){
      $(".btn-mushrooms").addClass("active");
      isMushroomOn = true;
      $('.mushroom').show();
      $(".price li:contains('mushrooms')").show();
      totalAmount+=1;
    }
    else{
      isMushroomOn = false;
      $(".btn-mushrooms").removeClass("active");
      $('.mushroom').hide();
      $(".price li:contains('mushrooms')").hide();
      totalAmount-=1;
    }
    $(".price strong").html("$" + totalAmount);
  });

  //green-pepper
  $('.btn-green-peppers').click(function(){
    if(isPepperOn === false){
      $(".btn-green-peppers").addClass("active");
      isPepperOn = true;
      $('.green-pepper').show();
      $(".price li:contains('green')").show();
      totalAmount+=1;
    }
    else{
      isPepperOn = false;
      $(".btn-green-peppers").removeClass("active");
      $('.green-pepper').hide();
      $(".price li:contains('green')").hide();
      totalAmount-=1;
    }
    $(".price strong").html("$" + totalAmount);
  });
});

//Iteration2
$(document).ready(function(){

  $('.crust').removeClass("crust-gluten-free");
  $('.sauce').removeClass("sauce-white");
  var isGlutenOn = false;
  $(".btn-crust").removeClass("active");
  var isWhitesauceOn = false;
  $(".btn-sauce").removeClass("active");

  $('.btn-crust').click(function(){
    if(isGlutenOn === false){
      $(".btn-crust").addClass("active");
      isGlutenOn = true;
      $('.crust').addClass("crust-gluten-free");
      $(".price li:contains('gluten')").show();
      totalAmount+=5;
    }
    else{
      isGlutenOn = false;
      $(".btn-crust").removeClass("active");
      $('.crust').removeClass("crust-gluten-free");
      $(".price li:contains('gluten')").hide();
      totalAmount-=5;
    }
    $(".price strong").html("$" + totalAmount);
  });

  $('.btn-sauce').click(function(){
    if(isWhitesauceOn === false){
      $(".btn-sauce").addClass("active");
      isWhitesauceOn = true;
      $('.sauce').addClass("sauce-white");
      $(".price li:contains('white')").show();
      totalAmount+=3;
    }
    else{
      isWhitesauceOn = false;
      $(".btn-sauce").removeClass("active");
      $('.sauce').removeClass("sauce-white");
      $(".price li:contains('white')").hide();
      totalAmount-=3;
    }
    $(".price strong").html("$" + totalAmount);
  });
});
//Iteration4
$(document).ready(function(){
   $(".price li:contains('gluten')").hide();
   $(".price li:contains('white')").hide();
   $(".price strong").html("$13");
});
