// Write your Pizza Builder JavaScript in this file.
$(() => {

    $(".price li").val(function () {

        var leftSide = $(this).text().split(" ");

        return leftSide[0].replace("$", "");

    });

    $(".price li:contains(white sauce)").hide();
    $(".price li:contains(gluten-free crust)").hide();

    $(".btn-sauce").removeClass("active");
    $(".btn-crust").removeClass("active");

    $(".sauce").removeClass("sauce-white");
    $(".crust").removeClass("crust-gluten-free");



    $(".btn-pepperonni").click(function () {
        $(".pep").toggle();
        $(".price li:contains(pepperonni)").toggle();
        updatePrice();
    });

    $(".btn-mushrooms").click(function () {
        $(".mushroom").toggle();
        $(".price li:contains(mushrooms)").toggle();
        updatePrice();
    });

    $(".btn-green-peppers").click(function () {
        $(".green-pepper").toggle();
        $(".price li:contains(green peppers)").toggle();
        updatePrice();
    });

    $(".btn-sauce").click(function () {
        $(".sauce").toggleClass("sauce-white");
        $(".price li:contains(white sauce)").toggle();
        updatePrice();
    });

    $(".btn-crust").click(function () {
        $(".crust").toggleClass("crust-gluten-free");
        $(".price li:contains(gluten-free crust)").toggle();
        updatePrice();
    });

    $(".btn").click(function () { $(this).toggleClass("active"); });


    function updatePrice() {

        var total = 10;

        $(".price li:visible").each(function () {

            total += $(this).val();

        });

        $("strong").text("$" + total);

    }

})