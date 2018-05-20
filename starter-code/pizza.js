// Write your Pizza Builder JavaScript in this file.
$('document').ready(function(){

    // Vars    
    var $btnTopping = $('.btn');
    var $pepperonni = $('.pep');
    var $mushrooms = $('.mushroom');
    var $greenPepper = $('.green-pepper');
    var $sauceWhite = $('.sauce-white');
    var $glutenFree = $('.crust-gluten-free');
    //List vars: 
    var $listPep = $('aside li:first');
    var $listMushroom = $('aside li:nth-child(2)');
    var $listGreen = $('aside li:nth-child(3)');
    var $listWhiteSauce = $('aside li:nth-child(4)');
    var $listGluten = $('aside li:last');

    var $totalPrice = $('.panel > strong');
    var $dollar = $totalPrice.text()[0]; 
    
    // Reset default pizza 
    $btnTopping.removeClass('active');

    //Default pizza crust and sauce
    $('#pizza .crust').removeClass('crust-gluten-free');
    $('.sauce').removeClass('sauce-white');
    
    // Hidding list items
    $listWhiteSauce.hide();
    $listGluten.hide(); 
    
    getTotalPrice($listPep); /* This is to reset default price*/
    
    //Button events
    $('.btn-pepperonni').click(function() {
        toggleTopping($pepperonni);
        toggleActive(this);
        ingredientsListing($listPep);
        getTotalPrice($listPep);
    });

    $('.btn-mushrooms').click(function() { 
        toggleTopping($mushrooms);
        toggleActive(this);
        ingredientsListing($listMushroom);
        getTotalPrice($mushrooms);
    });

    $('.btn-green-peppers').click(function() { 
        toggleTopping($greenPepper);
        toggleActive(this);
        ingredientsListing($listGreen);
        getTotalPrice($listGreen);
    });

    $('.btn-sauce').click(function() { 
        toggleTopping($sauceWhite)
        toggleActive(this);
        ingredientsListing($listWhiteSauce);
        getTotalPrice($listWhiteSauce);
    });

    $('.btn-crust').click(function() { 
        toggleTopping($glutenFree)
        toggleActive(this);
        ingredientsListing($listGluten);
        getTotalPrice($listGluten);
    });
    
    // Functions
    function toggleTopping(ingredient) {
        ingredient.hasClass('crust') ? ingredient.toggleClass('crust-gluten-free') 
        : ingredient.hasClass('sauce') ? ingredient.toggleClass('sauce-white')
        : $(ingredient).toggle();
    }
    
    function toggleActive(btn) {
        $(btn).toggleClass('active');
    }
    
    function ingredientsListing(ingredient){
        $(ingredient).toggle();
    }
    
    function getPriceByItem(ingredient){
        var ingredientPrice = parseInt($(ingredient).text()[1]);
        
        return ingredientPrice;
    }
    
    function getTotalPrice(ingredient){
        
        var $list = $('.panel.price ul')[0].children; 

        var currentPrice = 0;
    
        for(var i = 0; i < $list.length; i++){
            var listElement = $list[i];
            
            if($(listElement).is(":visible")){
                currentPrice += getPriceByItem(listElement);
            }
        }
        
        currentPrice += 10;
        return $totalPrice.text($dollar + currentPrice)
    }

});
    
    