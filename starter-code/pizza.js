// Write your Pizza Builder JavaScript in this file.

$(function() {
  $(".btn-crust").removeClass("active");
  $("button.btn-sauce").removeClass("active");
  $("aside.panel strong").text(total());

});

$("button.btn-crust").click(function() {
  $(this).toggleClass("active");
    $("section.crust > section.cheese").toggle();
    $("aside.panel strong").text(total());

});

$("button.btn-pepperonni").click(function() {
  $(this).toggleClass("active");
    $("section.pep").toggle();
    $("aside.panel strong").text(total());

});
$("button.btn-green-peppers").click(function() {
  $(this).toggleClass("active");
      $("section.green-pepper").toggle();
      $("aside.panel strong").text(total());

});

$("button.btn-mushrooms").click(function() {
  $(this).toggleClass("active");
    $("section.mushroom").toggle();
    $("aside.panel strong").text(total());

});
$("button.btn-sauce").click(function() {
  $(this).toggleClass("active");
    $("section.sauce").toggle();
    $("aside.panel strong").text(total());

});

//Creo que la ITERACIÓN 4 se podría hacer
// de este modo pero no doy con la clave
//$(function() {
  //$([li^="$"]).removeAttr("$1 pepperoni");
  //$([li^="$"]).removeAttr("$5 gluten-free crust");
//});
//luego usaría otra función para activar

function total() {
var sum = 10;
  if ($(".btn-pepperonni").hasClass("active")) {
   sum += 1;
 }
 if ($(".btn-mushrooms").hasClass("active")) {
   sum += 1;
 }
 if ($(".btn-green-peppers").hasClass("active")) {
   sum += 1;
 }
 if ($(".btn-sauce").hasClass("active")) {
   sum += 3;
 }
 if ($(".btn-crust").hasClass("active")) {
   sum += 5;
 }
 return sum;
 }
