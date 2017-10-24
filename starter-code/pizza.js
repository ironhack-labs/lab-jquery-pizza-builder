// Write your Pizza Builder JavaScript in this file.
$( document ).ready(function() {

// ITERACION 1
var btnPepperonni = $( ".btn-pepperonni" );

   btnPepperonni.on( "click", function() {
     $(this).toggleClass("active");

var pepperonni = $( ".pep" );

  if (btnPepperonni.hasClass( "active" )){
     pepperonni.css ( "z-index", 0);

  } else {
    pepperonni.css ( "z-index", 15);

  }
  });

  var btnMushroom = $( ".btn-mushrooms" );

  btnMushroom.on( "click", function() {
       $(this).toggleClass("active");

    var mushroom = $( ".mushroom" );

    if (btnMushroom.hasClass ("active")) {
      mushroom.css ("display", "none");
    } else {
      mushroom.css ("display", "block");
    }
  });


  var btnGreenPeppers = $( ".btn-green-peppers" );

  btnGreenPeppers.on( "click", function() {
       $(this).toggleClass("active");

    var greenPeppers = $( ".green-pepper" );

    if (btnGreenPeppers.hasClass ("active")) {
      greenPeppers.css ("display", "none");
    } else {
      greenPeppers.css ("display", "block");
    }
  });

// ITERACION 2

var btnSauce = $( ".btn-sauce" );


btnSauce.on( "click", function() {
     $(this).toggleClass("active");

var sauce = $(".sauce-white");

  if (btnSauce.hasClass ("active")) {
    sauce.css ("background", "inherit");

  } else {
    sauce.css ("background", "#fff4aa");

  }
});

var btnCrust = $( ".btn-crust" );


btnCrust.on( "click", function() {
     $(this).toggleClass("active");

var crust = $(".crust-gluten-free");

  if (btnCrust.hasClass ("active")) {
    crust.css ("background-color", "inherit");

  } else {
    crust.css ("background-color", "#e0d5cf");

  }
});



  });
