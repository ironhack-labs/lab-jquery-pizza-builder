// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  // initial configurations
  $(".crust").removeClass("crust-gluten-free");
  $(".btn-crust").removeClass("active");
  $(".sauce").removeClass("sauce-white");
  $(".btn-sauce").removeClass("active");
  updatePrice();

  // panel price
  $(".price ul li:nth-child(4)").hide();
  $(".price ul li:nth-child(5)").hide();

  // add and remove peps
  $(".btn-pepperonni").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".price ul li:nth-child(1)").hide();
      $(".pep").each(function(index, element) {
        $(element).fadeOut("fast");
      });
    } else {
      $(this).addClass("active");
      $(".price ul li:nth-child(1)").show();
      $(".pep").each(function(index, element) {
        $(element).fadeIn("fast");
      });
    }
  });
  // add and remove mushroom
  $(".btn-mushrooms").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".price ul li:nth-child(2)").hide();
      $(".mushroom").each(function(index, element) {
        $(element).fadeOut("fast");
      });
    } else {
      $(this).addClass("active");
      $(".price ul li:nth-child(2)").show();
      $(".mushroom").each(function(index, element) {
        $(element).fadeIn("fast");
      });
    }
  });
  // add and remove btn-green-peppers
  $(".btn-green-peppers").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".price ul li:nth-child(3)").hide();

      $(".green-pepper").each(function(index, element) {
        $(element).fadeOut("fast");
      });
    } else {
      $(this).addClass("active");
      $(".price ul li:nth-child(3)").show();
      $(".green-pepper").each(function(index, element) {
        $(element).fadeIn("fast");
      });
    }
  });

  $(".btn-sauce").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".price ul li:nth-child(4)").hide();
      $(".sauce").removeClass("sauce-white");
    } else {
      $(".price ul li:nth-child(4)").show();
      $(this).addClass("active");
      $(".sauce").addClass("sauce-white");
    }
  });

  $(".btn-crust").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".price ul li:nth-child(5)").hide();

      $(".crust").removeClass("crust-gluten-free");
    } else {
      $(this).addClass("active");
      $(".price ul li:nth-child(5)").show();
      $(".crust").addClass("crust-gluten-free");
    }
  });

  $(".btn").on("click", updatePrice);

  function updatePrice() {
    total = 10;
    $(".controls ul li button").each(function(index, element) {
      if ($(this).hasClass("active")) {
        if ($(this).hasClass("btn-sauce")) {
          total += 3;
        } else if ($(this).hasClass("btn-crust")) {
          total += 5;
        } else {
          total++;
        }
      }
    });
    $(".price strong").html("$" + total);
  }
});
