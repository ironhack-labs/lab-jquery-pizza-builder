$(".crust").removeClass("crust-gluten-free");
$(".sauce").removeClass("sauce-white active");
$(".btn-crust").removeClass("active");
$(".btn-sauce").removeClass("active");
$("li:contains('white sauce')").hide();
$("li:contains('gluten-free')").hide();

var count = 13;
$("strong").text("$"+ count);

$(".btn").on("click", function() {
  if($(this).hasClass("active")) {
    
    if($(this).hasClass("btn-pepperonni") || $(this).hasClass("btn-mushrooms") || $(this).hasClass("btn-green-peppers")) {
      count--;}
    if($(this).hasClass("btn-crust")) {
      count -= 5;}
    if($(this).hasClass("btn-sauce")) {
      count -= 3;
    }
    }
  else  {
    
    if($(this).hasClass("btn-pepperonni") || $(this).hasClass("btn-mushrooms") || $(this).hasClass("btn-green-peppers")) {
      count++;}
    if($(this).hasClass("btn-crust")) {
        count += 5;}
    if($(this).hasClass("btn-sauce")) {
        count += 3;}
}
$("strong").text("$"+ count);
})

$(".btn-pepperonni").on("click", function() {
  $(".pep").toggle();
  $(this).toggleClass("active");
  $("li:contains('pepperonni')").toggle();
})

$(".btn-mushrooms").on("click", function() {
  $(".mushroom").toggle();
  $(this).toggleClass("active");
  $("li:contains('mushrooms')").toggle();

})

$(".btn-green-peppers").on("click", function() {
  $(".green-pepper").toggle();
  $(this).toggleClass("active");
$("li:contains('green peppers')").toggle();

})

$(".btn-sauce").on("click", function() {
  console.log("sauce")
  $(".sauce").toggleClass("sauce-white");
  $(this).toggleClass("active");
  $("li:contains('white sauce')").toggle();

});

$(".btn-crust").on("click", function() {
  console.log("crust")
  $(".crust").toggleClass("crust-gluten-free");
  $(this).toggleClass("active");
$("li:contains('gluten-free')").toggle();

});


