// Write your Pizza Builder JavaScript in this file.
var greenPepperSection = document.getElementById("green-pepper-section");
var mushroomSection = document.getElementById("mushroom-section");
var pepperonniSection = document.getElementById("pepperonni-section");
var howManyGreenPeppers = $(".green-pepper");
var howManyMushroom = $(".mushroom");
var howManyPepperonni = $(".pep");
var countGreenPepper = 0;
var countMushroom = 0;
var countPepperoni = 0;
var whiteSauce = 0;
var GluttenFreeCrust = 0;
var pepPriceLine = document.querySelector(".pep-price");
var mushPriceLine = document.querySelector(".mush-price");
var gpPriceLine = document.querySelector(".gp-price");
var wsPriceLine = document.querySelector(".ws-price");
var gfcPriceLine = document.querySelector(".gfc-price");
var basePrice = document.querySelector(".item-price-base");
var priceList = document.querySelector(".price-list");
var priceList2 = priceList.querySelectorAll("li");



function getTotalPrice() {
  var toppingPrices = 0;
  var totalPrice = document.querySelector(".total-price");
  var itemPricesActives = $(priceList2).not(".activation");
  var itemPricesToSumArray = [].slice.call(itemPricesActives);
  for (var i = 0 ; i < itemPricesToSumArray.length;i++) {
    var itemPrice = itemPricesToSumArray[i].querySelector("span");
    toppingPrices = toppingPrices + parseInt(itemPrice.innerText)
  }
  totalPrice.innerText = parseInt(basePrice.innerText) + toppingPrices;
}

function getItemTotalPrice (parent,count){
  var price = parent.querySelector(".item-price");
  price.innerText = count;
  getTotalPrice();
}

function addPepperonni () {
  $(howManyPepperonni[countPepperoni]).removeClass("activation");
  countPepperoni ++;
  if($(pepPriceLine).hasClass("activation")) {
    $(pepPriceLine).removeClass("activation");
  };
  getItemTotalPrice (pepPriceLine,countPepperoni);
}

function addMushroom () {
  $(howManyMushroom[countMushroom]).removeClass("activation");
  countMushroom ++;
  if($(mushPriceLine).hasClass("activation")) {
    $(mushPriceLine).removeClass("activation");
  };
  getItemTotalPrice (mushPriceLine,countMushroom);
}

function addGreenPepper () {
  $(howManyGreenPeppers[countGreenPepper]).removeClass("activation");
  countGreenPepper++;
  if($(gpPriceLine).hasClass("activation")) {
    $(gpPriceLine).removeClass("activation");
  };
  getItemTotalPrice (gpPriceLine,countGreenPepper);
}

function addWhiteSauce () {
  $(".sauce").addClass("sauce-white");
  whiteSauce = 1;
  if($(wsPriceLine).hasClass("activation")) {
    $(wsPriceLine).removeClass("activation");
  };
  getItemTotalPrice (wsPriceLine,3);
}

function addGluttenFreeCrust () {
  $(".crust").addClass("crust-gluten-free");
  GluttenFreeCrust = 1;
  if($(gfcPriceLine).hasClass("activation")) {
    $(gfcPriceLine).removeClass("activation");
  };
  getItemTotalPrice (gfcPriceLine,5);
}

function removePepperonni () {
  if (countPepperoni > 0) {
    countPepperoni --;
    $(howManyPepperonni[countPepperoni]).addClass("activation");
  }
  getItemTotalPrice (pepPriceLine,countPepperoni);
}

function removeMushroom () {
  if (countMushroom > 0) {
    countMushroom --
    $(howManyMushroom[countMushroom]).addClass("activation");
  }
  getItemTotalPrice (mushPriceLine,countMushroom);
}

function removeGreenPepper () {
  if(countGreenPepper > 0) {
    countGreenPepper --;
    $(howManyGreenPeppers[countGreenPepper]).addClass("activation");
  }
  getItemTotalPrice (gpPriceLine,countGreenPepper);
}

