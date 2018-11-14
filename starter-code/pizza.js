// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
    var totalPrice = 13;
    $(".btn-pepperonni").click(function() {
        if ($(this).hasClass("active")) { 
            $(this).removeClass("active")
            $(".pep").css("display", "none")
            $(".price-pepperoni").css("display", "none")
            totalPrice--
        }
        else {
            $(this).addClass("active")
            $(".pep").css("display", "")
            $(".price-pepperoni").css("display", "")
            totalPrice++
        } 

        $("strong").text("$"+totalPrice)
    })
    
    $(".btn-mushrooms").click(function() {
            if ($(this).hasClass("active")) { 
                $(this).removeClass("active")
                $(".mushroom").css("display", "none")
                $(".price-mushrooms").css("display", "none")
                totalPrice--
            }
            else {
                $(this).addClass("active")
                $(".mushroom").css("display", "")
                $(".price-mushrooms").css("display", "")
                totalPrice++
            } 
            $("strong").text("$"+totalPrice)
    })
    
    $(".btn-green-peppers").click(function() {
        if ($(this).hasClass("active")) { 
            $(this).removeClass("active")
            $(".green-pepper").css("display", "none")
            $(".price-green-peppers").css("display", "none")
            totalPrice--
        }
        else { 
            $(this).addClass("active")
            $(".green-pepper").css("display", "")
            $(".price-green-peppers").css("display", "")
            totalPrice++
        }
        $("strong").text("$"+totalPrice)
    })

    $(".crust").removeClass("crust-gluten-free")
    $(".sauce").removeClass("sauce-white")
    $(".price-white-sauce").css("display", "none")
    $(".price-gluten-free-crust").css("display", "none")
    $(".totalprice").text("$13")

    $(".btn-sauce").click(function() {
        $(".sauce").toggleClass("sauce-white")
        $(this).toggleClass("active")
        if ($(this).hasClass("active")) { 
            $(".price-white-sauce").css("display", "")
            totalPrice+=3
        } 
        else { 
            $(".price-white-sauce").css("display", "none")
            totalPrice-=3
        }
        $("strong").text("$"+totalPrice)
    })

   
    $(".btn-crust").click(function() {
        $(".crust").toggleClass("crust-gluten-free")
        $(this).toggleClass("active")
        if ($(this).hasClass("active")) { 
            $(".price-gluten-free-crust").css("display", "")
            totalPrice+=5
        } 
        else { 
            $(".price-gluten-free-crust").css("display", "none")
            totalPrice-=5
        }
        $("strong").text("$"+totalPrice)

    })
})