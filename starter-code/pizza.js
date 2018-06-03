// Write your Pizza Builder JavaScript in this file.
function setup(){
    $(".pep").hide();
    $(".mushroom").hide(); 
    $(".green-pepper").hide();

    $(".btn-pepperonni").toggleClass("active"); 
    $(".btn-mushrooms").toggleClass("active");  
    $(".btn-green-peppers").toggleClass("active"); 
}

$(document).ready(function () {
    setup();

    $(".btn-pepperonni").click(function (event) {
        if ($(".pep:hidden").length > 0) { 
            $(".pep").show(); 
        } else { 
            $(".pep").hide();
        }
        $(".btn-pepperonni").toggleClass("active"); 
    });
    $(".btn-mushrooms").click(function (event) {
        if ($(".mushroom:hidden").length > 0) { $(".mushroom").show(); } else { $(".mushroom").hide(); }
        $(".btn-mushrooms").toggleClass("active"); 
    });
    $(".btn-green-peppers").click(function (event) {
        if ($(".green-pepper:hidden").length > 0) { $(".green-pepper").show(); } else { $(".green-pepper").hide(); }
        $(".btn-green-peppers").toggleClass("active"); 
    });
    $(".btn-sauce").click(function (event) {
        if ($(".sauce:hidden").length > 0) { $(".sauce").show();}else{$(".sauce").hide();}
        $(".btn-sauce").toggleClass("active"); 
    });
    $(".btn-crust").click(function (event) {
        if ($(".crust:hidden").length > 0) { $(".crust").show();}else{$(".crust").hide();}
        $(".btn-crust").toggleClass("active"); 
    });
})
