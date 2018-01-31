// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
    
    //making regular crust and regular sauce by default
    var crust = $('section.crust');
    var sauce = $('section.sauce');
    crust.removeClass('crust-gluten-free');
    sauce.removeClass('sauce-white');
    $('button.btn.btn-sauce').removeClass('active');
    $('button.btn.btn-crust').removeClass('active');
    $("li:contains(gluten-free crust)").toggle();
    $("li:contains(white sauce)").toggle();

    //adding or removing toppings
    $('button').click(function(e){
        //pepperoni button
        if($(this).hasClass('btn-pepperonni')){
            $('.pep').toggle();
            $("li:contains(pepperonni)").toggle();
            if($('.pep').css('display') === 'none')
                $(this).removeClass('active');
            else    
                $(this).addClass('active');
        } 
        //mushroom button
        else if($(this).hasClass('btn-mushrooms')){
            $('.mushroom').toggle();
            $("li:contains(mushrooms)").toggle();
            if($('.mushroom').css('display') === 'none')
                $(this).removeClass('active');
            else    
                $(this).addClass('active');

        } 
        //green pepper button
        else if($(this).hasClass('btn-green-peppers')){
            $('.green-pepper').toggle();
            $("li:contains(green peppers)").toggle();
            if($('.green-pepper').css('display') === 'none')
                $(this).removeClass('active');
            else    
                $(this).addClass('active');

        } 
        //white sauce button
        else if($(this).hasClass('btn-sauce')){
            sauce.addClass('sauce-white');
            $('.sauce-white').toggle();
            $("li:contains(white sauce)").toggle();
            if($('.sauce-white').css('display') === 'none')
                $(this).removeClass('active');
            else    
                $(this).addClass('active');
            
        } else if($(this).hasClass('btn-crust')){
            crust.addClass('crust-gluten-free');
            $(this).addClass('active');
            $("li:contains(gluten-free crust)").toggle();
        }

        updateTotalPrice();
    });

    function updateTotalPrice(){
        var price = $('price').find("li");
        console.log(price);
    }


  });