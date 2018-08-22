//remove white sauce from the default state
$(".sauce").removeClass("sauce-white");

//remove gluten free crust from the default state
$(".crust").removeClass("crust-gluten-free");

//hide pepperonies in the default state
$(".pep").hide();

//hide green peppers in the default state
$(".green-pepper").hide();

//hide mushrooms in the default state
$(".mushroom").hide();

//hide prices in the default state
$(".price li").hide();

//if button is clicked, activate button and its corresponding functions (found below)
$(".btn").toggleClass("active");

//set total price to 10 (sum of ingredient prices) and set it to show at 10, call on the strong tag and interpolate a $ sign.
var totalPrice = 10;
$("strong").html(`$${totalPrice}`);

// if pepperonni button is clicked, toggle the pepperoni class items on and off the page, along with its corresponding price from the price panel and total calculation
$(".btn-pepperonni" ).click(() => {
    $(".pep").toggle();
    $(".price li").eq(0).toggle();
    $(".btn-pepperonni").toggleClass("active");
    
    if($(".btn-pepperonni").hasClass("active")) {
        totalPrice += 1;
    } else {
        totalPrice -= 1;
    }
    $("strong").html(`$${totalPrice}`);
});

// if mushroom button is clicked, toggle the mushroom class items on and off the page, along with its corresponding price from the price panel and total calculation
$(".btn-mushrooms").click(() => {
    $(".mushroom").toggle();
    $(".price li").eq(1).toggle();
    $(".btn-mushrooms").toggleClass("active");

    if($(".btn-mushrooms").hasClass("active")) {
        totalPrice += 1;
    } else {
        totalPrice -= 1;
    }
    $("strong").html(`$${totalPrice}`);
});

// if green pepper button is clicked, toggle the green pepper class items on and off the page, along with its corresponding price from the price panel and total calculation
$(".btn-green-peppers").click(() => {
    $(".green-pepper").toggle();
    $(".price li").eq(2).toggle();
    $(".btn-green-peppers").toggleClass("active");

    if($(".btn-green-peppers").hasClass("active")) {
        totalPrice += 1;
    } else {
        totalPrice -= 1;
    }
    $("strong").html(`$${totalPrice}`);
});

//if the white sauce button is clicked, toggle the white sauce class off of the sauce parent class, along with its corresponding price from the price panel and total calculation
$(".btn-sauce").click(() => {
    $(".sauce").toggleClass("sauce-white");
    $(".price li").eq(3).toggle();
    $(".btn-sauce").toggleClass("active");

    if($(".btn-sauce").hasClass("active")) {
        totalPrice += 3;
    } else {
        totalPrice -= 3;
    }
    $("strong").html(`$${totalPrice}`);
});

//if the gluten free crust button is clicked, toggle the gluten free crust class off of the crust parent class, along with its corresponding price from the price panel and total calculation
$(".btn-crust").click(() => {
    $(".crust").toggleClass("crust-gluten-free");
    $(".price li").eq(4).toggle();
    $(".btn-crust").toggleClass("active");

    if($(".btn-crust").hasClass("active")) {
        totalPrice += 5;
    } else {
        totalPrice -= 5;
    }
    $("strong").html(`$${totalPrice}`);
});

