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

});
