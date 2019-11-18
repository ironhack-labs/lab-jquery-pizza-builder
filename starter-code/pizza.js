// Write your Pizza Builder JavaScript in this file.


//buttons
//1
$('.btn-pepperonni').click(function () { 
    $('.btn-pepperonni').toggleClass('active')  //Obtiene boton peperoni 
    $('.pep').toggle();//LE da la propiedad de toggle
    $('li:contains("$1 pepperonni")').toggle(1000); //le da un aspecto de transición 
     
});
//2

$('.btn-mushrooms').click(function () { 
    $('.btn-mushrooms').toggleClass('active')
    $('.mushroom').toggle();
    $('li:contains("$1 mushrooms")').toggle(1000);     
});
//3
$('.btn-green-peppers').click(function () { 
    $('.btn-green-peppers').toggleClass('active')
    $('.green-pepper').toggle();
    $('li:contains("$1 green peppers")').toggle(1000);     
});
//4
$('.btn-sauce').click(function () { 
    $('.btn-sauce').toggleClass('active')
    $('.sauce').toggle();    
    $('li:contains("$3 white sauce")').toggle(1000); 
});
//5
$('.btn-crust').click(function () { 
    $('.btn-crust').toggleClass('active')
    $('.crust').toggle(); 
    $('li:contains("$5 gluten-free crust")').toggle(1000);    
});
