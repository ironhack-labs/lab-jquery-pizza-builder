// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
    
    $('.crust').toggleClass("crust-gluten-free");

    $('.sauce').toggleClass("sauce-white");

    $('.btn').toggleClass('active');

    $("#allPeppers").toggle();

    $('#allMushrooms').toggle();

    $('#allPepperonis').toggle();

    $('#pepperoniList').toggle();

    $('#mushroomsList').toggle();
    
    $('#peppersList').toggle();

    $('#sauceList').toggle();

    $('#glutenList').toggle();

    $('#totalList').toggle();

    let pepperonniButton = $("#pepButton");
    
    $(pepperonniButton).click(function(){
        $('#allPepperonis').toggle();
        $('.btn-pepperonni').toggleClass('active');
     });
    
    let mushroomButton = $("#mushroomsButton");
    
    $(mushroomButton).click(function(){
        $('#allMushrooms').toggle();
        $('.btn-mushrooms').toggleClass('active')
     });

     let pepperButton = $("#peppersButton");
    
    $(pepperButton).click(function(){
        $("#allPeppers").toggle();
        $('.btn-green-peppers').toggleClass('active')
     });


     let crustButton = $('#crustButton');

     let setDefaultCrust = function(){

     }


     $(crustButton).click(function(){
        $('.crust').toggleClass("crust-gluten-free");
        $('.btn-crust').toggleClass('active')
     })


     let sauceButton = $('#sauceButton');

     $(sauceButton).click(function(){
        $('.sauce').toggleClass("sauce-white");
        $('.btn-sauce').toggleClass('active')
     })


    
     
    


    












  });
