// Write your Pizza Builder JavaScript in this file.

let btnPepperoni = $('.btn-pepperonni')
let pricePepperoni = $('.price ul li:first')
let qtyPepperoni = $('.pep:parent')






let btnMushroom = $('.btn-mushrooms')
let priceMushroom = $('.price ul li:nth(1)')
let qtyMushroom = $('.mushroom:parent')

let btnGreenp = $('.btn-green-peppers')
let priceGreenp = $('.price ul li:nth(2)')
let qtyGreenp = $('.green-pepper')


let btnSauce = $('.btn-sauce')
let priceSauce = $('.price ul li:nth(3)')
let qtySauce = $('.sauce')

let btnGluttenFree = $('.btn-crust')
let priceGluttenFree = $('.price ul li:nth(4)')
let qtyGluttenFree = $('.crust-gluten-free')






//iterations
//peperoni show
$(btnPepperoni).click(function(){
    if($(this).hasClass('active')){
        $(qtyPepperoni).hide()
        $(this).toggleClass('active')
        pricePepperoni.hide()
    } else{
        $(this).toggleClass('active')
        $(qtyPepperoni).show()
        pricePepperoni.show()
    }
})


//mushroom show 
$(btnMushroom).click(function(){
    if($(this).hasClass('active')){
        $(qtyMushroom).hide()
        $(this).toggleClass('active')
        priceMushroom.hide()
    }else{
        $(this).toggleClass('active')
        $(qtyMushroom).show()
        priceMushroom.show()
    }
})


// green pepper show
$(btnGreenp).click(function(){
    if($(this).hasClass('active')){
        $(qtyGreenp).hide()
        $(this).toggleClass('active')
        priceGreenp.hide()
    }else{
        $(this).toggleClass('active')
        $(qtyGreenp).show()
        priceGreenp.show()
    }
})

// show sauce 
$(qtySauce).hide()
priceSauce.hide()

$(btnSauce).click(function(){
    if($(this).hasClass('active')){
        $(qtySauce).show()
        priceSauce.show()
        $(this).toggleClass('active')
        
    }else{
        $(this).toggleClass('active')
        $(qtySauce).hide()
        priceSauce.hide()
    }
})

//show gluten crust

priceGluttenFree.hide()
qtyGluttenFree.toggleClass('crust-gluten-free')

$(btnGluttenFree).click(function(){
    if($(this).hasClass('active')){
        qtyGluttenFree.toggleClass('crust-gluten-free')
        $(this).toggleClass('active')
        priceGluttenFree.show()

    }else{
        $(this).toggleClass('active')
        qtyGluttenFree.toggleClass('crust-gluten-free')
        priceGluttenFree.hide()
    }
})


///prices of items
