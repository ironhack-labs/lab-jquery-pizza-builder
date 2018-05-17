// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
    $(".crust").removeClass("crust-gluten-free");
    $(".btn-crust").removeClass("active");
    $(".price li:contains('$5 gluten-free crust')").hide();
   

    $(".sauce").removeClass("sauce-white");
    $(".sauce").addClass("regular-sauce");
    $(".btn-sauce").removeClass("active");
    $(".price li:contains('$3 white sauce')").hide();

    $(".btn-sauce").click(function(){
        if ($(".sauce").hasClass("sauce-white")) {
            $(".sauce").removeClass("sauce-white");
            $(".sauce").addClass("regular-sauce");
        } else {
            $(".sauce").addClass("sauce-white");
            $(".sauce").removeClass("regular-sauce");
        }
    });

    $(".btn-crust").click(function(){
        $(".crust").toggleClass("crust-gluten-free");
    });

    $(".btn-pepperonni").click(function(){
        $(".pep").toggle();
        $(".price li:contains('pepperonni')").toggle();
    });

    $(".btn-mushrooms").click(function(){
        $(".mushroom").toggle();
        $(".price li:contains('mushrooms')").toggle();
    });

    $(".btn-green-peppers").click(function(){
        $(".green-pepper").toggle();
        $(".price li:contains('peppers')").toggle();
    });

    $(".btn").click(function(){
        $(this).toggleClass("active");
        updatePrice();
    });

    function updatePrice(){
        var sum =  Number(getPriceFromString ($(".price b").text()));
        
        var hijos = $(".price ul").children(":visible");
        
        for (var i = 0; i < hijos.length; i++) {
            sum += getPriceFromString(hijos[i].innerText);
        }

        $(".price strong").text(sum);
    }

    function getPriceFromString(priceString){
        return Number(priceString.split(" ")[0].slice(1));
    }
})



