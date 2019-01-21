// Write your Pizza Builder JavaScript in this file.
$( ".pep" ).toggle();
$( ".mushroom" ).toggle();
$( ".green-pepper" ).toggle();
$( ".sauce" ).toggleClass('sauce-white');
$( ".crust" ).toggleClass('crust-gluten-free');
$( ".price li:first" ).toggle();
$( ".price li:nth-child(2)" ).toggle();
$( ".price li:nth-child(3)" ).toggle();
$( ".price li:nth-child(4)" ).toggle();
$( ".price li:nth-child(5)" ).toggle();

$('.btn-pepperonni').click(function() {
    $( ".pep" ).toggle();
    $( ".btn-pepperonni" ).toggleClass('active');
    $( ".price li:first" ).toggle();
  });


  $('.btn-mushrooms').click(function() {
    $( ".mushroom" ).toggle();
    $( ".btn-mushrooms" ).toggleClass('active');
    $( ".price li:nth-child(2)" ).toggle();
  });


  $('.btn-green-peppers').click(function() {
    $( ".green-pepper" ).toggle();
    $( ".btn-green-peppers" ).toggleClass('active');
    $( ".price li:nth-child(3)" ).toggle();
  });


  $('.btn-sauce').click(function() {
    $( ".sauce" ).toggleClass('sauce-white');
    $( ".btn-sauce" ).toggleClass('active');
    $( ".price li:nth-child(4)" ).toggle();
  });


$('.btn-crust').click(function() {
    $( ".crust" ).toggleClass('crust-gluten-free');
    $( ".btn-crust" ).toggleClass('active');
    $( ".price li:nth-child(5)" ).toggle();
  });
