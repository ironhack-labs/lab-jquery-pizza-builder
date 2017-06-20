$(document).ready(function() {

  $(".btn-green-peppers").click(function(event) {
    $(".green-pepper").toggle();
  })

    $(".btn-mushrooms").click(function(event) {
      $(".mushroom").toggle();
    })

    $(".btn-pepperonni").click(function(event) {
        $(".pep").toggle();
    })

    $(".btn-sauce").text("Regular sauce");
    $(".btn-sauce").css("background-color", "crimson");
    $(".sauce-white").css("background-color", "crimson");
    $(".btn-sauce").css("color", "white");
    $(".price li:nth-child(4)").css("display", "none");

    $(".btn-sauce").click(function(event) {
        if (($(".btn-sauce").text())==="White sauce"){
          $(".btn-sauce").text("Regular sauce");
          $(".btn-sauce").css("background-color", "crimson");
          $(".sauce-white").css("background-color", "crimson");
          $(".btn-sauce").css("color", "white");
          $(".price li:nth-child(4)").css("display", "none");
        } else if(($(".btn-sauce").text())==="Regular sauce"){
          $(".btn-sauce").text("White sauce");
          $(".sauce-white").css("background-color", "#fff4aa");
          $(".btn-sauce").css("background-color", "#fff4aa");
          $(".btn-sauce").css("color", "#555");
          $(".price li:nth-child(4)").css("display", "inherit");
        }
      });


      $(".btn-crust").text("Crust");
      $(".btn-crust").css("background-color", "#CD853F");
      $(".crust-gluten-free").css("background-color", "#CD853F");
      $(".btn-crust").css("color", "white");
      $(".price li:nth-child(5)").css("display", "none");

      $(".btn-crust").click(function(event) {
          if (($(".btn-crust").text())==="Crust"){
            $(".btn-crust").text("crust-gluten-free");
            $(".btn-crust").css("background-color", "#FFDAB9");
            $(".crust-gluten-free").css("background-color", "#FFDAB9");
            $(".btn-crust").css("color", "white");
            $(".price li:nth-child(5)").css("display", "inherit");
          } else if(($(".btn-crust").text())==="crust-gluten-free"){
            $(".btn-crust").text("Crust");
            $(".crust-gluten-free").css("background-color", "#CD853F");
            $(".btn-crust").css("background-color", "#CD853F");
            $(".btn-crust").css("color", "white");
            $(".price li:nth-child(5)").css("display", "none");
          }
        });

        $(".btn-pepperonni").click(function(event) {
          if ($(".btn-pepperonni").hasClass("active")){
            $(".btn-pepperonni").removeClass("active");
            $(".price li:nth-child(1)").css("display", "none");
          } else {
            $(".btn-pepperonni").addClass("active");
            $(".price li:nth-child(1)").css("display", "inherit");
          }
        });

        $(".btn-mushrooms").click(function(event) {
          if ($(".btn-mushrooms").hasClass("active")){
            $(".btn-mushrooms").removeClass("active");
            $(".price li:nth-child(2)").css("display", "none");
          } else {
            $(".btn-mushrooms").addClass("active");
            $(".price li:nth-child(2)").css("display", "inherit");
          }
        });

        $(".btn-green-peppers").click(function(event) {
          if ($(".btn-green-peppers").hasClass("active")){
            $(".btn-green-peppers").removeClass("active");
            $(".price li:nth-child(3)").css("display", "none");
          } else {
            $(".btn-green-peppers").addClass("active");
            $(".price li:nth-child(3)").css("display", "inherit");
          }
        });

          $(".price strong").text("$13");

          $(".btn").click(function(event) {

          var price = 10;

          if ($(".btn-pepperonni").hasClass("active")){
            price += 1;
          }
          if ($(".btn-mushrooms").hasClass("active")){
            price += 1;
          }
          if ($(".btn-green-peppers").hasClass("active")){
            price += 1;
          }
          if (($(".btn-sauce").text())==="White sauce"){
            price += 3;
          }
          if (($(".btn-crust").text())==="crust-gluten-free"){
            price += 5;
          }
          price = "$" + price;

          $(".price strong").html(price);
        });

});
