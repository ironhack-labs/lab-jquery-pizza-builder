// Write your Pizza Builder JavaScript in this file.
function togglePepperoni () {
    var pepperoni = $(".pep");
    var btn = $(".btn-pepperonni");
    if($(btn).hasClass("active")){
        $(pepperoni).each(function(){
            $(this).css("display", "none");
            $(btn).removeClass("active");
        });
    } else {
        $(pepperoni).each(function(){
            $(this).css("display", "block");
            $(btn).addClass("active");
        });
    }
}

$($(".btn-pepperonni")).click(togglePepperoni);


function toggleMushroom () {
    var topping = $(".mushroom");
    var btn = $(".btn-mushrooms");
    if($(btn).hasClass("active")){
        $(topping).each(function(){
            $(this).css("display", "none");
            $(btn).removeClass("active");
        });
    } else {
        $(topping).each(function(){
            $(this).css("display", "block");
            $(btn).addClass("active");
        });
    }
}

$($(".btn-mushrooms")).click(toggleMushroom);

function togglePeppers () {
    var topping = $(".green-pepper");
    var btn = $(".btn-green-peppers");
    if($(btn).hasClass("active")){
        $(topping).each(function(){
            $(this).css("display", "none");
            $(btn).removeClass("active");
        });
    } else {
        $(topping).each(function(){
            $(this).css("display", "block");
            $(btn).addClass("active");
        });
    }
}

$($(".btn-green-peppers")).click(togglePeppers);


function toggleCrust() {
    $($(".crust")).toggleClass("crust-gluten-free");
    $($(".btn-crust")).toggleClass("active");
}

$($(".btn-crust")).click(toggleCrust);

function toggleSauce(){
    $($(".sauce")).toggleClass("sauce-white");
    $($(".btn-sauce")).toggleClass("active");

}

$($(".btn-sauce")).click(toggleSauce);



