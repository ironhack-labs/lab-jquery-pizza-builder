function totalPrice() {
var total = 10;
if ($( ".btn-pepperonni" ).hasClass( "active" ))
{total += 1;}
if ($( ".btn-mushrooms" ).hasClass( "active" ))
  {total += 1;}
if ($( ".btn-green-peppers" ).hasClass( "active" ))
  {total += 1;}
if ($( ".btn-sauce" ).hasClass( "active" ))
  {total += 3;}
if ($( ".btn-crust" ).hasClass( "active" ))
  {total += 5;}
$("strong").text("$"+total);
}
// Write your Pizza Builder JavaScript in this file.
$(document).on("ready", function(){
  console.log("linked");
  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");
  $(".btn-sauce, .btn-crust").removeClass("active");
  $("aside li:nth-child(4)").hide();
  $("aside li:last").hide();
  $(".btn").on("click", function() {
    $(this).toggleClass("active");
    totalPrice();
  });
  $(".btn-pepperonni").on("click", function() {
    $(".pep").toggle();
    $("aside li:first").toggle();
  });
  $(".btn-mushrooms").on("click", function() {
    $(".mushroom").toggle();
    $("aside li:nth-child(2)").toggle();
  });
  $(".btn-green-peppers").on("click", function() {
    $(".green-pepper").toggle();
    $("aside li:nth-child(3)").toggle();
  });
  $(".btn-sauce").on("click", function() {
    $(".sauce").toggleClass("sauce-white");
    $("aside li:nth-child(4)").toggle();

  });
  $(".btn-crust").on("click", function() {
    $(".crust").toggleClass("crust-gluten-free");
    $("aside li:last").toggle();
    });
  });
