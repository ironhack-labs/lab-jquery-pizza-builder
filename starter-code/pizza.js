$(document).ready(function(){

  // Add / Remove ingredients

  $(".btn-pepperoni").click(() => {$("#pep-all").children().toggle();})  
  $(".btn-green-peppers").click(() => {$("#green-pepper-all").children().toggle();})  
  $(".btn-mushrooms").click(() => {$("#mushroom-all").children().toggle();})  
  $(".btn-sauce").click(() => {$("#sauce").toggleClass("sauce-white");})  
  $(".btn-crust").click(() => {$("#crust").toggleClass("crust-gluten-free");})  

  // Change "active" class of buttons on click

  $(".btn-pepperoni").click(() =>  {$(event.currentTarget).toggleClass("active");})  
  $(".btn-green-peppers").click(() =>  {$(event.currentTarget).toggleClass("active");})  
  $(".btn-mushrooms").click(() =>  {$(event.currentTarget).toggleClass("active");})  
  $(".btn-sauce").click(() =>  {$(event.currentTarget).toggleClass("active");})  
  $(".btn-crust").click(() =>  {$(event.currentTarget).toggleClass("active");})  


  // Add / Remove prices for ingredients

  $(".btn-pepperoni").click(() => {$("#pep-price").toggle();})  
  $(".btn-green-peppers").click(() => {$("#green-pepper-price").toggle();})  
  $(".btn-mushrooms").click(() => {$("#mushroom-price").toggle();})  
  $(".btn-sauce").click(() => {$("#sauce-price").toggle();})  
  $(".btn-crust").click(() => {$("#crust-price").toggle();})  


  
  // Modify total price (keep track through the toggles)

    // NB: This is quite complicated as I think I probably should have made the price items actually add / remove
    //   (i.e. change the state of the html), so I could look at the html elements to get the price... ?

    // Initial values
  var totalPrice = 21;

  var pepOnOrOff = "on";
  var greenPeppersOnOrOff = "on";
  var mushroomOnOrOff = "on";
  var sauceOnOrOff = "off";
  var crustOnOrOff = "off";

  var pepPrice = 1;
  var greenPeppersPrice = 1;
  var mushroomPrice = 1;
  var saucePrice = 3;
  var crustPrice = 5;


  function calcTotalPrice(onOrOff, itemAmount, totalPrice) {
    if(onOrOff === "on") {
      return totalPrice -= itemAmount;
    } else {
      return totalPrice += itemAmount;
    }
  };

  function setTotalPrice(totalPrice) {
    $("#total-price").html(totalPrice);
  };

  function takeOnOrOff(onOrOff) {
    if(onOrOff === "on") {
      return "off";   
    } else {
      return "on";
    }
  }

  $(".btn-pepperoni").click(() => {
    totalPrice = calcTotalPrice(pepOnOrOff, pepPrice, totalPrice);
    setTotalPrice(totalPrice);
    pepOnOrOff = takeOnOrOff(pepOnOrOff);
  }) 

  $(".btn-green-peppers").click(() => {
    totalPrice = calcTotalPrice(greenPeppersOnOrOff, greenPeppersPrice, totalPrice);
    setTotalPrice(totalPrice);
    greenPeppersOnOrOff = takeOnOrOff(greenPeppersOnOrOff);
  });

  $(".btn-mushrooms").click(() => {
    totalPrice = calcTotalPrice(mushroomOnOrOff, mushroomPrice, totalPrice);
    setTotalPrice(totalPrice);
    mushroomOnOrOff = takeOnOrOff(mushroomOnOrOff);
  });
  
  $(".btn-sauce").click(() => {
    totalPrice = calcTotalPrice(sauceOnOrOff, saucePrice, totalPrice);
    setTotalPrice(totalPrice);
    sauceOnOrOff = takeOnOrOff(sauceOnOrOff);
  });

  $(".btn-crust").click(() => {
    totalPrice = calcTotalPrice(crustOnOrOff, crustPrice, totalPrice);
    setTotalPrice(totalPrice);
    crustOnOrOff = takeOnOrOff(crustOnOrOff);
  });

})