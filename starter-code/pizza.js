var totalPrice = 13;
$("strong").html("$ " + totalPrice);

// Iteration 1 & 2 

$(".btn-pepperonni").click(function () {
    var pepperonniPrice = $(".price li:first-child");
    
    $(".pep").toggle();
    $(".price li:first-child").toggle();
    
    // if (pepperonniPrice.show()) {
    //     $("strong").html();
    // }
});

$(".btn-mushrooms").click(function () {
    $(".mushroom").toggle();
    $(".price li:eq(1)").toggle();
});

$(".btn-green-peppers").click(function () {
    $(".green-pepper").toggle();
    $(".price li:eq(2)").toggle();
});

$(".sauce").removeClass("sauce-white");
$(".price li:eq(3)").hide();

$(".btn-sauce").click(function () {
    $(".sauce").toggleClass("sauce-white");
    $(".price li:eq(3)").toggle();
});

$(".crust").removeClass("crust-gluten-free");
$(".price li:eq(4)").hide();

$(".btn-crust").click(function () {
    $(".crust").toggleClass("crust-gluten-free");
    $(".price li:eq(4)").toggle();
});

// Iteration 3 : change the button's state

$(".btn-sauce").removeClass("active");
$(".btn-crust").removeClass("active");

$(".btn").click(function () {
    var clickedBtn = this;

    if ($(clickedBtn).hasClass("active")) {
        $(clickedBtn).removeClass("active");
        if ($(clickedBtn).hasClass("btn-sauce")) {
            totalPrice -= 3;
            $("strong").html("$ " + totalPrice);
        }
        else if ($(clickedBtn).hasClass("btn-crust")) {
            totalPrice -= 5;
            $("strong").html("$ " + totalPrice);   
        }
        else {
            totalPrice -= 1;
            $("strong").html("$ " + totalPrice);
        }
    }
    else {
        $(".btn > li").removeClass("active");
        $(clickedBtn).addClass("active");

        if ($(clickedBtn).hasClass("btn-sauce")) {
            totalPrice += 3;
            $("strong").html("$ " + totalPrice);
        }
        else if ($(clickedBtn).hasClass("btn-crust")) {
            totalPrice += 5;
            $("strong").html("$ " + totalPrice);   
        }
        else {
            totalPrice += 1;
            $("strong").html("$ " + totalPrice);
        }
    }
});



