// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  let pepBtn = $(".btn-pepperonni");
  let mushBtn = $(".btn-mushrooms");
  let gpBtn = $(".btn-green-peppers");
  let sauce = $(".btn-sauce");
  let glutenFree = $(".btn-crust");

  // TOPPINGS AND CRUST

  pepBtn.click(function() {
    console.log("pepperoni button clicked");
    $(".pep").toggle();
    pepBtn.toggleClass("active");
  });

  mushBtn.click(function() {
    console.log("mush button clicked");
    $(".mushroom").toggle();
    mushBtn.toggleClass("active");
  });

  gpBtn.click(function() {
    console.log("green-pepper button clicked");
    $(".green-pepper").toggle();
    gpBtn.toggleClass("active");
  });

  sauce.click(function() {
    console.log("white sauce button clicked");
    $(".sauce").toggleClass("sauce-white");
    sauce.toggleClass("active");
  });

  glutenFree.click(function() {
    console.log("gluten free button clicked");
    $(".crust").toggle(".crust-gluten-free");
    glutenFree.toggleClass("active");
  });
});
