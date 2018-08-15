// Iteration 1
$(".btn-pepperonni").click(function(){
    $(".pep").toggle();
});
    
$(".btn-mushrooms").click(function(){
    $(".mushroom").toggle();
});

$(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle();
});

// Iteration 2

$(".sauce").removeClass("sauce-white");

$(".btn-sauce").click(function(){
    $(".sauce").toggleClass("sauce-white");
});

$(".crust").removeClass("crust-gluten-free");

$(".btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free");
});

// Iteration 3 + 4

$(".btn-pepperonni").click(function (){
    if ($(".btn-pepperonni").hasClass("active")) {
        $(".btn-pepperonni").removeClass("active");
        $(".price li:contains('$1 pepperonni')").hide();
    }
    else {
        $(".btn-pepperonni").addClass("active");
        $(".price li:contains('$1 pepperonni')").show();
    }
});


$(".btn-mushrooms").click(function (){
    if ($(".btn-mushrooms").hasClass("active")) {
        $(".btn-mushrooms").removeClass("active");
        $(".price li:contains('$1 mushrooms')").hide();
    }
    else {
        $(".btn-mushrooms").addClass("active");
        $(".price li:contains('$1 mushrooms')").show();
    }
});

$(".btn-green-peppers").click(function (){
    if ($(".btn-green-peppers").hasClass("active")) {
        $(".btn-green-peppers").removeClass("active");
        $(".price li:contains('$1 green peppers')").hide();
    }
    else {
        $(".btn-green-peppers").addClass("active");
        $(".price li:contains('$1 green peppers')").show();
    }
});

$(".btn-sauce").removeClass("active");
$(".price li:contains('$3 white sauce')").hide();
$(".btn-sauce").click(function (){
    if ($(".btn-sauce").hasClass("active")) {
        $(".btn-sauce").removeClass("active");
        $(".price li:contains('$3 white sauce')").hide();
    }
    else {
        $(".btn-sauce").addClass("active");
        $(".price li:contains('$3 white sauce')").show();
    }
});

$(".btn-crust").removeClass("active");
$(".price li:contains('$5 gluten-free crust')").hide();
$(".btn-crust").click(function (){
    if ($(".btn-crust").hasClass("active")) {
        $(".btn-crust").removeClass("active");
        $(".price li:contains('$5 gluten-free crust')").hide();
    }
    else {
        $(".btn-crust").addClass("active");
        $(".price li:contains('$5 gluten-free crust')").show();
    }
});

// Iteration 

