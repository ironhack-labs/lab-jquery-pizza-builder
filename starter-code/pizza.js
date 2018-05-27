// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
    $(".btn-green-peppers").click(function(event) {
        $(".green-pepper").toggleClass("hidden");
        $(".btn-green-peppers").toggleClass("active");
    });

    $(".btn-mushrooms").click(function(event) {
        $(".mushroom").toggleClass("hidden");
        $(".btn-mushrooms").toggleClass("active");
    });

    $(".btn-pepperonni").click(function(event) {
        $(".pep").toggleClass("hidden");
        $(".btn-pepperonni").toggleClass("active");
    });

    $(".crust").removeClass("crust-gluten-free");
    $(".btn-crust").removeClass("active");

    $(".btn-crust").click(function(event) {
        $(".crust").toggleClass("crust-gluten-free");
        $(".btn-crust").toggleClass("active");
    });

    $(".sauce").removeClass("sauce-white");
    $(".btn-sauce").removeClass("active");

    $(".btn-sauce").click(function(event) {
        $(".sauce").toggleClass("sauce-white");
        $(".btn-sauce").toggleClass("active");
    });
});
