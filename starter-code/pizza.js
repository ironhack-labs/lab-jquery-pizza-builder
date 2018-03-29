// Write your Pizza Builder JavaScript in this file.
$(".price li:nth-child(4), .price li:nth-child(5)").hide();

var totalPrice = $(".total").text();
var totalNumber = Number(totalPrice);


$(".btn-pepperonni").click(function(){
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
    $(".price li:nth-child(1)").toggle();
    var pepPrice = $(".price span:first").text();
    pepPrice = Number(pepPrice);
    if($(".pep").is(":visible")){
        $(".total").text(totalNumber+=pepPrice);
    }else{
        $(".total").text(totalNumber-=pepPrice);
        //console.log(totalNumber);
    }

});

$(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active");
    $(".price li:nth-child(3)").toggle();
    var pepPrice = $(".price li:nth-child(3) span").text();
    pepPrice = Number(pepPrice);
    if($(".green-pepper").is(":visible")){
        $(".total").text(totalNumber+=pepPrice);
    }else{
        $(".total").text(totalNumber-=pepPrice);
        //console.log(totalNumber);
    }
});

$(".btn-mushrooms").click(function(){
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
    $(".price li:nth-child(2)").toggle();
    var pepPrice = $(".price li:nth-child(2) span").text();
    pepPrice = Number(pepPrice);
    if($(".mushroom").is(":visible")){
        $(".total").text(totalNumber+=pepPrice);
    }else{
        $(".total").text(totalNumber-=pepPrice);
        //console.log(totalNumber);
    }
});

$(".btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $(".price li:nth-child(5)").toggle();
    var pepPrice = $(".price li:nth-child(5) span").text();
    pepPrice = Number(pepPrice);
    if($(".crust-gluten-free").is(":visible")){
        $(".total").text(totalNumber+=pepPrice);
    }else{
        $(".total").text(totalNumber-=pepPrice);
        //console.log(totalNumber);
    }
});

$(".btn-sauce").click(function(){
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $(".price li:nth-child(4)").toggle();
    var pepPrice = $(".price li:nth-child(4) span").text();
    pepPrice = Number(pepPrice);
    if($(".sauce-white").is(":visible")){
        $(".total").text(totalNumber+=pepPrice);
    }else{
        $(".total").text(totalNumber-=pepPrice);
        //console.log(totalNumber);
    }
});

$("").click(function(){});