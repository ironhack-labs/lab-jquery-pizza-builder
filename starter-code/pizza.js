// Write your Pizza Builder JavaScript in this file.


var pepperoni= $(".btn-pepperonni").click(function(){
    $(".pep").toggle();
})


var mushrooms = $(".btn-mushrooms").click(function(){
    $(".mushroom, .cap, .stem").toggle();
})

var peppers = $(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle();
})
$("section").removeClass("crust-gluten-free");
$("section").removeClass("sauce-white");


var whiteSauce= $(".btn-sauce").click(function(){
    $("section:last").addClass("sauce-white");

})

var glutenCrust=$(".btn-crust").click(function(){
    $("section").addClass("crust-gluten-free");
})
//console.log(glutenCrust);