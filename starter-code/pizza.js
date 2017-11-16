$(function(){
  $(".btn-pepperonni").click(function(){
    $(this).toggleClass("active");
if ($(this).hasClass("active")){
  $(".pep").show();
} else {
  $(".pep").hide();
}
  });

$(".btn-mushrooms").click(function(){
    $(this).toggleClass("active");
if ($(this).hasClass("active")){
  $(".mushroom").show();
} else {
  $(".mushroom").hide();
}
  });

$(".btn-green-peppers").click(function(){
      $(this).toggleClass("active");
  if ($(this).hasClass("active")){
    $(".green-pepper").show();
  } else {
    $(".green-pepper").hide();
  }
    });

  $(".btn-sauce").text("Regular Sauce");
  $(".btn-sauce").click(function(){
    if ($(this).text("Regular Sauce")){
      $(".sauce-white").hide();
      $(this).text("White Sauce");
    } else {
      $(".sauce-white").show();
      $(this).text("Regular Sauce");
    }
      });

  $(".btn-crust").text("Regular Crust");
  $(".btn-crust").click(function(){
    if ($(this).text("Regular Crust")){
      $(".crust-gluten-free").hide();
      $(this).text("Gluten Free Crust");
    } else {
      $(".crust-gluten-free").show();
      $(this).text("Regular Crust");
    }
      });

});
