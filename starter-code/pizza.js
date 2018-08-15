// Write your Pizza Builder JavaScript in this file.


var totalPrice = 13;
$(".price strong").html("$"+totalPrice);


$(".btn-pepperonni").click(function () {
    //  long version using the functions show and hide
    // $(".pep").toggleClass("hide");
    // if ($(".pep").hasClass("hide")) {
    //     $(".pep").hide();
    // }
    // else { $(".pep").show(); }

    $(".pep").toggle();

    if ($(".pep").css('display') == 'none') {
        $(".btn-pepperonni").removeClass("active");
        $(".price li:contains('$1 pepperonni')").hide();
        totalPrice -=1;
        $(".price strong").html("$"+ totalPrice);
    }
    else {
        $(".btn-pepperonni").addClass("active");
        $(".price li:contains('$1 pepperonni')").show();
        totalPrice +=1;
        $(".price strong").html("$"+ totalPrice); 
    }


})

$(".btn-mushrooms").click(function () {

    $(".mushroom").toggleClass("hide");
    if ($(".mushroom").hasClass("hide")) {
        $(".mushroom").hide();
        $(".btn-mushrooms").removeClass("active");
        $(".price li:contains('$1 mushrooms')").hide();
        totalPrice -=1;
        $(".price strong").html("$"+ totalPrice);
    }
    else {
        $(".mushroom").show();
        $(".btn-mushrooms").addClass("active");
        $(".price li:contains('$1 mushrooms')").show();
        totalPrice +=1;
        $(".price strong").html("$"+ totalPrice); 
    }

})


$(".btn-green-peppers").click(function () {

    $(".green-pepper").toggleClass("hide");
    if ($(".green-pepper").hasClass("hide")) {
        $(".green-pepper").hide();
        $(".btn-green-peppers").removeClass("active");
        $(".price li:contains('$1 green peppers')").hide();
        totalPrice -=1;
        $(".price strong").html("$"+ totalPrice);
    }
    else { $(".green-pepper").show(); 
    $(".btn-green-peppers").addClass("active");
    $(".price li:contains('$1 green peppers')").show();
    totalPrice +=1;
        $(".price strong").html("$"+ totalPrice); 
}

})

//sauce-white

$(".btn-sauce").click(function () {

    $(".sauce").toggleClass("sauce-white");
    if ( $(".sauce").hasClass("sauce-white") ) {
        $(".btn-sauce").addClass("active");
        $(".price li:contains('$3 white sauce')").show();
        totalPrice +=3;
        $(".price strong").html("$"+ totalPrice); 
    }
    else { $(".btn-sauce").removeClass("active");
    $(".price li:contains('$3 white sauce')").hide(); 
    totalPrice -=3;
    $(".price strong").html("$"+ totalPrice); }

});


// crust-gluten-free


$(".btn-crust").click(function () {

    $(".crust").toggleClass("crust-gluten-free");
    if ( $(".crust").hasClass("crust-gluten-free") ) {
        $(".btn-crust").addClass("active");
        $(".price li:contains('$5 gluten-free crust')").show();
        totalPrice +=5;
        $(".price strong").html("$"+ totalPrice); 
    }
    else { $(".btn-crust").removeClass("active");
    $(".price li:contains('$5 gluten-free crust')").hide(); 
    totalPrice -=5;
    $(".price strong").html("$"+ totalPrice);  }

})



















