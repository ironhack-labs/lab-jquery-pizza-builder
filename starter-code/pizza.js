// Write your Pizza Builder JavaScript in this file.

$('.btn-pepperonni').on("click", function(){
    $('.pep').toggle();
    $(this).toggleClass("active");
})

$('.btn-mushrooms').on("click", function(){
    $('.mushroom').toggle();
    $(this).toggleClass("active");
})

$('.btn-green-peppers').on("click", function(){
    $('.green-pepper').toggle();
    $(this).toggleClass("active");
})

