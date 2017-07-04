// Write your Pizza Builder JavaScript in this file.

$(function (event){
  $('.crust .sauce').toggle();
});

$('.panel .btn-sauce')
.click(function(event){
    $('.crust .sauce').toggle();
});


$(function (event){
  $('.crust .cheese').toggle();
});

$('.panel .btn-crust')
.click(function(event){
    $('.crust .cheese').toggle();
});


$('.panel .btn-green-peppers')
  .click(function(event){
    $(".panel .btn-green-peppers .active").toggle();
  });


$('.panel .btn-green-peppers')
.click(function(event){
    $('#pizza .green-pepper').toggle();
});

$('.panel .btn-mushrooms')
.click(function(event){
    $('#pizza .mushroom').toggle();
});

$('.panel .btn-pepperonni')
.click(function(event){
    $('#pizza .pep').toggle();
});









/*
when click on button
remove pepperoni
*/
