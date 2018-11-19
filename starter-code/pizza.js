// Write your Pizza Builder JavaScript in this file.

//Iteration 1: Add and remove toppings
$(document).ready(function() {
    $(".btn-pepperonni").click(function(){
        //Create the code to display those elements when the buttons are clicked.
        $(".pep").toggle();
        //Write some JavaScript that will remove and add the buttons' active class appropriately.
        $(this).toggleClass("active");
        
        
    });
     $(".btn-mushrooms").click(function(){
        $(".mushroom").toggle();
        $(this).toggleClass("active");
          
        });
     $(".btn-green-peppers").click(function(){
        $(".green-pepper").toggle();
        $(this).toggleClass("active");
          
        });
    //Iteration 2: Sauce and crust options
     $(".btn-sauce").click(function(){
        $(".sauce").toggle();
        $(this).toggleClass("active");
      
    });
     $(".btn-crust").click(function(){
        $(".cheese").toggle();
        $(this).toggleClass("active");
       
    });
 });

//Iteration 4: Ingredients and prices

//Iteration 5: Update price
