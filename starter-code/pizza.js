// Write your Pizza Builder JavaScript in this file.

function getTotalPrice(){
  let total = 10
}





$( document ).ready(function() {
    $('.sauce').toggleClass('sauce-white')
    $('.crust').toggleClass('crust-gluten-free')
    $('#pep-btn').toggleClass('active')
    $('#mushroom-btn').toggleClass('active')
    $('#gp-btn').toggleClass('active')
});

$("#pep-btn").click(function(){
    $('#pep-btn').toggleClass('active')
    $('.pep').toggleClass('pepperoni')
    $('#pep-item').toggleClass('lst-item-display')
});

$('#mushroom-btn').click(function(){
  $('.mushroom').toggleClass('no-mushroom')
  $('#mushroom-btn').toggleClass('active')
  $('#mushroom-item').toggleClass('lst-item-display')
});

$('#gp-btn').click(function(){
  $('.green-pepper').toggleClass('no-pepper')
  $('#gp-btn').toggleClass('active')
  $('#gp-item').toggleClass('lst-item-display')
})

//Sauce
$('#sauce-btn').click(function(){
  $('.sauce').toggleClass('sauce-white')
  $('#sauce-item').toggleClass('lst-item-display')
})

$('#crust-btn').click(function(){
    $('.crust').toggleClass('crust-gluten-free')
    $('#crust-item').toggleClass('lst-item-display')
})
