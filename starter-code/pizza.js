// Write your Pizza Builder JavaScript in this file.

function toggleVisibility(classButton, classIngredient) {
    $(classButton).toggleClass("active");
    if($(classButton).hasClass("active")) {
        $(classIngredient).show();
    }
    else {
        $(classIngredient).hide();
    }
    console.log($(classButton));    
}
$(".btn-pepperonni").click(function(){
    toggleVisibility(".btn-pepperonni",".pep");
});

$(".btn-mushrooms").click(function(){
    toggleVisibility(".btn-mushrooms",".mushroom");
});

$(".btn-green-peppers").click(function(){
    toggleVisibility(".btn-green-peppers",".green-pepper");
});

$(".btn-sauce").click(function(){
    $("#pizza > .crust > .sauce").toggleClass("sauce-white");
    if($("#pizza > .crust > .sauce").hasClass("sauce-white")) {
        $(".btn-sauce").html("Sauce");
    }
    else {
        $(".btn-sauce").html("White sauce");
    }
});

$(".btn-crust").click(function(){
    $("#pizza > .crust").toggleClass("crust-gluten-free");
    if($("#pizza > .crust").hasClass("crust-gluten-free")) {
        $(".btn-crust").html("Crust");
    }
    else {
        $(".btn-crust").html("Gluten-free crust");
    }
});

// on ready set sauce and crust instead of sauce-white and crust-gluten-free
$(function(){
    $("#pizza > .crust").toggleClass("crust-gluten-free");
    $("#pizza > .crust > .sauce").toggleClass("sauce-white");
});
