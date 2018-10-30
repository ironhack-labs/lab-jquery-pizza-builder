// Write your Pizza Builder JavaScript in this file.
$(".btn-pepperonni").click(function(){
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
});



// ($(".mushroom").is(":visible")) {}


/*
$(".btn-mushrooms").click(function(){
  if ($(".mushroom")) {
    $(".mushroom").hide();  
  } else {
    $(".mushroom").show();
  }  
});
*/

$(".btn-mushrooms").click(function(){
  $(".mushroom").toggle();
  $(".btn-pepperonni").toggleClass("active");
});

$(".btn-green-peppers").click(function(){
  $(".green-pepper").toggle();
});

$(".btn-sauce").click(function(){
  $(".sauce").toggleClass("sauce-white");
});

$(".btn-crust").click(function(){
  $(".crust").toggleClass("crust-gluten-free");
});

// IT 3



/*
Write some JavaScript that will remove and add the buttons' active class appropriately. This is, if the ingredient is turned on, its button should have active. If the ingredient is off, remove the active class from the button.

Also make sure that the buttons' initial state matches that of their ingredient. If when you first load the pizza builder there is no pepperonni, the pepperonni button should not be active.

*/ 