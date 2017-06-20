// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

//Remove Class
  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");

//Remove Class
  $(".btn-crust").removeClass("active");
  $(".btn-sauce").removeClass("active");

//Hide Element
  $(".price ul li:first-child").show();
  $(".price ul li:nth-child(2)").show();
  $(".price ul li:nth-child(3)").show();
  $(".price ul li:nth-child(4)").hide();
  $(".price ul li:nth-child(5)").hide();


      $(".btn-pepperonni").click(function(event) {
      $(".pep").toggle();
      $(".price ul li:first-child").toggle();
      $(".btn-pepperonni").toggleClass("active");
    });

      $(".btn-mushrooms").click(function(event) {
      $(".mushroom").toggle();
      $(".price ul li:nth-child(2)").toggle();
      $(".btn-mushrooms").toggleClass("active");
    });

      $(".btn-green-peppers").click(function(event) {
      $(".green-pepper").toggle();
      $(".price ul li:nth-child(3)").toggle();
      $(".btn-green-peppers").toggleClass("active");
    });

      $(".btn-sauce").click(function(event) {
      $(".sauce").toggleClass("sauce-white");
      $(".price ul li:nth-child(4)").toggle();
      $(".btn-sauce").toggleClass("active");
    });

      $(".btn-crust").click(function(event) {
      $(".crust").toggleClass("crust-gluten-free");
      $(".price ul li:nth-child(5)").toggle();
      $(".btn-crust").toggleClass("active");
    });

var pep = $("strong").html();




});
