// Write your Pizza Builder JavaScript in this file.
// /[-]{0,1}[\d]*[\.]{0,1}[\d]+/g; Reg Exp to find jst the number

$(document).ready(() => {
    
    // TODO: Refactor to call the toggle in one line
    // var buttonHandler = function(sectionSelect, priceSelect) {
    //     return function() {
    //         $(sectionSelect).toggleClass('hideNSeek');
    //         sectionSelect === "section.crust"? 
    //         $(sectionSelect).toggleClass('crust-gluten-free'): $(sectionSelect).toggleClass('hideNSeek');
    //         debugger
    //         toggleIngredient(priceSelect);
    //     }
    // }

    // $("#peppBtn").click(buttonHandler('section.pep', "li.pep-price"));

    $('#peppBtn').click(function () {
        $('section.pep').toggleClass('hideNSeek');
        $('li.pep-price').toggleClass('hideNSeek');
        toggleIngredient('li.pep-price');
        
    });

    $('#mushBtn').click(function () {
        $('section.mushroom').toggleClass('hideNSeek');
        $('li.mush-price').toggleClass('hideNSeek');
        
        toggleIngredient('li.mush-price');
    });
    
    $('#greenBtn').click(function () {
        $('section.green-pepper').toggleClass('hideNSeek');
        $('li.green-price').toggleClass('hideNSeek');
        
        toggleIngredient('li.green-price');
    });

    $('#sauceBtn').click(function () {
        
        $('section.sauce').toggleClass('sauce-white');
        $('li.ws-price').toggleClass('hideNSeek');
        
        
        toggleIngredient('li.ws-price');
    });

    $('#gltnBtn').click(function () {
        $('section.crust').toggleClass('crust-gluten-free');
        $('li.gf-price').toggleClass('hideNSeek');
        
        toggleIngredient('li.gf-price');
    });

    toggleGlutenFreeNWhiteSauce();
});

function toggleGlutenFreeNWhiteSauce() {

    $('section.sauce').toggleClass('sauce-white');
    $('li.ws-price').toggleClass('hideNSeek');
    
    toggleIngredient('li.ws-price');

    $('section.crust').toggleClass('crust-gluten-free');
    $('li.gf-price').toggleClass('hideNSeek');
    
    toggleIngredient('li.gf-price');
    
}

function calculatePizzaTotal(pizzaTotal, ingredPrice, operator) {
    
    if (operator) {
        pizzaTotal -= ingredPrice; 
    } else {
        pizzaTotal += ingredPrice;
    }

    return pizzaTotal;
}

function toggleIngredient(classIngred) {
    
    let toggled = $(classIngred).hasClass('hideNSeek');
    let ingredStrPrice = $(classIngred).html();
    let ingredValue = parseFloat(ingredStrPrice.replace(/\D/g, ''));
    let pizzaStrTotal = $('#pizza-total').html();
    let pizzaTotal = parseFloat(pizzaStrTotal);
    pizzaTotal = calculatePizzaTotal(pizzaTotal, ingredValue, toggled);
    $('#pizza-total').html(pizzaTotal);
}