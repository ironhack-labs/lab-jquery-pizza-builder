// Write your Pizza Builder JavaScript in this file.
$(function () {
  
  $("li:contains('$3 white sauce')").remove();        // Se elimina al principio (iteración 2)
  $("li:contains('$5 gluten-free crust')").remove();  // Se elimina al principio (iteración 2)

  $('.btn-pepperonni').click( function() {
    var peppe = $("li:contains('$1 pepperonni')");
    if (peppe[0] != undefined) { peppe.remove(); }
    else {
      var newPeppe = $('<li></li>').text("$1 pepperonni");
      $('.price ul').append(newPeppe);
    }
  });

  $('.btn-mushrooms').click( function() {
    var mush = $("li:contains('$1 mushrooms')");
    if (mush[0] != undefined) { mush.remove(); }
    else {
      var newMush = $('<li></li>').text("$1 mushrooms");
      $('.price ul').append(newMush);
    }
  });

  $('.btn-green-peppers').click( function() {
    var peppers = $("li:contains('$1 green peppers')");
    if (peppers[0] != undefined) { peppers.remove(); }
    else {
      var newPeppers = $('<li></li>').text("$1 green peppers");
      $('.price ul').append(newPeppers);
    }
  });

  $('.btn-sauce').click( function() {
    var sauce = $("li:contains('$3 white sauce')");
    if (sauce[0] != undefined) { sauce.remove(); }
    else {
      var newSauce = $('<li></li>').text("$3 white sauce");
      $('.price ul').append(newSauce);
    }
  });

  $('.btn-crust').click( function() {
    var crust = $("li:contains('$5 gluten-free crust')");
    if (crust[0] != undefined) { crust.remove(); }
    else {
      var newCrust = $('<li></li>').text("$5 gluten-free crust");
      $('.price ul').append(newCrust);
    }
  });

});
