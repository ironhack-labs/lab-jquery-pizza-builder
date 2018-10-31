// Write your Pizza Builder JavaScript in this file.
$(function(){

  var pepperonis = {active: true, price: 1}
  var mushrooms = {active: true, price: 1}
  var peppers = {active: true, price: 1}
  var sauce = {active: false, price: 3}
  var crust = {active: false, price: 5}

  var ingredientsArray = [pepperonis,mushrooms,peppers,sauce,crust];

  $(".sauce-toppings").hide();
  $(".crust-toppings").hide();
  
  $(".btn-pepperonni").click(function(){ 
    pepperonis.active = !pepperonis.active;
    $(".pep-toppings").toggle();
    $("section.pep").toggle();
  })

  $(".btn-mushrooms").click(function(){ 
    mushrooms.active = !mushrooms.active;
    $(".mush-toppings").toggle();
    $("section.mushroom").toggle();
    }) 


  $(".btn-green-peppers").click(function(){ 
  peppers.active = !peppers.active;
  $(".grpep-toppings").toggle();
      $("section.green-pepper").toggle();
  }) 

  $(".btn-sauce").click(function(){ 
    sauce.active = !sauce.active;
    $(".sauce-toppings").toggle();
    $(".sauce").toggleClass("sauce-white");
  }) 

  $(".btn-crust").click(function(){
    crust.active = !crust.active;
    $(".crust-toppings").toggle();
    $(".crust").toggleClass("crust-gluten-free");
    }) 

  $("button").click(function(){ 
    $(this).toggleClass("active");
    let total = 10;
    for(let i = 0; i < ingredientsArray.length; i++){
      if (ingredientsArray[i].active){ 
        total += ingredientsArray[i].price; 
      } 
    }
    $("#total").html(`$ ${total}`);
  })
})