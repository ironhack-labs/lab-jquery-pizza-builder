// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
  $(".btn-green-peppers").click(function() {
    if ($(".btn-green-peppers").hasClass("active")) {
      $("#pizza .green-pepper").hide();
      $(".price ul li:contains(green)").hide();
      $(".price ul li:contains(green)").removeAttr("value");
    } else {
      $("#pizza .green-pepper").show();
      $(".price ul li:contains(green)").show();
      $(".price ul li:contains(green)").attr("value", "1");
    }
    $(this).toggleClass("active");
  });

  $(".btn-mushrooms").click(function() {
    if ($(this).hasClass("active")) {
      $(".mushroom div").hide();
      $(".price ul li:contains(mushroom)").hide();
      $(".price ul li:contains(mushroom)").removeAttr("value");
    } else {
      $(".mushroom div").show();
      $(".price ul li:contains(mushroom)").show();
      $(".price ul li:contains(mushroom)").attr("value", "1");
    }
    $(this).toggleClass("active");
  });

  $(".btn-pepperonni").click(function() {
    if ($(this).hasClass("active")) {
      $("#pizza .pep").hide();
      $(".price ul li:contains(pepperonni)").hide();
      $(".price ul li:contains(pepperonni)").removeAttr("value");
    } else {
      $("#pizza .pep").show();
      $(".price ul li:contains(pepperonni)").show();
      $(".price ul li:contains(pepperonni)").attr("value", "1");
    }
    $(this).toggleClass("active");
  });

  $(".btn-sauce").click(function() {
    $(".crust .sauce").toggleClass("sauce-white");
    $(this).toggleClass("active");
    if ($(". crust .sauce").hasClass("sauce-white")) {
      $(".price ul li:contains(sauce)").show();
    } else {
      $(".price ul li:contains(sauce)").hide();
    }
  });

  $(".btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");
    $(this).toggleClass("active");
    if ($(".crust").hasClass("crust-gluten-free")) {
      $(".price ul li:contains(crust)").show();
    }
  });

  //Funcion para poner la pizza inicialmente
  function init() {
    $(".crust").toggleClass("crust-gluten-free");
    $(".crust .sauce").toggleClass("sauce-white");
    $("#pizza .green-pepper").hide();
    $(".mushroom div").hide();
    $("#pizza .pep").hide();
    $(".price ul li:contains(green)").hide();
    $(".price ul li:contains(mushroom)").hide();
    $(".price ul li:contains(pepperonni)").hide();
    $(".price ul li:contains(sauce)").hide();
    $(".price ul li:contains(crust)").hide();

    $(".btn-green-peppers").toggleClass("active");
    $(".btn-mushrooms").toggleClass("active");
    $(".btn-pepperonni").toggleClass("active");
    $(".btn-sauce").toggleClass("active");
    $(".btn-crust").toggleClass("active");
  }

  //Llamada a función
  init();
});
