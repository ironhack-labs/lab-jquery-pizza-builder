// Write your Pizza Builder JavaScript in this file.
$(".btn-green-peppers").click(function(){
    $("section.green-pepper").toggleClass("hidden")
    $(".btn-green-peppers").toggleClass("active")
    $(".ing-pepper").toggleClass("hidden")
})

$(".btn-pepperonni").click(function(){
    $("section.pep").toggleClass("hidden")
    $(".btn-pepperonni").toggleClass("active")
    $(".ing-pep").toggleClass("hidden")
})

$(".btn-mushrooms").click(function(){
    $("section.mushroom").toggleClass("hidden")
    $(".btn-mushrooms").toggleClass("active")
    $(".ing-mushroom").toggleClass("hidden")
})

$(".btn-crust").click(function(){
    $("section.crust").toggleClass("crust-gluten-free")
    $(".btn-crust").toggleClass("active")
    $(".ing-crust").toggleClass("hidden")
})

$(".btn-sauce").click(function(){
    $("section.sauce").toggleClass("sauce-white")
    $(".btn-sauce").toggleClass("active")
    $(".ing-sauce").toggleClass("hidden")
})