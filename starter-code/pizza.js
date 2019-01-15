// Write your Pizza Builder JavaScript in this file.

$(".crust").toggleClass("crust-gluten-free")
$(".sauce").toggleClass("sauce-white")
$(".btn-crust").toggleClass("active")
$(".btn-sauce").toggleClass("active")
$('.price li:nth-child(1)').toggle()
$('.price li:nth-child(2)').toggle()
$('.price li:nth-child(3)').toggle()
$('.price li:nth-child(4)').toggle()
$('.price li:nth-child(5)').toggle()

//Iteration 1
$(".btn-pepperonni").click(function(){
    $(".pep").toggle()
    $('.price li:nth-child(1)').toggle()
})

$(".btn-mushrooms").click(function(){
    $(".mushroom").toggle()
    $('.price li:nth-child(2)').toggle()
})

$(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle()
    $('.price li:nth-child(3)').toggle()
})

$(".btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free")
    $('.price li:nth-child(5)').toggle()
})

$(".btn-sauce").click(function(){
    $(".sauce").toggleClass("sauce-white")
    $('.price li:nth-child(4)').toggle()
})

//Iteration 4