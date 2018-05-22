$(document).ready(function() {


  //Buttons
  var counter = 16

  $("button").click(function(event){
    $(this).toggleClass("active");
  });



  $("button.btn-pepperonni").click(function(event){
    $("section.pep").toggle("display");
    $("li:contains('pepperonni')").toggle("display");
    if(!$("button.btn-pepperonni").hasClass("active")){
      $(".price strong").text("$" + (--counter));
    } else {
      $(".price strong").text("$" + (++counter));
    }

  });




  $("button.btn-green-peppers").click(function(event){
    $("section.green-pepper").toggle("display");
    $("li:contains('green peppers')").toggle("display");
    if(!$("button.btn-green-peppers").hasClass("active")){
      $(".price strong").text("$" + (--counter));
    } else if ($("button.btn-green-peppers").hasClass("active")){
      $(".price strong").text("$" + (++counter));
    }
  });

  $("button.btn-mushrooms").click(function(event){
    $("section.mushroom").toggle("display");
    $("li:contains('mushrooms')").toggle("display");
    if(!$("button.btn-mushrooms").hasClass("active")){
      $(".price strong").text("$" + (--counter));
    } else if ($("button.btn-mushrooms").hasClass("active")){
      $(".price strong").text("$" + (++counter));
    }
  });

  //Sauce and crust Buttons


  //Sauce
  $("button.btn-sauce").toggleClass("active");
  $("section.sauce").removeClass("sauce-white");

  $("button.btn-sauce").click(function(event){
    $("section.sauce").toggleClass("sauce-white");
    $("li:contains('white sauce')").toggle("display");
  });

  if (!$("button.btn-sauce").hasClass("active")){
    $("li:contains('white sauce')").css({"display":"none"});
  }


  // Crust
  $("button.btn-crust").toggleClass("active");
  $("section.crust").removeClass("crust-gluten-free");

  $("button.btn-crust").click(function(event){
    $("section.crust").toggleClass("crust-gluten-free");
    $("li:contains('gluten-free crust')").toggle("display");
  });

  if (!$("button.btn-crust").hasClass("active")){
    $("li:contains('gluten-free crust')").css({"display":"none"});
  }


  //Adding to the final price

  
   $(".price strong").text("$" + counter);


});
/* faltaria sumar y restar  el valor de btn crust y el de btn-sauce per al ser  un valor expecifico no se como hacerlo*/