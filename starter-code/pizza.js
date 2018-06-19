
//to be downloaded from database :S
var globalPrices={
  pizza:10,
  greenpeppers:1,
  pepperonni:1,
  mushrooms:1,
  sauce:3,
  crust:5,
};


$(document).ready(function () {

  gpSections = $("section.green-pepper");
  mSections = $("section.mushroom");
  pSections = $("section.pep");
  crustSection = $("#pizza>section:last");
  sauceSection = $("#pizza>section>section:last");

  gpSections.hide();
  $("button.btn-green-peppers").removeClass("active");
  $("aside.price li:contains('green peppers')").css("display","none");

  mSections.hide();
  $("button.btn-mushrooms").removeClass("active");
  $("aside.price li:contains('mushrooms')").css("display","none");

  pSections.hide();
  $("button.btn-pepperonni").removeClass("active");
  $("aside.price li:contains('pepperonni')").css("display","none");

  crustSection.removeClass("crust-gluten-free");
  $("button.btn-crust").removeClass("active");
  $("aside.price li:contains('gluten-free crust')").css("display","none");

  sauceSection.removeClass("sauce-white");
  $("button.btn-sauce").removeClass("active");
  $("aside.price li:contains('white sauce')").css("display","none");
  
  updatePrices();

  ////////////////////////////
  ////button callbacks
  ////////////////////////////

  $("button.btn-green-peppers").click(function () {
    $(".green-pepper").fadeToggle(500);
    $(this).toggleClass("active");
    $("aside.price li:contains('green peppers')").fadeToggle(500);
    updatePrices();
  });

  $("button.btn-mushrooms").click(function () {
    $(".mushroom").fadeToggle(500);
    $(this).toggleClass("active");
    $("aside.price li:contains('mushrooms')").fadeToggle(500);
    updatePrices();
  });

  $("button.btn-pepperonni").click(function () {
    $(".pep").fadeToggle(500);
    $(this).toggleClass("active");
    $("aside.price li:contains('pepperonni')").fadeToggle(500);
    updatePrices();
  });

  $("button.btn-sauce").click(function () {
    sauceSection.toggleClass("sauce-white");
    $(this).toggleClass("active");
    $("aside.price li:contains('white sauce')").fadeToggle(500);
    updatePrices();
  });

  $("button.btn-crust").click(function () {
    crustSection.toggleClass("crust-gluten-free");
    $(this).toggleClass("active");
    $("aside.price li:contains('gluten-free crust')").fadeToggle(500);
    updatePrices();
  });

  
});

//////// price calc
var updatePrices=function(){
  let p= globalPrices.pizza +
($("button.btn-green-peppers").hasClass("active")? globalPrices.greenpeppers : 0) +
($("button.btn-mushrooms").hasClass("active")? globalPrices.mushrooms : 0)        +
($("button.btn-pepperonni").hasClass("active")? globalPrices.pepperonni : 0)      +
($("button.btn-crust").hasClass("active")? globalPrices.crust : 0)                +
($("button.btn-sauce").hasClass("active")? globalPrices.sauce : 0);

$("aside.price strong").text("$" + p.toString());
}