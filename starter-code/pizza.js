// Write your Pizza Builder JavaScript in this file
$(document).ready(function () {

    // code here

    var pizzaModel = {
        basePrice: 10,
        pepperonni: true,
        mushrooms: true,
        greenPeppers: true,
        whiteSauce: false,
        glutenFreeCrust: false
    };

    var whiteSauceClass = 'sauce-white';
    var glutenFreeCrustClass = 'crust-gluten-free';

    $('.controls .btn-pepperonni').on('click', function (evt) {
        $('.pep').toggle();
        $('.price ul :nth-child(1)').toggle();
        pizzaModel.pepperonni = !pizzaModel.pepperonni;
        updatePrice();
    });

    $('.controls .btn-mushrooms').on('click', function (evt) {
        $('.mushroom').toggle();
        $('.price ul :nth-child(2)').toggle();
        pizzaModel.mushrooms = !pizzaModel.mushrooms;
        updatePrice();
    });

    $('.controls .btn-green-peppers').on('click', function (evt) {
        $('.green-pepper').toggle();
        $('.price ul :nth-child(3)').toggle();
        pizzaModel.greenPeppers = !pizzaModel.greenPeppers;
        updatePrice();
    });


    $('.btn-sauce').on('click', function (evt) {
        $('.sauce').addClass(whiteSauceClass);
        $('.btn-sauce').toggleClass('selected');
        $('.price ul :nth-child(4)').toggle();
        pizzaModel.whiteSauce = !pizzaModel.whiteSauce;
        updatePrice();
    });

    $('.btn-crust').on('click', function (evt) {
        $('.crust').addClass(glutenFreeCrustClass);
        $('.btn-crust').toggleClass('selected');
        $('.price ul :nth-child(5)').toggle();
        pizzaModel.glutenFreeCrust = !pizzaModel.glutenFreeCrust;
        updatePrice();
    });

    // set to regular crust by default
    $('.crust').removeClass(glutenFreeCrustClass);
    $('.price ul :nth-child(5)').hide();


    // set to red sauce by default
    $('.sauce').removeClass(whiteSauceClass);
    $('.price ul :nth-child(4)').hide();

    // set the initial price
    updatePrice();


    function updatePrice() {

        var price = getPrice();

        $('.js-total-price').text(price);
    }
    function getPrice() {

        // calculate price from Pizza Model
        var price = pizzaModel.basePrice;

        if (pizzaModel.pepperonni) {
            price += 1;
        }

        if (pizzaModel.mushrooms) {
            price += 1;
        }

        if (pizzaModel.greenPeppers) {
            price += 1;
        }

        if (pizzaModel.whiteSauce) {
            price += 3;
        }

        if (pizzaModel.glutenFreeCrust) {
            price += 5;
        }

        return price;

    }
});