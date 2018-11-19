// Write your Pizza Builder JavaScript in this file.
$( document ).ready(function() {

  $(".btn-pepperonni").click(function() {
    $(this).toggleClass("active")
    $('.pep').toggle();
    var pepPrice = 1;
    // si esta activo true : false
    calculatePrice(pepPrice, 'pep', boolean)
  })
  
  $(".btn-mushrooms").click(function() {
    $ (this).toggleClass("active")
    $('.mushroom').toggle();
  })
  
  $(".btn-green-peppers").click(function() {
    $ (this).toggleClass("active")
    $('.green-pepper').toggle();
  })
  
  $(".btn-sauce").click(function() {
    $ (this).toggleClass("active")
    $('.sauce').toggle();
  })
  
  $(".btn-crust").click(function() {
    $ (this).toggleClass("active")
    $('.crust').toggleClass("crust-gluten-free");
  })

});


function calculatePrice() {
  var total = 10;

  $(".price li").hide();

  


// var totalPrice =  $(".price strong")[0];
// var pepperonniPrice = $(".price ul li")[0];
// var mushroomsPrice = $(".price ul li")[1];
// var greenPeppersPrice = $(".price ul li")[2];
// var whiteSaucePrice = $(".price ul li")[3];
// var glutenFreeCrust = $(".price ul li")[4];








