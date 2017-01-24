// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

//-----------------------------1st Iteration----------------------------------//
////////////////////////////////////////////////////////////////////////////////
$(".pep").toggle();
$(".btn-pepperonni").click("click", function() {
     	$(".pep").toggle();
});

$(".mushroom").toggle();
$(".btn-mushrooms").click("click", function() {
    $(".mushroom").toggle();
});

$(".green-pepper").toggle();
$(".btn-green-peppers").click("click", function() {
    $(".green-pepper").toggle();
});

//-----------------------------2nd Iteration----------------------------------//
////////////////////////////////////////////////////////////////////////////////
$(".sauce-white").toggleClass("sauce-white");

$(".btn-sauce").click("click", function(event){
if ($(".sauce").hasClass("sauce-white") === false){
    return $(".sauce").addClass("sauce-white");
} else if ($(".sauce").hasClass("sauce-white") === true){
   return $(".sauce").removeClass("sauce-white");
}
  event.preventDefault();

});

$(".crust-gluten-free").toggleClass("crust-gluten-free");
$(".btn-crust").click("click", function(event){
if ($(".crust").hasClass("crust-gluten-free") === false){
    return $(".crust").addClass("crust-gluten-free");
} else if ($(".crust").hasClass("crust-gluten-free") === true){
   return $(".crust").removeClass("crust-gluten-free");
}
  event.preventDefault();
});

//-----------------------------3rd Iteration----------------------------------//
////////////////////////////////////////////////////////////////////////////////

$(".btn-pepperonni").toggleClass("active");
$(".btn-pepperonni").click("click", function(event){
if ($(".btn-pepperonni").hasClass("active") === true){
    return $(".btn-pepperonni").removeClass("active");
} else if ($(".btn-pepperonni").hasClass("active") === false){
   return $(".btn-pepperonni").addClass("active");
}
  event.preventDefault();
});

$(".btn-mushrooms").toggleClass("active");
$(".btn-mushrooms").click("click", function(event){
if ($(".btn-mushrooms").hasClass("active") === true){
    return $(".btn-mushrooms").removeClass("active");
} else if ($(".btn-mushrooms").hasClass("active") === false){
   return $(".btn-mushrooms").addClass("active");
}
  event.preventDefault();
});

$(".btn-green-peppers").toggleClass("active");
$(".btn-green-peppers").click("click", function(event){
if ($(".btn-green-peppersi").hasClass("active") === true){
    return $(".btn-green-peppers").removeClass("active");
} else if ($(".btn-green-peppers").hasClass("active") === false){
   return $(".btn-green-peppers").addClass("active");
}
  event.preventDefault();
});


$(".btn-sauce").toggleClass("active");
$(".btn-sauce").click("click", function(event){
if ($(".btn-sauce").hasClass("active") === true){
    return $(".btn-sauce").removeClass("active");
} else if ($(".btn-sauce").hasClass("active") === false){
   return $(".btn-sauce").addClass("active");
}
  event.preventDefault();
});

$(".btn-crust").toggleClass("active");
$(".crust-gluten-free").toggleClass("crust-gluten-free");
$(".btn-crust").click("click", function(event){
if ($(".btn-crust").hasClass("active") === true){
    return $(".btn-crust").removeClass("active");
} else if ($(".btn-crust").hasClass("active") === false){
   return $(".btn-crust").addClass("active");
}
  event.preventDefault();
});

//-----------------------------4th Iteration----------------------------------//
////////////////////////////////////////////////////////////////////////////////

$(".price li").toggle();

$(".btn-pepperonni").click("click", function(event){
$(".price li:nth-child(1)").toggle();
});

$(".btn-mushrooms").click("click", function(event){
$(".price li:nth-child(2)").toggle();
});

$(".btn-green-peppers").click("click", function(event){
$(".price li:nth-child(3)").toggle();
});

$(".btn-sauce").click("click", function(event){
$(".price li:nth-child(4)").toggle();
});

$(".btn-crust").click("click", function(event){
$(".price li:nth-child(5)").toggle();
});

////////////////////////////////Not Working Yet/////////////////////////////////

var price = 10;
$("strong").html("$"+ price);



$(".btn-pepperonni").click("click", function(){
  $("strong").html("$"+ price);
  if ($(".btn-pepperonni").hasClass("active")=== false){
      return price -= 1;
  } else {
     return price += 1;
}});

$(".btn-mushrooms").click("click", function(){
  $("strong").html("$"+ price);
  if ($(".btn-mushrooms").hasClass("active") === false){
      return price -= 1;
  } else {
     return price += 1;
}});

$(".btn-green-peppers").click("click", function(){
  $("strong").html("$"+ price);
  if ($(".btn-green-peppers").hasClass("active") === false){
      return price -= 1;
  } else {
     return price += 1;
}});

$(".btn-sauce").click("click", function(){
  $("strong").html("$"+ price);
  if ($(".btn-sauce").hasClass("active") === false){
      return price -= 3;
  } else {
     return price += 3;
}});

$(".btn-crust").click("click", function(){
  $("strong").html("$"+ price);
  if ($(".btn-crust").hasClass("active") === false){
      return price -= 5;
  } else {
     return price += 5;
}});

});
