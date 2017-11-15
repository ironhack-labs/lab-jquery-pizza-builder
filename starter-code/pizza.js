// Write your Pizza Builder JavaScript in this file.

function setPrice(buttonName, ingredientName, ingredientNth, ingredientePrice){
    var pizzaPrice = parseFloat(( $("strong").text() ).replace('$', '')) || 0;  
    var priceDescription = $("aside ul li:nth-child("+ingredientNth+")");
    var ingredient = $(ingredientName);

    if ( $(buttonName).hasClass("active") ) {
        priceDescription.show();
        ingredient.show();
        pizzaPrice += ingredientePrice;
        $("strong").text("$" + pizzaPrice);
    }
    else {
        priceDescription.hide();
        ingredient.hide();
        pizzaPrice -= ingredientePrice;
        $("strong").text("$" + pizzaPrice);
    }
}

function actDes(buttonName){
    if ( $(buttonName).hasClass("active") ) {
        $(buttonName).removeClass("active");
    }
    else {
        $(buttonName).addClass("active"); 
    }
}
function setIngrendient(buttonName, ingredientName){
    if ( $(buttonName).hasClass("active") ) {
        $(ingredientName).show();
    }
    else {
        $(ingredientName).hide(); 
    }
}
function setCrust(buttonName){
    if ( $(buttonName).hasClass("active") ) {
        $(".crust").addClass("crust-gluten-free");
    }
    else {
        $(".crust").removeClass("crust-gluten-free");
    }
}
function setSauce(buttonName){
    if ( $(buttonName).hasClass("active") ) {
        $(".sauce").addClass("sauce-white");
    }
    else {
        $(".sauce").removeClass("sauce-white");
    }
}



$(function(){

    $(".btn-pepperonni").click(function(){
        actDes(this);
        setIngrendient(this, ".pep");
        setPrice(this, ".pep",1,1);
    });

    $(".btn-mushrooms").click(function(){
        actDes(this);
        setIngrendient(this, ".pep");
        setPrice(this, ".mushroom",2,1);
    });

    $(".btn-green-peppers").click(function(){
        actDes(this);
        setIngrendient(this, ".pep");
        setPrice(this, ".green-pepper",3,1);
    });

    $(".btn-sauce").click(function(){
        actDes(this);
        setSauce(this);
        setPrice(this,"",4,3);
    });

    $(".btn-crust").click(function(){
        actDes(this);
        setCrust(this);
        setPrice(this,"",5,5);
    });


})