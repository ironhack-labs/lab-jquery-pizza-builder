// Write your Pizza Builder JavaScript in this file.
$(() => {

    $(".price li:contains(white sauce)").hide();
    $(".price li:contains(gluten-free crust)").hide();

    $(".btn-sauce").removeClass("active");
    $(".btn-crust").removeClass("active");

    $(".sauce").removeClass("sauce-white");
    $(".crust").removeClass("crust-gluten-free");

    $(".btn-pepperonni").click(function () {
        $(".pep").toggle();
        $(".price li:contains(pepperonni)").toggle();


    });

    $(".btn-mushrooms").click(function () {
        $(".mushroom").toggle();
        $(".price li:contains(mushrooms)").toggle();
    });

    $(".btn-green-peppers").click(function () {
        $(".green-pepper").toggle();
        $(".price li:contains(green peppers)").toggle();
    });

    $(".btn-sauce").click(function () {
        $(".sauce").toggleClass("sauce-white");
        $(".price li:contains(white sauce)").toggle();
    });

    $(".btn-crust").click(function () {
        $(".crust").toggleClass("crust-gluten-free");
        $(".price li:contains(gluten-free crust)").toggle();
    });

    $(".btn").click(function () { $(this).toggleClass("active"); });

})