// Write your Pizza Builder JavaScript in this file.

$('.price li:nth-child(4)').hide()
$('.price li:nth-child(5)').hide()
$('section.crust').removeClass('crust-gluten-free')
$('section.sauce').removeClass('sauce-white')
$('button.btn-sauce').removeClass('active')
$('button.btn-crust').removeClass('active')


var basePrice = parseInt($('.price b').text().split(' ')[0].substr(1));
var pepPrice = parseInt($('.price li:nth-child(1)').text().split(' ')[0].substr(1))
var mushPrice = parseInt($('.price li:nth-child(2)').text().split(' ')[0].substr(1))
var greenPrice = parseInt($('.price li:nth-child(3)').text().split(' ')[0].substr(1))
var saucePrice = parseInt($('.price li:nth-child(4)').text().split(' ')[0].substr(1))
var crustPrice = parseInt($('.price li:nth-child(5)').text().split(' ')[0].substr(1))
var totalPrice = basePrice + pepPrice + greenPrice + mushPrice//initial price


function updatePrice (){
    $('aside.price strong').text('$' + totalPrice)
}

updatePrice()
// console.log(totalPrice)

$('button.btn-green-peppers').click(function(){
    $('.green-pepper').toggle()
    $('.price li:nth-child(3)').toggle()
    if($('button.btn-green-peppers').hasClass('active')){
        $('button.btn-green-peppers').removeClass('active')
        totalPrice = totalPrice - greenPrice
        updatePrice()
    } else {
        $('button.btn-green-peppers').addClass('active')
        totalPrice = totalPrice + greenPrice
        updatePrice()
    }
})

$('button.btn-mushrooms').click(function(){
    $('.mushroom').toggle()
    $('.price li:nth-child(2)').toggle()
    if($('button.btn-mushrooms').hasClass('active')){
        $('button.btn-mushrooms').removeClass('active')
        totalPrice = totalPrice - mushPrice
        updatePrice()
    } else {
        $('button.btn-mushrooms').addClass('active')
        totalPrice = totalPrice + mushPrice
        updatePrice()
    }
})

$('button.btn-pepperonni').click(function(){
    $('.pep').toggle()
    $('.price li:nth-child(1)').toggle()
    if($('button.btn-pepperonni').hasClass('active')){
        $('button.btn-pepperonni').removeClass('active')
        totalPrice = totalPrice - pepPrice
        updatePrice()
    } else {
        $('button.btn-pepperonni').addClass('active')
        totalPrice = totalPrice + pepPrice
        updatePrice()
    }
})

$('button.btn-crust').click(function(){
    $('.price li:nth-child(5)').toggle()
    if($('section.crust').hasClass('crust-gluten-free')){
        $('section.crust').removeClass('crust-gluten-free')
        $('button.btn-crust').removeClass('active')
        totalPrice = totalPrice - crustPrice
        updatePrice()
    } else {
        $('section.crust').addClass('crust-gluten-free')
        $('button.btn-crust').addClass('active')
        totalPrice = totalPrice + crustPrice
        updatePrice()
    }
})

$('button.btn-sauce').click(function(){
    $('.price li:nth-child(4)').toggle()
    if($('section.sauce').hasClass('sauce-white')){
        $('section.sauce').removeClass('sauce-white')
        $('button.btn-sauce').removeClass('active')
        totalPrice = totalPrice - saucePrice
        updatePrice()
    } else {
        $('section.sauce').addClass('sauce-white')
        $('button.btn-sauce').addClass('active')
        totalPrice = totalPrice + saucePrice
        updatePrice()
    }
})




