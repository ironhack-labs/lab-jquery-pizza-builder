// Write your Pizza Builder JavaScript in this file.
var btnPepper = "btn-green-peppers";
var btnPepperonni = "btn-pepperonni";
var btnMushroom = "btn-mushrooms";
var btnCrust = "btn-crust";
var btnSauce = "btn-sauce";
var classPepper = $(".green-pepper");
var classMushroom = $(".mushroom");
var classPepperonni = $(".pep");
var classCrust = $(".crust");
var classSauce = $(".sauce");

$(".btn").on("click", function() {
    $(this).toggleClass("active")
    if($(this).hasClass(btnPepper)) {
        classPepper.toggle()
        $("aside li:contains('peppers')").toggle()
    } else if ($(this).hasClass(btnPepperonni)) {
        classPepperonni.toggle()
        $("aside li:contains('pepperonni')").toggle()
    } else if ($(this).hasClass(btnMushroom)) {
        classMushroom.toggle()
        $("aside li:contains('mushroom')").toggle()
    } else if ($(this).hasClass(btnCrust)) {
        classCrust.toggleClass("crust-gluten-free")
        $("aside li:contains('crust')").toggle()
    } else if ($(this).hasClass(btnSauce)) {
        classSauce.toggleClass("sauce-white")
        $("aside li:contains('sauce')").toggle()
    }
    updatePrices()
})

function updatePrices() {
    var pepperonni = ($(".btn-pepperonni")).hasClass("active") ? 1 : 0;
    var pepper = ($(".btn-green-peppers")).hasClass("active") ? 1 : 0
    var mushroom = ($(".btn-mushrooms")).hasClass("active") ? 1 : 0
    var crust = ($(".btn-crust")).hasClass("active") ? 5 : 0
    var sauce = ($(".btn-sauce")).hasClass("active") ? 3 : 0
    var result = 10 + pepperonni + pepper + mushroom + crust + sauce
    $("aside strong").text("$" + result)
    }