// Write your Pizza Builder JavaScript in this file.
$(function () {
  
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

});
