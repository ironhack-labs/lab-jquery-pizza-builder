// Write your Pizza Builder JavaScript in this file.

function toggleVisibility(classButton, classIngredient) {
    $(classButton).toggleClass("active");
    if($(classButton).hasClass("active")) {
        $(classIngredient).show();
        addPrice(classIngredient);
    }
    else {
        $(classIngredient).hide();
        removePrice(classIngredient);
    }
    console.log($(classButton));    
}

function addPrice(classIngredient) {
    switch(classIngredient) {
        case ".pep":
            $(".price ul li:nth-child(1)").show();
            break;
        case ".mushroom":
            $(".price ul li:nth-child(2)").show();
            break;
        case ".green-pepper":
            $(".price ul li:nth-child(3)").show();
            break;
        default:
            alert("EEEEE");
    }
}

function removePrice(classIngredient) {
    switch(classIngredient) {
        case ".pep":
            $(".price ul li:nth-child(1)").hide();
            break;
        case ".mushroom":
            $(".price ul li:nth-child(2)").hide();
            break;
        case ".green-pepper":
            $(".price ul li:nth-child(3)").hide();
            break;
        default:
            alert("EEEEE");
    }
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
