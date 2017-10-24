// Write your Pizza Builder JavaScript in this file.

 //Iteration 1: Add and Remove Toppings

 $(document).ready(function(){
   //Ingredients
   var greenPepper = $('.green-pepper');


   //buttons
   var btnGreenPepers = $('.btn-green-peppers');



   btnGreenPepers.click(function(){
     if ( greenPepper ) {
       greenPepper.appendTo( "body" );
      greenPepper = null;
    } else {
      greenPepper.detach();
    }
   });





 });
