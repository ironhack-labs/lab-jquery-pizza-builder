// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){

    //Pepperonni
    $(".btn-pepperonni").on("click", function(){
        pepperonni();
        toggleButton(".btn-pepperonni");
        $(".panel.price > ul :nth-Child(1)").toggle().toggleClass("off");
        updatePrice(pepperonni);
    });
    //Mushrooms
    $(".btn-mushrooms").on("click", function(){
       mushrooms();
       toggleButton(".btn-mushrooms");
       $(".panel.price > ul :nth-Child(2)").toggle().toggleClass("off");
       updatePrice();
    });
    //Green-pepper
    $(".btn-green-peppers").on("click", function(){
        greenPepper();
        toggleButton(".btn-green-peppers");
        $(".panel.price > ul :nth-Child(3)").toggle().toggleClass("off");
        updatePrice();
    });

    //Add and remove toppings
    function pepperonni(){
        $(".pep").fadeToggle(200);
    }

    function mushrooms(){
        $(".mushroom").fadeToggle(200);
    }

    function greenPepper(){
        $(".green-pepper").fadeToggle(200);
    }


    //Sauce and crust options
    function crustGluten(){
        $(".crust").toggleClass("crust-gluten-free");
        $(".panel.price > ul :nth-Child(5)").toggle().toggleClass("off");
        
    }
    function sauceWhite(){
        $(".sauce").toggleClass("sauce-white");
        $(".panel.price > ul :nth-Child(4)").toggle().toggleClass("off");
    }

    $(".crust").removeClass("crust-gluten-free");
    $(".btn-crust").removeClass("active");
    $(".sauce").removeClass("sauce-white");
    $(".btn-sauce").removeClass("active");

    $(".btn-crust").on("click", function(){
        crustGluten();
        toggleButton(".btn-crust");
        updatePrice();
    });

    $(".btn-sauce").on("click", function(){
        sauceWhite();
        toggleButton(".btn-sauce");
        updatePrice();
    });
    

    //Change the button's state
    function toggleButton(receivedClass){
        $(receivedClass).toggleClass("active");
    }

    //Ingredients and prices
    $(".panel.price > ul :nth-Child(4)").hide().toggleClass("off");
    $(".panel.price > ul :nth-Child(5)").hide().toggleClass("off");
    $(".panel.price > strong").text("$13");

    function updatePrice(){

        var totalPrice = 10;
        var l = $(".panel.price > ul > li");
        var n = $(".panel.price > ul > li").size();
        for(var i=0 ; i < n ; i++){
            if(!$(l).eq(i).hasClass("off")){
                console.log(i, n, ($(l).eq(i).text().split('')[1]));
                totalPrice += parseInt($(l).eq(i).text().split('')[1]);
            }
        }
        $(".panel.price > strong").text("$" + totalPrice);
    }
});