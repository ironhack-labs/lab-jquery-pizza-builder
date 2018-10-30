// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
    
    $('.crust').toggleClass("crust-gluten-free");

    $('.sauce').toggleClass("sauce-white");

    let pepperonniButton = $("#pepButton");
    
    $(pepperonniButton).click(function(){
        $('#allPepperonis').toggle();
     });
    
    let mushroomButton = $("#mushroomsButton");
    
    $(mushroomButton).click(function(){
        $('#allMushrooms').toggle();
     });

     let pepperButton = $("#peppersButton");
    
    $(pepperButton).click(function(){
        $("#allPeppers").toggle();
     });


     let crustButton = $('#crustButton');

     let setDefaultCrust = function(){

     }


     $(crustButton).click(function(){
        $('.crust').toggleClass("crust-gluten-free");
     })


     let sauceButton = $('#sauceButton');

     $(sauceButton).click(function(){
        $('.sauce').toggleClass("sauce-white");
     })

    
     
    


    












  });
