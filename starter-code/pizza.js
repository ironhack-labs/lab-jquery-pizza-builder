// Write your Pizza Builder JavaScript in this file.
$( document ).ready(function() {

var btnPepperonni = $( ".btn-pepperonni" );

   btnPepperonni.on( "click", function() {
     $(this).toggleClass("active");

var pepperonni = $( ".pep" );

  if (btnPepperonni.hasClass( "active" )){
     pepperonni.addClass( "pepito" );
     pepperonni.removeClass( "pep" );

  } else {

    pepperonni.addClass( "pep" );
    pepperonni.removeClass( "pepito" );

  }

  });


});
