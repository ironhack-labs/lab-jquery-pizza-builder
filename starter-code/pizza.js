// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
    $(".btn-pepperonni").click(function() {

        if($(".pep").is(":visible")) {
            $(".pep").hide();
        } else {
            $(".pep").show();
        }
    });

    $(".btn-mushrooms").click(function() {

        if($(".mushroom").is(":visible")) {
            $(".mushroom").hide();
        } else {
            $(".mushroom").show();
        }
    });

    $(".btn-green-peppers").click(function() {
        if($(".green-pepper").is(":visible")) {
            $(".green-pepper").hide();
        } else {
            $(".green-pepper").show();
        }
    });

    $(".btn-sauce").click(function() {
        console.log("Sauce");
    });

    $(".btn-crust").click(function() {
        console.log("Crust");
    });

});