// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){

    // remove specific class names
    $(".crust").removeClass("crust-gluten-free");
    $(".sauce").removeClass("sauce-white");

    // remove active for crust and sauce
    $(".btn-crust, .btn-sauce").removeClass("active");

    //hide sauce and crust price
    $(".crust-price, .sauce-price").hide();

    //calculate price onload and below onclick too
    getPrice();

    // calling 1 function 3 times so don't repeat code, but the second parameter is weird
    ingredientsToggle(".btn-pepperonni", ".pep", ".pep-price");
    ingredientsToggle(".btn-mushrooms", ".mushroom", ".mushroom-price");
    ingredientsToggle(".btn-green-peppers", ".green-pepper", ".pepper-price");
    //seperate function for crust and sauce so I can toggle the class name
    ingredientsToggleWithClass(".btn-sauce", ".sauce", ".sauce-price", "sauce-white");
    ingredientsToggleWithClass(".btn-crust", ".crust", ".crust-price", "crust-gluten-free");

    //toggle button active state
    $(".btn").click(function(){
        $(this).toggleClass("active");
    });

});

//how could I use three parameters, button, ingredient & price, and then "ingredient", "price"
//hide and show ingredient and price
function ingredientsToggle(button, ingredient, price) {
    $(button).click(function(){
        $(ingredient).toggle();
        $(price).toggle();
        getPrice();
    });
}

//improve: make ingredientsToggle and ingredientsToggleWithClass into one function??
function ingredientsToggleWithClass(button, ingredient, price, toggleClass) {
    $(button).click(function(){
        $(ingredient).toggleClass(toggleClass);
        $(price).toggle();
        getPrice();
    });
}

function getPrice(){
//pizza prce 
    var total = 10;

    $(".item-price:visible").each(function( index ) {
        //get individual price from text:
        numberPrice = Number($( this ).text().split(" ")[0].replace("$", ""));
        total +=numberPrice;
    });

    $(".panel.price strong").text("$" + total)

}
