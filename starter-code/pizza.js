// Write your Pizza Builder JavaScript in this file.
var greenPepperBtn = $(".btn.btn-green-peppers");
var greenPepper = $("section[class*='green-pepper ']");
var greenPepperItem = $(".panel.price ul li:nth-child(3)");

var mushroomBtn = $(".btn.btn-mushrooms");
var mushroom = $("section[class*='mushroom ']");
var mushroomItem = $(".panel.price ul li:nth-child(2)");

var pepperonniBtn = $(".btn.btn-pepperonni");
var pepperonni = $("section[class*='pep ']");
var pepperonniItem = $(".panel.price ul li:nth-child(1)");

var sauceBtn = $(".btn.btn-sauce");
var sauce = $(".sauce.sauce-white");
var sauceItem = $(".panel.price ul li:nth-child(4)");

var glutenBtn = $(".btn.btn-crust");
var glutenFree = $(".crust.crust-gluten-free");
var glutenItem = $(".panel.price ul li:nth-child(5)");

function toggleIngredients(
  btnIngredient,
  ingredient,
  ingredientItemList,
  toggleClassName
) {
  var hide = false;
  btnIngredient.click(function() {
    if (hide) {
      if (toggleClassName) {
        ingredient.addClass(toggleClassName);
      } else {
        ingredient.show();
      }

      hide = false;
      btnIngredient.addClass("active");
      ingredientItemList.show();
    } else {
      if (toggleClassName) {
        ingredient.removeClass(toggleClassName);
      } else {
        ingredient.hide();
      }
      hide = true;
      btnIngredient.removeClass("active");
      ingredientItemList.hide();
    }
    updateTotal();
  });
}

function updateTotal() {
  var priceList = $(".panel.price ul li");
  var regex = /[+-]?\d+(?:\.\d+)?/g;
  var pizzaBasePrice = $(".panel.price b")[0].innerHTML;
  var match = regex.exec(pizzaBasePrice);
  var total = parseInt(match[0]);
  for (var index = 0; index < priceList.length; index++) {
    if ($(priceList[index]).css("display") !== "none") {
      var regex = /[+-]?\d+(?:\.\d+)?/g;
      var priceSentence = priceList[index].innerHTML;
      match = regex.exec(priceSentence);
      total += parseInt(match[0]);
    }
  }
  $(".panel.price strong")[0].innerHTML = "$" + total;
}

toggleIngredients(greenPepperBtn, greenPepper, greenPepperItem);
toggleIngredients(mushroomBtn, mushroom, mushroomItem);
toggleIngredients(pepperonniBtn, pepperonni, pepperonniItem);
toggleIngredients(sauceBtn, sauce, sauceItem, "sauce-white");
toggleIngredients(glutenBtn, glutenFree, glutenItem, "crust-gluten-free");
