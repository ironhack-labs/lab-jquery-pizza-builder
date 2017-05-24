$(document).ready(function() {
  //Iteration 1

  $("button.btn-mushrooms").click(function(event){
    $("section.mushroom").toggle("display");
    $(".panel.price ul li:nth-child(2)").toggle();
    $(this).attr("price-value","1");
  });

  $("button.btn-green-peppers").click(function(event){
    $("section.green-pepper").toggle("display");
    $(".panel.price ul li:nth-child(3)").toggle();
  });

  $("button.btn-pepperonni ").click(function(event){
    $("section.pep").toggle("display");
    $(".panel.price ul li:nth-child(1)").toggle();
  });

  //Iteration 2

  $("button.btn-sauce").removeClass("active");
  $("section.sauce").removeClass("sauce-white");

  $("button.btn-sauce").click(function(event){
    $("section.sauce").toggleClass("sauce-white");
    $(".panel.price ul li:nth-child(5)").toggle();
  });

  $("button.btn-crust").removeClass("active");
  $("section.crust").removeClass("crust-gluten-free");

  $("button.btn-crust").click(function(event){
    $("section.crust").toggleClass("crust-gluten-free");
    $(".panel.price ul li:nth-child(4)").toggle("");
  });

  //Iteration 3

  $("button").click(function(event){
    $(this).toggleClass("active");
    totalPrice();
  });

  //Iteration 4
  $(".panel.price ul li:nth-child(4)").hide();
  $(".panel.price ul li:nth-child(5)").hide();

  //Iteration 5
  //$(".panel.price").find ("li").addClass("price");
  $(".panel.price").find ("strong").addClass("totalPrice");
  $(".button.btn-pepperonni").attr('price-value','1');
  $(".button.btn-mushrooms").attr('price-value','1');
  $(".button.btn-green-peppers").attr('price-value','1');
  $(".button.btn-sauce").attr('price-value','3');
  $(".button.btn-crust").attr('price-value','5');

  function totalPrice(){
    var total = 10;
    $('.button:active').each(function(){
    total += parseInt($(this).attr("price-value"));
    })
    $('.totalPrice').text(total);
   }

});
