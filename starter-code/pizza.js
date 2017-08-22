// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
  //Iteration 1.
  $('div.controls button.btn').on('click', function(e) {
    $x = e.currentTarget
    //Iteration 3.
    $($x).toggleClass('active')
    switch ($x.innerHTML) {
      case 'Pepperonni':
        $('#pizza section.pep').toggle()
        break;
      case 'Mushrooms':
        $('#pizza section.mushroom').toggle()
        break;
      case 'Green peppers':
        $('#pizza section.green-pepper').toggle()
        break;
      //Iteration 2.
      case 'White sauce':
        $('#pizza section.crust section.sauce').toggle()
        break;
      case 'Gluten-free crust':
        $('#pizza section.crust').toggleClass('crust-gluten-free')
      default:
        break;
    }
  })

})
