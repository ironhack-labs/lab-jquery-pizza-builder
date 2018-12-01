// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  // Iteration 1 & 3

  var price = 13;

  $(".price strong").html("$" + price);

  $(".btn-pepperonni").click(function() {
    $(".pep").toggle(500);
    $(this).toggleClass("active");
    $("li:contains('pepperonni')").toggle(500); // #4

    // # 5 
    if ($(this).hasClass("active")) {
      price++;
    } else {
      price--;
    }
    $(".price strong").html("$" + price);
  });

  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggle("mushroom");
    $(this).toggleClass("active");
    $("li:contains('mushrooms')").toggle(500);

    // # 5 
      if ($(this).hasClass("active")) {
        price++;
      } else {
        price--;
      }
      $(".price strong").html("$" + price);
  });

  $(".btn-green-peppers").click(function() {
    $(".green-pepper").toggle("green-pepper");
    $(this).toggleClass("active");
    $("li:contains('green peppers')").toggle(500); // #4
  
        // # 5 
        if ($(this).hasClass("active")) {
          price++;
        } else {
          price--;
        }
        $(".price strong").html("$" + price);
  });

  // Iteration 2 & 3

  $(".sauce").removeClass("sauce-white");
  $(".btn-sauce").removeClass("active");
  $(".price li:contains('sauce')").toggle();

  $(".crust").removeClass("crust-gluten-free");
  $(".btn-crust").removeClass("active");
  $(".price li:contains('gluten-free')").toggle();

  $(".btn-sauce").click(function() {
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $(".price li:contains('sauce')").toggle(500); // #4
  
        // # 5 
        if ($(this).hasClass("active")) {
          price = price + 3;
        } else {
          price = price - 3;
        }
        $(".price strong").html("$" + price);

  });

  $(".btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $(".price li:contains('gluten-free')").toggle(500); // #4

            // # 5 
            if ($(this).hasClass("active")) {
              price = price + 5;
            } else {
              price = price - 5;
            }
            $(".price strong").html("$" + price);
    

  });
});
