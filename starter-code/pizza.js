// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
  
    // $(".green-pepper").hide();
    // $(".mushroom").hide();
    // $(".pep").hide();
  
    $(".btn-green-peppers").click(function(){
      $(".green-pepper").toggle()
      $(".btn-green-peppers").toggleClass("active");
      $("aside > ul > li:eq(2)").toggle();
      precioTotal(); 
    })
  
    $(".btn-mushrooms").click(function(){
      $(".mushroom").toggle()
      $(".btn-mushrooms").toggleClass("active");
      $("aside > ul > li:eq(1)").toggle();
      precioTotal()
    })
  
    $(".btn-pepperonni").click(function(){
      $(".pep").toggle()
      $(".btn-pepperonni").toggleClass("active");
      $("aside > ul > li:eq(0)").toggle();
      precioTotal()
    })
  
 
    $(".btn-sauce").click(function(){
      $(".btn-sauce").toggleClass("active")
      $(".sauce").toggle()
      $("aside > ul > li:eq(3)").toggle();
      precioTotal()

    })
  
    $(".btn-crust").click(function(){
      $(".btn-crust").toggleClass("active")
      $(".cheese").toggle()
      $("aside > ul > li:eq(4)").toggle();
      precioTotal()
    })

    function precioTotal(){
      var precio= 10;
    
      if ($('.btn-pepperonni').hasClass('active')) {
        precio += 1;
      }
      if ($('.btn-mushrooms').hasClass('active')) {
        precio += 1;
      }
      if ($('.btn-green-peppers').hasClass('active')) {
        precio += 1;
      }
      if ($('.btn-sauce').hasClass('active')) {
        precio += 3;
      }
      if ($('.btn-crust').hasClass('active')) {
        precio += 5;
      }
    
      $('aside>strong').text("$"+precio);
    }
    
     $(".btn-green-peppers").toggleClass("active");
     $(".green-pepper").toggle()
     $(".btn-mushrooms").removeClass("active");
     $(".mushroom").toggle()
     $(".btn-pepperonni").removeClass("active");
     $(".pep").toggle()
  
     $('aside>strong').text("$"+18);
       
    $("aside > ul > li:lt(3)").hide();
  
  }); 