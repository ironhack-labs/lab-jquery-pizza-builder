// Write your Pizza Builder JavaScript in this file.
/// Iteration #1, #3 & #4
//// Pepperonni
$(
  "body > div.panel.controls > ul > li:nth-child(1) > button"
).click(function() {
  $("#pizza > section.pep").toggleClass("inactive");
  $("body > div.panel.controls > ul > li:nth-child(1) > button").toggleClass(
    "active"
  );
  $("body > aside > ul > li:nth-child(1)").toggleClass("strike");
  options[0]["isActive"] = !options[0]["isActive"];
});
//// Green peppers
$(
  "body > div.panel.controls > ul > li:nth-child(3) > button"
).click(function() {
  $("#pizza > section.green-pepper").toggleClass("inactive");
  $("body > div.panel.controls > ul > li:nth-child(3) > button").toggleClass(
    "active"
  );
  $("body > aside > ul > li:nth-child(3)").toggleClass("strike");
  options[2]["isActive"] = !options[2]["isActive"];
});
//// Mushrooms
$(
  "body > div.panel.controls > ul > li:nth-child(2) > button"
).click(function() {
  $("#pizza > section.mushroom").toggleClass("inactive");
  $("body > div.panel.controls > ul > li:nth-child(2) > button").toggleClass(
    "active"
  );
  $("body > aside > ul > li:nth-child(2)").toggleClass("strike");
  options[1]["isActive"] = !options[1]["isActive"];
});

/// Iteration #2 & #4
//// Sauce
$(
  "body > div.panel.controls > ul > li:nth-child(4) > button"
).click(function() {
  $("#pizza > section.crust > section.sauce").toggleClass("sauce-white");
  $("body > div.panel.controls > ul > li:nth-child(4) > button").toggleClass(
    "active"
  );
  $("body > aside > ul > li:nth-child(4)").toggleClass("strike");
  options[3]["isActive"] = !options[3]["isActive"];
});
//// Crust
$(
  "body > div.panel.controls > ul > li:nth-child(5) > button"
).click(function() {
  $("#pizza > section.crust").toggleClass("crust-gluten-free");
  $("body > div.panel.controls > ul > li:nth-child(5) > button").toggleClass(
    "active"
  );
  $("body > aside > ul > li:nth-child(5)").toggleClass("strike");
  options[4]["isActive"] = !options[4]["isActive"];
});

/// Iteration #5
//// Vars
var initPrice = 10;
var options = [
  {
    option: "Pepperonni",
    price: 1,
    isActive: true
  },
  {
    option: "Mushrooms",
    price: 1,
    isActive: true
  },
  {
    option: "Green peppers",
    price: 1,
    isActive: true
  },
  {
    option: "White sauce",
    price: 3,
    isActive: false
  },
  {
    option: "Gluten-free crust",
    price: 5,
    isActive: false
  }
];
//// Price
var price;
// $(document).ready(function() {
$("*").click(function() {
  price = options.reduce(function(acc, current) {
    if (current.isActive === true) {
      return acc + current.price;
    } else {
      return acc;
    }
  }, initPrice);
  $("body > aside > strong").text("$" + price);
});
// });
