// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

$('#white-sauce-price').hide();



$('#gluten-free-price').hide();
// $('.crust-gluten-free').removeClass();


$('.mushroom').hide();
$('#mushroom-price').hide();

$('.green-pepper').hide();
$('#green-pepper-price').hide();

$('.pep').hide();
$('#pep-price').hide();
$('.btn').removeClass('active');

var total = 10;
var mushroom_toggle = 'off';
var green_pepper_toggle = 'off';
var pep_toggle = 'off';
var crust_toggle = 'off';
var sauce_toggle = 'off';

$('.btn-mushrooms').click(function(){
    $('.mushroom').toggle();
    $('#mushroom-price').toggle(function(){

      if (mushroom_toggle === 'off') {
        total += 1;
        $('.total').text('$' + total);
        mushroom_toggle = 'on';
        $('.btn-mushrooms').addClass('active');

      }
      else {
      total -= 1;
      $('.total').text('$' + total);
      mushroom_toggle = 'off';
    }
    });

});
$('.btn-green-peppers').click(function(){
    $('.green-pepper').toggle();
    $('#green-pepper-price').toggle(function(){

      if (green_pepper_toggle === 'off') {
        total += 1;
        $('.total').text('$' + total);
        green_pepper_toggle = 'on';
        $('.btn-green-peppers').addClass('active');
      }
      else {
      total -= 1;
      $('.total').text('$' + total);
      green_pepper_toggle = 'off';
    }
    });
});
$('.btn-pepperonni').click(function(){
    $('.pep').toggle();
    $('#pep-price').toggle(function(){

      if (pep_toggle === 'off') {
        total += 1;
        $('.total').text('$' + total);
        pep_toggle = 'on';
        $('.btn-pepperonni').addClass('active');
      }
      else {
      total -= 1;
      $('.total').text('$' + total);
      pep_toggle = 'off';
    }
    });
});

$('.btn-crust').click(function(){
    $('#gluten-free-price').toggle(function(){
      if (crust_toggle === 'off') {
        total += 5;
        $('.total').text('$' + total);
        crust_toggle = 'on';
        $('.btn-crust').addClass('active');
        $('#crust').addClass('crust-gluten-free');

      }
      else {
      total -= 5;
      $('.total').text('$' + total);
      crust_toggle = 'off';
      $('#crust').removeClass('crust-gluten-free');
    }
    });
});

$('.btn-sauce').click(function(){
    $('#white-sauce-price').toggle(function(){
      if (sauce_toggle === 'off') {
        total += 3;
        $('.total').text('$' + total);
        sauce_toggle = 'on';
        $('.btn-sauce').addClass('active');
        $('#sauce').addClass('sauce-white');

      }
      else {
      total -= 3;
      $('.total').text('$' + total);
      sauce_toggle = 'off';
      $('#sauce').removeClass('sauce-white');
    }
    });
});

$('.total').text('$' + total);

});
