// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
  //Iteration 1.
  $('div.controls button.btn').on('click', function(e) {
    $x = e.currentTarget 
    switch ($x.innerHTML) {
      case 'Pepperonni':
        $('#pizza section.pep').hide()
        break;
      case 'Mushrooms':
        $('#pizza section.mushroom').hide()
        break;
      case 'Green peppers':
        $('#pizza section.green-pepper').hide()
        break;
      default:
        break;
    }
  })
})
