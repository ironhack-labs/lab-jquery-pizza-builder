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

    $(".btn-sauce").click(function(event) {
        if ($(".sauce").hasClass("sauce-white")){
          $(".sauce").removeClass("sauce-white");
          $(".sauce").removeClass("sauce-white")
        };
    })


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
