// Write your Pizza Builder JavaScript in this file.
const hideShow = topping => {
    ($(`.${topping}`).css('display') == 'none') ? $(`.${topping}`).show() : $(`.${topping}`).hide();    
} 

$('button.btn-pepperonni').on('click', function () {
    hideShow('pep');
    $(this).toggleClass('active');
});

$('button.btn-mushrooms').on('click', function () {
    hideShow('mushroom');
    $(this).toggleClass('active');
});

$('button.btn-green-peppers').on('click', function () {
    hideShow('green-pepper');
    $(this).toggleClass('active');
});

$('button.btn-sauce').on('click', function () {
    $(".sauce").toggleClass('sauce-white');
    $(this).toggleClass('active');
});

$('button.btn-crust').on('click', function () {
    $(".crust").toggleClass('crust-gluten-free');
    $(this).toggleClass('active');
});