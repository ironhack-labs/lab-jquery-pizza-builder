// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {

    $(".price li:contains(white sauce)").hide();
    $(".price li:contains(gluten-free crust)").hide();
    
    calculatePrice();

    $(".btn-pepperonni").click(function() {
      if ($(this).hasClass("active")) {
        $(".pep").hide();
        $(this).removeClass("active");
        $(".price li:contains(pepperonni)").hide();
      } else {
        $(".pep").show();
        $(this).addClass("active");
        $(".price li:contains(pepperonni)").show();
      }
    });

    $(".btn-mushrooms").click(function() {
      if ($(this).hasClass("active")) {
        $(".mushroom").hide();
        $(this).removeClass("active");
        $(".price li:contains(mushrooms)").hide();
      } else {
        $(".mushroom").show();
        $(this).addClass("active");
        $(".price li:contains(mushrooms)").show();
      }
    });

    $(".btn-green-peppers").click(function() {
      if ($(this).hasClass("active")) {
        $(".green-pepper").hide();
        $(this).removeClass("active");
        $(".price li:contains(green peppers)").hide();
      } else {
        $(".green-pepper").show();
        $(this).addClass("active");
        $(".price li:contains(green peppers)").show();
      }
    });


    $(".btn-sauce").click(function() {
      if ($(this).hasClass("active")) {
        $(".sauce").removeClass("sauce-white");
        $(this).removeClass("active");
        $(".price li:contains(white sauce)").hide();
      } else {
        $(".sauce").addClass("sauce-white");
        $(this).addClass("active");
        $(".price li:contains(white sauce)").show();
      }
    });


    $(".btn-crust").click(function() {
      if ($(this).hasClass("active")) {
        $(".crust").removeClass("crust-gluten-free");
        $(this).removeClass("active");
        $(".price li:contains(gluten-free crust)").hide();
      } else {
        $(".crust").addClass("crust-gluten-free");
        $(this).addClass("active");
        $(".price li:contains(gluten-free crust)").show();
      }
    });
  
    $("button").click(function() {
      calculatePrice();
    });
    });
  
    function calculatePrice() {
     let totalToppingPrice = 0;
     $(".price ul li").each(function(index) {
      if ($(this).css("display") !== "none") {
        const price = +$(this)
          .text()
          .replace(/[^0-9]/gi, "");
        totalToppingPrice = totalToppingPrice + price;
      }
    });
  
    let basePrice = +$(".price b")
      .text()
      .replace(/[^0-9]/gi, "");
  
    let totalPrice = totalToppingPrice + basePrice;
  
    $(".price strong").text("$" + totalPrice);
  }