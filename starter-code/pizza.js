// Write your Pizza Builder JavaScript in this file.

$( ".btn-pepperonni" ).click(function() {
  $( ".pep" ).toggle(); 
  $(".btn-pepperonni").toggleClass("active");
});

$( ".btn-mushrooms" ).click(function() {
  $( ".mushroom" ).toggle(); 
  $(".btn-mushrooms").toggleClass("active");
});

$( ".btn-green-peppers" ).click(function() {
  $( ".green-pepper" ).toggle(); 
  $(".btn-green-peppers").toggleClass("active");
});

$( ".btn-sauce" ).click(function() {
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active")
});

$( ".btn-crust" ).click(function() {
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active")
});

$( ".sauce" ).removeClass( "sauce-white" )
$( ".crust" ).removeClass( "crust-gluten-free" )

if ($(".sauce").hasClass ("sauce-white")){
  $(".btn-sauce").addClass("active")
}
else {
  $(".btn-sauce").removeClass("active")
}

if ($(".crust").hasClass ("crust-gluten-free")){
  $(".btn-crust").addClass("active")
}
else {
  $(".btn-crust").removeClass("active")
}




