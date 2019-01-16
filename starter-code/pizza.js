// Write your Pizza Builder JavaScript in this file.

var totalPrice = 0;

$(document).ready(function() {
  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");
  $(".btn-crust").removeClass("active");
  $(".btn-sauce").removeClass("active");
  $("li:contains('$3 white sauce')").css("display", "none");
  $("li:contains('$5 gluten-free crust')").css("display", "none");
  totalPrice = 13;
  $("strong").html("$" + totalPrice);
});

function managePepperonni() {
  $(".pep").slideToggle(0, "pep", function() {
    if ($(".pep").is(":visible")) {
      $(".btn-pepperonni").addClass("active");
      $("li:contains('$1 pepperonni')").css("display", "block");
    } else {
      $(".btn-pepperonni").removeClass("active");
      $("li:contains('$1 pepperonni')").css("display", "none");
    }
  });
  if ($(".pep").is(":visible")) {
    totalPrice += 1;
    $("strong").html("$" + totalPrice);
  } else {
    totalPrice -= 1;
    $("strong").html("$" + totalPrice);
  }
}

function manageGreenPeppers() {
  $(".green-pepper").slideToggle(0, "green-pepper", function() {
    if ($(".green-pepper").is(":visible")) {
      $(".btn-green-peppers").addClass("active");
      $("li:contains('$1 green peppers')").css("display", "block");
    } else {
      $(".btn-green-peppers").removeClass("active");
      $("li:contains('$1 green peppers')").css("display", "none");
    }
  });
  if ($(".green-pepper").is(":visible")) {
    totalPrice += 1;
    $("strong").html("$" + totalPrice);
  } else {
    totalPrice -= 1;
    $("strong").html("$" + totalPrice);
  }
}

function manageMushrooms() {
  $(".mushroom").slideToggle(0, "mushroom", function() {
    if ($(".mushroom").is(":visible")) {
      $(".btn-mushrooms").addClass("active");
      $("li:contains('$1 mushrooms')").css("display", "block");
    } else {
      $(".btn-mushrooms").removeClass("active");
      $("li:contains('$1 mushrooms')").css("display", "none");
    }
  });
  if ($(".mushroom").is(":visible")) {
    totalPrice += 1;
    $("strong").html("$" + totalPrice);
  } else {
    totalPrice -= 1;
    $("strong").html("$" + totalPrice);
  }
}

function manageSauce() {
  if ($(".sauce").hasClass("sauce-white")) {
    $(".sauce").removeClass("sauce-white");
    $(".btn-sauce").removeClass("active");
    $("li:contains('$3 white sauce')").css("display", "none");
  } else {
    $(".sauce").addClass("sauce-white");
    $(".btn-sauce").addClass("active");
    $("li:contains('$3 white sauce')").css("display", "block");
  }
  if ($(".sauce").hasClass("sauce-white")) {
    totalPrice += 3;
    $("strong").html("$" + totalPrice);
  } else {
    totalPrice -= 3;
    $("strong").html("$" + totalPrice);
  }
}

function manageCrust() {
  if ($(".crust").hasClass("crust-gluten-free")) {
    $(".crust").removeClass("crust-gluten-free");
    $(".btn-crust").removeClass("active");
    $("li:contains('$5 gluten-free crust')").css("display", "none");
  } else {
    $(".crust").addClass("crust-gluten-free");
    $(".btn-crust").addClass("active");
    $("li:contains('$5 gluten-free crust')").css("display", "block");
  }
  if ($(".crust").hasClass("crust-gluten-free")) {
    totalPrice += 5;
    $("strong").html("$" + totalPrice);
  } else {
    totalPrice -= 5;
    $("strong").html("$" + totalPrice);
  }
}

$(".btn-pepperonni").click(function() {
  managePepperonni();
});

$(".btn-green-peppers").click(function() {
  manageGreenPeppers();
});

$(".btn-mushrooms").click(function() {
  manageMushrooms();
});

$(".btn-sauce").click(function() {
  manageSauce();
});

$(".btn-crust").click(function() {
  manageCrust();
});
