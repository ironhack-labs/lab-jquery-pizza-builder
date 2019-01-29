// Write your Pizza Builder JavaScript in this file.
var pepperStatus = true;
var mushroomStatus = true;
var pepperoniStatus = true;
var whiteSauce = false;
var gfreeCrust = false;
var allIngredients = $('.active');
var gtObj = $('#grand-total');
var grandTotal = gtObj[0];
//console.log(grandTotal.innerHTML);

function checkTotalPrice(){
    allIngredients = $('.active');
    var totalPrice = 10;
    for(var i=0; i<allIngredients.length; i++){
        let ingredientObj = allIngredients[i];
        let ingredient = ingredientObj.innerHTML;
        switch(ingredient){
            case "Pepperonni":
                totalPrice += 1;
                break;
            case "Mushrooms":
                totalPrice += 1;
                break;
            case "Green peppers":
                totalPrice += 1;
                break;
            case "White sauce":
                totalPrice += 3;
                break;
            case "Gluten Free crust":
                totalPrice += 5;
        }
    }
    console.log(totalPrice);
    $('#grand-total').text("$" + totalPrice);

}
checkTotalPrice();

$('.btn-green-peppers').click(()=>{
    if(pepperStatus == true){
        $('.green-pepper').hide();
        pepperStatus = false;
        $('.btn-green-peppers').removeClass("active");
        $('#greenpepper-price').hide();
    }
    else{
        $('.green-pepper').show();
        pepperStatus = true;
        $('.btn-green-peppers').addClass("active");
        $('#greenpepper-price').show();
    }
    checkTotalPrice()
});

$('.btn-mushrooms').click(()=>{
    if(mushroomStatus == true){
        $('.mushroom').hide();
        mushroomStatus = false;
        $('.btn-mushrooms').removeClass("active");
        $('#mushroom-price').hide();
    }
    else{
        $('.mushroom').show();
        mushroomStatus = true;
        $('.btn-mushrooms').addClass("active");
        $('#mushroom-price').show();
    }
    checkTotalPrice()
});

$('.btn-pepperonni').click(()=>{
    if(pepperoniStatus == true){
        $('.pep').hide();
        pepperoniStatus = false;
        $('.btn-pepperonni').removeClass("active");
        $('#pepperonni-price').hide();
    }
    else{
        $('.pep').show();
        pepperoniStatus = true;
        $('.btn-pepperonni').addClass("active");
        $('#pepperonni-price').show();
    }
    checkTotalPrice()
});

$('.btn-sauce').click(()=>{
    if(whiteSauce == false){
        $('.sauce').addClass("sauce-white");
        $('.btn-sauce').addClass("active");
        $('#whitesauce-price').show();
        whiteSauce = true;
    }
    else{
        $('.sauce').removeClass("sauce-white");
        $('.btn-sauce').removeClass("active");
        $('#whitesauce-price').hide();
        whiteSauce = false;
    }
    checkTotalPrice()
});

$('.btn-crust').click(()=>{
    if(gfreeCrust == false){
        $('.crust').addClass("crust-gluten-free");
        $('.btn-crust').addClass("active");
        $('#glutenfree-price').show();
        gfreeCrust = true;
    }
    else{
        $('.crust').removeClass("crust-gluten-free");
        $('.btn-crust').removeClass("active");
        $('#glutenfree-price').hide();
        gfreeCrust = false;
    }
    checkTotalPrice()
});