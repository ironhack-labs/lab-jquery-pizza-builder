// Write your Pizza Builder JavaScript in this file.
var totalPrice = 0;

$(".btn.btn-pepperonni.active").click(function(){
    $(".pep").toggle();
    $(".price ul li:contains('pepperonni')").toggle();
    isActive(".btn.btn-pepperonni", 1);

 });
 $(".btn.btn-mushrooms.active").click(function(){
    $(".mushroom").toggle();
    $(".price ul li:contains('mushrooms')").toggle();
    isActive(".btn.btn-mushrooms", 1); 
});

 $(".btn.btn-green-peppers.active").click(function(){
    $(".green-pepper").toggle();
    $(".price ul li:contains('peppers')").toggle();
    isActive(".btn.btn-green-peppers", 1); 
 });
 
 $(".btn-sauce").click(function(){
    $(".sauce").toggleClass("sauce-white");
    $(".price ul li:contains('white')").toggle();
    isActive(".btn-sauce", 3); 

 });
 
 $(".btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free");
    $(".price ul li:contains('gluten-free')").toggle();
    isActive(".btn-crust", 5); 
 });

 $("button").click(function(){
    $(this).toggleClass("active");
 });
 
function isActive (button, price){
    if($(button).hasClass("active")){
        changeTotal("sum", price);
    }else{
        changeTotal("rest",price);
    }

}

function changeTotal(operation, price){
    if(operation === "sum"){
        totalPrice +=price;
    }else{
        totalPrice -=price;
    }
    $(".panel.price strong").text(`$${totalPrice}`);
}
     

 