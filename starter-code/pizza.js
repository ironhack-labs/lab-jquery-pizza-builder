// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
  //por defecto la salsa y la masa es la normal
  $(".sauce").removeClass("sauce-white");
  $(".crust").removeClass("crust-gluten-free");
  $(".btn").removeClass("active");
  //ocultamos la lista ingredientes
  $(".price > ul > li").hide();
  //borramos ingredientes
  $(".green-pepper").hide();
  $(".mushroom").hide();
  $(".pep").hide();

  var basePrice = 10;
  var totalPrice = 0;

  $(".btn-pepperonni").click(function(event) {
    $(".pep").toggle();
    $(this).toggleClass("active");
    $(".price > ul > li:first-child").toggle()
    // expresion regular para sustituir todo exceptuando los numeros (0-9)
    var $pepPrice = $(".price > ul > li:first-child")[0].innerHTML.replace(/[^0-9]/g, "");
    console.log($pepPrice);
  })
  $(".btn-mushrooms").click(function(event) {
    $(".mushroom").toggle();
    $(this).toggleClass("active");
    $(".price > ul > li:nth-child(2)").toggle();
    var $mushPrice = $(".price > ul > li:nth-child(2)")[0].innerHTML.replace(/[^0-9]/g, "");
  })

  $(".btn-green-peppers").click(function(event) {
    $(".green-pepper").toggle();
    $(this).toggleClass("active");
    $(".price > ul > li:nth-child(3)").toggle();
    var $greenPrice = $(".price > ul > li:nth-child(3)")[0].innerHTML.replace(/[^0-9]/g, "");
  })
  $(".btn-sauce").click(function(event) {
    $(".sauce").toggleClass("sauce-white");
    $(this).toggleClass("active");
    $(".price > ul > li:nth-child(4)").toggle();
    var $saucePrice = $(".price > ul > li:nth-child(4)")[0].innerHTML.replace(/[^0-9]/g, "");
  })
  $(".btn-crust").click(function(event) {
    $(".crust").toggleClass("crust-gluten-free");
    $(this).toggleClass("active");
    $(".price > ul > li:nth-child(5)").toggle();
    var $crustPrice = $(".price > ul > li:nth-child(5)")[0].innerHTML.replace(/[^0-9]/g, "");
  })


  // <li >$3 regular sauce</li>
  // <li>$5 gluten-free crust</li>

});