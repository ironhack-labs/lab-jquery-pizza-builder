// Write your Pizza Builder JavaScript in this file.
// Quitar Champiñones
$(document).ready(function (){
    $('.btn-mushrooms').on("click", function () {
    $('.cap').toggle();
    $('.stem').toggle();
    });
});

// Quitar Champiñones
$(document).ready(function () {
    $('.btn-pepperonni').on("click", function () {
        $('.pep').toggle();
    });
});

// Quitar pimientos
$(document).ready(function () {
    $('.btn-green-peppers').on("click", function () {
        $('.green-pepper').toggle();
    });
});