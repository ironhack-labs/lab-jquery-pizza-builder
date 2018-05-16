// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
    $(".btn-pepperonni").click(function(){
        //$(".pep").toggleClass("hide");
        //var $hide = $(".green-pepper").hasClass("hide");
        $(".pep").toggle();

    });

    $(".btn-mushrooms").click(function(){
        $(".mushroom").toggleClass("hide");
        //var $hide = $(".green-pepper").hasClass("hide");
        $(".mushroom.hide").hide();

    });

    $(".btn-green-peppers").click(function(){
        $(".green-pepper").toggleClass("hide");
        //var $hide = $(".green-pepper").hasClass("hide");
        $(".green-pepper.hide").hide();

    });
});