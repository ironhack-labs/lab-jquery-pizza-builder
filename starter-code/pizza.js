// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  $("#btn-pep").click(function() {
    $(".pep").toggle("pep");
  });
  $("#btn-mush").click(function() {
    $(".mushroom").toggle("mushroom");
  });
  $("#btn-gPep").click(function() {
    $(".green-pepper").toggle("green-pepper");
  });
  // Default settings
  $("#btn-wSauce").text("Regular sauce");

  $("#btn-crust").text("Crust");
  $(".crust").removeClass("crust-gluten-free");

  $("#btn-wSauce").click(function() {
    if (
      $(this)
        .text()
        .includes("White")
    ) {
      $(this).text("Regular sauce");
      $(".sauce").addClass("sauce-white");
    } else {
      $(this).text("White sauce");
      $(".sauce").removeClass("sauce-white");
    }
  });
  $("#btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");
    if (
      $(this)
        .text()
        .includes("Gluten")
    ) {
      $(this).text("Crust");
    } else {
      $(this).text("Crust Gluten-free");
    }
  });
});
