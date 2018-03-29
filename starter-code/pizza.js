//$(document).ready(function () {}

// Write your Pizza Builder JavaScript in this file.
$(".btn:first").click(function() {
    $(".pep").toggle();
});

//(".selector:contains(text)")

$(".btn-mushrooms").click(function() {
    $(".mushroom").toggle();
});

$(".btn-green-peppers").click(function() {
    $(".green-pepper").toggle();
});


$(".sauce-white").removeClass("sauce-white");

$("body > div.panel.controls > ul > li:nth-child(4) > button").click(function() {
    $("#pizza > section.crust > section.sauce").toggleClass("sauce-white");
  $("body > div.panel.controls > ul > li:nth-child(4) > button").toggleClass(
    "active"
  );
  $("body > aside > ul > li:nth-child(4)").toggleClass("strike");
  options[3]["isActive"] = !options[3]["isActive"];
});

$(".crust-gluten-free").removeClass("crust-gluten-free");

$("body > div.panel.controls > ul > li:nth-child(5) > button").click(function() {
    $("#pizza > section.crust").toggleClass("crust-gluten-free");
})

if($(".btn:first").hasClass("active")) {
    $(".btn:first").removeClass("active");
} else {
    $(".btn:first").addClass("active");
}

// click(function() {
//      $("").toggle();
//  });