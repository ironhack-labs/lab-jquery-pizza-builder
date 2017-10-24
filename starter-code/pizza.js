// Write your Pizza Builder JavaScript in this file.
'use strict';
//$(document).ready(main) tambe per começar

function main () {

  $().removeClass(["sauce-white"]);

  $(".btn-pepperonni").on("click", function(){
      $(this).toggleClass("active");
      $(".pep").toggle();
  });

  $(".btn-mushrooms").click(function(){
    $(this).toggleClass("active");
    $(".mushroom").toggle();
  });

  $(".btn-green-peppers").click(function(){
    $(this).toggleClass("active");
    $(".green-pepper").toggle();
  });


/* WE WERE TRYING TO REMOVE THE WHITE
SAUCE AS DEFAULT


  $(".btn-sauce").click(function(){
    $(this).toggleClass("active");
    $(".sauce-white").toggle();
  });

  $(".crust").click(function(){
    $(this).toggleClass("active");
    $(".crust-gluten-free").toggle();
  });

}
*/

$(document).ready(main);
