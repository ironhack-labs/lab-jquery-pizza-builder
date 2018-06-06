// Write your Pizza Builder JavaScript in this file.

$(document).ready(function(){
    var Total = document.querySelector("strong");
    var price = 13;
    Total.innerHTML = ("$" + price);


    $(".btn-pepperonni").click(function(){
        $(".pep").toggle();
        $(this).toggleClass("active");
        $("li:contains('$1 pepperonni')").toggle();
        if($(this).hasClass("active")){
            price += 1;
            Total.innerHTML=("$"+price);
            return Total;
        }
        price -= 1;
        Total.innerHTML = ("$" + price);
        return Total;
    })

    $(".btn-mushrooms").click(function(){
        $(".mushroom").toggle();
        $(this).toggleClass("active")
        $("li:contains('$1 mushrooms')").toggle();
        if($(this).hasClass("active")){
            price += 1;
            Total.innerHTML=("$"+price);
            return Total;
        }
        price -= 1;
        Total.innerHTML = ("$" + price);
        return Total;
    })

    $(".btn-green-peppers").click(function(){
        $(".green-pepper").toggle();
        $(this).toggleClass("active");
        $("li:contains('$1 green peppers')").toggle();
        if($(this).hasClass("active")){
            price += 1;
            Total.innerHTML=("$"+price);
            return Total;
        }
        price -= 1;
        Total.innerHTML = ("$" + price);
        return Total;
    })

    //Crust & sauce defaults:
    $("li:contains('$3 white sauce')").toggle();
    $(".btn-sauce").click(function(){
        $(".sauce").toggleClass("sauce-white");
        $(this).toggleClass("active");
        $("li:contains('$3 white sauce')").toggle();
        if($(this).hasClass("active")){
            price += 3;
            Total.innerHTML=("$"+price);
            return Total;
        }
        price -= 3;
        Total.innerHTML = ("$" + price);
        return Total;
    })

    $("li:contains('$5 gluten-free crust')").toggle();
    $(".btn-crust").click(function(){
        $(".crust").toggleClass("crust-gluten-free");
        $(this).toggleClass("active");
        $("li:contains('$5 gluten-free crust')").toggle();
        if($(this).hasClass("active")){
            price += 5;
            Total.innerHTML=("$"+price);
            return Total;
        }
        price -= 5;
        Total.innerHTML = ("$" + price);
        return Total;
    })
})

