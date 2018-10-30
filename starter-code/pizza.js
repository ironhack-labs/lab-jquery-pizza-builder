var actualPrice = 13;
initalValues();

$(function () {

    $('.btn-pepperonni').on('click', function (e) {
        $('.pep').toggle(".pep");
        if ($(".btn-pepperonni").hasClass('active')) {
            $(".btn-pepperonni").removeClass('active');
            $(".price li:eq(0)").hide();
            lessIngredientPrice(1);
        } else {
            $(".btn-pepperonni").addClass('active');
            $(".price li:eq(0)").show();
            addIngredientPrice(1);
        }
    });
    $('.btn-mushrooms').on('click', function (e) {
        $('.mushroom').toggle(".mushroom");
        if ($(".btn-mushrooms").hasClass('active')) {
            $(".btn-mushrooms").removeClass('active');
            $(".price li:eq(1)").hide();
            lessIngredientPrice(1);
        } else {
            $(".btn-mushrooms").addClass('active');
            $(".price li:eq(1)").show();
            addIngredientPrice(1);
        }
    });
    $('.btn-green-peppers').on('click', function (e) {
        $('.green-pepper').toggle(".green-pepper");
        if ($(".btn-green-peppers").hasClass('active')) {
            $(".btn-green-peppers").removeClass('active');
            $(".price li:eq(2)").hide();
            lessIngredientPrice(1);
        } else {
            $(".btn-green-peppers").addClass('active');
            $(".price li:eq(2)").show();
            addIngredientPrice(1);
        }
    });


    $('.btn-sauce').on('click', function (e) {
        if ($("#sauce").hasClass('sauce-white')) {
            $("#sauce").removeClass('sauce-white');
            $(".btn-sauce").removeClass('active');
            $(".price li:eq(3)").hide();
            lessIngredientPrice(3);
        } else {
            $("#sauce").addClass('sauce-white');
            $(".btn-sauce").addClass('active');
            $(".price li:eq(3)").show();
            addIngredientPrice(3);
        }
    });

    $('.btn-crust').on('click', function (e) {
        if ($("#pan").hasClass('crust-gluten-free')) {
            $("#pan").removeClass('crust-gluten-free');
            $(".btn-crust").removeClass('active');
            $(".price li:eq(4)").hide();
            lessIngredientPrice(5);
        } else {
            $("#pan").addClass('crust-gluten-free');
            $(".btn-crust").addClass('active');
            $(".price li:eq(4)").show();
            addIngredientPrice(5);
        }
    });

});

function initalValues() {

    $("#sauce").removeClass('sauce-white');

    $("#pan").removeClass('crust-gluten-free');

    $(".btn-sauce").removeClass('active');

    $(".btn-crust").removeClass('active');
    $(".price li:eq(3)").hide();

    $(".price li:eq(4)").hide();
}

function addIngredientPrice(price) {
    actualPrice += price;
    $("strong").text(`$${actualPrice}`);
}

function lessIngredientPrice(price) {
    actualPrice -= price;
    $("strong").text(`$${actualPrice}`);
}