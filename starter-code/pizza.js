// Write your Pizza Builder JavaScript in this file.
var totalPrice = 13

$('.crust').removeClass('crust-gluten-free')
$('.sauce').removeClass('sauce-white')
$('.btn-crust').removeClass('active')
$('.btn-sauce').removeClass('active')
$('.price ul li:nth-child(4)').hide()
$('.price ul li:nth-child(5)').hide()
$('.price strong').text('$13')

function update (target, price) {
    if($(target).hasClass('active')) {
    totalPrice -= price
    } else {
    totalPrice += price
    }
    $('.price strong').html('$'+totalPrice)
    $(target).toggleClass('active')
}

$('.btn-pepperonni').click(function(){
    update(this, parseInt($('.price ul li:nth-child(1)').text()[1]))
    $('.price ul li:nth-child(1)').toggle()
    $('.pep').toggle()
})
$('.btn-mushrooms').click(function(){
    update(this, parseInt($('.price ul li:nth-child(2)').text()[1]))
    $('.price ul li:nth-child(2)').toggle()
    $('.mushroom').toggle()
})
$('.btn-green-peppers').click(function(){
    update(this, parseInt($('.price ul li:nth-child(3)').text()[1]))
    $('.price ul li:nth-child(3)').toggle()
    $('.green-pepper').toggle()
})
$('.btn-sauce').click(function(){
    update(this, parseInt($('.price ul li:nth-child(4)').text()[1]))
    $('.price ul li:nth-child(4)').toggle()
    $('.sauce').toggleClass('sauce-white')
})
$('.btn-crust').click(function(){
    update(this, parseInt($('.price ul li:nth-child(5)').text()[1]))
    $('.price ul li:nth-child(5)').toggle()
    $('.crust').toggleClass('crust-gluten-free')
})

