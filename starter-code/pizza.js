// Write your Pizza Builder JavaScript in this file.

//1. activa y desactiva la clase que muestra los ingredientes cuando se hace click sobre su botón correspondiente

$(".btn-pepperonni").click(function() { //click del botón pepperonni
    $("aside > ul > li:first-child").toggle(); //activa y desactiva la clase que aparece y desparence los precios.
    $(".pep").toggle(); //activa y desactiva los elementos seleccionados por su clase, los cuales aparence y desaparecen
    if ($(".btn-pepperonni").hasClass("active")) { //Agregamos un if/else para activar y desactivar la clase del botón el botón
        $(".btn-pepperonni").removeClass("active");
    } else {
        $(".btn-pepperonni").addClass("active");
    }
});
$(".btn-mushrooms").click(function() {
    $("aside > ul > li:nth-child(2)").toggle();
    $(".mushroom").toggle();
    if ($(".btn-mushrooms").hasClass("active")) {
      $(".btn-mushrooms").removeClass("active");
    } else {
      $(".btn-mushrooms").addClass("active");
    }
});
$(".btn-green-peppers").click(function () {
    $("aside > ul > li:nth-child(3)").toggle();
    $(".green-pepper").toggle();
    if($('.btn-green-peppers').hasClass('active')){
        $('.btn-green-peppers').removeClass('active');
    }else{
        $('.btn-green-peppers').addClass('active');
    }
});

//2. Change the default class:

$(".crust").removeClass("crust-gluten-free"); //Al elemento .crust le quita la clase crust-gluten-free
$(".sauce").removeClass("sauce-white"); 

//3. Change the active button to change the class.
//4. Create a switch to change the button active gain.

$('.btn-sauce').click(function () {
    $("aside > ul > li:nth-child(4)").toggle();
    $('.sauce').toggleClass('sauce-white'); //swichea las clases
    $('.btn-sauce').toggleClass('active'); //el botton activa y desactiva su clase active del css
});

$('.btn-crust').click(function () {
    $("aside > ul > li:nth-child(5)").toggle();
    $('.crust').toggleClass('crust-gluten-free');
    $('.btn-crust').toggleClass('active');
});

//5. Hacer la suma: ESTE ES UN INTENTO PERO NO LO SUPE HACER BIEN :C :
/*
$('.btn').click(function getTotalPrice() { //Cuando el elemento con la clase botton reciba un click, se ejecuta la función
    var totalPrice = 0;
    var items = $(".list-item:visible").val(); //Asigna a la variable el valor de un elemento visible de la clase

    for (var i = 0; i < items.length; i++) { // NO SÉ SI FUNCIONA:recorre todos los elementos de la variable items
        totalPrice += .index(items); //NO SE COMO SE ESCRIBE: asigna el index del elemento y por cada variable guarda el valor en totalPrice
    }
    +$('strong').text('$' + totalPrice).toFixed(2); //Asigna concatenado el precio total al node strong del html en forma de texto y le permite dos digitos decimales
});
*/