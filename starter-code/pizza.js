// Write your Pizza Builder JavaScript in this file.
  var total_price = 0;


$(document).ready(function(){
      $(".white-sauce").css("display", "none");
      $(".gluten-free").css("display", "none");
      $(".crust").removeClass("crust-gluten-free");
      $(".sauce").removeClass("sauce-white");
      $("strong").html("$" + total_price);
      $(".btn-pepperonni").on("click", function(){
          $(".pepperonni").toggle();
          $(".pep").toggle();
            });

      $(".btn-mushrooms").on("click", function(){
          $(".mushrooms").toggle();
          $(".mushroom").toggle();
            });

        $(".btn-green-peppers").on("click", function(){
            $(".peppers").toggle();
            $(".green-pepper").toggle();
            });

        $(".btn-sauce").on("click", function(){
            $(".sauce").toggleClass("sauce-white");
            });

        $(".btn-crust").on("click", function(){
            $(".crust").toggleClass('crust-gluten-free');
          });


        $(".btn"). on("click", function(){
          $(this).toggleClass("active");//pone o quita la clase active
            });

        $(".white-sauce"). on("click", function(){
          total_price = total_price + 3;
              });


});
