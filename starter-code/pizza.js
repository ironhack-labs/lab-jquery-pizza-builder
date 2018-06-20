// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
    // $(".sauce").removeClass("sauce-white");
    // $(".crust").removeClass("crust-gluten-free");
    // $(".btn").removeClass("active");
    // // $(".pep").hide();
    // // $(".mushroom").hide();
    // // $(".green-pepper").hide();
    // // $(".price strong").hide();
    // $(".price li").hide();
   
   
 $(".btn-pepperoni").data('price', 1);
 $(".btn-mushrooms").data('price', 1);
 $(".btn-green-peppers").data('price', 1);
 $(".btn-sauce").data('price', 3);
 $(".btn-crust").data('price', 5);


 function calculateTotalPrice(){
    var allTheButtons = $('.btn');
    var price = 10;

 for(var i =0; i < allTheButtons.length; i++){
    if(allTheButtons.eq(i).hasClass('active')){
        price += allTheButtons.eq(i).data('price');
    }
 }
    $('strong').text('$' + price);
}




$('.btn').click(function(){
    $(this).toggleClass('active');
    calculateTotalPrice();
})







$(".btn-pepperoni").click(function(event){
    $('.pep').toggle();
    // $(".btn-pepperoni").toggleClass("active");
    $(".price li:contains('$1 p')").toggle();  
})


$(".btn-mushrooms").click(function(event){
    $('.mushroom').toggle();
    // $(".btn-mushrooms").toggleClass("active");
    $(".price li:contains('$1 m')").toggle();
})


$(".btn-green-peppers").click(function(event){
    $('.green-pepper').toggle();
    // $(".btn-green-peppers").toggleClass("active");
    $(".price li:contains('$1 g')").toggle();
})

$(".btn-sauce").click(function(event){
    $(".sauce").toggleClass("sauce-white");
    // $(".btn-sauce").toggleClass("active");
    $(".price li:contains('$3')").toggle();
})

$(".btn-crust").click(function(event){
    $(".crust").toggleClass("crust-gluten-free");
    // $(".btn-crust").toggleClass("active");
    $(".price li:contains('$5')").toggle();
})



$('.btn-crust').click();
$('.btn-sauce').click();
});
