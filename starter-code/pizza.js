// Write your Pizza Builder JavaScript in this file.
let btnPep = $('.btn-pepperonni');
let btnMush = $('.btn-mushrooms');
let btngreenPep = $('.btn-green-peppers');
let btnwhiteSau = $('.btn-sauce');
let btnCrust = $('.btn-crust');

let peperonnis = $(".pep");
let mushrooms = $(".mushroom");
let greenPeppers = $(".green-pepper");
let whiteSauce = $(".sauce");
let glutenFree = $(".cheese")


let pricePep=$('.price li:nth-child(1)')
let priceMush=$('.price li:nth-child(2)')
let priceGreen=$('.price li:nth-child(3)')
let priceCrust=$('.price li:nth-child(4)');
let priceWhiteSauce = $('.price li:nth-child(5)');


let totalPrice =$('strong')
let price = 21




btnPep.click(function() {
    peperonnis.toggle()
    btnPep.toggleClass('active')
    if (btnPep.hasClass('active')){pricePep.text('$1 pepperonni')
    total = total+1
    }else {pricePep.text('')
    total = total-1}
    totalPrice.text ('$'+ total)
    })


btnMush.click(function() {
    mushrooms.toggle()
    btnMush.toggleClass('active')
    if (btnMush.hasClass('active')){priceMush.text('$5 mushrooms')
    total = total+5
    }else {priceMush.text('')
    total = total-5}

    totalPrice.text ('$'+ total)
})

btngreenPep.click(function() {
    greenPeppers.toggle()
    btngreenPep.toggleClass('active')
    if (btngreenPep.hasClass('active')){priceGreen.text('$1 green peppers')
    total = total+1
    }else {priceGreen.text('')
    total = total-1}
    totalPrice.text ('$'+ total)
})

btnwhiteSau.click(function() {
    whiteSauce.toggle()
    btnwhiteSau.toggleClass('active')
    if (btnwhiteSau.hasClass('active')){priceWhiteSauce.text('$3 white sauce')
    total = total+3
    }else {priceWhiteSauce.text('')
    total = total-3}
    totalPrice.text ('$'+ total)
})

btnCrust.click(function() {
    glutenFree.toggle()
    btnCrust.toggleClass('active')
    if (btnCrust.hasClass('active')){priceCrust.text('$5 gluten-free crust')
    total = total+5
    }else {priceCrust.text('')
    total = total-5}
    totalPrice.text ('$'+ total)
    cambioT()
})






function cambioT(){
    totalPrice.text("$"+price)
}