// Write your Pizza Builder JavaScript in this file.
$( ".btn.btn-pepperonni.active" ).click(function() {
  $('.pep').toggle();
  $('.btn.btn-pepperonni').toggleClass("active");
});

$( ".btn.btn-green-peppers.active" ).click(function() {
  $('.green-pepper').toggle();
  $('.btn.btn-green-peppers').toggleClass("active");
});

$( ".btn.btn-mushrooms.active" ).click(function() {
  $('.mushroom').toggle();
  $('.btn.btn-mushrooms').toggleClass("active");

});

$( ".btn.btn-sauce" ).click(function() {
  $('.sauce').toggleClass("sauce-white");
  $('.btn.btn-sauce').toggleClass("active");
});

$( ".btn.btn-crust" ).click(function() {
  $('.crust').toggleClass("crust-gluten-free");
  $('.btn.btn-crust').toggleClass("active");
});
