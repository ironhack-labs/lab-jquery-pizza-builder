// Write your Pizza Builder JavaScript in this file.
//
$(".btn-crust").removeClass("active");
$(".btn-sauce").removeClass("active");

if ($(".green-pepper").is(":hidden")) {
  $(".btn-green-peppers").removeClass("active");
} else {
  $(".btn-green-peppers").addClass("active");
}

if ($(".mushroom").is(":hidden")) {
  $(".btn-mushrooms").removeClass("active");
} else {
  $(".btn-mushrooms").addClass("active");
}

if ($(".pep").is(":hidden")) {
  $(".btn-pepperonni").removeClass("active");
} else {
  $(".btn-pepperonni").addClass("active");
}

//$( "div:contains('John')" )

// setting crust to default crust
$(".crust").removeClass("crust-gluten-free");
$("li:contains('gluten-free')").hide();
// switching w/o gluten
$(".btn-crust").click(function() {
  if ($(".crust-gluten-free")[0]) {
    $(".crust").removeClass("crust-gluten-free");
    $(".btn-crust").removeClass("active");
    $("li:contains('gluten-free')").hide();
  } else {
    $(".crust").addClass("crust-gluten-free");
    $(".btn-crust").addClass("active");
    $("li:contains('gluten-free')").show();
  }
});

// setting sauce to default sauce
$(".sauce").removeClass("sauce-white");
$("li:contains('white sauce')").hide();
// switching w/o white
$(".btn-sauce").click(function() {
  if ($(".sauce-white")[0]) {
    $(".sauce").removeClass("sauce-white");
    $(".btn-sauce").removeClass("active");
    $("li:contains('white sauce')").hide();
  } else {
    $(".sauce").addClass("sauce-white");
    $(".btn-sauce").addClass("active");
    $("li:contains('white sauce')").show();
  }
});

$(".btn-green-peppers").click(function() {
  $(".green-pepper").toggle();
  if ($(".green-pepper").is(":hidden")) {
    $(".btn-green-peppers").removeClass("active");
    $("li:contains('green peppers')").hide();
  } else {
    $(".btn-green-peppers").addClass("active");
    $("li:contains('green peppers')").show();
  }
});

$(".btn-mushrooms").click(function() {
  $(".mushroom").toggle();
  if ($(".mushroom").is(":hidden")) {
    $(".btn-mushrooms").removeClass("active");
    $("li:contains('mushrooms')").hide();
  } else {
    $(".btn-mushrooms").addClass("active");
    $("li:contains('mushrooms')").show();
  }
});

$(".btn-pepperonni").click(function() {
  $(".pep").toggle();
  if ($(".pep").is(":hidden")) {
    $(".btn-pepperonni").removeClass("active");
    $("li:contains('pepperonni')").hide();
  } else {
    $(".btn-pepperonni").addClass("active");
    $("li:contains('pepperonni')").show();
  }
});

$(".btn").click(function() {
  var optionsTexts = [];
  var optionsPrices = [];
  var totalPrice = 0;
  $("aside li:visible").each(function() {
    optionsTexts.push($(this).text());
    optionsPrices = optionsTexts.map(function(oneOption) {
      console.log(oneOption);
      return parseInt(
        oneOption.slice(oneOption.indexOf("$") + 1, oneOption.indexOf(" "))
      );
    });
    console.log(optionsPrices);
    totalPrice = optionsPrices.reduce(function(acc, onePrice) {
      return acc + onePrice;
    }, 10);
    console.log(totalPrice);
    $("aside strong").text(totalPrice);
  });
});

$(document).ready(function() {
  var optionsTexts = [];
  var optionsPrices = [];
  var totalPrice = 0;
  $("aside li:visible").each(function() {
    optionsTexts.push($(this).text());
    optionsPrices = optionsTexts.map(function(oneOption) {
      console.log(oneOption);
      return parseInt(
        oneOption.slice(oneOption.indexOf("$") + 1, oneOption.indexOf(" "))
      );
    });
    console.log(optionsPrices);
    totalPrice = optionsPrices.reduce(function(acc, onePrice) {
      return acc + onePrice;
    }, 10);
    console.log(totalPrice);
    $("aside strong").text("$" + totalPrice);
  });
});
