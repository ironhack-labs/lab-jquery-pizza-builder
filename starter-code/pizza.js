$(document).ready(function() {

    var totalPrice = 13;

    function showTotalPrice() {
        var showTotal = document.querySelector('strong');
        showTotal.innerText = "$" + totalPrice;
    }

    showTotalPrice();

    $(".btn-green-peppers").toggleClass("active");
    $(".btn-mushrooms").toggleClass("active");
    $(".btn-pepperonni").toggleClass("active");
    $(".price ul li:nth-child(4)").hide();
    $(".price ul li:nth-child(5)").hide();

    $(".btn-green-peppers").click(function(event) {
        $('.green-pepper').toggle();
        $(".btn-green-peppers").toggleClass("active");
        $(".price ul li:nth-child(3)").toggle();
        if ($(".btn-green-peppers").hasClass("active")){
            totalPrice -= 1;
        } else {
            totalPrice += 1;
        }
        showTotalPrice();
    });
    $(".btn-mushrooms").click(function(event) {
        $('.mushroom').toggle();
        $(".btn-mushrooms").toggleClass("active");
        $(".price ul li:nth-child(2)").toggle();
        if ($(".btn-mushrooms").hasClass("active")){
            totalPrice -= 1;
        } else {
            totalPrice += 1;
        }
        showTotalPrice();
    });
    $(".btn-pepperonni").click(function(event) {
        $('.pep').toggle();
        $(".btn-pepperonni").toggleClass("active");
        $(".price ul li:nth-child(1)").toggle();
        if ($(".btn-pepperonni").hasClass("active")){
            totalPrice -= 1;
        } else {
            totalPrice += 1;
        }
        showTotalPrice();
    });
    $(".sauce").removeClass("sauce-white");
    $(".btn-sauce").click(function(event) {
        $(".sauce").toggleClass("sauce-white");
        $(".btn-sauce").toggleClass("active");
        $(".price ul li:nth-child(4)").toggle();
        if ($(".btn-sauce").hasClass("active")){
            totalPrice -= 3;
        } else {
            totalPrice += 3;
        }
        showTotalPrice();
    });
    $(".crust").removeClass("crust-gluten-free");
    $(".btn-crust").click(function(event) {
        $(".crust").toggleClass("crust-gluten-free");
        $(".btn-crust").toggleClass("active");
        $(".price ul li:nth-child(5)").toggle();
        if ($(".btn-crust").hasClass("active")){
            totalPrice -= 5;
        } else {
            totalPrice += 5;
        }
        showTotalPrice();
    });
});
