// Write your Pizza Builder JavaScript in this file.
let buttons = [
    {
        selector: `.btn-pepperonni`,
        item: `.pep`,
        className: null,
        text: `pepperonni`,
        price: 1
    },
    {
        selector: `.btn-mushrooms`,
        item: `.mushroom`,
        className: null,
        text: `mushrooms`,
        price: 1
    },
    {
        selector: `.btn-green-peppers`,
        item: `.green-pepper`,
        className: null,
        text: `green peppers`,
        price: 1
    },
    {
        selector: `.btn-sauce`,
        item: `.sauce`,
        className: `sauce-white`,
        text: `white sauce`,
        price: 3
    },
    {
        selector: `.btn-crust`,
        item: `.crust`,
        className: `crust-gluten-free`,
        text: `gluten-free`,
        price: 5
    }
]
let price = 21;
$(function () {
    $.each(buttons, function (index, button) {
        $(button.selector).click(function (element) {
            $(this).toggleClass('active');
            $('.price ul li:contains(' + button.text + ')').toggle(500);
            button.className ? $(button.item).toggleClass(button.className) : $(button.item).toggle();
            $(this).hasClass(`active`) ? price += button.price : price -= button.price;
            $('.price strong').text('$' + price);
        })
    })
    $('.btn-crust, .btn-sauce').click();
})