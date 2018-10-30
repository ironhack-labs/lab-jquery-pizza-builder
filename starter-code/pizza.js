// Write your Pizza Builder JavaScript in this file.
function isActive() {
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
    } else {
        $(this).addClass("active");
    }
}

$(".btn-green-peppers").click(function () {
    $(".green-pepper").toggle();
    isActive();
})

$(".btn-mushrooms").click(function () {
    $(".mushroom").toggle();
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
    } else {
        $(this).addClass("active");
    }
})
$(".btn-pepperonni").click(function () {
    $(".pep").toggle();
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
    } else {
        $(this).addClass("active");
    }
})
$(".btn-crust").click(function () {
    if ($(".crust").hasClass("crust-gluten-free")) {
        $(".crust").removeClass("crust-gluten-free");
    } else {
        $(".crust").addClass("crust-gluten-free");
    }
})

$(".btn-sauce").click(function () {
    if ($(".sauce").hasClass("sauce-white")) {
        $(".sauce").removeClass("sauce-white");
    } else {
        $(".sauce").addClass("sauce-white");
    }
})