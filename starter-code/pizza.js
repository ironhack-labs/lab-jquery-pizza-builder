// Write your Pizza Builder JavaScript in this file.


  
$(document).ready(function(){

  // green pepper

  $(".btn-green-peppers").click(function() {
      $(".green-pepper").toggle();
      $(this).toggleClass("active");
      $("li:contains('green')").toggle();

  });

  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggle();
    $(this).toggleClass("active");
  });

  $(".btn-pepperonni").click(function() {
        $(".pep").toggle();
        $(this).toggleClass("active");
  }); 

  $(".btn-crust").click(function() {
        $(".sauce-white").toggle(); 
        $(".cheese").toggle();
        $(this).toggleClass("active");
        $(".btn-sauce").toggleClass("active");
        
  });

  $(".btn-sauce").click(function() {
      $(".sauce-white").toggle();
      $(this).toggleClass("active");
  })
  





  });