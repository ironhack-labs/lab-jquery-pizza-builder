// Write your Pizza Builder JavaScript in this file.
var pep = 1;
var mushroom = 1;
var green = 1;
var white = 3;
var crust = 5;

var pepAc = true;
var mushroomAc = true;
var greenAc = true;
var whiteAc = false;
var crustAc = false;

var totalAc = 10;

$(".btn-pepperonni").click(function(){
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
  $("li:contains(pepperonni)").toggle();
  pepAc = !pepAc;
  totalCount(); 
});
$(".btn-mushrooms").click(function(){
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
  $("li:contains(mushrooms)").toggle();
  mushroomAc = !mushroomAc;
  totalCount(); 
});
$(".btn-green-peppers").click(function(){
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
  $("li:contains($1 green peppers)").toggle();
  greenAc = !greenAc;
  totalCount(); 
});
$(".btn-sauce").click(function(){
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  $("li:contains(white sauce)").toggle();
  whiteAc = !whiteAc;
  totalCount(); 
});
$(".btn-crust").click(function(){
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
  $("li:contains(gluten-free crust)").toggle();
  crustAc = !crustAc;
  totalCount(); 
});
$(document).ready(function() {
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  $("li:contains(white sauce)").toggle();

  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
  $("li:contains(gluten-free crust)").toggle(); 
  totalCount(); 
});
function totalCount () {
  if(pepAc === true) {
    a = pep;
  } else {
    a = 0;
  }
  if(mushroomAc === true) {
    b = mushroom;
  } else {
    b = 0;
  }
  if(greenAc === true) {
    c = green;
  } else {
    c = 0;
  }
  if(whiteAc === true) {
    d = white;
  } else {
    d = 0;
  }
  if(crustAc === true) {
    e = crust;
  } else {
    e = 0;
  }
  return $("strong").html("$"+(totalAc+a+b+c+d+e));
};


