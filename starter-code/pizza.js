// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
    
    $('.crust').toggleClass("crust-gluten-free");

    $('.sauce').toggleClass("sauce-white");

    $('.btn').toggleClass('active');

    $('.btn-green-peppers').toggleClass('active');

    $('.btn-mushrooms').toggleClass('active')

    $('.btn-pepperonni').toggleClass('active');

    //variables y funciones para añadir y quitar los pepperonis de la lista de precios

    let priceChildren = $(".price").children();
    let priceChildrenList = $(priceChildren)[2];
    let priceChildrenListLines = $(priceChildrenList).children();
    let priceChildrenListLinesPepperoni = $(priceChildrenListLines)[0];

    

    //variables and functions to delete/add the mushrooms from the price list

    let priceChildren2 = $(".price").children();
    let priceChildrenList2 = $(priceChildren2)[2];
    let priceChildrenListLines2 = $(priceChildrenList2).children();
    let priceChildrenListLinesMushrooms = $(priceChildrenListLines2)[1];

    


    //variables and functions to delete/add the peppers from the price list

    let priceChildren3 = $(".price").children();
    let priceChildrenList3 = $(priceChildren3)[2];
    let priceChildrenListLines3 = $(priceChildrenList3).children();
    let priceChildrenListLinesPeppers = $(priceChildrenListLines3)[2];

    


    //variables and functions to delete/add the white sauce from the price list

    let priceChildren4 = $(".price").children();
    let priceChildrenList4 = $(priceChildren4)[2];
    let priceChildrenListLines4 = $(priceChildrenList4).children();
    let priceChildrenListLinesWhiteSauce = $(priceChildrenListLines4)[3];

    $(priceChildrenListLinesWhiteSauce).toggle();



     //variables and functions to delete/add the non-gluten crust from the price list

     let priceChildren5 = $(".price").children();
     let priceChildrenList5 = $(priceChildren5)[2];
     let priceChildrenListLines5 = $(priceChildrenList5).children();
     let priceChildrenListLinesNonGlutenCrust = $(priceChildrenListLines5)[4];
 
     $(priceChildrenListLinesNonGlutenCrust).toggle();


     //variables to modify the final price
    
     let priceChildren6 = $(".price").children();
     let totalPriceOnTheList = $(priceChildren6)[3];


     //FALTA DIVIDIR EL 23 DEL $
     $(totalPriceOnTheList).text('23$');

     let x = $(totalPriceOnTheList).text();


     
     

     $(totalPriceOnTheList).text(Number(x) + 2);
     
      
    

    // $(defaultTotalPrice).html(Number(defaultTotalPrice) + 3);

    // saucePrice;
     

     
     
     


     

    let pepperonniButton = $("#pepButton");
    
    $(pepperonniButton).click(function(){

        $('#allPepperonis').toggle();
        $('.btn-pepperonni').toggleClass('active');

        $(priceChildrenListLinesPepperoni).toggle();
    });
    


    let mushroomButton = $("#mushroomsButton");
    
    $(mushroomButton).click(function(){
        $('#allMushrooms').toggle();
        $('.btn-mushrooms').toggleClass('active')

        $(priceChildrenListLinesMushrooms).toggle();
    });

    let pepperButton = $("#peppersButton");
    
    $(pepperButton).click(function(){
        $("#allPeppers").toggle();
        $('.btn-green-peppers').toggleClass('active');

        $(priceChildrenListLinesPeppers).toggle();
    });



    let crustButton = $('#crustButton');

    $(crustButton).click(function(){
        $('.crust').toggleClass("crust-gluten-free");
        $('.btn-crust').toggleClass('active')

        $(priceChildrenListLinesNonGlutenCrust).toggle();
    })


    let sauceButton = $('#sauceButton');

    $(sauceButton).click(function(){
        $('.sauce').toggleClass("sauce-white");
        $('.btn-sauce').toggleClass('active');

        $(priceChildrenListLinesWhiteSauce).toggle();


    })


    
     
    


    












  });
