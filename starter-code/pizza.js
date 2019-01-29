// Write your Pizza Builder JavaScript in this file.
$( document ).ready(function() {
    $('.sauce').toggleClass('sauce-white')
    $('.crust').toggleClass('crust-gluten-free')
});

$("#pep-btn").click(function(){

    $('.pep').toggleClass('pepperoni')
});

$('#mushroom-btn').click(function(){
  $('.mushroom').toggleClass('no-mushroom')
});

$('#gp-btn').click(function(){
  $('.green-pepper').toggleClass('no-pepper')
})

//Sauce

$('#sauce-btn').click(function(){
  $('.sauce').toggleClass('sauce-white')
})

$('#crust-btn').click(function(){
    $('.crust').toggleClass('crust-gluten-free')
})
