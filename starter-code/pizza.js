// Write your Pizza Builder JavaScript in this file.
$("document").ready(function(){
  $(".btn-pepperonni.active").click(function(){
    $(".btn-pepperonni").toggleClass("active");
    if ($(".pep").css("display") == "block"){
      $(".pep").css("display", "none");
      $(".price li:nth-child(1)").css("display","none");
    }else {
      $(".pep").css("display","block");
      $(".price li:nth-child(1)").css("display","list-item");
    }
  });
  $(".btn-mushrooms.active").click(function(){
    $(".btn-mushrooms").toggleClass("active");
    if ($(".mushroom").css("display") == "block"){
      $(".mushroom").css("display", "none");
      $(".price li:nth-child(2)").css("display","none");
    }else {
      $(".mushroom").css("display","block");
      $(".price li:nth-child(2)").css("display","list-item");
    }
  });
  $(".btn-green-peppers.active").click(function(){
    $(".btn-green-peppers").toggleClass("active");
    if ($(".green-pepper").css("display") == "block"){
      $(".green-pepper").css("display", "none");
      $(".price li:nth-child(3)").css("display","none");
    }else {
      $(".green-pepper").css("display","block");
      $(".price li:nth-child(3)").css("display","list-item");
    }
  });
  //interacción2 y interacción3
  $(".btn-sauce").toggleClass("active");
  $(".price li:nth-child(4)").css("display","none");
  $(".sauce").toggleClass("sauce-white");
  $(".btn-crust").toggleClass("active");
  $(".crust").toggleClass("crust-gluten-free");

  $(".btn-sauce").click(function(){
    $(".btn-sauce").toggleClass("active");
    $(".sauce").toggleClass("sauce-white");
    if($("sauce").hasClass("sauce-white")){
      $(".price li:nth-child(4)").css("display","none");
    }else{
      $(".price li:nth-child(4)").css("display","list-item");
    }
  });

  $(".btn-crust").click(function(){
    $(".btn-crust").toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
    if($("btn-crust").hasClass("active")){
      console.log("Has class");

      $(".price li:nth-child(5)").css("display","none");
    }else{
      console.log("Dont has class");
      $(".price li:nth-child(5)").css("display","list-item");
    }
  });
  //interacción4
  $("")
});
