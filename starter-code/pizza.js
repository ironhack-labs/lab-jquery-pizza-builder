// Write your Pizza Builder JavaScript in this file.
//TODO: retirer les variables et ré-adapter les fonctions 

//var btnPep = $(".btn-pepperonni");
//var btnMush = $(".btn-mushrooms");
//var btnGreen = $(".btn-green-peppers");
//var btnSauce = $(".btn-sauce");
//var btnCrust = $(".btn-crust");

$(document).ready(function(){

  // Select the toppings with the 3 buttons 
  $(".btn-pepperonni").click(function(){
    $(".btn-pepperonni").toggleClass("active");
    $(".pep").toggle();
  });

  $(".btn-mushrooms").click(function(){
    $(".btn-mushrooms").toggleClass("active");
    $(".mushroom").toggle();
  });

  $(".btn-green-peppers").click(function(){
    $(".btn-green-peppers").toggleClass("active");
    $(".green-pepper").toggle();
  });
// End of the selection of toppings

// Hide the white sauce  by default on loading the page
  $(".sauce").toggleClass("sauce-white");

// Select the white sauce clicking on the button
  $(".btn-sauce").click(function(){
    $(".sauce").toggleClass("sauce-white");
  });

// Hide the crust gluten free by default loading the page
  $(".crust").toggleClass("crust-gluten-free");

// Select the crust gluten free clicking the button
  $(".btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free");
  });

});






//$(document).ready(function(){
//    $(".crust").toggleClass("crust-gluten-free");
//});
//btnCrust.click(function(){
//    btnCrust.toggleClass("active");
//    $(".crust").hasClass("crust-gluten-free");
//});