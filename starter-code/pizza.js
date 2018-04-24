// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){

    $('.controls button').click(function(){

        $(this).toggleClass('active');
    
        if( $(this).hasClass('btn-pepperonni')){
            
            $('#pizza .pep').toggleClass('disable');
            $('.price li:first-child').toggleClass('disable');
    
        }else if($(this).hasClass('btn-mushrooms')){
    
            $('#pizza .mushroom').toggleClass('disable');
            $('.price li:first-child + li').toggleClass('disable');
            
        }else if($(this).hasClass('btn-green-peppers')){
    
            $('#pizza .green-pepper').toggleClass('disable');
            $('.price li:first-child + li + li').toggleClass('disable');
            
        }else if($(this).hasClass('btn-sauce')){
    
            $('#pizza .sauce').toggleClass('sauce-white');
            $('.price li:first-child + li + li + li').toggleClass('disable');

        }else if($(this).hasClass('btn-crust')){
    
            $('#pizza .crust').toggleClass('crust-gluten-free');
            $('.price li:first-child + li + li + li + li').toggleClass('disable');

        }

        var baseCosts = 21;
        
        if($('.price ul li:first-child').hasClass('disable')){
            baseCosts = baseCosts - 1;
        }

        if($('.price ul li:first-child + li').hasClass('disable')){
            baseCosts = baseCosts - 1;
        }

        if($('.price ul li:first-child + li + li').hasClass('disable')){
            baseCosts = baseCosts - 1;
        }

        if($('.price ul li:first-child + li + li + li').hasClass('disable')){
            baseCosts = baseCosts - 3;
        }

        if($('.price ul li:last-child').hasClass('disable')){
            baseCosts = baseCosts - 5;
        }
      
        $('.price strong').text("$"+(baseCosts));
    
    })


})
