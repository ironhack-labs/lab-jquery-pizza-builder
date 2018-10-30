// Write your Pizza Builder JavaScript in this file.


var pepperoni= $(".btn-pepperonni").click(function(){
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active")
})


var mushrooms = $(".btn-mushrooms").click(function(){
    $(".mushroom, .cap, .stem").toggle();
    $(".btn-mushrooms").toggleClass("active")
})


var peppers = $(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle();
    $(".btn-green-pepers").toggleClass("active")
})
$("section").removeClass("crust-gluten-free");
$(".btn, .btn-sauce").removeClass("active")
$("section").removeClass("sauce-white");
$(".btn, .btn-crust").removeClass("active")



var whiteSauce= $(".btn-sauce").click(function(){
    $("section:last").addClass("sauce-white");
    $(".btn-sauce").addClass("active")

})

var glutenCrust=$(".btn-crust").click(function(){
    $("section").addClass("crust-gluten-free");
    $(".btn-crust").addClass("active")
})

