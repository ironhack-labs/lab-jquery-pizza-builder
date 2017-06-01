$(document).ready(function() {

    var theTotal = 21;

    $(".btn-pepperonni").on("click", function() {
        $('#pepPrice').fadeToggle();
        $(".pep").toggle();
        $(".btn-pepperonni").toggleClass("active");
        if ($(this).hasClass("active")) {
            theTotal = Number(theTotal) + Number($(this).val());
            $('#totalPrice').text("Total Price: " + theTotal);
        } else {
            theTotal = Number(theTotal) - Number($(this).val());
            $('#totalPrice').text("Total Price: " + theTotal);
        }
    });

    $(".btn-mushrooms").on("click", function() {
        $('#mushPrice').fadeToggle();
        $(".mushroom").toggle();
        $(".btn-mushrooms").toggleClass("active");
        if ($(this).hasClass("active")) {
            theTotal = Number(theTotal) + Number($(this).val());
            $('#totalPrice').text("Total Price: " + theTotal);
        } else {
            theTotal = Number(theTotal) - Number($(this).val());
            $('#totalPrice').text("Total Price: " + theTotal);
        }
    });

    $(".btn-green-peppers").on("click", function() {
        $('#greenPrice').fadeToggle();
        $(".green-pepper").toggle();
        $(".btn-green-peppers").toggleClass("active");
        if ($(this).hasClass("active")) {
            theTotal = Number(theTotal) + Number($(this).val());
            $('#totalPrice').text("Total Price: " + theTotal);
        } else {
            theTotal = Number(theTotal) - Number($(this).val());
            $('#totalPrice').text("Total Price: " + theTotal);
        }
    });



    $(".btn-sauce").click(function() {
        $('#whitePrice').fadeToggle();
        $(".sauce").toggleClass("sauce-white");
        $(".btn-sauce").toggleClass("active");
        if ($(this).hasClass("active")) {
            theTotal = Number(theTotal) + Number($(this).val());
            $('#totalPrice').text("Total Price: " + theTotal);
        } else {
            theTotal = Number(theTotal) - Number($(this).val());
            $('#totalPrice').text("Total Price: " + theTotal);
        }
    });

    $(".btn-crust").click(function() {
        $('#glutenPrice').fadeToggle();
        $(".crust").toggleClass("crust-gluten-free");
        $(".btn-crust").toggleClass("active");
        if ($(this).hasClass("active")) {
            theTotal = Number(theTotal) + Number($(this).val());
            $('#totalPrice').text("Total Price: " + theTotal);
        } else {
            theTotal = Number(theTotal) - Number($(this).val());
            $('#totalPrice').text("Total Price: " + theTotal);
        }
    });

});
