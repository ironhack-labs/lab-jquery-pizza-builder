// Write your Pizza Builder JavaScript in this file.





// let buttonGreenPepper = $("#greenP");
// let pizza = $("#pizza");
// let allSection = $("section");
// let greenPepper = $('.green-pepper');



// console.log(buttonGreenPepper);


$(".btn-crust").removeClass("active");
$(".crust").removeClass("crust-gluten-free");



$(".btn-green-peppers").click(function() {
    $(".green-pepper").toggle();
    if ($(".btn-green-peppers").hasClass("active")) {
        $(".btn-green-peppers").removeClass("active");
        $("aside > ul > li:nth-child(3)").hide();
    } else {
        $(".btn-green-peppers").addClass("active");
        $("aside > ul > li:nth-child(3)").show();
    }
});


$(".btn-pepperonni").click(function() {
    $(".pep").toggle();
    if ($(".btn-pepperonni").hasClass("active")) {
        $(".btn-pepperonni").removeClass("active");
        $("aside > ul > li:nth-child(1)").hide();
    } else {
        $(".btn-pepperonni").addClass("active");
        $("aside > ul > li:nth-child(1)").show();
    }
});

$(".btn-mushrooms").click(function() {
    $(".mushroom").toggle();
    if ($(".btn-mushrooms").hasClass("active")) {
        $(".btn-mushrooms").removeClass("active");
        $("aside > ul > li:nth-child(2)").hide();
    } else {
        $(".btn-mushrooms").addClass("active");
        $("aside > ul > li:nth-child(2)").show();  
    }
});


$(".btn-sauce").click(function() {
    $(".sauce").toggle();
    if ($(".btn-sauce").hasClass("active")) {
        $(".btn-sauce").removeClass("active");
        $("aside > ul > li:nth-child(4)").hide();
    } else {
        $(".btn-sauce").addClass("active");
        $("aside > ul > li:nth-child(4)").show();      
    }
});

$(".btn-crust").click(function() {
    $(".crust").toggleClass('crust-gluten-free');
    if ($(".btn-crust").hasClass("active")) {
        $(".btn-crust").removeClass("active");
        $("aside > ul > li:nth-child(5)").hide();
    } else {
        $(".btn-crust").addClass("active");
        $("aside > ul > li:nth-child(5)").show();          
    }
});


let result = $("aside:last-child").html();
console.log(result);

