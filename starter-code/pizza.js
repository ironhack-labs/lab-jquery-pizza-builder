$(document).ready(function() {
    $(".pep, .green-pepper, .mushroom").hide();
    $(".sauce").removeClass("sauce-white");
    $(".crust").removeClass("crust-gluten-free");
    $(".controls button").removeClass("active");
   
    $(".btn-pepperonni").click(function(){
        $(this).toggleClass('active');
        $('.pep').fadeToggle();
    })
   
    $(".btn-green-peppers").click(function(){
      $(this).toggleClass('active');
      $(".green-pepper").fadeToggle();
        
    })
    $(".btn-mushrooms").click(function(){
      $(this).toggleClass('active');
      $(".mushroom").fadeToggle();
    })
    $(".btn-sauce").click(function(){
      $(this).toggleClass('active');
      $(".sauce").toggleClass("sauce-white");
      
    })
    $(".btn-crust").click(function(){
      $(this).toggleClass('active');
      $(".crust").toggleClass("crust-gluten-free");
      
    })
   
   })