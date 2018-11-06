// Write your Pizza Builder JavaScript in this file.

// Para cachar la pizza

var pizza = $('#pizza')


//Toppings

var pepperoni = $('.pep')
var mushroom = $('.mushroom')
var greenPepper = $('.green-pepper')
var sauce = $('.sauce')
var crust = $('.crust')


//Botones
var btnPepp = $('.btn-pepperonni')
var btnMush = $('.btn-mushrooms')
var btnGreen = $('.btn-green-peppers')
var btnSauce = $('.btn-sauce')
var btnCrust = $('.btn-crust')

//listeners click

btnPepp.on('click',function(e){
    var opacity = pepperoni.css('opacity')
    if(opacity === '1'){
        pepperoni.css('opacity','0')
    } else{
        pepperoni.css('opacity','1')
    }
})
btnMush.on('click',function(e){
    var opacity = mushroom.css('opacity')
    if(opacity === '1'){
        mushroom.css('opacity','0')
    } else{
        mushroom.css('opacity','1')
    }
})

btnGreen.on('click',function(e){
    var opacity = greenPepper.css('opacity')
    if(opacity === '1'){
        greenPepper.css('opacity','0')
    } else{
        greenPepper.css('opacity','1')
    }
})

btnSauce.on('click',function(e){
    sauce.toggleClass('sauce-white')
})

btnCrust.on('click',function(e){
    crust.toggleClass('crust-gluten-free')
})




