// Write your Pizza Builder JavaScript in this file.
$("document").ready(function () {
  // Add or hide ingredients. Standard = peppers, mushroom, pepperonni
  // GREEN-PEPPER
  // $(".green-pepper").addClass("hidden");
  // $(".btn-green-peppers").removeClass("active");
  $(".btn-green-peppers").click(function () {
    $(".green-pepper").toggleClass("hidden");
    $(".btn-green-peppers").toggleClass("active");
    $(".panel.price ul li:contains(green peppers)").toggleClass("hidden");
  });
  // MUSHROOM
  // $(".mushroom").addClass("hidden");
  // $(".btn-mushrooms").removeClass("active");
  $(".btn-mushrooms").click(function () {
    $(".mushroom").toggleClass("hidden");
    $(".btn-mushrooms").toggleClass("active");
    $(".panel.price ul li:contains(mushroom)").toggleClass("hidden");
  });
  // PEPPERONNI
  // $(".pep").addClass("hidden");
  // $(".btn-pepperonni").removeClass("active");
  $(".btn-pepperonni").click(function () {
    $(".pep").toggleClass("hidden");
    $(".btn-pepperonni").toggleClass("active");
    $(".panel.price ul li:contains(pepperonni)").toggleClass("hidden");
  });
  
  // change standard crust + toggle
  $(".crust").removeClass("crust-gluten-free");
  $(".btn-crust").removeClass("active");
  $(".panel.price ul li:contains(crust)").addClass("hidden");
  $(".btn-crust").click(function () {
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $(".panel.price ul li:contains(crust)").toggleClass("hidden");
  });
  // change standard sauce + toggle
  $(".sauce").removeClass("sauce-white");
  $(".btn-sauce").removeClass("active");
  $(".panel.price ul li:contains(sauce)").addClass("hidden");
  $(".btn-sauce").click(function () {
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $(".panel.price ul li:contains(sauce)").toggleClass("hidden");
  });

  // if one of the add/remove buttons is clicked, recalculate the price
  $(".btn").click(function() {
    calcPrice();
  });

  // calculate the price of all non-hidden price lines
  function calcPrice() {
    var total = 10; // basic cheese pizza
    var list = $(".panel.price ul li").not(".hidden").toArray();
    list.map(item => {
      total += parseInt(item.innerHTML.substr(1,3)); // supports 0-999 $ items
    });
    $(".panel.price strong").html("$" + total);
  };

  // initialize price once on load
  calcPrice();
});

