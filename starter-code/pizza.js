// Write your Pizza Builder JavaScript in this file.


//IERATION 1


$(".btn-pepperonni").click(function(){
  
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
  $(".price ul :first-child").toggle();
 
  
});

$(".btn-mushrooms").click(function(){
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
  $(".price ul :nth-child(2)").toggle();
  
});

$(".btn-green-peppers").click(function(){
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
  $(".price ul :nth-child(3)").toggle();
  
});



//ITERATION 2

$(".sauce").removeClass("sauce-white");
//$('.sauce').hide("price ul :nth-child(4)");


$(".btn-sauce").click(function(){
  $(".sauce").toggleClass("sauce-white","sauce");
  $(".btn-sauce").toggleClass("active");
  //$(".price ul :nth-child(4)").show("price ul :nth-child(4)");
  
});

$(".crust").removeClass("crust-gluten-free");
$(".btn-crust").click(function(){
  
  $(".crust").toggleClass("crust-gluten-free");
  
  $(".btn-crust").toggleClass("active");
  
});


//ITERATION 3 DONE

//ITERATION 4






  




