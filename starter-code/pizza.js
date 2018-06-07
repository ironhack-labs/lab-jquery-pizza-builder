// Write your Pizza Builder JavaScript in this file.
function setup() {
    $(".pep").hide();
    $(".mushroom").hide();
    $(".green-pepper").hide();
    $(".crust").toggleClass("crust-gluten-free");
    $(".sauce").toggleClass("sauce-white");

    $(".btn-pepperonni").toggleClass("active");
    $(".btn-mushrooms").toggleClass("active");
    $(".btn-green-peppers").toggleClass("active");
    $(".btn-sauce").toggleClass("active");
    $(".btn-crust").toggleClass("active");
    $("aside.panel.price ul li").hide();
   
    bill();
}

function bill() {
    var cost = 10;
    var menu = $("aside.panel.price ul li:visible");
    for (var i = 0; i < menu.length; i++) {
        cost += parseInt(menu[i].textContent.substr(1, 2));
    };
    $("aside.panel.price strong").text("$" + cost);
}

$(document).ready(function () {
    
    setup();

    $(".btn-pepperonni").click(function (event) {
        if ($(".pep:hidden").length > 0) {
            $(".pep").show(500);
            $("aside.panel.price ul li:nth-child(1)").show(500);
        } else {
            $(".pep").hide(500);
            $("aside.panel.price ul li:nth-child(1)").hide(500);
        }
        $(".btn-pepperonni").toggleClass("active");
        bill();
    });
    $(".btn-mushrooms").click(function (event) {
        if ($(".mushroom:hidden").length > 0) {
            $(".mushroom").show(500);
            $("aside.panel.price ul li:nth-child(2)").show(500);
        } else {
            $(".mushroom").hide(500);
            $("aside.panel.price ul li:nth-child(2)").hide(500);
        }
        $(".btn-mushrooms").toggleClass("active");
        bill();
    });
    $(".btn-green-peppers").click(function (event) {
        if ($(".green-pepper:hidden").length > 0) {
            $(".green-pepper").show(500);
            $("aside.panel.price ul li:nth-child(3)").show(500);
        } else {
            $(".green-pepper").hide(500);
            $("aside.panel.price ul li:nth-child(3)").hide(500);
        }
        $(".btn-green-peppers").toggleClass("active");
        bill();
    });
    $(".btn-sauce").click(function (event) {
        $(".sauce").toggleClass("sauce-white");
        if ($(".sauce.sauce-white").length > 0) {
            $("aside.panel.price ul li:nth-child(4)").show(500);
        } else {
            $("aside.panel.price ul li:nth-child(4)").hide(500);
        }
        $(".btn-sauce").toggleClass("active");

        bill();
    });
    $(".btn-crust").click(function (event) {
        $(".crust").toggleClass("crust-gluten-free");
    
        if ($(".crust.crust-gluten-free").length > 0) {
            $("aside.panel.price ul li:nth-child(5)").show(500);
        } else {
            $("aside.panel.price ul li:nth-child(5)").hide(500);
        }
        $(".btn-crust").toggleClass("active");
        bill();
    });
})
