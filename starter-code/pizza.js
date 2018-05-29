// Write your Pizza Builder JavaScript in this file.
$(() => {

    $(".btn").removeClass("active");

    $(".sauce").removeClass("sauce-white");
    $(".crust").removeClass("crust-gluten-free");

    $(".btn-pepperonni").click(() => $(".pep").toggle());
    $(".btn-mushrooms").click(() => $(".mushroom").toggle());
    $(".btn-green-peppers").click(() => $(".green-pepper").toggle());

    $(".btn-sauce").click(() => $(".sauce").toggleClass("sauce-white"));
    $(".btn-crust").click(() => $(".crust").toggleClass("crust-gluten-free"));

    $(".btn").click(function () { $(this).toggleClass("active"); });

})