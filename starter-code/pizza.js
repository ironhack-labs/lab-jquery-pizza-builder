// Write your Pizza Builder JavaScript in this file.

$(function() {
    
    $('.sauce').toggleClass('sauce-white')
    $('.btn-sauce').toggleClass("active");

    $('.crust').toggleClass('crust-gluten-free');
    $('.btn-crust').toggleClass("active");

    $('.panel.price li').eq(3).toggle();
    $('.panel.price li').eq(4).toggle();

  });
  

$('.btn-pepperonni').on("click", function(){
    $('.pep').toggle();
    $(this).toggleClass("active");
    $('.panel.price li').eq(0).toggle();
})

$('.btn-mushrooms').on("click", function(){
    $('.mushroom').toggle();
    $(this).toggleClass("active");
    $('.panel.price li').eq(1).toggle()
})

$('.btn-green-peppers').on("click", function(){
    $('.green-pepper').toggle();
    $(this).toggleClass("active");
    $('.panel.price li').eq(2).toggle()
})

$('.btn-sauce').on("click", function(){
    $('.sauce').toggleClass('sauce-white')
    $(this).toggleClass("active");
    $('.panel.price li').eq(3).toggle()
})

$('.btn-crust').on("click", function(){
    $('.crust').toggleClass('crust-gluten-free')
    $(this).toggleClass("active");
    $('.panel.price li').eq(4).toggle();
})