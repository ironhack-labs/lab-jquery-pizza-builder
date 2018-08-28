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

$($(".btn-pepperonni")).click(function(){togglePepperoni();updateList(); totalPrice();});


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

$($(".btn-mushrooms")).click(function(){toggleMushroom();updateList();totalPrice();});

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

$($(".btn-green-peppers")).click(function(){togglePeppers();updateList();totalPrice();});


function toggleCrust() {
    $($(".crust")).toggleClass("crust-gluten-free");
    $($(".btn-crust")).toggleClass("active");
}

$($(".btn-crust")).click(function(){toggleCrust();updateList();totalPrice();});

function toggleSauce(){
    $($(".sauce")).toggleClass("sauce-white");
    $($(".btn-sauce")).toggleClass("active");

}

$($(".btn-sauce")).click(function(){toggleSauce();updateList();totalPrice();});


function updateList() {
var button = $("div.controls > ul").children().children()
var li = $("aside.price > ul").children()
for(var i=0; i<button.length; i++){
    productActive(button[i], li[i])
}

}

function productActive(button, list) {
    if($(button).hasClass("active")) {
        $(list).css("display", "block")
    } else {
        $(list).css("display", "none")
    };
}

$(window).load(function(){updateList();})

function totalPrice() {
    var visible = $("aside.price ul li:visible");
    var totalPrice = 10;
    for(var i = 0; i < visible.length; i++){
        totalPrice = totalPrice + parseInt($(visible)[i].innerText[1]);
    }
    $($("aside.price p"))[0].innerText = totalPrice;


}