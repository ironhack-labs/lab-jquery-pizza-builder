// Write your Pizza Builder JavaScript in this file.

$("document").ready(function(){

    $("#pep, #mushroom, #green-pepper").hide()
    $(".green-pepper-price, .pepperonni-price, .mushroom-price, .white-sauce-price, .gluten-free-price").hide();


    function updatePrice() {
        
        var money = 10;

        if ($(".btn-pepperonni").hasClass("active")) {
            money++;
            $(".money").html(money);  
        } else {
            $(".money").html(money); 
        };

        if ($(".btn-mushrooms").hasClass("active")) {
            money++;
            $(".money").html(money);  
        } else {
            $(".money").html(money); 
        };  

        if ($(".btn-green-peppers").hasClass("active")) {
            money++;
            $(".money").html(money);  
        } else {
            $(".money").html(money); 
        };
        
        if ($(".btn-sauce").hasClass("active")) {
            money = money + 3;
            $(".money").html(money);  
        } else {
            $(".money").html(money); 
        };

        if ($(".btn-crust").hasClass("active")) {
            money = money + 5;
            $(".money").html(money);  
        } else {
            $(".money").html(money); 
        };

    };

    $(".btn-pepperonni").click(function() {
        $("#pep").toggle();
        $(".btn-pepperonni").toggleClass("active");
        $(".pepperonni-price").toggle();
        // $(".price").html();
        
        updatePrice();
    });

    $(".btn-mushrooms").click(function() {
        
        $("#mushroom").toggle();
        $(".btn-mushrooms").toggleClass("active");
        $(".mushroom-price").toggle();

        updatePrice();
    });

    $(".btn-green-peppers").click(function() {
        $("#green-pepper").toggle();
        $(".btn-green-peppers").toggleClass("active");
        $(".green-pepper-price").toggle();
        updatePrice();
    });

    $(".btn-crust").click(function() {
        $(".crust").toggleClass("crust-gluten-free");
        $(".btn-crust").toggleClass("active");
        $(".gluten-free-price").toggle();
        updatePrice();
    });

    $(".btn-sauce").click(function(){
        $(".sauce").toggleClass("sauce-white");
        $(".btn-sauce").toggleClass("active");
        $(".white-sauce-price").toggle();
        updatePrice();
    });

});

