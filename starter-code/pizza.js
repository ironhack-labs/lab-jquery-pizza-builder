$( document ).ready(function() {
$(".active").toggleClass("active");

$(".crust").removeClass("crust-gluten-free")

$(".sauce").removeClass("sauce-white");

$(".price li").toggle();

$(".crust").click(function(event) {
  //<-----------default
});

var totalPrice = 10;
$("strong").html("$" + totalPrice);


//<-----------green-pepper adds&removes

$(".green-pepper").toggle();
$(".btn-green-peppers").click(function(event) {
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
  $(".price li:nth-child(3)").toggle();
if($(".btn-green-peppers").hasClass('active')) {
  totalPrice += 1
} else {
  totalPrice -= 1
}
$("strong").html("$" + totalPrice);

//<----use for if/else statement in each ingredient https://stackoverflow.com/questions/5345374/jquery-hasclass-in-if-statement-not-playing-nicely 
});
//<-----------mushrooms adds&removes

$(".mushroom").toggle();
$(".btn-mushrooms").click(function(event) {
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
  $(".price li:nth-child(2)").toggle();
  if($(".btn-mushrooms").hasClass('active')) {
    totalPrice += 1
  } else {
    totalPrice -= 1
  }
  $("strong").html("$" + totalPrice);

});
//<-----------pepp adds&removes

$(".pep").toggle();
$(".btn-pepperonni").click(function(event) {
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
  $(".price li:first").toggle();
  if($(".btn-pepperonni").hasClass('active')) {
    totalPrice += 1
  } else {
    totalPrice -= 1
  }
  $("strong").html("$" + totalPrice);
});

//<----------- option

$(".btn-sauce").click(function(event) {
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  $(".price li:nth-child(4)").toggle();
  if($(".btn-sauce").hasClass('active')) {
    totalPrice += 3
  } else {
    totalPrice -= 3
  }
  $("strong").html("$" + totalPrice);
});

//<-----------crust

$(".btn-crust").click(function(event) {
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $(".price li:last").toggle();
    if($(".btn-crust").hasClass('active')) {
      totalPrice += 5
    } else {
      totalPrice -= 5
    }
    $("strong").html("$" + totalPrice);
    
});

});