// Write your Pizza Builder JavaScript in this file.
$(function () {
  
  $("li:contains('$3 white sauce')").remove();        // Se elimina al principio (iteración 2)
  $("li:contains('$5 gluten-free crust')").remove();  // Se elimina al principio (iteración 2)
  $(".btn-sauce").removeClass('active');              // Se elimina al principio (iteración 3)
  $(".btn-crust").removeClass('active');              // Se elimina al principio (iteración 3)

  $('.btn-pepperonni').click( function() {
    var peppe = $("li:contains('$1 pepperonni')");
    if (peppe[0] != undefined) {
      peppe.remove();
      $('.btn-pepperonni').removeClass('active');
    }
    else {
      var newPeppe = $('<li></li>').text("$1 pepperonni");
      $('.price ul').append(newPeppe);
      $('.btn-pepperonni').addClass('active');
    }
  });

  $('.btn-mushrooms').click( function() {
    var mush = $("li:contains('$1 mushrooms')");
    if (mush[0] != undefined) {
      mush.remove();
      $('.btn-mushrooms').removeClass('active');
    }
    else {
      var newMush = $('<li></li>').text("$1 mushrooms");
      $('.price ul').append(newMush);
      $('.btn-mushrooms').addClass('active');
    }
  });

  $('.btn-green-peppers').click( function() {
    var peppers = $("li:contains('$1 green peppers')");
    if (peppers[0] != undefined) {
      peppers.remove();
      $('.btn-green-peppers').removeClass('active');
    }
    else {
      var newPeppers = $('<li></li>').text("$1 green peppers");
      $('.price ul').append(newPeppers);
      $('.btn-green-peppers').addClass('active');
    }
  });

  $('.btn-sauce').click( function() {
    var sauce = $("li:contains('$3 white sauce')");
    if (sauce[0] != undefined) {
      sauce.remove();
      $('.btn-sauce').removeClass('active');
    }
    else {
      var newSauce = $('<li></li>').text("$3 white sauce");
      $('.price ul').append(newSauce);
      $('.btn-sauce').addClass('active');
    }
  });

  $('.btn-crust').click( function() {
    var crust = $("li:contains('$5 gluten-free crust')");
    if (crust[0] != undefined) {
      crust.remove();
      $('.btn-crust').removeClass('active');
    }
    else {
      var newCrust = $('<li></li>').text("$5 gluten-free crust");
      $('.price ul').append(newCrust);
      $('.btn-crust').addClass('active');
    }
  });

});
