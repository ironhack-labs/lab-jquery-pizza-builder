// Write your Pizza Builder JavaScript in this file.

$(document).ready(function(){

  var prices = $(".price ul li")
  var pizzaPrice = 13

  function updatePrice(){
    $(".price strong").html("$" + pizzaPrice)
  }

  $(".btn-pepperonni").click(function(){
    $(".pep").fadeToggle();
    $(".btn-pepperonni").toggleClass("active");
    if($(".btn-pepperonni").hasClass("active")){
      $(prices[0]).html("$1 pepperonni")
      pizzaPrice += 1
      updatePrice()
    }else{
      $(prices[0]).html("$0 pepperonni")
      pizzaPrice -= 1
      updatePrice()
    }
  })


  $(".btn-mushrooms").click(function(){
    $(".mushroom").fadeToggle();
    $(".btn-mushrooms").toggleClass("active");
    if($(".btn-mushrooms").hasClass("active")){
      $(prices[1]).html("$1 mushrooms")
      pizzaPrice += 1
      updatePrice()
    }else{
      $(prices[1]).html("$0 mushrooms")
      pizzaPrice -= 1
      updatePrice()
    }
  })

  $(".btn-green-peppers").click(function(){
    $(".green-pepper").fadeToggle();
    $(".btn-green-peppers").toggleClass("active");
    if($(".btn-green-peppers").hasClass("active")){
      $(prices[2]).html("$1 green peppers")
      pizzaPrice += 1
      updatePrice()
    }else{
      $(prices[2]).html("$0 green peppers")
      pizzaPrice -= 1
      updatePrice()
    }
  })

  $(".btn-sauce").click(function(){
    $(".sauce").toggleClass("sauce-white")
    $(".btn-sauce").toggleClass("active");
    if($(".btn-sauce").hasClass("active")){
      $(prices[3]).html("$3 white sauce")
      pizzaPrice += 3
      updatePrice()
    }else{
      $(prices[3]).html("$0 white sauce")
      pizzaPrice -= 3
      updatePrice()
    }
  })

  $(".btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free")
    $(".btn-crust").toggleClass("active");
    if($(".btn-crust").hasClass("active")){
      $(prices[4]).html("$5 gluten-free crust")
      pizzaPrice += 5
      updatePrice()
    }else{
      $(prices[4]).html("$0 gluten-free crust")
      pizzaPrice -= 5
      updatePrice()
    }
  })


});