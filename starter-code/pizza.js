// Write your Pizza Builder JavaScript in this file.
$(".btn.btn-pepperonni.active").click(function(){
  $(".pep").toggle("pep");
}); //pepperoni

$(".btn.btn-mushrooms.active").click(function() {
  $(".mushroom").toggle("mushroom");
}); //mushrooms

$(".btn.btn-green-peppers.active").click(function() {
  $(".green-pepper").toggle("green-pepper");
}); //green-pepprers

$(".btn.btn-sauce.active").click(function() {
  $(".sauce-white").toggle("sauce-white");
}); //sauce

$(".btn.btn-crust.active").click(function() {
  $(".crust").toggleClass("crust-gluten-free");
}); //crust