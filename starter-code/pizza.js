// Write your Pizza Builder JavaScript in this file.

$(document).ready(function(){
   $(".btn-green-peppers").click(function(){
        $(".green-pepper").toggle();
        $(this).addClass("active");
    });


    $(".btn-mushrooms").click(function(){
        $(".mushroom").toggle();
        $(this).addClass("active");
    });

    $(".btn-pepperonni").click(function(){
        $(".pep").toggle();
        $(this).addClass("active");
    });

    $(".btn-sauce").text("Original");
    
    $(".btn-sauce").click(function(){
        var link = $(this);
        $(".cheese").toggle(0,function(){
            if($(this).is(":visible")){
                link.text("White Sauce");
                link.addClass("active");
            }else{
                link.text("Original");
                link.removeClass("active");
            }
        });
    });

    $(".btn-crust").text("Regular");
    
    $(".btn-crust").click(function(){
        var link = $(this);
        $(this).toggleClass("btn-crust");
        if(link.hasClass("btn-crust")){
            link.text("Regular");
        }else{
            link.text("Gluten Free");
        }
    });

});