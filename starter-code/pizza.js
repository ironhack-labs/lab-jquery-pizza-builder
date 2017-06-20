// Write your Pizza Builder JavaScript in this file.
$("document").ready(function(){
  $(".btn-pepperonni.active").click(function(){
    $(".btn-pepperonni").toggleClass("active");
    if ($(".pep").css("display") == "block"){
      $(".pep").css("display", "none");
    }else {
      $(".pep").css("display","block");
    }
  });
  $(".btn-mushrooms.active").click(function(){
    $(".btn-mushrooms").toggleClass("active");
    if ($(".mushroom").css("display") == "block"){
      $(".mushroom").css("display", "none");
    }else {
      $(".mushroom").css("display","block");
    }
  });
  $(".btn-green-peppers.active").click(function(){
    $(".btn-green-peppers").toggleClass("active");
    if ($(".green-pepper").css("display") == "block"){
      $(".green-pepper").css("display", "none");
    }else {
      $(".green-pepper").css("display","block");
    }
  });
  //interacción2
  $(".btn-sauce").toggleClass("active");
  $(".btn-crust").toggleClass("active");
  $(".btn-sauce").click(function(){
    $(".btn-sauce").toggleClass("active");
    $(".sauce").toggleClass("sauce-white");
  });
  $(".btn-crust").click(function(){
    $(".btn-crust").toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
  });
});
