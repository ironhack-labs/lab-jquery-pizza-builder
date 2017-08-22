$(document).ready(function(){

//Topping
  $(".panel ul li:nth-child(1) .btn").click(function(){
    $(".price ul li:nth-child(1)").toggle();
    $("li:nth-child(1).btn").toggleClass("active, ");
    $(".pep").toggle();
  });

  $(".panel ul li:nth-child(2) .btn").click(function(){
    $(".price ul li:nth-child(2)").toggle();
    $("li:nth-child(2) .btn").toggleClass("active");
    $(".mushroom").toggle();
  });

  $(".panel ul li:nth-child(3) .btn").click(function(){
    $(".price ul li:nth-child(3)").toggle();
    $("li:nth-child(3) .btn").toggleClass("active");
    $(".green-pepper").toggle();
  });

  //Sauce

  $(".price ul li:nth-child(4)").hide();

  $(".panel ul li:nth-child(4) .btn").click(function(){
    $(".price ul li:nth-child(4)").toggle();
    $("li:nth-child(4) .btn").toggleClass("active");
    $(".sauce").toggle();
  });



  $(".price ul li:nth-child(5)").hide();

  $(".panel ul li:nth-child(5) .btn").click(function(){
    $(".price ul li:nth-child(5)").toggle();
    $("panel li:nth-child(5) .btn").toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
  });


  var elements = $(".price ul li").text();
  for (var i = 0; i < elements.length; i++) {
    console.log($(elements[i]).text().split(''));
  }







});
