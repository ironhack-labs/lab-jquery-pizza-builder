// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
  
  // iteration 4 prices - 1 mise à 0 par défaut de la sauce et crust
  $("aside ul li:nth-child(4)").hide() ;
  $("aside ul li:nth-child(5)").hide() ; 

  // iteration xx set Sauce and Crust to regular value by default
  $(".btn-sauce").toggleClass("active")
  $(".sauce").toggleClass("sauce-white"); 
  $(".btn-crust").toggleClass("active")
  $(".crust").toggleClass("crust-gluten-free");

  var totalPrice = 13;
  var displayPrice = $("#Total").text("$"+ totalPrice);
  console.log(displayPrice);
  //displayPrice.innerHTML = totalPrice;
 

  // iteration 1 - remove-reinnsert pepperoni-mushrooms-green peppers
  $(".btn-pepperonni").click(function() {
    $(".btn-pepperonni").toggleClass("active");
    $(".pep").toggle();
    if ( $(".btn-pepperonni").hasClass("active") ) {
         $("aside ul li:nth-child(1)").show() ;
         totalPrice+= 1;
         
         //mettre à jour le prix de la pizza en fonction de total price
    } else {
        $("aside ul li:nth-child(1)").hide() ;
        totalPrice-= 1;
        
    }
  });

  $(".btn-mushrooms").click(function() {
    $(".btn-mushrooms").toggleClass("active");
    $(".mushroom").toggle();
    if ( $(".btn-mushrooms").hasClass("active") ) {
      $("aside ul li:nth-child(2)").show() ;
      totalPrice+= 1;
     
 } else {
     $("aside ul li:nth-child(2)").hide() ;
     totalPrice-= 1;
     
 }
  })

  $(".btn-green-peppers").click(function () {
    $(".btn-green-peppers").toggleClass("active");
    $(".green-pepper").toggle();
    if ( $(".btn-green-peppers").hasClass("active") ) {
      $("aside ul li:nth-child(3)").show() ;
      totalPrice+= 1;
      
 } else {
     $("aside ul li:nth-child(3)").hide() ;
     totalPrice-= 1;     
 }
    });

    //sauce and crust (switch proposal between the 2 sauces and crusts)
  $(".btn-sauce").click(function() {
    $(".btn-sauce").toggleClass("active");
    $(".sauce").toggleClass("sauce-white"); 
         if ( $(".btn-sauce").hasClass("active") ) {
         $("aside ul li:nth-child(4)").show() ; 
         totalPrice+= 3;
      console.log(totalPrice);
     } else {
      $("aside ul li:nth-child(4)").hide() ; 
      totalPrice-= 3;
      console.log(totalPrice);
     }              
     /*
     if ( $(".btn-sauce").text() === "White sauce" ) {
        $("aside ul li:nth-child(4)").show() ;    
        $(".btn-sauce").text("Regular sauce");
        
          $(".sauce").toggleClass("sauce-white");        
     } else {
          $(".btn-sauce").text("White sauce");
          $(".sauce").toggleClass("sauce-white");
          $("aside ul li:nth-child(4)").hide() ;
     }; */ 
    });
  
  $(".btn-crust").click(function() {
    $(".btn-crust").toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
    if ( $(".btn-crust").hasClass("active") ) {
      $("aside ul li:nth-child(5)").show() ; 
      totalPrice+= 5;
      console.log(totalPrice); 
    } else {
     $("aside ul li:nth-child(5)").hide() ;  
     totalPrice+= -5;
     console.log(totalPrice); 
    }    
   /* if ( $(".btn-crust").text() === "Gluten-free crust" ) {
         $(".btn-crust").text("Regular crust");  
         $(".crust").toggleClass("crust-gluten-free");
         $("aside ul li:nth-child(5)").show() ;
    } else {
      $(".btn-crust").text("Gluten-free crust");
      $(".crust").toggleClass("crust-gluten-free");
      $("aside ul li:nth-child(5)").hide() ;
    }*/
  });
    



   
   

//alert("Hello");

// fermeture du jQuery
});