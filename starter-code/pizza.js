// Write your Pizza Builder JavaScript in this file.

// Para cachar la pizza

var pizza = $('#pizza')

var priceList = $('#priceList')
//console.log(priceList)

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

// Pepperoni
btnPepp.on('click',function(e){
    var opacity = pepperoni.css('opacity')
    if(opacity === '1'){
        pepperoni.css('opacity','0')
        var liPep = $("li:contains('$1 pepperonni')")
        liPep.remove()
        //priceList.removeChild(liPep)
    } else{
        pepperoni.css('opacity','1')
        priceList.append("<li>$1 pepperonni</li>")
    }
    btnPepp.toggleClass('active')
    sumPrice()
})

// Mushroom
btnMush.on('click',function(e){
    var opacity = mushroom.css('opacity')
    if(opacity === '1'){
        mushroom.css('opacity','0')
        var liMush = $("li:contains('$1 mushrooms')")
        liMush.remove()
    } else{
        mushroom.css('opacity','1')
        priceList.append("<li>$1 mushrooms</li>")
        
    }
    btnMush.toggleClass('active')
    sumPrice()
})

// Green Pepper
btnGreen.on('click',function(e){
    var opacity = greenPepper.css('opacity')
    if(opacity === '1'){
        greenPepper.css('opacity','0')
        var liGreen = $("li:contains('$1 green peppers')")
        liGreen.remove()
    } else{
        greenPepper.css('opacity','1')
        priceList.append("<li>$1 green peppers</li>")
    }
    btnGreen.toggleClass('active')
    sumPrice()
})
//White Sauce
btnSauce.on('click',function(e){
    sauce.toggleClass('sauce-white')
    btnSauce.toggleClass('active')
    if(sauce.hasClass('sauce-white'))
    {
    priceList.append("<li>$3 white sauce</li>") 
    }else{
    var liGreen = $("li:contains('$3 white sauce')")
        liGreen.remove()  
    }
    sumPrice()
})

//Gluten

btnCrust.on('click',function(e){
    crust.toggleClass('crust-gluten-free')
    btnCrust.toggleClass('active')
    if(crust.hasClass('crust-gluten-free'))
    {
    priceList.append("<li>$5 gluten-free crust</li>") 
    }else{
    var liGreen = $("li:contains('$5 gluten-free crust')")
        liGreen.remove()  
    }
    sumPrice()
})

var sumPrice = function(){
    var lista = $('#priceList li')
    var sum = 0
    var price 
    for(var i=0; i<lista.length; i++){
        console.log(lista[i].innerText)
        price = Number(lista[i].innerText.substr(1,1))
        sum+= price
    }
    $('strong').text('$'+sum)
}




