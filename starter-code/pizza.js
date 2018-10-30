// Write your Pizza Builder JavaScript in this file.


var pepperoni= $(".btn-pepperonni").click(function(){
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active")
    $(".price li:contains('pepperonni')").toggle();
})


var mushrooms = $(".btn-mushrooms").click(function(){
    $(".mushroom, .cap, .stem").toggle();
    $(".btn-mushrooms").toggleClass("active")
    $(".price li:contains('mushrooms')").toggle();
})


var peppers = $(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle();
    $(".btn-green-pepers").toggleClass("active")
    $(".price li:contains('peppers')").toggle();

})
$("section").removeClass("crust-gluten-free");
$(".btn, .btn-sauce").removeClass("active")
$("section").removeClass("sauce-white");
$(".btn, .btn-crust").removeClass("active")
$(".price li:contains('gluten-free crust')").hide();
$(".price li:contains('white sauce')").hide();



var whiteSauce= $(".btn-sauce").click(function(){
    $("section:last").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active")
    $(".price li:contains('white sauce')").toggle();


})

var glutenCrust=$(".btn-crust").click(function(){
    $("section").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active")
    $(".price li:contains('gluten free crust')").toggle();
})



