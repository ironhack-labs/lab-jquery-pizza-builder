// Write your Pizza Builder JavaScript in this file.
var pizza = {
    pepperonni: 0,
    mushrooms: 0,
    greenPeppers: 0,
    whiteSauce: 0,
    glutenFreeCrust: 0,
};
$(document).ready(function(){
    $('.pep').hide();
    $('.mushroom').hide();
    $('.green-pepper').hide();
    $('.crust').removeClass('.crust-gluten-free')
    $('.controls ul li .btn').removeClass('active');
    $('.price ul li, strong').text('');
    
    $('.controls ul li .btn').click(function() {
        $(this).addClass('active')
        if($(this).hasClass('btn-pepperonni')) {
            if (pizza.pepperonni < 33) {
                pizza.pepperonni++;
                $('.pep:hidden').first().toggle();
            }
        } 
        if($(this).hasClass('btn-mushrooms')) {
            if (pizza.mushrooms < 32) {
                pizza.mushrooms++;
                $('.mushroom:hidden').first().toggle();
            }
        }
        if($(this).hasClass('btn-green-peppers')) { 
            if (pizza.greenPeppers < 21) {
                pizza.greenPeppers++;
                $('.green-pepper:hidden').first().toggle();
            }       
        }    
        if($(this).hasClass('btn-sauce')) { 
            if (pizza.whiteSauce < 1) {
                pizza.whiteSauce++;
            }           
        }    
        if($(this).hasClass('btn-crust')) { 
            if (pizza.glutenFreeCrust < 1) {
                pizza.glutenFreeCrust++;
                $('.crust').addClass('crust-gluten-free')
            }               
        }
        generatePizza(pizza);
    });
});

function generatePizza(pizza) {
    if(pizza.pepperonni > 0) {
        $('.price ul li:nth-child(1)').text('$' + pizza.pepperonni + " pepperonni")
    } 
    if(pizza.mushrooms > 0) {
        $('.price ul li:nth-child(2)').text('$' + pizza.mushrooms + " mushrooms")
    }  
    if(pizza.greenPeppers > 0) {
        $('.price ul li:nth-child(3)').text('$' + pizza.greenPeppers + " green-peppers")
    }
    if(pizza.whiteSauce > 0) {
        $('.price ul li:nth-child(4)').text('$' + pizza.whiteSauce*3 + " white-sauce")
    }
    if(pizza.glutenFreeCrust > 0) {
        $('.price ul li:nth-child(5)').text('$' + pizza.glutenFreeCrust*5 + " gluten-free crust")
    }
    $('.price strong').text('$' + `${
        pizza.pepperonni + pizza.mushrooms + pizza.greenPeppers + pizza.whiteSauce * 3 + pizza.glutenFreeCrust * 5
    }`)  
}