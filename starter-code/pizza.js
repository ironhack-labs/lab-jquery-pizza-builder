// Write your Pizza Builder JavaScript in this file.

$(function() {
  // clickbool = true;
  // $('.btn-green-peppers').click(function() {
  //   if (clickbool) {
  //     $('.green-pepper').hide('slow');
  //     // $('.green-pepper').toggleClass('green-pepper');
  //     clickbool=false;
  //   }else{
  //     $('.green-pepper').show('slow');
  //     clickbool=true;
  //   }
  // });

$('.btn-green-peppers').click(function() {
  // debugger;
  $("#pizza .pepe-verde").toggleClass("green-pepper");
});
$('.btn-mushrooms').click(function() {
  // debugger;
  $("#pizza .champi").toggleClass("mushroom");
});
$('.btn-pepperonni').click(function() {
  // debugger;
  $("#pizza .peperoni").toggleClass("pep");
});





});
