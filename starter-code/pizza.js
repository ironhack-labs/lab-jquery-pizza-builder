// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
    // Default values
    var total = 13;
    $("section[class~='sauce']").removeClass('sauce-white');
    $("section[class~='crust']").removeClass('crust-gluten-free');
    $(".btn-sauce").removeClass("active");
    $(".btn-crust").removeClass("active");
    $("li:contains(white sauce)").remove();
    $("li:contains(gluten-free crust)").remove();

    $("strong").text("$" + total);

    $(".btn-pepperonni").click(function() {

        if($(".pep").is(":visible")) {
            $(".pep").hide();
            $(".btn-pepperonni").removeClass("active");
            $("li:contains(pepperonni)").remove();
            total = total - 1;
            $("strong").text("$" + total);
        } else {
            $(".pep").show();
            $(".btn-pepperonni").addClass("active");
            $("aside ul").append($("<li></li>").text("$1 pepperonni"));
            total = total + 1;
            $("strong").text("$" + total);
        }
    });

    $(".btn-mushrooms").click(function() {

        if($(".mushroom").is(":visible")) {
            $(".mushroom").hide();
            $(".btn-mushrooms").removeClass("active");
            $("li:contains(mushrooms)").remove();
            total = total - 1;
            $("strong").text("$" + total);
        } else {
            $(".mushroom").show();
            $(".btn-mushrooms").addClass("active");
            $("aside ul").append($("<li></li>").text("$1 mushrooms"));
            total = total + 1;
            $("strong").text("$" + total);
        }
    });

    $(".btn-green-peppers").click(function() {

        if($(".green-pepper").is(":visible")) {
            $(".green-pepper").hide();
            $(".btn-green-peppers").removeClass("active");
            $("li:contains(green peppers)").remove();
            total = total - 1;
            $("strong").text("$" + total);
        } else {
            $(".green-pepper").show();
            $(".btn-green-peppers").addClass("active");
            $("aside ul").append($("<li></li>").text("$1 green peppers"));
            total = total + 1;
            $("strong").text("$" + total);
        }
    });

    $(".btn-sauce").click(function() {

        $("section[class~='sauce']").toggleClass('sauce-white');
        if($("section[class~='sauce']").hasClass('sauce-white')) {
            $(".btn-sauce").addClass("active");
            $("aside ul").append($("<li></li>").text("$3 white sauce"));
            total = total + 3;
            $("strong").text("$" + total);
        } else {
            $(".btn-sauce").removeClass("active");
            $("li:contains(white sauce)").remove();
            total = total - 3;
            $("strong").text("$" + total);
        }
    });

    $(".btn-crust").click(function() {
        
        $("section[class~='crust']").toggleClass('crust-gluten-free');
        if($("section[class~='crust']").hasClass('crust-gluten-free')) {
            $(".btn-crust").addClass("active");
            $("aside ul").append($("<li></li>").text("$5 gluten-free crust"));
            total = total + 5;
            $("strong").text("$" + total);
        } else {
            $(".btn-crust").removeClass("active");
            $("li:contains(gluten-free crust)").remove();
            total = total - 5;
            $("strong").text("$" + total);
        }
    });

});