// Write your Pizza Builder JavaScript in this file.

//---------------------------------------------
let finalPrice = 13;

$('button.btn-pepperonni').click(() =>
{
    $('.pep').toggle()
    $('.btn-pepperonni').toggleClass('active')
    $('#pricePep').toggleClass('hidden')

    if($('.btn-pepperonni').hasClass('active'))
    {
        finalPrice += 1; 
    }
    else
    {
        finalPrice -= 1;
    }
    $("#finalPrice").text("$" + finalPrice);
})

$('button.btn-mushrooms').click(() =>
{
    $('.mushroom').toggle()
    $('.btn-mushrooms').toggleClass('active')
    $('#priceMush').toggleClass('hidden')

    if($('.btn-mushrooms').hasClass('active'))
    {
        finalPrice += 1;
    }
    else
    {
        finalPrice -= 1;
    }
    $("#finalPrice").text("$" + finalPrice);
})

$('button.btn-green-peppers').click(() =>
{
    $('.green-pepper').toggle()
    $('.btn-green-peppers').toggleClass('active')
    $('#priceGreen').toggleClass('hidden')

    if($('.btn-green-peppers').hasClass('active'))
    {
        finalPrice += 1;
    }
    else
    {
        finalPrice -= 1;
    }
    $("#finalPrice").text("$" + finalPrice);
})

//---------------------------------------------

$('button.btn-sauce').click(() =>
{
    $('.sauce').toggleClass('sauce-white')
    $('.btn-sauce').toggleClass('active')
    $('#priceWhite').toggleClass('hidden')

    if($('.btn-sauce').hasClass('active'))
    {
        finalPrice += 3;
    }
    else
    {
        finalPrice -= 3;
    }
    $("#finalPrice").text("$" + finalPrice);
})

$('button.btn-crust').click(() =>
{
    $('.crust').toggleClass('crust-gluten-free')
    $('.btn-crust').toggleClass('active')
    $('#priceCrust').toggleClass('hidden')

    if($('.btn-crust').hasClass('active'))
    {
        finalPrice += 5;
    }
    else
    {
        finalPrice -= 5;
    }
    $("#finalPrice").text("$" + finalPrice);
})

//---------------------------------------------

$('.sauce').toggleClass('sauce-white')
$('.crust').toggleClass('crust-gluten-free')

//---------------------------------------------

