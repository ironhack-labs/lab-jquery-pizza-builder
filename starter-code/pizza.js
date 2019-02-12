// Write your Pizza Builder JavaScript in this file.
var contador = 10;

$(document).ready(function() {

   $(".price strong").text("$" + contador);
  if ($("button.btn-pepperonni").hasClass("active")){
    contador++;
    $(".price strong").text("$" + contador);
  }
  if ($("button.btn-mushrooms").hasClass("active")){
    contador++;
    $(".price strong").text("$" + contador);
  }
  if ($("button.btn-green-peppers").hasClass("active")){
    contador++;
    $(".price strong").text("$" + contador);
  }
  $(".btn").click(function(event){
    $(this).toggleClass("active");
  });

  $("button.btn-pepperonni").click(function(event){
    if ($("button.btn-pepperonni").hasClass("active")){
      contador++;
      $(".price strong").text("$" + contador);
    } else{
      contador--;
      $(".price strong").text("$" + contador);
    }
    $("section.pep").toggle("display");
    $("li:contains('pepperonni')").toggle("display");
  });

  $("button.btn-green-peppers").click(function(event){
    if ($("button.btn-green-peppers").hasClass("active")){
        contador++;
      $(".price strong").text("$" + contador);
    } else{
        contador--;
      $(".price strong").text("$" + contador);
    }
    $("section.green-pepper").toggle("display");
    $("li:contains('green peppers')").toggle("display");
  });

  $("button.btn-mushrooms").click(function(event){
    if ($("button.btn-mushrooms").hasClass("active")){
      contador++;
      $(".price strong").text("$" + contador);
    } else{
      contador--;
      $(".price strong").text("$" + contador);
    }
    $("section.mushroom").toggle("display");
    $("li:contains('mushrooms')").toggle("display");

  });

  $("button.btn-sauce").toggleClass("active");
  $("section.sauce").removeClass("sauce-white");

  $("button.btn-sauce").click(function(event){
    if ($("button.btn-sauce").hasClass("active")){
      contador+=3;
      $(".price strong").text("$" + contador);
    } else{
      contador-=3;
      $(".price strong").text("$" + contador);
    }
    $("section.sauce").toggleClass("sauce-white");
    $("li:contains('white sauce')").toggle("display");
  });

  if (!$("button.btn-sauce").hasClass("active")){
    $("li:contains('white sauce')").css({"display":"none"});
  }

  $("button.btn-crust").toggleClass("active");
  $("section.crust").removeClass("crust-gluten-free");

  $("button.btn-crust").click(function(){
    if ($("button.btn-crust").hasClass("active")){
      contador+=5;
      $(".price strong").text("$" + contador);
    } else{
      contador-=5;
      $(".price strong").text("$" + contador);
    }
    $("section.crust").toggleClass("crust-gluten-free");
    $("li:contains('gluten-free crust')").toggle("display");
  });

  if (!$("button.btn-crust").hasClass("active")){
    $("li:contains('gluten-free crust')").css({"display":"none"});
  }

   $(".price strong").text("$" + contador);


});