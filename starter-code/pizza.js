// Write your Pizza Builder JavaScript in this file.
$(function() {


  $(".crust").removeClass("crust-gluten-free")
  $(".sauce").removeClass("sauce-white")
  $(".price ul li:contains('$5 gluten-free crust')").hide()
  $(".price ul li:contains('$3 white sauce')").hide()

  $(".btn-crust").click(function() {
    $(this).toggleClass("active");
    $(this).hasClass("active") ? $(".crust").removeClass("crust-gluten-free") : $(".crust").addClass("crust-gluten-free")
    $(this).hasClass("active") ? $(".price ul li:contains('$5 gluten-free crust')").hide() : $(".price ul li:contains('$5 gluten-free crust')").show()
    getPrice();
  });

  $(".btn-sauce").click(function() {
    $(this).toggleClass("active");
    $(this).hasClass("active") ? $(".sauce").removeClass("sauce-white") : $(".sauce").addClass("sauce-white")
    $(this).hasClass("active") ? $(".price ul li:contains('$3 white sauce')").hide() : $(".price ul li:contains('$3 white sauce')").show()
    getPrice();
  });

  $(".btn-pepperonni").click(function() {
    $(this).hasClass("active") ? $(".pep").hide() : $(".pep").show();
    $(this).hasClass("active") ? $(".price ul li:contains('$1 pepperonni')").hide() : $(".price ul li:contains('$1 pepperonni')").show()
    $(this).toggleClass("active");
    getPrice();

  });

  $(".btn-mushrooms").click(function() {
    $(this).hasClass("active") ? $(".mushroom").hide() : $(".mushroom").show();
    $(this).hasClass("active") ? $(".price ul li:contains('$1 mushrooms')").hide() : $(".price ul li:contains('$1 mushrooms')").show()
    $(this).toggleClass("active");
    getPrice();
  });

  $(".btn-green-peppers").click(function() {
    $(this).hasClass("active") ? $(".green-pepper").hide() : $(".green-pepper").show();
    $(this).hasClass("active") ? $(".price ul li:contains('$1 green peppers')").hide() : $(".price ul li:contains('$1 green peppers')").show()
    $(this).toggleClass("active");
    getPrice();
  });
  // Funcion para iterar sobre selector, que me pille los lis visibles y dentro de estos lis visibles
  function getPrice() {
    prices = [];
    $(".price").find("li:visible").addClass("added")
    $(".price").find("li:hidden").addClass("hiding").removeClass("added")
    $('.added').each(function() {
      prices += $(this).text();
    })
    if (prices.length > 0) {
      toppingPrice = prices.replace(/\D/g, '');
      toppingArray = toppingPrice.split('').map(Number);
      var total = 0;
      for(i=0; i<toppingArray.length; i++){
       total += toppingArray[i];
   }
    } else {
      toppingPrice = 0;
      total = 0;
    }
    basePrice = 10;
    finalPrice = basePrice + total
    $("strong").text("$" + finalPrice)
  }
});
