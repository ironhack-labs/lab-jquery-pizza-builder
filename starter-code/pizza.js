// Write your Pizza Builder JavaScript in this file.

$(document).ready(function(){
  $("aside ul li:contains('gluten-free crust')").hide();
  $("aside ul li:contains('white sauce')").hide();
  //
  let value = 13;
   $('#total').text('R$ '+value);
  //por default
  //abaixo vai o evento do click
    $(".btn-pepperonni").click(function(event){ 
      $(".pep").fadeToggle();
      $("aside ul li:contains('pepperonni')").fadeToggle();
      //condição para pepperonni
      if ($(".btn-pepperonni").hasClass("active")) {
          value -= 1;
      }
      else  {
         value += 1;
      } 
      $('#total').text('R$ '+value);
      //
    }); 
    $(".btn-mushrooms").click(function(event){ 
        $(".mushroom").fadeToggle();
        $("aside ul li:contains('mushroom')").fadeToggle();
     //condição para mushrooms
      if ($(".btn-mushrooms").hasClass("active")) {
        value -= 1;
      }
      else  {
         value += 1;
      } 
      $('#total').text('R$ '+value);
    //
    
    }); 
    $(".btn-green-peppers").click(function(event){ 
      $(".green-pepper").fadeToggle();
      $("aside ul li:contains('green peppers')").fadeToggle();
     //condição para green-pepper
     if ($(".btn-green-pepper").hasClass("active")) {
      value -= 1;
    }
    else  {
       value += 1;
    } 
    $('#total').text('R$ '+value);
    //
    });

    $(".btn-crust").click(function(event){ 
      $(".crust").toggleClass("crust-gluten-free");
      $("aside ul li:contains('gluten-free crust')").fadeToggle();
     //condição para crust-gluten-free
     if ($(".btn-crust").hasClass("active")) {
      value += 5;
     }
     else  {
        value -= 5;
     } 
     $('#total').text('R$ '+value);
     //
     });
     

      $(".btn-sauce").click(function(event){ 
      $(".sauce").toggleClass("sauce-white");
      $("aside ul li:contains('white sauce')").fadeToggle();

     //condição para white sauce
     if ($(".btn-sauce").hasClass("active")) {
      value += 3;
     }
     else  {
        value -= 3;
     } 
     $('#total').text('R$ '+value);
    //
    });

    //active para todos os buttons
    $('ul li button').click(function(){
      $(this).toggleClass("active");
    });
});


