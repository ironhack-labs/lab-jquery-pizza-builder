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
}

function addPrice(classIngredient) {
    switch(classIngredient) {
        case ".pep":
            $(".price ul li:nth-child(1)").attr("hidden", "false");
            $(".price ul li:nth-child(1)").show();
            break;
        case ".mushroom":
            $(".price ul li:nth-child(2)").attr("hidden", "false");
            $(".price ul li:nth-child(2)").show();
            break;
        case ".green-pepper":
            $(".price ul li:nth-child(3)").attr("hidden", "false");
            $(".price ul li:nth-child(3)").show();
            break;
        case "#pizza > .crust > .sauce":
            $(".price ul li:nth-child(4)").attr("hidden", "false");
            $(".price ul li:nth-child(4)").show();
            break;
        case "#pizza > .crust":
            $(".price ul li:nth-child(5)").attr("hidden", "false");
            $(".price ul li:nth-child(5)").show();
            break;
        default:
            alert("Ingredient Not Found");
    }
    updatePrice();
}

function removePrice(classIngredient) {
    switch(classIngredient) {
        case ".pep":
            $(".price ul li:nth-child(1)").attr("hidden", "true");
            $(".price ul li:nth-child(1)").hide();
            break;
        case ".mushroom":
            $(".price ul li:nth-child(2)").attr("hidden", "true");
            $(".price ul li:nth-child(2)").hide();
            break;
        case ".green-pepper":
            $(".price ul li:nth-child(3)").attr("hidden", "true");
            $(".price ul li:nth-child(3)").hide();
            break;
        case "#pizza > .crust > .sauce":
            $(".price ul li:nth-child(4)").attr("hidden", "true");
            $(".price ul li:nth-child(4)").hide();
            break;
        case "#pizza > .crust":
            $(".price ul li:nth-child(5)").attr("hidden", "true");
            $(".price ul li:nth-child(5)").hide();
            break;
        default:
            alert("Ingredient Not Found");
    }
    updatePrice();
}

function updatePrice() {
    totalPrice = basePrice;
    $(".price ul li:not(:hidden)").each(function(index) {
        price = $(this).text();
        price = parseFloat(price.substring(price.indexOf("$") + 1, price.indexOf(" ")));
        totalPrice += price;
    });
    totalPrice = "TOTAL PRICE = $" + totalPrice;
    $(".price strong").html(totalPrice);
}

$(".btn-pepperonni").click(function(){
    toggleVisibility(".btn-pepperonni",".pep");
    callThis(this);
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
        addPrice("#pizza > .crust > .sauce");
        $(".btn-sauce").html("Sauce");
    }
    else {
        removePrice("#pizza > .crust > .sauce");
        $(".btn-sauce").html("White sauce");
    }
});

$(".btn-crust").click(function(){
    $("#pizza > .crust").toggleClass("crust-gluten-free");
    if($("#pizza > .crust").hasClass("crust-gluten-free")) {
        addPrice("#pizza > .crust");
        $(".btn-crust").html("Crust");
    }
    else {
        removePrice("#pizza > .crust");
        $(".btn-crust").html("Gluten-free crust");
    }
});

// on ready set sauce and crust instead of sauce-white and crust-gluten-free
$(function(){
    basePrice = 10;
    $("#pizza > .crust > .sauce").removeClass("sauce-white");
    $(".price ul li:nth-child(4)").attr("hidden", "true");
    $("#pizza > .crust").removeClass("crust-gluten-free");
    $(".price ul li:nth-child(5)").attr("hidden", "true");
    updatePrice();
});
