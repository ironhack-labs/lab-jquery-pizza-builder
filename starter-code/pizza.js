// Write your Pizza Builder JavaScript in this file.
var totalPrice=parseInt($(".total-price").html())

$(".btn-pepperonni").click(function () {
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
    var targetItem=$("li:contains('pepperonni')");
    $(".btn-pepperonni").hasClass("active")? targetItem.show():targetItem.hide();
    $(".btn-pepperonni").hasClass("active")? totalPrice+=1:totalPrice-=1;
    $(".total-price").html(totalPrice);
});

$(".btn-mushrooms").click(function () {
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
    var targetItem=$("li:contains('mushrooms')");
    $(".btn-mushrooms").hasClass("active")? targetItem.show():targetItem.hide();
    $(".btn-mushrooms").hasClass("active")? totalPrice+=1:totalPrice-=1;
    $(".total-price").html(totalPrice);
});

$(".btn-green-peppers").click(function () {
    // $(".green-pepper:hidden").show();
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active");
    var targetItem=$("li:contains('green peppers')");
    $(".btn-green-peppers").hasClass("active")? targetItem.show():targetItem.hide();
    $(".btn-green-peppers").hasClass("active")? totalPrice+=1:totalPrice-=1;
    $(".total-price").html(totalPrice);
});

$(".btn-sauce").click(function () {
    $(".sauce").toggle();
    $(".btn-sauce").toggleClass("active");
    var targetItem=$("li:contains('white sauce')");
    $(".btn-sauce").hasClass("active")? targetItem.show():targetItem.hide();
    $(".btn-sauce").hasClass("active")? totalPrice+=3:totalPrice-=3;
    $(".total-price").html(totalPrice);
});

$(".btn-crust").click(function () {
    $(".crust").toggleClass("crust-gluten-free");
    $(".crust").toggleClass("active");
    var targetItem=$("li:contains('gluten-free crust')");
    $(".crust").hasClass("active")? targetItem.show():targetItem.hide();
    $(".crust").hasClass("active")? totalPrice+=5:totalPrice-=5;
    $(".total-price").html(totalPrice);
   
});

window.onload = function () {
    // $(".crust").show();
    
    // $(".pep").hide();
    // $(".mushroom").hide();
    // $(".green-pepper").hide();
    // $(".pep").remove();
    // $(".mushroom").remove();
    // $(".green-pepper").remove();
    // $(".btn-pepperonni").removeClass("active");
    // $(".btn-green-peppers").removeClass("active");
    // $(".btn-mushrooms").removeClass("active");
    
};


// var pep=$(".btn-pepperonni");
// pep.click(function(){
// // (pep.hasClass(".active"))? pep.toggleClass(".inactive");
// if(pep.hasClass(".active")) {
//     pep.removeClass(".active")
// }
// })

