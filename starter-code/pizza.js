// Write your Pizza Builder JavaScript in this file.
$( function() {

  $(".crust").removeClass("crust-gluten-free");
  $(".btn-crust").removeClass("active");
  $(".sauce").removeClass("sauce-white");
  $(".btn-sauce").removeClass("active");


  $("aside.panel strong").text(sumaTotal());


  $(".btn-sauce").click(function() {
    if( $(this).hasClass("active") ) {
      $(this).removeClass("active");
    }
    else {
      $(this).addClass("active");
    }
    $(".sauce").toggle();
      $("aside.panel li:nth-child(4)").toggle();

      $("aside.panel strong").text(sumaTotal());
  })


  $(".btn-crust").click(function() {
    if( $(this).hasClass("active") ) {
      $(this).removeClass("active");
    }
    else {
      $(this).addClass("active");
    }
    $(".cheese").toggle();
      $("aside.panel li:nth-child(5)").toggle();

      $("aside.panel strong").text(sumaTotal());
  })



  $(".btn-green-peppers").click(function() {
    if( $(this).hasClass("active") ) {
      $(this).removeClass("active");
    }
    else {
      $(this).addClass("active");
    }
    $(".green-pepper").toggle();
      $("aside.panel li:nth-child(3)").toggle();

      $("aside.panel strong").text(sumaTotal());

  })

  $(".btn-pepperonni").click(function() {
    $(".pep").toggle();
    $("aside.panel li:nth-child(1)").toggle();
    if( $(this).hasClass("active") ) {
      $(this).removeClass("active");
    }
    else {
      $(this).addClass("active");
    }

    $("aside.panel strong").text(sumaTotal());

  })

  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggle();
      $("aside.panel li:nth-child(2)").toggle();
      if( $(this).hasClass("active") ) {
        $(this).removeClass("active");
      }
      else {
        $(this).addClass("active");
      }

      $("aside.panel strong").text(sumaTotal());
  })


  // sumaTotal()


});


function sumaTotal() {
  var sum = 10;
  if( $(".btn-pepperonni").hasClass("active") ) {
    sum += 1;
  }
  if( $(".btn-mushrooms").hasClass("active") ) {
    sum += 1;
  }
  if( $(".btn-green-peppers").hasClass("active") ) {
    sum += 1;
  }
  if( $(".btn-sauce").hasClass("active") ) {
    sum += 3;
  }
  if( $(".btn-crust").hasClass("active") ) {
    sum += 5;
  }



  return sum;
};
