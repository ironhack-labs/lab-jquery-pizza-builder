// Write your Pizza Builder JavaScript in this file.


function fixPrices() {
    $(`.price>ul>li:eq(4)`).hide();
    $(`.price>ul>li:eq(3)`).hide();
}

fixPrices();

function isActive(thisScope) {
    if ($(thisScope).hasClass("active")) {
        $(thisScope).removeClass("active");
    } else {
        $(thisScope).addClass("active");
    }
}
parseInt($(`strong>span`).text());



function showPrice(thisScope, ingrIndex) {
    if ($(thisScope).hasClass("active")) {
        $(`.price>ul>li:eq(${ingrIndex})`).show();
    } else {
        $(`.price>ul>li:eq(${ingrIndex})`).hide();
    }
}

function totalPrice() {
    var base = parseInt($(".price>b").text().match(/\d+/)[0])
    console.log(base)
    $(".price>ul>li:visible").each(function() {   
       base += parseInt($(this).text().match(/\d+/)[0])
    })
    $(".price>strong").text(`$${base}`);
}

$(".btn-green-peppers").click(function () {
    $(".green-pepper").toggle();
    isActive(this);
    showPrice(this, 2);
    totalPrice();
})

$(".btn-mushrooms").click(function () {
    $(".mushroom").toggle();
    isActive(this);
    showPrice(this, 1);
    totalPrice();

})
$(".btn-pepperonni").click(function () {
    $(".pep").toggle();
    isActive(this);
    showPrice(this, 0);
    totalPrice();

})
$(".btn-crust").click(function () {
    if ($(".crust").hasClass("crust-gluten-free")) {
        $(".crust").removeClass("crust-gluten-free");
    } else {
        $(".crust").addClass("crust-gluten-free");
    }
    isActive(this);
    showPrice(this, 4);
    totalPrice();

})

$(".btn-sauce").click(function () {
    if ($(".sauce").hasClass("sauce-white")) {
        $(".sauce").removeClass("sauce-white");
    } else {
        $(".sauce").addClass("sauce-white");
    }
    isActive(this);
    showPrice(this, 3);
    totalPrice();

})