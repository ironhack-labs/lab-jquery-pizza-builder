// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
$('.btn-pepperonni').click(function(){
    $(".pep").toggle()
    $('.btn-pepperonni').toggleClass('active')
    $('.price li:first').toggle()
})
$('.btn-mushrooms').click(function(){
    $(".mushroom").toggle()
    $('.btn-mushrooms').toggleClass('active')
    $('.price li:nth-child(2)').toggle()
})
$('.btn-green-peppers').click(function(){
    $(".green-pepper").toggle()
    $('.btn-green-peppers').toggleClass('active')
    $('.price li:nth-child(3)').toggle()
})
$('sauce').removeClass('white-sauce')
$('btn-sauce').removeClass('active')
$('.btn-sauce').click(function(){
    $('.btn-sauce').toggleClass('active')
    $('.sauce').toggleClass('sauce-white')
    $('.price li:nth-child(4)').toggle()
})
 $('.crust').removeClass('crust-gluten-free')
$('btn-crust').removeClass('active')
$('.btn-crust').click(function(){
    $('.btn-crust').toggleClass('active')
    $('.crust').toggleClass('crust-gluten-free')
    $('.price li:nth-child(5)').toggle()
})


// $('.btn-pepperonni').click(function(){
//     $(".pep").toggle()
// })
// $('.btn-mushrooms').click(function(){
//     $(".mushroom").toggle()
// })
// $('.btn-green-peppers').click(function(){
//     $(".green-pepper").toggle()
// })
})