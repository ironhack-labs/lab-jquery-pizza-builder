// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
  $(".btn").removeClass("active");
  $(".green-pepper").hide();
  $(".mushroom").hide();
  $(".pep").hide();
  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");
  $("aside ul li:nth-child(4)").css("display", "none");
  $("aside ul li:nth-child(5)").css("display", "none");
})
var btnPepper = $(".btn-green-peppers");
btnPepper.click(function(){
  $(".green-pepper").toggle();
  btnPepper.toggleClass("active");
  $(".panel:contains($3 green peppers)").toggle()
})

var btnMushroom = $(".btn-mushrooms");
btnMushroom.click(function(){
  $(".mushroom").toggle();
  btnMushroom.toggleClass("active");
})

var btnPep = $(".btn-pepperonni");
btnPep.click(function(){
  $(".pep").toggle();
  btnPep.toggleClass("active");
})

var btnSauce= $(".btn-sauce");
btnSauce.click(function(){
  $(".sauce").toggleClass("sauce-white");
  btnSauce.toggleClass("active");
  if(btnSauce.hasClass("active")){
    $("aside ul li:nth-child(4)").css("display", "");
  }else  $("aside ul li:nth-child(4)").css("display", "none");
})

var btnCrust = $(".btn-crust");
btnCrust.click(function(){
  $(".crust").toggleClass("crust-gluten-free");
  btnCrust.toggleClass("active");
  if( btnCrust.hasClass("active")){
    $("aside ul li:nth-child(5)").css("display", "");
  }else 
  $("aside ul li:nth-child(5)").css("display", "none");
})
