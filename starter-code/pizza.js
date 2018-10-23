// Write your Pizza Builder JavaScript in this file.
let valPepperonni = 1;
let valMushroom = 1;
let valGreen = 1;
let valSauce = 3;
let valCrust = 5;
let total = 21;
console.log(total);


$(".btn-pepperonni").click(
    function () {
        $(".btn-pepperonni").toggleClass("active");
        if ($(".btn-pepperonni").hasClass("active")) {
            total += 1;
        } else {
            total -= 1;
        }
        $("aside strong").html(`$${total}`);
        $(".pep").fadeToggle("fast");
        $("aside ul li:eq(0)").fadeToggle("fast");
    }
);

$(".btn-mushrooms").click(
    function () {
        $(".btn-mushrooms").toggleClass("active");
        if ($(".btn-mushrooms").hasClass("active")) {
            total += 1;
        } else {
            total -= 1;
        }
        $("aside strong").html(`$${total}`);
        $(".mushroom").fadeToggle("fast");
        $("aside ul li:eq(1)").fadeToggle("fast");

    }
);

$(".btn-green-peppers").click(
    function () {
        $(".btn-green-peppers").toggleClass("active");
        if ($(".btn-green-peppers").hasClass("active")) {
            total += 1;
        } else {
            total -= 1;
        }
        $("aside strong").html(`$${total}`);
        $(".green-pepper").fadeToggle("fast");
        $("aside ul li:eq(2)").fadeToggle("fast");
    }
);

$(".btn-sauce").click(
    function () {
        $(".btn-sauce").toggleClass("active");
        if ($(".btn-sauce").hasClass("active")) {
            total += 3;
        } else {
            total -= 3;
        }
        $("aside strong").html(`$${total}`);
        $(".sauce").fadeToggle("fast");
        $("aside ul li:eq(3)").fadeToggle("fast");
    }
);

$(".btn-crust").click(
    function () {
        $(".btn-crust").toggleClass("active");
        if ($(".btn-crust").hasClass("active")) {
            total += 5;
            $(".crust").addClass("crust-gluten-free");
        } else {
            total -= 5;
            $(".crust").removeClass("crust-gluten-free");
        }
        $("aside strong").html(`$${total}`);
        $("aside ul li:eq(4)").fadeToggle("fast");
    }
);
