// Write your Pizza Builder JavaScript in this file.
//Iteration 1
$(function() {
    $(".btn-pepperonni").click(function(){
        $('.pep').toggle()
    })
    
    $(".btn-green-peppers").click(function(){
        $('.green-pepper').toggle()
    })

    $(".btn-mushrooms").click(function(){
        $('.mushroom').toggle()
    })
//Iteration 2
$(".btn-sauce").click(function(){
    $(".sauce").toggleClass("sauce-white")
})
$(".btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free")
})
//Iteration 3
$(".btn-sauce.active").removeClass("active")
$(".btn-crust.active").removeClass("active")
// Iteration 5
$(".btn-pepperonni").click(function(){
    $("li:contains(pepperonni)").toggle()
})
$(".btn-mushrooms").click(function(){
    $("li:contains(mushroom)").toggle()
})
$(".btn-green-peppers").click(function(){
    $("li:contains(green peppers)").toggle()
})
$(".btn-sauce").click(function(){
    $("li:contains(white sauce)").toggle()
})
$(".btn-crust").click(function(){
    $("li:contains(gluten-free crust)").toggle()
})

//Iteration 5
var totalPrice = 21;
$(".btn-crust").click(function(){
    totalPrice = totalPrice -5
    return totalPrice
})
  });
