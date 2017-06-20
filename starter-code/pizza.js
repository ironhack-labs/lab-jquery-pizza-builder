// Write your Pizza Builder JavaScript in this file
$(document).ready(function(){
    var pizza = $('#pizza');
    var menu = $('.panel.price ul');

    initialize();
    resetButtonsState();
    checkButtonsState();

    /* Button Events */

    //Add peperoni
    $(".btn-pepperonni").on("click", function() {  
        if (hasPeperoni()) {
            $(".btn-pepperonni").removeClass('active');
            $("li:contains('pepperonni')").remove();
            $('.pep').hide();
        } else {
            $(".btn-pepperonni").addClass('active'); 
            menu.append('<li>$1 pepperonni</li>');
            $('.pep').show();
        }
        calculatePrice();
    });

    //Add mushrooms
    $(".btn-mushrooms").on("click", function() {
        if (hasMushrooms()) {
            $(".btn-mushrooms").removeClass('active'); 
            $("li:contains('mushrooms')").remove();
            $('.mushroom').hide();
        } else {
            $(".btn-mushrooms").addClass('active');
             menu.append('<li>$1 mushrooms</li>');
            $('.mushroom').show();
        }
        calculatePrice();
    });

    //Add peppers
    $(".btn-green-peppers").on("click", function() {
        if (hasGreenPeppers()) {
            $(".btn-green-peppers").removeClass('active'); 
             $("li:contains('green peppers')").remove();
            $(".green-pepper").hide();
        } else {
            $(".btn-green-peppers").addClass('active'); 
             menu.append('<li>$1 green peppers</li>');
            $(".green-pepper").show();
        }
        calculatePrice();
    });

    //Add white sauce
    $(".btn-sauce").on("click", function() {
        if (hasWhiteSauce()) {
            $(".btn-sauce").removeClass('active'); 
            removeWhiteSauce();
        } else {
            $(".btn-sauce").addClass('active'); 
            addWhiteSauce();
        }
        calculatePrice()
    });

    //Add gluten-free crust
    $(".btn-crust").on("click", function() {
        if (hasGlutenFreeCrust()) {
            $(".btn-crust").removeClass('active'); 
            removeGlutenFreeCrust();
        } else {
            $(".btn-crust").addClass('active'); 
            addGlutenFreeCrust();
        }  
        calculatePrice()
    });


    /* Check for ingredients */

    function resetButtonsState() {
        $(".btn").removeClass('active');
    }

    function hasPeperoni() {
        if ($(".pep").is(':visible')) {
            return true;
        } 
        return false;
    }

    function hasMushrooms() {
        if ($(".mushroom").is(':visible')) {
            return true;
        }  
        return false;
    }

    function hasGreenPeppers() {
        if ($(".green-pepper").is(':visible')) {
            return true;
        }  
            return false;
    }

    function hasWhiteSauce() {
    if ($(".sauce-white").length > 0){
        return true;
        }
        return false;
    }  

    function hasGlutenFreeCrust () {
    if ($(".crust-gluten-free").length > 0){
        return true;   
        }  
        return false;
    }

    /* Add ingredients */

    function addWhiteSauce () {
        $('.sauce').addClass('sauce-white');
        menu.append('<li>$2 white sauce</li>');
    }

    function addGlutenFreeCrust () {
        $('.crust').addClass('crust-gluten-free');
        menu.append('<li>$5 gluten-free crust</li>');
    }

    /* Remove ingredients */

    function removePeperoni() {
        $('.pep').remove();
        $("li:contains('pepperonni')").remove();
    }

    function removeMushrooms() {
    $('.mushroom').remove();
    $("li:contains('mushrooms')").remove();
    }

    function removePeppers() {
    $('.green-pepper').remove();
    $("li:contains('green')").remove();
    }

    function removeGlutenFreeCrust() {
        $('.crust').removeClass('crust-gluten-free');
        $("li:contains('gluten')").remove();
    }

    function removeWhiteSauce() {
        $('.sauce').removeClass('sauce-white');
        $("li:contains('white')").remove();
    }

    /* Auxiliary functions */

    function initialize() {  
        calculatePrice();
    }

    function checkButtonsState() {
        if ($(".pep").length > 0){

        $(".btn-pepperonni").addClass('active'); 
        }  
        if ($(".mushroom").length > 0){
        $(".btn-mushrooms").addClass('active'); 
        }  
        if ($(".green-pepper").length > 0){
        $(".btn-green-peppers").addClass('active'); 
        }  
        if ($(".sauce-white").length > 0){
        $(".btn-sauce").addClass('active'); 
        }  
        if ($(".crust-gluten-free").length > 0){
        $(".btn-crust").addClass('active'); 
        }  
    }

    function calculatePrice() {
        var sum = 0;
        menu.children().each(function(index, element) {
           if ($(element).text().includes('1')) {
             sum+=1;  
           }
           if ($(element).text().includes('2')) {
             sum+=2;  
           }
           if ($(element).text().includes('5')) {
             sum+=5;  
           }
        });
        sum+= 10;
        $('.panel.price strong').text('$' + sum);
    }
});