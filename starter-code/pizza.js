// Write your Pizza Builder JavaScript in this file.



// $( "button" ).click(function() {
//   $( this ).toggleClass( "active" );
//   });

  $(document).ready(function(){
    $(".btn-pepperonni").click(function(){
        $(".pep").toggle();
    });

    $(".btn-mushrooms").click(function(){
      $(".mushroom").toggle();
  });

    $(".btn-green-peppers").click(function(){
      $(".green-pepper").toggle();
  });


});