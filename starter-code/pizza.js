// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
    


$(".btn-pepperonni").on("click",function(){
    var pepperoni=$(".pep");
    pepperoni.toggle();
    var inactive=$(this);
    inactive.toggleClass("active");
    $(".price li:first-child").toggle();
    var price=$(".price strong").text();
    totalPrice(".btn-pepperonni");
});

$(".btn-mushrooms").on("click",function(){
    var mushrooms=$(".mushroom");
    mushrooms.toggle();
    var inactive=$(this);
    inactive.toggleClass("active");
    $(".price li:nth-child(2)").toggle();
    totalPrice(".btn-mushrooms");
});
$(".btn-green-peppers").on("click",function(){
    var greenPepper=$(".green-pepper");
    greenPepper.toggle();
    var inactive=$(this);
    inactive.toggleClass("active");
    $(".price li:nth-child(3)").toggle();
    totalPrice(".btn-green-peppers");
});


$(".btn-sauce").on("click",function(){
    var whiteSauce=$(".crust .sauce");
    whiteSauce.toggleClass("sauce-white");
    var inactive=$(this);
    inactive.toggleClass("active");
    $(".price li:nth-child(4)").toggle();
    totalPrice(".btn-sauce");
})


$(".btn-crust").on("click",function(){
    var crust=$(".crust");
    crust.toggleClass("crust-gluten-free");
    var inactive=$(this);
    inactive.toggleClass("active");
    $(".price li:nth-child(5)").toggle();
    totalPrice(".btn-crust");
});

function totalPrice(e){
    var price=$(".price strong").text();
    price=parseInt(price[1]+price[2]);
    if(e==".btn-sauce"){
        if($(e).hasClass("active")){
            price+=3;
         }
         else{
             price-=3;
         }
    }
    else if(e==".btn-crust"){
        if($(e).hasClass("active")){
            price+=5;
         }
         else{
             price-=5;
         }
        }
        else{
            if($(e).hasClass("active")){
                price++;
             }
             else{
                 price--;
             }
        }
    $(".price strong").text("$" + price);
}
























});
