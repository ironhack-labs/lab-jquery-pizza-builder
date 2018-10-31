
// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
    // $('.crust').toggleClass('crust-gluten-free');
    // $('.sauce').toggle();
    // $('.pep').toggle();
    // $('.mushroom').toggle();
    // $('.green-pepper').toggle();
    
    // $('.btn').toggleClass('active');
    
    $('.btn-sauce, .btn-crust').removeClass('active');
    $('.sauce').removeClass('sauce-white');
    $('.crust').removeClass('crust-gluten-free')
    
    $('.price li:nth-child(4)').hide();
    $('.price li:nth-child(5)').hide();
    
    
    let theActualPrice = 13;
    updatePrice();
    
    function updatePrice(){
        $('strong').text('$'+theActualPrice)
    }


    //shorter way to activate all of them. 
    // $('.btn').click(function(){
    //     $(this).toggleClass('active')
    // })

    function addOrSubtractFromPrice(cost, thingToEdit){
        if(thingToEdit.hasclass('active')){
            theActualPrice += cost;
        } else {
            theActualPrice -= cost;
        }
        updatePrice();
    }

    function updatePrice(){
        $('strong').text('$'+ theActualPrice)
    }


    
//pepperonni
    
    $('.btn-pepperonni').click(function(){
        $('.pep').toggle();
        $('.price li:nth-child(1)').toggle();
        addOrSubtractFromPrice(1, $(this));

    });

    $('.btn-pepperonni').click(function(){
        $('.btn-pepperonni').toggleClass('active');
    })


//mushrooms

    $('.btn-mushrooms').click(function(){
        $('.mushroom').toggle();
        $('.price li:nth-child(2)').toggle();
    });
    
    $('.btn-mushrooms').click(function(){
        $('.btn-mushrooms').toggleClass('active');
    });



//green-peppers

    $('.btn-green-peppers').click(function(){
        $('.green-pepper').toggle();
        $('.price li:nth-child(3)').toggle();
    });

    $('.btn-green-peppers').click(function(){
        $('.btn-green-peppers').toggleClass('active');
    });

 
//sauce       

    $('.btn-sauce').click(function(){
        $('.sauce').toggleClass('sauce-white');
        $('.price li:nth-child(4)').toggle();
    });

    $('.btn-sauce').click(function(){
        $('.btn-sauce').toggleClass('active');
    });

//crust

    $('.btn-crust').click(function(){
        $('.crust').toggleClass('crust-gluten-free');
        $('.price li:nth-child(5)').toggle(50);
    })
    
});