// Write your Pizza Builder JavaScript in this file.

$(".crust").removeClass("crust-gluten-free");
$(".sauce").removeClass("sauce-white");

$(".btn-crust").removeClass("active");
$(".btn-sauce").removeClass("active");

//Conseguir LI 4 y 5

var pepperoniLi = $(".price li:nth-child(1)");
var pStr = pepperoniLi.text()[1];
var mushroomsLi = $(".price ul li:nth-child(2)");
var mStr = mushroomsLi.text()[1];
var greeenPeppersLi = $(".price ul li:nth-child(3)");
var gPStr = greeenPeppersLi.text()[1];
var whiteSauceLi = $(".price ul li:nth-child(4)");
var pWSStr = whiteSauceLi.text()[1];
var glutenFreeLi = $(".price ul li:nth-child(5)");
var gFStr = glutenFreeLi.text()[1];

var totalPrice = $(".panel strong");
console.log(totalPrice.text());

whiteSauceLi.css("visibility", "hidden");
glutenFreeLi.css("visibility", "hidden");


let basePrice = 10;
var currentPrice = basePrice;


sumPrice(pStr);
sumPrice(mStr);
sumPrice(gPStr);

function sumPrice(elementString){
    var numStr = parseInt(elementString);
    currentPrice += numStr;
    totalPrice.text("$"+currentPrice);
}

function subPrice(elementString){
    var numStr = parseInt(elementString);
    currentPrice -= numStr;
    totalPrice.text("$"+currentPrice);
}


$(".btn-pepperonni").click(function(){
    $(".pep").toggle()

    if($(".btn-pepperonni").hasClass("active")){
        $(".btn-pepperonni").removeClass("active");
        pepperoniLi.css("visibility", "hidden");
        subPrice(pStr);
    }else{
        $(".btn-pepperonni").addClass("active");
        pepperoniLi.css("visibility", "visible");
        sumPrice(pStr);
    }
})
$(".btn-mushrooms").click(function(){
    $(".mushroom").toggle()
    
    if($(".btn-mushrooms").hasClass("active")){
        $(".btn-mushrooms").removeClass("active");
        mushroomsLi.css("visibility", "hidden");
        subPrice(mStr);
    }else{
        $(".btn-mushrooms").addClass("active");
        mushroomsLi.css("visibility", "visible");
        sumPrice(mStr);
    }
})
$(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle()
    
    if($(".btn-green-peppers").hasClass("active")){
        $(".btn-green-peppers").removeClass("active");
        greeenPeppersLi.css("visibility", "hidden");
        subPrice(gPStr);
    }else{
        $(".btn-green-peppers").addClass("active");
        greeenPeppersLi.css("visibility", "visible");
        sumPrice(gPStr);
    }
})
$(".btn-sauce").click(function(){
    if($(".sauce").hasClass("sauce-white")){
        $(".sauce").removeClass("sauce-white");
        
    } else {
        $(".sauce").addClass("sauce-white")
    }

    if($(".btn-sauce").hasClass("active")){
        $(".btn-sauce").removeClass("active");
        whiteSauceLi.css("visibility", "hidden");
        subPrice(pWSStr);
    }else{
        $(".btn-sauce").addClass("active");
        whiteSauceLi.css("visibility", "visible");
        sumPrice(pWSStr)
    }
})
$(".btn-crust").click(function(){
    
    if($(".crust").hasClass("crust-gluten-free")){
        $(".crust").removeClass("crust-gluten-free");
    } else {
        $(".crust").addClass("crust-gluten-free")
    }

    if($(".btn-crust").hasClass("active")){
        $(".btn-crust").removeClass("active");
        glutenFreeLi.css("visibility", "hidden");
        subPrice(gFStr);
    }else{
        $(".btn-crust").addClass("active");
        glutenFreeLi.css("visibility", "visible");
        sumPrice(gFStr);
    }
})

