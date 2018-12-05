// Write your Pizza Builder JavaScript in this file.

$('section.crust').toggleClass('crust-gluten-free');
$('button.btn-crust').toggleClass('active');
$("li:contains('gluten-free crust')").toggle();


$('section.sauce').toggleClass('sauce-white');
$('button.btn-sauce').toggleClass('active');
$("li:contains('white sauce')").toggle();
addValues();



$('.btn-pepperonni').click(function(){
    $('.pep').toggle();
    $('button.btn-pepperonni').toggleClass('active');
    $("li:contains('pepperonni')").toggle();
    addValues();
   
});

$('.btn-green-peppers').click(function(){
    $('.all-pepper > section').toggleClass('green-pepper');
    $('button.btn-green-peppers').toggleClass('active');
    $("li:contains('green peppers')").toggle();
    addValues();
})

$('.btn-mushrooms').click(function(){
    $('.mushroom > div').toggleClass();
    $('button.btn-mushrooms').toggleClass('active');
    $("li:contains('mushrooms')").toggle();
    addValues();
})


$('.btn-crust').click(function(){
    $('section.crust').toggleClass('crust-gluten-free');
    $('button.btn-crust').toggleClass('active');
    $("li:contains('gluten-free crust')").toggle();
    addValues();
})

$('.btn-sauce').click(function(){
    $('section.sauce').toggleClass('sauce-white');
    $('button.btn-sauce').toggleClass('active');
    $("li:contains('white sauce')").toggle();
    addValues();
})

function addValues () {
    var sum = 10;
    var elem1 = $("li:contains('pepperonni'):visible").text();
    var elem2 = $("li:contains('mushrooms'):visible").text();
    var elem3 = $("li:contains('green peppers'):visible").text();
    var elem4 = $("li:contains('white sauce'):visible").text();
    var elem5 = $("li:contains('gluten-free crust'):visible").text();
    
    var num1 = parseFloat(elem1[1]) || 0;
    var num2 = parseFloat(elem2[1]) || 0;
    var num3 = parseFloat(elem3[1]) || 0;
    var num4 = parseFloat(elem4[1]) || 0;
    var num5 = parseFloat(elem5[1]) || 0;
    sum = sum  + num1 + num2 + num3 + num4 + num5;   
    $('strong').text("$" + sum);
}




