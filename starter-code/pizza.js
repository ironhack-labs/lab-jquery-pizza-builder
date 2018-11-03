// Write your Pizza Builder JavaScript in this file.


$(document).ready(function() {
    $(".green-pepper").hide();
    $(".mushroom").hide();
    $(".pep").hide();
    $(".price li:contains(sauce)").hide();
    $(".price li:contains(mushroom)").hide();
    $(".price li:contains(pepperonni)").hide();
    $(".price li:contains(peppers)").hide();
    $(".price li:contains(gluten)").hide();
    $(".price strong").prop("innerText", "$10");

    var totalPrice = 10;

    $(".btn-green-peppers").click(function() {
        $(".green-pepper").toggle();
        $(".btn-green-peppers").toggleClass("active")
        if ($(".btn-green-peppers").hasClass("active")) {
            $(".price li:contains(peppers)").hide()
            totalPrice -=1;
        } else {
            $(".price li:contains(peppers)").show()
            totalPrice +=1;
        }
        $("strong").text("$"+totalPrice);
    });

    $(".btn-mushrooms").click(function() {
        $(".mushroom").toggle();
        $(".btn-mushrooms").toggleClass("active")
        if ($(".btn-mushrooms").hasClass("active")) {
            $(".price li:contains(mushrooms)").hide()
            totalPrice -= 1;
        } else {
            $(".price li:contains(mushrooms)").show()
            totalPrice +=1;
        }
        $("strong").text("$"+totalPrice);
    });

    $(".btn-pepperonni").click(function() {
        $(".pep").toggle()
        $(".btn-pepperonni").toggleClass("active");
        if ($(".btn-pepperonni").hasClass("active")) {
            $(".price li:contains(pepperonni)").hide()
            totalPrice -=1;
        } else {
            $(".price li:contains(pepperonni)").show()
            totalPrice +=1;
        }
        $("strong").text("$"+totalPrice);
    });

    $(".crust").removeClass("crust-gluten-free");
    $(".sauce").removeClass("sauce-white");


    $(".btn-crust").click(function() {
        $(".crust").toggleClass("crust-gluten-free")
        $(".btn-crust").toggleClass("active");
        if ($(".btn-crust").hasClass("active")){
            $(".price li:contains(gluten)").hide()
            totalPrice -=5;
        } else {
            $(".price li:contains(gluten)").show()
            totalPrice +=5;
        }
        $("strong").text("$"+totalPrice);
    });

    $(".btn-sauce").click(function() {
        $(".sauce").toggleClass("sauce-white")
        $(".btn-sauce").toggleClass("active");
        if ($(".btn-sauce").hasClass("active")) {
            $(".price li:contains(sauce)").hide()
            totalPrice -=3;
        } else {
            $(".price li:contains(sauce)").show()
            totalPrice +=3;
        }
        $("strong").text("$"+totalPrice);
    });


//    $(".panel.controls button").click(function() {
        // if ($(".btn-pepperonni").hasClass("active")) {
        // $("strong").text((prices[5].price + prices[0].price))
        // }
        // else if ($(".price li:contains(mushrooms)")) {
        // $("strong").text((prices[5].price + prices[1].price))
        // }
        
});