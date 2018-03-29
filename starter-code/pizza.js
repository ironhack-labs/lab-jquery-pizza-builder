// Write your Pizza Builder JavaScript in this file.
$(".price li:nth-child(4), .price li:nth-child(5)").hide();

function calculatingTotal (ingredient, listItem){
    var totalPrice = $(".total").text();
    var totalNumber = Number(totalPrice);
    var justNumber = listItem.text().charAt(1);
    justNumber = Number(justNumber);
    
        if(ingredient.is(":visible")){
            $(".total").text(totalNumber+=justNumber);
        }else{
            $(".total").text(totalNumber-=justNumber);
        }
}



$(".btn-pepperonni").click(function(){
    var pepperonni=  $(".pep");
    pepperonni.toggle();
    $(".btn-pepperonni").toggleClass("active");
    var onePrice =$(".price li:nth-child(1)")
    onePrice.toggle();
    calculatingTotal(pepperonni, onePrice);

});

$(".btn-green-peppers").click(function(){
    var peppers= $(".green-pepper");
    peppers.toggle();
    $(".btn-green-peppers").toggleClass("active");
    var onePrice = $(".price li:nth-child(3)");
    onePrice.toggle();
    calculatingTotal(peppers, onePrice);  
});

$(".btn-mushrooms").click(function(){
    var mushrooms = $(".mushroom");
    mushrooms.toggle();
    $(".btn-mushrooms").toggleClass("active");
    var onePrice =$(".price li:nth-child(2)");
    onePrice.toggle();
    calculatingTotal(mushrooms, onePrice);
});

$(".btn-crust").click(function(){
    var crust = $(".crust");
    crust.toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    var onePrice =$(".price li:nth-child(5)")
    onePrice.toggle();
    var crustGluten = $(".crust-gluten-free");
    calculatingTotal(crustGluten, onePrice);
});

$(".btn-sauce").click(function(){
    var sauce = $(".sauce");
    sauce.toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    var onePrice = $(".price li:nth-child(4)")
    onePrice.toggle();
    var sauceWhite = $(".sauce-white");
    calculatingTotal(sauceWhite,onePrice)
});