function removeWhiteSauce () {
  if (whiteSauce > 0) {
    whiteSauce --;
    $(".sauce").removeClass("sauce-white");
  }
  getItemTotalPrice (wsPriceLine,0)
}

function removeGlutenFreeCrust () {
  if (GluttenFreeCrust > 0) {
    GluttenFreeCrust --;
    $(".crust").removeClass("crust-gluten-free");
  }
  getItemTotalPrice (gfcPriceLine,0);
}

function activateButton (buttons) {
  $(buttons).addClass("active");
}

function deactivateButton (buttons,ingredients) {
  $(buttons).removeClass("active");
  $(ingredients).addClass("activation");
}

function removeEvents(buttons) {
  $(buttons[1]).off();
  $(buttons[2]).off();
}

function removePriceLine (direction) {
  if( !$(direction).hasClass("activation")) {
    $(direction).addClass("activation")
  }
  getTotalPrice();
}
window.onload = function() {

  var pepperonniButton = document.querySelectorAll(".btn-pepperonni");
  var mushroomButton = document.querySelectorAll(".btn-mushrooms");
  var greenPepperButton = document.querySelectorAll(".btn-green-peppers");
  var whiteSauceButton = document.querySelectorAll(".btn-sauce");
  var glutenFreeCrustButton = document.querySelectorAll(".btn-crust");


      pepperonniButton[0].onclick = function() {
        if ($(pepperonniButton[0]).hasClass("active")) {
          deactivateButton(pepperonniButton,howManyPepperonni);
          removeEvents(pepperonniButton);
          removePriceLine (pepPriceLine);
          countPepperoni=0;
        } else {
          activateButton(pepperonniButton);
          $(pepperonniButton[1]).on("click",addPepperonni);
          $(pepperonniButton[2]).on("click",removePepperonni);
        }
      }

      mushroomButton[0].onclick =function() {
        if ($(mushroomButton[0]).hasClass("active")) {
          deactivateButton(mushroomButton,howManyMushroom);
          removeEvents(mushroomButton);
          removePriceLine(mushPriceLine);
          countMushroom = 0;
        } else {
          activateButton(mushroomButton);
          $(mushroomButton[1]).on("click",addMushroom);
          $(mushroomButton[2]).on("click",removeMushroom);
        }
      }

      greenPepperButton[0].onclick = function() {
        if ($(greenPepperButton[0]).hasClass("active")) {
          deactivateButton(greenPepperButton,howManyGreenPeppers);
          removeEvents(greenPepperButton);
          removePriceLine(gpPriceLine);
          countGreenPepper = 0;
        } else {
          activateButton(greenPepperButton);
          $(greenPepperButton[1]).on("click",addGreenPepper);
          $(greenPepperButton[2]).on("click",removeGreenPepper);
        }
      }

      whiteSauceButton[0].onclick = function() {
        if ($(whiteSauceButton[0]).hasClass("active")) {
            $(whiteSauceButton).removeClass("active");
            removeWhiteSauce();
            removeEvents(whiteSauceButton);
            removePriceLine(wsPriceLine);
        } else {
          activateButton(whiteSauceButton);
          $(whiteSauceButton[1]).on("click",addWhiteSauce);
          $(whiteSauceButton[2]).on("click",removeWhiteSauce);
        }
      }

      glutenFreeCrustButton[0].onclick = function() {
        if ($(glutenFreeCrustButton[0]).hasClass("active")) {
          $(glutenFreeCrustButton).removeClass("active");
          removeGlutenFreeCrust();
          removeEvents(glutenFreeCrustButton);
          removePriceLine(gfcPriceLine);
        } else {
          activateButton(glutenFreeCrustButton);
          $(glutenFreeCrustButton[1]).on("click",addGluttenFreeCrust);
          $(glutenFreeCrustButton[2]).on("click",removeGlutenFreeCrust);
        }
      }
}