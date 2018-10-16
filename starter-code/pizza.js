// Write your Pizza Builder JavaScript in this file.

$(document).ready(function(){

  $(".btn-pepperonni").click (function(){
    $(".btn-pepperonni").toggleClass("active");
    $(".pep").toggle()
    $("aside ul li:nth-child(1)").toggle()
    update()
  })
  $(".btn-mushrooms").click (function(){
    $(".btn-mushrooms").toggleClass("active");
    $(".mushroom").toggle()
    $("aside ul li:nth-child(2)").toggle()
    update()
  })
  $(".btn-green-peppers").click (function(){
    $(".btn-green-peppers").toggleClass("active");
    $(".green-pepper").toggle()
    $("aside ul li:nth-child(3)").toggle()
    update()
  })

  $(".sauce").removeClass("sauce-white")
  $(".btn-sauce").removeClass("active")
  $("aside ul li:nth-child(4)").hide()
  $(".crust").removeClass("crust-gluten-free")
  $(".btn-crust").removeClass("active")
  $("aside ul li:nth-child(5)").hide()

  $(".btn-sauce").click (function(){
    $(".btn-sauce").toggleClass("active");
    $(".sauce").toggleClass("sauce-white")
    $("aside ul li:nth-child(4)").toggle()
    update()
  })
  $(".btn-crust").click (function(){
    $(".btn-crust").toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free")
    $("aside ul li:nth-child(5)").toggle()
    update()
  })
  $("aside strong").text("$13")

  function update (){
   var total = 10;
   for(i=1; i<6; i++){
     if($("aside ul li:nth-child(" + i + ")").is(":visible")) {
       var string = $("aside ul li:nth-child(" + i + ")").html()
       var numberstring = string.split("$")
       var number = numberstring[1].split(" ")
      total += Number(number[0])
     }
   }
   $("aside strong").text("$"+total)
  }


})
