// Write your Pizza Builder JavaScript in this file.

$(document).ready(function(){
  $(".green-pepper, .pep, .mushroom, .sauce").hide();
  $("crust").removeClass("crust-gluten-free");

  var btnPep =$(".btn-pepperonni");
  var btnMus =$(".btn-mushrooms");
  var btnGre =$(".btn-green-peppers");
  var btnSau =$(".btn-sauce");
  var btnCru =$(".btn-crust")
  
  btnPep.click(function(){
    $(".pep").fadeToggle(100)
    btnPep.toggleClass("active");
  });
   
  btnMus.click(function(){
    $(".mushroom").fadeToggle(100)
    btnMus.toggleClass("active");
  });

  btnGre.click(function(){
    $(".green-pepper").fadeToggle(100)
    btnGre.toggleClass("active");
  });
 
  btnSau.click(function(){
    $(".sauce").fadeToggle(100)
    btnSau.toggleClass("active");
  });

  btnCru.click(function(){
    $(".crust").toggleClass("crust-gluten-free");
    btnCru.toggleClass("active");
  })

});
