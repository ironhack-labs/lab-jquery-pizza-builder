// Write your Pizza Builder JavaScript in this file.

$(".btn-pepperonni").on("click", function () {

    $('.pep').toggle()
    $('.btn-pepperonni').toggleClass('active')
    $('aside li:contains("pepperonni")').toggle()
    // if($('.pep').css('display') === 'none'){
    //     $('.pep').css('display','block')
    // }else {
    //     $('.pep').css('display','none')
    // }
})

$(".btn-mushrooms").on("click", function () {

    $('.mushroom').toggle()
    $('.btn-mushrooms').toggleClass('active')
    $('aside li:contains("mushrooms")').toggle()
    // if($('.mushroom').css('display') === 'none'){
    //     $('.mushroom').css('display','block')
    // }else {
    //     $('.mushroom').css('display','none')
    // }
})

$(".btn-green-peppers").on("click", function () {

    $('.green-pepper').toggle()
    $('.btn-green-peppers').toggleClass('active')
    $('aside li:contains("green peppers")').toggle()
    // if($('.green-pepper').css('display') === 'none'){
    //     $('.green-pepper').css('display','block')
    // }else {
    //     $('.green-pepper').css('display','none')
    // }
})

$(".btn-sauce").on("click", function () {

    $('.sauce-white').toggle()
    $('.btn-sauce').toggleClass('active')
    $('aside li:contains("white sauce")').toggle()
    
})

$(".btn-crust").on("click", function () {

    $('.crust-gluten-free').toggle()
    $('.btn-crust').toggleClass('active')
    $('aside li:contains("gluten-free crust")').toggle()
    
})





