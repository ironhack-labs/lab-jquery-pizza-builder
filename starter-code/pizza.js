// Write your Pizza Builder JavaScript in this file.

$(function() {
    
    $('.sauce').toggleClass('sauce-white')
    $('.btn-sauce').toggleClass("active");

    $('.crust').toggleClass('crust-gluten-free')
    $('.btn-crust').toggleClass("active");

  });
  

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

$('.btn-sauce').on("click", function(){
    $('.sauce').toggleClass('sauce-white')
    $(this).toggleClass("active");
})

$('.btn-crust').on("click", function(){
    $('.crust').toggleClass('crust-gluten-free')
    $(this).toggleClass("active");
})