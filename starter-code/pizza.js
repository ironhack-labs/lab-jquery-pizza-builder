// Write your Pizza Builder JavaScript in this file.
var totalPrice = 0;

function displayTotal(price) {
  $(".price strong").html("$" + totalPrice);
}

// Function
function managePepperonni() {
  $(".pep").slideToggle(0, "pep", function() {
    if ($(".btn-pepperonni").not("active") && $(".pep").is(":visible")) {
      $(".btn-pepperonni").addClass("active");
      $(".price > ul > li:contains('pepperonni')").show("li");
    } else {
      $(".btn-pepperonni").removeClass("active");
      $(".price > ul > li:contains('pepperonni')").hide("li");
    }
  });

  // Update price
  if ($(".btn-pepperonni").hasClass("active")) {
    totalPrice++;
  } else {
    totalPrice--;
  }
  displayTotal(totalPrice);
}

function manageGreenPeppers() {
  $(".green-pepper").slideToggle(0, "green-pepper", function() {
    if (
      $(".btn-green-peppers").not("active") &&
      $(".green-pepper").is(":visible")
    ) {
      $(".btn-green-peppers").addClass("active");
      $(".price > ul > li:contains('peppers')").show("li");
    } else {
      $(".btn-green-peppers").removeClass("active");
      $(".price > ul > li:contains('peppers')").hide("li");
    }
  });
  // Update price
  if ($(".btn-green-peppers").hasClass("active")) {
    totalPrice++;
  } else {
    totalPrice--;
  }
  displayTotal(totalPrice);
}

function manageMushrooms() {
  $(".mushroom").slideToggle(0, "mushroom", function() {
    if ($("btn-mushrooms").not("active") && $(".mushroom").is(":visible")) {
      $(".btn-mushrooms").addClass("active");
      $(".price > ul > li:contains('mushrooms')").show("li");
    } else {
      $(".btn-mushrooms").removeClass("active");
      $(".price > ul > li:contains('mushrooms')").hide("li");
    }
  });
  // Update price
  if ($(".btn-mushrooms").hasClass("active")) {
    totalPrice++;
  } else {
    totalPrice--;
  }
  displayTotal(totalPrice);
}

function manageCrust() {
  if ($(".crust").hasClass("crust-gluten-free")) {
    $(".crust").removeClass("crust-gluten-free");
    $(".btn-crust").removeClass("active");
    $(".price > ul > li:contains('gluten')").hide("li");
  } else {
    $(".crust").addClass("crust-gluten-free");
    $(".btn-crust").addClass("active");
    $(".price > ul > li:contains('gluten')").show("li");
  }
  // Update price
  if ($(".btn-crust").hasClass("active")) {
    totalPrice += 5;
  } else {
    totalPrice -= 5;
  }
  displayTotal(totalPrice);
}

function manageSauce() {
  if ($(".sauce").hasClass("sauce-white")) {
    $(".sauce").removeClass("sauce-white");
    $(".btn-sauce").removeClass("active");
    $(".price > ul > li:contains('sauce')").hide("li");
  } else {
    $(".sauce").addClass("sauce-white");
    $(".btn-sauce").addClass("active");
    $(".price > ul > li:contains('sauce')").show("li");
  }
  // Update price
  if ($(".btn-sauce").hasClass("active")) {
    totalPrice += 3;
  } else {
    totalPrice -= 3;
  }
  displayTotal(totalPrice);
}

// Selector
$(".btn-pepperonni").click(function() {
  managePepperonni();
});

$(".btn-green-peppers").click(function() {
  manageGreenPeppers();
});

$(".btn-mushrooms").click(function() {
  manageMushrooms();
});

$(".btn-crust").click(function() {
  manageCrust();
});

$(".btn-sauce").click(function() {
  manageSauce();
});

// onPageLoad
$(document).ready(function() {
  totalPrice = 13;
  displayTotal(totalPrice);
  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");
  $(".btn-sauce").removeClass("active");
  $(".btn-crust").removeClass("active");
  $(".price > ul > li:contains('gluten')").hide("li");
  $(".price > ul > li:contains('sauce')").hide("li");
});
