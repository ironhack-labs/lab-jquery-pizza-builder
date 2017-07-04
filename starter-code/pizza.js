// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

  $(".btn-green-peppers").click(function(event){
    if ($("#pizza .green-pepper").css("opacity") === "0"){
      $("#pizza .green-pepper").css("opacity", "1");
      $(this).toggleClass("active");
      $(".price ul li:nth-child(3)").toggle();
    }
    else{
      $("#pizza .green-pepper").css("opacity", "0");
      $(this).toggleClass("active");
      $(".price ul li:nth-child(3)").toggle();
    }
  });

  $(".btn-mushrooms").click(function(event){
    if ($("#pizza .mushroom").css("opacity") === "0"){
      $("#pizza .mushroom").css("opacity", "1");
      $(this).toggleClass("active");
      $(".price ul li:nth-child(2)").toggle();
    }
    else{
      $("#pizza .mushroom").css("opacity", "0");
      $(this).toggleClass("active");
      $(".price ul li:nth-child(2)").toggle();
    }

  });

  $(".btn-pepperonni").click(function(event){
    if($("#pizza .pep").css("opacity") === "0"){
      $("#pizza .pep").css("opacity", "1");
      $(this).toggleClass("active");
      $(".price ul li:nth-child(1)").toggle();
    }
    else{
      $("#pizza .pep").css("opacity", "0");
      $(this).toggleClass("active");
      $(".price ul li:nth-child(1)").toggle();
    }
  });

  $(".btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free");
    $(this).toggleClass("active");
    $(".price ul li:nth-child(5)").toggle();
  });

  $(".btn-sauce").click(function(){
    $(".crust .sauce").toggleClass("sauce-white");
    $(this).toggleClass("active");
    $(".price ul li:nth-child(4)").toggle();
  });


});
