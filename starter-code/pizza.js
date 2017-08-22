// Write your Pizza Builder JavaScript in this file.

$(document).ready(function(){
  $('.btn-pepperonni').removeClass('active');
  $('.btn-mushrooms').removeClass('active');
  $('.btn-green-peppers').removeClass('active');

  $('.btn-pepperonni').click(function(){
    $('.pep').toggle();
    $('.btn-pepperonni').toggleClass('active');
    $('.price ul li:nth-child(1)').toggle();
  });

  $('.btn-mushrooms').click(function() {
    $('.mushroom').toggle();
    $('.btn-mushrooms').toggleClass('active');
    $('.price ul li:nth-child(2)').toggle();
  });

  $('.btn-green-peppers').click(function(){
    $('.green-pepper').toggle();
    $('.btn-green-peppers').toggleClass('active');
    $('.price ul li:nth-child(3)').toggle();
  });

  $('.btn-sauce').click(function(){
    $('.sauce-white').toggle();
    $('.btn-sauce').toggleClass('active');
    $('.price ul li:nth-child(4)').toggle();
  });

  $('.btn-crust').click(function(){
    $('.crust').toggleClass('crust-gluten-free');
    $('.btn-crust').toggleClass('active');
    $('.price ul li:nth-child(5)').toggle();
  });

  $('.btn').click(function(){
    $a = $('.price ul').children();
    var suma = 10;
    for (var i=0; i < $a.length; i++){
      suma += Number($a[i].innerHTML[1]);
    }
    console.log($a);
  });


});
