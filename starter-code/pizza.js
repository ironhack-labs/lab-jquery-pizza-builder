// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
  $('div.controls button.btn-sauce').toggleClass('active')
  $('#pizza section.crust section.sauce').hide()
  $('div.controls button.btn-crust').toggleClass('active')
  $('#pizza section.crust').toggleClass('crust-gluten-free')
  $('aside.price li:last-child').hide()
  $('aside.price li:nth-child(4)').hide()
  function isActive() {

  }

  $('div.controls button.btn').on('click', function(e) {
    $x = e.currentTarget
    $($x).toggleClass('active')
    switch ($x.innerHTML) {
      case 'Pepperonni':
        $('#pizza section.pep').toggle()
        $('aside.price li:first-child').toggle()
        break;
      case 'Mushrooms':
        $('#pizza section.mushroom').toggle()
        $('aside.price li:first-child + li').toggle()
        break;
      case 'Green peppers':
        $('#pizza section.green-pepper').toggle()
        $('aside.price li:nth-child(3)').toggle()
        break;
      case 'White sauce':
        $('#pizza section.crust section.sauce').toggle()
        $('aside.price li:nth-child(4)').toggle()
        break;
      case 'Gluten-free crust':
        $('#pizza section.crust').toggleClass('crust-gluten-free')
        $('aside.price li:last-child').toggle()
      default:
        break;
    }
  })

})
