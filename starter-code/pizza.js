
 var counter = 10;

$(document).ready(function() {

   $(".price strong").text("$" + counter);
  //Buttons
  if ($("button.btn-pepperonni").hasClass("active")){
    counter = counter + 1;
    $(".price strong").text("$" + counter);
  }
  if ($("button.btn-mushrooms").hasClass("active")){
    counter = counter + 1;
    $(".price strong").text("$" + counter);
  }
  if ($("button.btn-green-peppers").hasClass("active")){
    counter = counter + 1;
    $(".price strong").text("$" + counter);
  }



  $(".btn").click(function(event){
    $(this).toggleClass("active");
  });



  $("button.btn-pepperonni").click(function(event){
    if ($("button.btn-pepperonni").hasClass("active")){
      counter = counter + 1;
      $(".price strong").text("$" + counter);
    } else{
      counter = counter - 1;
      $(".price strong").text("$" + counter);
    }
    $("section.pep").toggle("display");
    $("li:contains('pepperonni')").toggle("display");
  });




  $("button.btn-green-peppers").click(function(event){
    if ($("button.btn-green-peppers").hasClass("active")){
      counter = counter + 1;
      $(".price strong").text("$" + counter);
    } else{
      counter = counter - 1;
      $(".price strong").text("$" + counter);
    }
    $("section.green-pepper").toggle("display");
    $("li:contains('green peppers')").toggle("display");
  });

  $("button.btn-mushrooms").click(function(event){
    if ($("button.btn-mushrooms").hasClass("active")){
      counter = counter + 1;
      $(".price strong").text("$" + counter);
    } else{
      counter = counter - 1;
      $(".price strong").text("$" + counter);
    }
    $("section.mushroom").toggle("display");
    $("li:contains('mushrooms')").toggle("display");

  });

  //Sauce and crust Buttons


  //Sauce
  $("button.btn-sauce").toggleClass("active");
  $("section.sauce").removeClass("sauce-white");

  $("button.btn-sauce").click(function(event){
    if ($("button.btn-sauce").hasClass("active")){
      counter = counter + 3;
      $(".price strong").text("$" + counter);
    } else{
      counter = counter - 3;
      $(".price strong").text("$" + counter);
    }
    $("section.sauce").toggleClass("sauce-white");
    $("li:contains('white sauce')").toggle("display");
  });

  if (!$("button.btn-sauce").hasClass("active")){
    $("li:contains('white sauce')").css({"display":"none"});
  }


  // Crust
  $("button.btn-crust").toggleClass("active");
  $("section.crust").removeClass("crust-gluten-free");

  $("button.btn-crust").click(function(){
    if ($("button.btn-crust").hasClass("active")){
      counter = counter + 5;
      $(".price strong").text("$" + counter);
    } else{
      counter = counter - 5;
      $(".price strong").text("$" + counter);
    }
    $("section.crust").toggleClass("crust-gluten-free");
    $("li:contains('gluten-free crust')").toggle("display");
  });

  if (!$("button.btn-crust").hasClass("active")){
    $("li:contains('gluten-free crust')").css({"display":"none"});
  }


  //Adding to the final price

   $(".price strong").text("$" + counter);


//console.log(counter);


});


















//
