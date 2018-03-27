 // Write your Pizza Builder JavaScript in this file.
 $(document).ready(function(){
 
  var pimiento = $(".green-pepper");
  var chorizo = $(".pep");
  var champi = $(".mushroom");
  var salsaBlanca = $(".sauce-white");
  var sinGluten = $(".crust-gluten-free");
  var textPepperoni = $(".panel.price ul li:first-child");
  var textMushrooms = $(".panel.price ul li:nth-child(2)");
  var textGreenPeppers = $(".panel.price ul li:nth-child(3)");
  var textWhiteSauce = $(".panel.price ul li:nth-child(4)");
  var textGlutenFree = $(".panel.price ul li:last-child");
  var precioTotal = 10;
  var precioMostrado = $(".panel.price strong");
  
  pimiento.css('display','none');
  chorizo.css('display','none');
  champi.css('display','none');
  salsaBlanca.removeClass('sauce-white');
  sinGluten.removeClass("crust-gluten-free");
  textWhiteSauce.hide();
  textGlutenFree.hide();
  textPepperoni.hide();
  textMushrooms.hide();
  textGreenPeppers.hide();
 
  
  precioMostrado.html("$" + precioTotal);
  $(".btn").removeClass("active");
  $(".btn-green-peppers").on("click", function () {
      $(".btn-green-peppers").toggleClass("active");
             
      pimiento.fadeToggle(500);
      if ($(".btn-green-peppers").hasClass("active")){
        textGreenPeppers.show();
        precioTotal++;
        console.log(precioTotal);
      }
      else {
        textGreenPeppers.hide();
        precioTotal--;
      }
      precioMostrado.html("$" + precioTotal);
      
  })  
  $(".btn-pepperonni").on("click", function () {
    $(".btn-pepperonni").toggleClass("active");
           
    chorizo.fadeToggle(500);
    if ($(".btn-pepperonni").hasClass("active")){
      textPepperoni.show();
      precioTotal++;
    }
    else {
      textPepperoni.hide();
      precioTotal--;
    }
    precioMostrado.html("$" + precioTotal);
    
  })

  $(".btn-mushrooms").on("click", function () {
    $(".btn-mushrooms").toggleClass("active");
           
    champi.fadeToggle(500);
    if ($(".btn-mushrooms").hasClass("active")){
      textMushrooms.show();
      precioTotal++;
    }
    else {
      textMushrooms.hide();
      precioTotal--;
    }
    precioMostrado.html("$" + precioTotal);
    
  })
  
  $(".btn-sauce").on("click", function () {
    $(".btn-sauce").toggleClass("active");
           
    salsaBlanca.toggleClass('sauce-white');
    if ($(".btn-sauce").hasClass("active")){
      textWhiteSauce.show();
      precioTotal +=3;
    }
    else {
      textWhiteSauce.hide();
      precioTotal -=3;
    }
    precioMostrado.html("$" + precioTotal);
    
  })

  $(".btn-crust").on("click", function () {
    $(".btn-crust").toggleClass("active");
           
    sinGluten.toggleClass("crust-gluten-free");
    if ($(".btn-crust").hasClass("active")){
      textGlutenFree.show();
      precioTotal +=5;
    }
    else {
      textGlutenFree.hide();
      precioTotal -=5;
    }
    precioMostrado.html("$" + precioTotal);
    
  })

  
})
