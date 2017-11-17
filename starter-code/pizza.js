// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

//por defecto con gluten y sin salsa y con la base y los 3 toppings solo

function reset () {
  $(".btn").removeClass("active");
  $(".btn-pepperoni").removeClass("active");
  $(".crust").removeClass("crust-gluten-free");
  $(".pep").hide();
  $(".mushroom").hide();
  $(".green-pepper").hide();
  $(".sauce").hide();
  $(".price ul li:contains($1 pepperonni)").hide();
  $(".price ul li:contains($1 mushrooms)").hide();
  $(".price ul li:contains($1 green peppers)").hide();
  $(".price ul li:contains($3 white sauce)").hide();
  $(".price ul li:contains($5 gluten-free crust)").hide();
  $(".strong").text("$10");
}
reset();
//ejecución de los botones
});

$(".btn-pepperonni").click(function() {
if($(this).hasClass("active")){
  $(".pep").hide();
  $(this).removeClass("active");
  $(".price ul li:contains($1 pepperonni)").hide();
} else {
  $(".pep").show();
  $(this).addClass("active");
  $(".price ul li:contains($1 pepperonni)").show();
}
});

$(".btn-mushrooms").click(function() {
if($(this).hasClass("active")){
  $(".mushroom").hide();
  $(this).removeClass("active");
  $(".price ul li:contains($1 mushrooms)").hide();
} else {
  $(".mushroom").show();
  $(this).addClass("active");
  $(".price ul li:contains($1 mushrooms)").show();
}
});

$(".btn-green-peppers").click(function() {
if($(this).hasClass("active")){
  $(".green-pepper").hide();
  $(this).removeClass("active");
  $(".price ul li:contains($1 green peppers)").hide();
} else {
  $(".green-pepper").show();
  $(this).addClass("active");
  $(".price ul li:contains($1 green peppers)").show();
}
});

  $(".btn-sauce").click(function() {
  if($(this).hasClass("active")){
    $(".sauce").show();
    $(this).removeClass("active");
    $(".price ul li:contains($3 white sauce)").hide();
  } else {
    $(".sauce").hide();
    $(this).addClass("active");
    $(".price ul li:contains($3 white sauce)").show();
  }
  });

  $(".btn-crust").click(function() {
  if($(this).hasClass("active")){
    $(".crust").show();
    $(this).removeClass("active");
    $(".price ul li:contains($5 gluten-free crust)").hide();
  } else {
    $(".crust").hide();
    $(this).addClass("active");
    $(".price ul li:contains($5 gluten-free crust)").show();
  }
  });
