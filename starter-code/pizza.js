//var peppperonni = "btn-pepperonni";
//var mush =  "btn-mushrooms";
//var peppers = "btn-green-peppers";



$(document).ready(function () {

    $(".btn-pepperonni").click(function () {
        $(".pep").toggle();

    });
    $(".btn-mushrooms").click(function () {
        $(".mushroom").toggle();
    });
    $(".btn-green-peppers").click(function () {
        $(".green-pepper").toggle();
    });
    $(".btn-sauce").click(function () {
        $(".sauce-white").toggle();
    });
    $(".btn-crust").click(function () {
        $(".crust").toggleClass("crust-gluten-free");
    })





});


// $(".active").toggle()