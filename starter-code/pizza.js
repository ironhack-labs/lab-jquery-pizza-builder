// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
  
  $(".green-pepper").hide();
  $(".mushroom").hide ();
  $(".pep").hide();


  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");

  $(".btn").removeClass("active");

  
  $(".price ul li").hide();

  var sum = 10;
  $("strong").html("Total: $" + sum + ".00");

  $(".btn-pepperonni").click(function(){
    $(this).toggleClass("active");
    $(".pep").fadeToggle();
    var liPep = $(".price ul li:first-child")
    liPep.fadeToggle();

    var stringPepperonni = $(".price ul li:first-child").text();
    var precioPepperonni = parseInt(stringPepperonni.slice(1,2));

    if ($(this).hasClass('active')){
      sum += precioPepperonni;
    }else{
      sum -= precioPepperonni;
    }

    $("strong").html("Total: $" + sum + ".00");

  })

  $(".btn-mushrooms").click(function(){
    $(this).toggleClass("active");
    $(".mushroom").fadeToggle();
    $(".price ul li:nth-child(2)").fadeToggle();

    var stringMushroom = $(".price ul li:nth-child(2)").text();
    var precioMushroom = parseInt(stringMushroom.slice(1,2));

    if ($(this).hasClass('active')){
      sum += precioMushroom;
    }else{
      sum -= precioMushroom;
    }

    $("strong").html("Total: $" + sum + ".00");
        
  })

  $(".btn-green-peppers").click(function(){
    $(this).toggleClass("active");
    $(".green-pepper").fadeToggle();

    $(".price ul li:nth-child(3)").fadeToggle();


    var stringGreenPepper = $(".price ul li:nth-child(3)").text();
    var precioGreenPepper = parseInt(stringGreenPepper.slice(1,2));

    if ($(this).hasClass('active')){
      sum += precioGreenPepper;
    }else{
      sum -= precioGreenPepper;
    }

    $("strong").html("Total: $" + sum + ".00");
    
  })

  $(".btn-sauce").click(function(){
    $(this).toggleClass("active");
    $(".sauce").toggleClass("sauce-white");

    $(".price ul li:nth-child(4)").fadeToggle();


    var stringSauce = $(".price ul li:nth-child(4)").text();
    var precioSauce = parseInt(stringSauce.slice(1,2));

    if ($(this).hasClass('active')){
      sum += precioSauce;
    }else{
      sum -= precioSauce;
    }

    $("strong").html("Total: $" + sum + ".00");
    
  })

  $(".btn-crust").click(function(){
    $(this).toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");

    $(".price ul li:nth-child(5)").fadeToggle();

    var stringCrust = $(".price ul li:nth-child(5)").text();
    var precioCrust= parseInt(stringCrust.slice(1,2));

    if ($(this).hasClass('active')){
      sum += precioCrust;
    }else{
      sum -= precioCrust;
    }

    $("strong").html("Total: $" + sum + ".00");

  })

});

