// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
    //Buttons
    $('.btn-pepperonni').click(function(){
        $(this).toggleClass('active');
        $('.pep').toggle('300'); 
        $('.panel.price ul li:first-child').toggle();   
        calculatePrice();        
    });
    $('.btn-mushrooms').click(function(){
        $(this).toggleClass('active');
        $('.mushroom').toggle('300');    
        $('.panel.price ul li:nth-child(2)').toggle();   
        calculatePrice();                       
    });
    $('.btn-green-peppers').click(function(){
        $(this).toggleClass('active');
        $('.green-pepper').toggle('300');  
        $('.panel.price ul li:nth-child(3)').toggle();   
        calculatePrice();                       
    });
    $('.btn-sauce').click(function(){
        $(this).toggleClass('active');
        $('.sauce').toggleClass('sauce-white');  
        $('.panel.price ul li:nth-child(4)').toggle();  
        calculatePrice();                        
    });
    $('.btn-crust').click(function(){
        $(this).toggleClass('active');
        $('.crust').toggleClass('sauce-white');   
        $('.panel.price ul li:last-child').toggle();   
        calculatePrice();                       

    });   
    
    function calculatePrice(){
        let total = 10;
        $('.panel.price ul li').each(function(){
            if($(this).is(":visible")){
                total += parseInt($(this).text().replace( /[^\d\.]+/g, ""));
            }
        });
        $('.panel.price strong').html('$'+total);
    }

});