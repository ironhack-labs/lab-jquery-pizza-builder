// Write your Pizza Builder JavaScript in this file.
$(function() {
  //$(".pep, .mushroom, .green-pepper").hide()
  //$(".btn-pepperonni, .btn-mushrooms, .btn-green-peppers").toggleClass("active")
  $(".crust").removeClass("crust-gluten-free")
  $(".sauce").removeClass("sauce-white")
  $(".price ul li:contains('$5 gluten-free crust')").hide()
  $(".price ul li:contains('$3 white sauce')").hide()

  //Quiero que si el BTN de sauce esta activado, tenga la class de sauce normal, y si no lo esta, que tenga
  // la clase de sauce-white

  $(".btn-crust").click(function() {
    $(this).toggleClass("active");
    $(this).hasClass("active") ? $(".crust").removeClass("crust-gluten-free") : $(".crust").addClass("crust-gluten-free")
    $(this).hasClass("active") ? $(".price ul li:contains('$5 gluten-free crust')").hide() : $(".price ul li:contains('$5 gluten-free crust')").show()
  });

  $(".btn-sauce").click(function() {
    $(this).toggleClass("active");
    $(this).hasClass("active") ? $(".sauce").removeClass("sauce-white") : $(".sauce").addClass("sauce-white")
    $(this).hasClass("active") ? $(".price ul li:contains('$3 white sauce')").hide() : $(".price ul li:contains('$3 white sauce')").show()
  });

  $(".btn-pepperonni").click(function() {
    $(this).hasClass("active") ? $(".pep").hide() : $(".pep").show();
    $(this).hasClass("active") ? $(".price ul li:contains('$1 pepperonni')").remove() : $(".price ul").append("<li>$1 pepperonni</li>")
    $(this).toggleClass("active");

  });

  $(".btn-mushrooms").click(function() {
    $(this).hasClass("active") ? $(".mushroom").hide() : $(".mushroom").show();
    $(this).hasClass("active") ? $(".price ul li:contains('$1 mushrooms')").remove() : $(".price ul").append("<li>$1 mushrooms</li>")
    $(this).toggleClass("active");
  });

  $(".btn-green-peppers").click(function() {
    $(this).hasClass("active") ? $(".green-pepper").hide() : $(".green-pepper").show();
    $(this).hasClass("active") ? $(".price ul li:contains('$1 green peppers')").remove() : $(".price ul").append("<li>$1 green peppers</li>")
    $(this).toggleClass("active");
  });


});
