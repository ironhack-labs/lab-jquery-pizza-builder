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

    $(".btn-sauce").click(function(event) {
        if (($(".btn-sauce").text())==="White sauce"){
          $(".btn-sauce").text("Regular sauce");
          $(".btn-sauce").css("background-color", "crimson");
          $(".sauce-white").css("background-color", "crimson");
          $(".btn-sauce").css("color", "white");
        } else if(($(".btn-sauce").text())==="Regular sauce"){
          $(".btn-sauce").text("White sauce");
          $(".sauce-white").css("background-color", "#fff4aa");
          $(".btn-sauce").css("background-color", "#fff4aa");
          $(".btn-sauce").css("color", "#555");
        }
      });


      $(".btn-crust").text("Crust");
      $(".btn-crust").css("background-color", "#CD853F");
      $(".crust-gluten-free").css("background-color", "#CD853F");
      $(".btn-crust").css("color", "white");

      $(".btn-crust").click(function(event) {
          if (($(".btn-crust").text())==="Crust"){
            $(".btn-crust").text("crust-gluten-free");
            $(".btn-crust").css("background-color", "#FFDAB9");
            $(".crust-gluten-free").css("background-color", "#FFDAB9");
            $(".btn-crust").css("color", "white");
          } else if(($(".btn-crust").text())==="crust-gluten-free"){
            $(".btn-crust").text("Crust");
            $(".crust-gluten-free").css("background-color", "#CD853F");
            $(".btn-crust").css("background-color", "#CD853F");
            $(".btn-crust").css("color", "white");
          }
        });
    /*var m = $("#pizza" ".green-pepper").each(function(e){
      var display = $(this).css("display");
      if (display === "none"){
        $(this).css("display", "inherit");
      }else if (display === "inherit"){
        $(this).css("display", "none");
      }
      }
    })*/

});
