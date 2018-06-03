// Write your Pizza Builder JavaScript in this file.
function setup() {
    $(".pep").hide();
    $(".mushroom").hide();
    $(".green-pepper").hide();

    $(".btn-pepperonni").toggleClass("active");
    $(".btn-mushrooms").toggleClass("active");
    $(".btn-green-peppers").toggleClass("active");
    $("aside.panel.price ul li:nth-child(1)").hide();
    $("aside.panel.price ul li:nth-child(2)").hide();
    $("aside.panel.price ul li:nth-child(3)").hide();
    bill();
}

function bill() {
    var cost = 10;
    var menu = $("aside.panel.price ul li:visible");
    for (var i = 0; i < menu.length; i++) {
        cost += parseInt(menu[i].textContent.substr(1, 2));
        console.log(">" + cost + ">" + parseInt(menu[i].textContent.substr(1, 2)));
    };
    $("aside.panel.price strong").text("$" + cost);
}

$(document).ready(function () {
    
    setup();

    $(".btn-pepperonni").click(function (event) {
        if ($(".pep:hidden").length > 0) {
            $(".pep").show(500);
            $("aside.panel.price ul li:nth-child(1)").show();
        } else {
            $(".pep").hide(500);
            $("aside.panel.price ul li:nth-child(1)").hide();
        }
        $(".btn-pepperonni").toggleClass("active");
        bill();
    });
    $(".btn-mushrooms").click(function (event) {
        if ($(".mushroom:hidden").length > 0) {
            $(".mushroom").show(500);
            $("aside.panel.price ul li:nth-child(2)").show();
        } else {
            $(".mushroom").hide(500);
            $("aside.panel.price ul li:nth-child(2)").hide();
        }
        $(".btn-mushrooms").toggleClass("active");
        bill();
    });
    $(".btn-green-peppers").click(function (event) {
        if ($(".green-pepper:hidden").length > 0) {
            $(".green-pepper").show(500);
            $("aside.panel.price ul li:nth-child(3)").show();
        } else {
            $(".green-pepper").hide(500);
            $("aside.panel.price ul li:nth-child(3)").hide();
        }
        $(".btn-green-peppers").toggleClass("active");
        bill();
    });
    $(".btn-sauce").click(function (event) {
        if ($(".sauce:hidden").length > 0) {
            $(".sauce").show(500);
            $("aside.panel.price ul li:nth-child(4)").show();
        } else {
            $(".sauce").hide(500);
            $("aside.panel.price ul li:nth-child(4)").hide();
        }
        $(".btn-sauce").toggleClass("active");
        bill();
    });
    $(".btn-crust").click(function (event) {
        if ($(".crust:hidden").length > 0) {
            $(".crust").show(500);
            $("aside.panel.price ul li:nth-child(5)").show();
        } else {
            $(".crust").hide(500);
            $("aside.panel.price ul li:nth-child(5)").hide();
        }
        $(".btn-crust").toggleClass("active");
        bill();
    });
})
