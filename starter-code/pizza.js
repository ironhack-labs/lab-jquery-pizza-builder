// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

  $(".sauce").removeClass("sauce-white");

  $(".crust").removeClass("crust-gluten-free");



  $(".btn").click(function(){
    $(this).toggleClass("active")
  })

  $(".btn-pepperonni").click(function(event) {
    $(".pep").toggle();
  });


    $(".btn-mushrooms").click(function(event) {
      $(".mushroom").toggle();
    });


      $(".btn-green-peppers").click(function(event) {
        $(".green-pepper").toggle();
      });

      $(".btn-sauce").click(function(event) {
        $(".sauce").toggleClass("sauce-white");

      });

    $(".btn-crust").click(function(event) {
      $(".crust").toggleClass("crust-gluten-free");

            });


});
