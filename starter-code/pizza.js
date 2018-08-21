// Write your Pizza Builder JavaScript in this file.
$('.btn-crust').removeClass("active");
$('.btn-sauce').removeClass("active");
$('.crust').removeClass("crust-gluten-free");
$('.sauce').removeClass("sauce-white");
$(".price li:contains('white sauce')").hide();
$(".price li:contains('gluten-free crust')").hide();
totalPrice()


let pepperButton = $(".btn-green-peppers")

pepperButton.click(function(e){
  console.log('Hello World');

  var peppers = $(".green-pepper");
  console.log(peppers);
    peppers.toggle();
    if (peppers.is(":visible")){
      pepperButton.addClass("active");
    }
    else {
      pepperButton.removeClass("active");
    }
    $(".price li:contains('peppers')").toggle();
    
    totalPrice();
})

let pepperoniButton = $(".btn-pepperonni")

pepperoniButton.click(function(e){
  var pepperoni = $(".pep");
  pepperoni.toggle();
  if (pepperoni.is(":visible")){
    pepperoniButton.addClass("active");
  }
  else {
    pepperoniButton.removeClass("active");
  }
  $(".price li:contains('pepperonni')").toggle();
  totalPrice();
})

let shroomButton = $(".btn-mushrooms")

shroomButton.click(function(e){
  var shrooms = $(".mushroom");
  shrooms.toggle();
  if (shrooms.is(":visible")){
    shroomButton.addClass("active");
  }
  else {
    shroomButton.removeClass("active");
  }
  $(".price li:contains('mushrooms')").toggle();
  totalPrice();
})

let sauceButton = $(".btn-sauce")

sauceButton.click(function(e){
  let sauceTag = $(".sauce");
  sauceTag.toggleClass("sauce-white");
  if (sauceTag.hasClass("sauce-white")){

    sauceButton.addClass("active");
  }
  else {
    sauceButton.removeClass("active");
  }
  $(".price li:contains('white sauce')").toggle();
  totalPrice();
  

})

let crustButton = $(".btn-crust")

  crustButton.click(function(e){
    let crustTag = $(".crust");
    crustTag.toggleClass("crust-gluten-free");
    if (crustTag.hasClass("crust-gluten-free")){
      crustButton.addClass("active");
    }
    else {
      crustButton.removeClass("active");
    }
    $(".price li:contains('gluten-free crust')").toggle();
    totalPrice();
  })


  function totalPrice(){
    let totalPriceGet = $(".price li:visible");
    console.log(totalPriceGet);
    let totalNums = 10.00;

    for (i=0; i<totalPriceGet.length; i++)
    {

      console.log(totalPriceGet.eq(i).html())

     totalNums += parseFloat(totalPriceGet.eq(i).html().substr(1));

     
    }
    
    $(".price strong").html(`$ ${totalNums}`);
  }
  