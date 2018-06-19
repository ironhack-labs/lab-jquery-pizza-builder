// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
    // $('.crust').removeClass('crust-gluten-free')
$('.sauce').removeClass('sauce-white')
$("li:contains('$5 gluten-free crust')").hide()
$("li:contains('$3 white sauce')").hide()
var totalPrice = 13;
$('strong').text('$'+totalPrice);
$('.btn-sauce').removeClass('active')

$('.btn-pepperonni').click(function(event){
    $('.pep').toggle();
    $("li:contains('pepperonni')").toggle();
    if ($('.btn-pepperonni').hasClass('active')){
        totalPrice -=1;
    }
    else {
        totalPrice +=1
    }
    
    $('strong').text('$'+totalPrice);
})
$('.btn-green-peppers').click(function(event){
    $('.green-pepper').toggle();
    $("li:contains('green peppers')").toggle()
    if ($('.btn-green-peppers').hasClass('active')){
        totalPrice -=1;
    }
    else {
        totalPrice +=1
    }
    
    $('strong').text('$'+totalPrice);
})
$('.btn-mushrooms').click(function(event){
    $('.mushroom').toggle();
    $("li:contains('mushrooms')").toggle()
    if ($('.btn-mushrooms').hasClass('active')){
        totalPrice -=1;
    }
    else {
        totalPrice +=1
    }
    
    $('strong').text('$'+totalPrice);
})
$('.btn-crust').click(function(event){
    $('.crust').toggleClass('crust-gluten-free');
    $("li:contains('gluten-free crust')").toggle()
    if ($('.btn-crust').hasClass('active')){
        totalPrice -=5;
    }
    else {
        totalPrice +=5
    }
    
    $('strong').text('$'+totalPrice);
})
$('.btn-sauce').click(function(event){
    $('.sauce').toggleClass('sauce-white');
    $("li:contains('white sauce')").toggle();
    if ($('.btn-sauce').hasClass('active')){
        totalPrice -=3;
    }
    else {
        totalPrice +=3
    }
    
    $('strong').text('$'+totalPrice);
})

$('.btn').click(function(event){
    $(this).toggleClass('active')
})
  });

// 
//   $("button").click(function(event){
//     $(this).addClass('awesome-buttom')
//     colorfulBox.toggleClass('example-div').toggleClass*'smaller-purple')
// });

// $('li').hide();
// $('li').show();
// $('li').toggle();