// Write your Pizza Builder JavaScript in this file.



// $( "button" ).click(function() {
//   $( this ).toggleClass( "active" );
//   });

  $(document).ready(function(){
    $(".btn-pepperonni").click(function(){
      $(".pep").toggle();
      $(this).toggleClass("active");
    });

    $(".btn-mushrooms").click(function(){
      $(".mushroom").toggle();
      $(this).toggleClass("active");
    });

    $(".btn-green-peppers").click(function(){
      $(".green-pepper").toggle();
      $(this).toggleClass("active");
    });

  

    $(".btn-sauce").toggleClass("active");
    $(".sauce").toggle();
    $(".btn-sauce").click(function(){
      $(".sauce").toggle();
      $(this).toggleClass("active");
    });
     
    $(".btn-crust").toggleClass("active");
    $(".btn-crust").click(function(){
      $(this).toggleClass("active");
    });

});