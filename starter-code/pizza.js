// Write your Pizza Builder JavaScript in this file.
$(document).ready(function () {
    $('.green-pepper, .mushroom, .pep').hide();
    $('section.crust').removeClass('crust-gluten-free');
    $('section.sauce').removeClass('sauce-white');
    $('button').removeClass('active');

    $("button").click(function(){
        $(this).toggleClass("active");
    });
});