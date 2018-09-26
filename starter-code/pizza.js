// Write your Pizza Builder JavaScript in this file.

 var pepPrice=1;
 var mushPrice=1;
 var grPepPrice=1;
 var sauce=0;
 var glutFree=0;
 var pizza=10;
 var totalPrice=(pepPrice+mushPrice+grPepPrice+sauce+glutFree+pizza);

  $(document).ready(function(){
    $(".btn-pepperonni").click(function(){
      $(".pep").toggle();
      $(".pep-price").toggle();
      
      $(this).toggleClass("active");
      console.log(totalPrice);
      
    });

    $(".btn-mushrooms").click(function(){
      $(".mushroom").toggle();
      $(".mush-price").toggle();
      mushPrice=0;
      $(this).toggleClass("active");
      console.log(totalPrice);
    });

    $(".btn-green-peppers").click(function(){
      $(".green-pepper").toggle();
      $(".gr-pep-price").toggle();
      grPepPrice=0;
      $(this).toggleClass("active");
      console.log(totalPrice);
    });

  

    $(".btn-sauce").toggleClass("active");
    $(".sauce").toggle();
    $(".sauce-price").toggle();
    $(".btn-sauce").click(function(){
      $(".sauce").toggle();
      $(".sauce-price").toggle();
      sauce=3;
      $(this).toggleClass("active");
      console.log(totalPrice);
    });
     
    $(".btn-crust").toggleClass("active");
    $(".gf-price").toggle();
    $(".btn-crust").click(function(){
      $(this).toggleClass("active");
      $(".gf-price").toggle();
      glutFree=5;
      console.log(totalPrice);
    });

    

    $("aside strong").replaceWith("<strong>"+"$"+totalPrice+"</strong>");
  });