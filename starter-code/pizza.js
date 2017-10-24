function init() {
$(".pep").css({"display":"none"});
$( ".btn-pepperonni" ).on( "click", function() {
  $('.pep').css({"display":"inline"});
});
$(".mushroom").css({"display":"none"});
$( ".btn-mushrooms" ).on( "click", function() {
  $('.mushroom').css({"display":"inline"});
});
$(".green-pepper").css({"display":"none"});
$( ".btn-green-peppers" ).on( "click", function() {
  $('.green-pepper').css({"display":"inline"});
});
};

$(document).ready(function() {
  init();
})
