// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  var pep = 1;
  var mush = 1;
  var green = 1;
  var sauce = 3;
  var crust = 5;
  var def = 13;
  $(".price strong:nth-child(4)").html("$13");
  //   strong.document.getElementsByTagName("STRONG").css.display = "none";

  $(".price li:nth-child(4)").hide();
  $(".price li:nth-child(5)").hide();
  $(".btn-pepperonni").click(function() {
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
    $(".price li:nth-child(1)").toggle();
    $(".price strong:nth-child(4)").html(peperroni);
  });
  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
    $(".price li:nth-child(2)").toggle();
  });
  $(".btn-green-peppers").click(function() {
    $(".green-pepper").toggle();
    $(".btn-green-pappers").toggleClass("active");
    $(".price li:nth-child(3)").toggle();
  });

  $(".btn-sauce").click(function() {
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $(".price li:nth-child(4)").toggle();
    $(".price strong:nth-child(4)").html("$" + parseInt(def + sauce));
  });
  $(".btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $(".price li:nth-child(5)").toggle();
    $(".price strong:nth-child(4)").html("$" + parseInt(def + crust));
  });
});
