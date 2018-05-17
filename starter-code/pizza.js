// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
    $(".crust").removeClass("crust-gluten-free");
    $(".btn-crust").removeClass("active");

    $(".sauce").removeClass("sauce-white");
    $(".sauce").addClass("regular-sauce");
    $(".btn-sauce").removeClass("active");

    $(".btn-sauce").click(function(){
        if ($(".sauce").hasClass("sauce-white")) {
            $(".sauce").removeClass("sauce-white");
            $(".sauce").addClass("regular-sauce");
        } else {
            $(".sauce").addClass("sauce-white");
            $(".sauce").removeClass("regular-sauce");
        }
    });

    $(".btn-crust").click(function(){
        $(".crust").toggleClass("crust-gluten-free");
    });

    $(".btn-pepperonni").click(function(){
        $(".pep").toggle();
    });

    $(".btn-mushrooms").click(function(){
        $(".mushroom").toggle();
    });

    $(".btn-green-peppers").click(function(){
        $(".green-pepper").toggle();
    });

    $(".btn").click(function(){
        $(this).toggleClass("active");
    });
})

