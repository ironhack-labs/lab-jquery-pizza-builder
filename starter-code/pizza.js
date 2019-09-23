let totalPrice = 13;

function updateTotalPrice(toppingPrice) {
    totalPrice += toppingPrice;
    $('.price strong').html('$' + totalPrice);
};

function toppingButtonClicked(button, displayItem, listItem, toppingPrice){
    listItem.toggle();
    displayItem.toggle();

    if (listItem.is(':visible') && !button.hasClass('active')){
        button.addClass('active');
        updateTotalPrice(toppingPrice);
    } else {
        button.removeClass('active');
        updateTotalPrice(-toppingPrice);
    };
};

function toppingRemove(button, displayItem, listItem, toppingPrice){
    listItem.hide();
    displayItem.hide();

    if (listItem.is(':visible') && !button.hasClass('active')){
        button.addClass('active');
        updateTotalPrice(toppingPrice);
    } else {
        button.removeClass('active');
        updateTotalPrice(-toppingPrice);
    };
};

//pepperonni
$('.btn-pepperonni').click(function(){
    toppingButtonClicked($('.btn-pepperonni'), $('.pep'), $('.price li:eq(0)'), 1);
});

$('.price li:eq(0)').click(function() {
    toppingRemove($('.btn-pepperonni'), $('.pep'), $('.price li:eq(0)'), 1);
});

//mushrooms
$('.btn-mushrooms').click(function(){
    toppingButtonClicked($('.btn-mushrooms'), $('.mushroom'), $('.price li:eq(1)'), 1);
});

$('.price li:eq(1)').click(function() {
    toppingRemove($('.btn-mushrooms'), $('.mushroom'), $('.price li:eq(1)'), 1);
});

//green-peppers
$('.btn-green-peppers').click(function(){
    toppingButtonClicked($('.btn-green-peppers'), $('.green-pepper'), $('.price li:eq(2)'), 1);
});

$('.price li:eq(2)').click(function() {
    toppingRemove($('.btn-green-peppers'), $('.green-pepper'), $('.price li:eq(2)'), 1);
});

//sauce
$('.btn-sauce').click(function() {
    $(`.price li:contains("$3 white sauce")`).toggle();

    if ($(`.price li:contains("$3 white sauce"):visible`) && !$('.btn-sauce').hasClass('active')){
        $(this).addClass('active');
        updateTotalPrice(3)
    } else {
        $(this).removeClass('active');
        updateTotalPrice(-3)
    };
});

$(`.price li:contains("$3 white sauce")`).click(function(){
    $(this).hide();

    if ($(`.price li:contains("$3 white sauce"):visible`) && !$('.btn-sauce').hasClass('active')){
        $(this).addClass('active');
        updateTotalPrice(3)
    } else {
        $(this).removeClass('active');
        updateTotalPrice(-3)
    };
});

//crust
$('.btn-crust').click(function() {
    $(`.price li:contains("$5 gluten-free crust")`).toggle();

    if ($(`.price li:contains("$5 gluten-free crust"):visible`) && !$('.btn-crust').hasClass('active')){
        $(this).addClass('active');
        updateTotalPrice(5)
    } else {
        $(this).removeClass('active');
        updateTotalPrice(-5)
    };
});

$(`.price li:contains("$5 gluten-free crust")`).click(function(){
    $(this).hide();

    if ($(`.price li:contains("$5 gluten-free crust"):visible`) && !$('.btn-crust').hasClass('active')){
        $(this).addClass('active');
        updateTotalPrice(5)
    } else {
        $(this).removeClass('active');
        updateTotalPrice(-5)
    };
});
