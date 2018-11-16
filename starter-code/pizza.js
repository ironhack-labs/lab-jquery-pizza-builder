// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){   
        $(".sauce-white").removeClass('sauce-white');
        $(".crust-gluten-free").removeClass('crust-gluten-free');
        $(".btn-sauce").removeClass('active');
        $(".btn-crust").removeClass('active');
        $(".price li:nth-child(5)").hide();
        $(".price li:nth-child(4)").hide();
        $("strong").addClass("total");
        getPrice();


        $(".btn-pepperonni").click(function(){
                $(".btn-pepperonni").toggleClass('active');
                $(".pep").toggle();  
                $(".price li:nth-child(1)").toggle();
                getPrice()    
        })

        $(".btn-mushrooms").click(function(){
                $(".btn-mushrooms").toggleClass('active');
                $(".mushroom").toggle();  
                $( ".price li:nth-child(2)").toggle();
                getPrice()
        })

        $(".btn-green-peppers").click(function(){
                $(".btn-green-peppers").toggleClass('active');
                $(".green-pepper").toggle(); 
                $( ".price li:nth-child(3)").toggle();
                getPrice()
        })

        $(".btn-sauce").click(function(){
                $(".btn-sauce").toggleClass('active');
                $(".sauce").toggleClass('sauce-white');  
                $( ".price li:nth-child(4)").toggle();
                getPrice()
        })

        $(".btn-crust").click(function(){
                $(".btn-crust").toggleClass('active');
                $(".crust").toggleClass('crust-gluten-free'); 
                $( ".price li:nth-child(5)").toggle(); 
                getPrice()  
        })

        function getPrice(){
                var totalPrice=10;

                if ($('.btn-pepperonni').hasClass('active')) {
                totalPrice += 1;
                }
                if ($('.btn-mushrooms').hasClass('active')) {
                totalPrice += 1;
                }
                if ($('.btn-green-peppers').hasClass('active')) {
                totalPrice += 1;
                }
                if ($('.btn-sauce').hasClass('active')) {
                totalPrice += 3;
                }
                if ($('.btn-crust').hasClass('active')) {
                totalPrice += 5;
                }
        $("strong").text(totalPrice);
        };

});
