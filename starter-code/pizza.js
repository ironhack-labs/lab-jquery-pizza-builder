// Write your Pizza Builder JavaScript in this file.
var pepBut = $(".btn-pepperonni")
var mushBut = $(".btn-mushrooms")
var greenPepBut = $(".btn-green-peppers")
var sauceBut = $(".btn-sauce")
var crustBut =$(".btn-crust ")


//Ingredients
var pepperonnis = $(".pep")
var mushrooms = $(".mushroom")
var greenpeppers = $(".green-pepper")
var sauce = $(".sauce")
var crust = $(".crust-gluten-free")

//Prices
var pepPrice = $(".price ul li:nth-child(1)")
var mushPrice = $(".price ul li:nth-child(2)")
var greenPepPrice = $(".price ul li:nth-child(3)")
var saucePrice = $(".price ul li:nth-child(4)")
var crustPrice = $(".price ul li:nth-child(5)")


//Total price
var price = $(".price strong")
var totalPrice = 21


//Set Defaults
sauceBut.removeClass("active")
saucePrice.removeClass("active")
crustBut.removeClass("active")



pepBut.click(function(){
    pepperonnis.toggle()
    pepBut.toggleClass('active')
    pepPrice.toggle()
    if (pepBut.hasClass('active')){
        totalPrice += 1
    } else {
        totalPrice -= 1
    }
    updatePrice() 
    console.log(totalPrice)

    // if(pepBut.hasClass('active')){
    //     pepperonnis.hide()
    //     pepBut.toggleClass('active')
    // }else{
    //     pepperonnis.show()
    //     pepBut.toggleClass('active')
    // }

})


mushBut.click(function(){
    mushrooms.toggle()
    mushBut.toggleClass('active')
    mushPrice.toggle()
    if (mushBut.hasClass('active')){
        totalPrice += 1
    } else {
        totalPrice -= 1
    }

    updatePrice()


    // if(mushBut.hasClass('active')){
    //     mushrooms.hide()
    //     mushBut.toggleClass('active')
    // } else {
    //     mushrooms.show()
    //     mushBut.toggleClass('active')
    // }
})

greenPepBut.click(function(){
    greenpeppers.toggle()
    greenPepBut.toggleClass('active')
    greenPepPrice.toggle()
    if (greenPepBut.hasClass('active')){
        totalPrice += 1
    } else {
        totalPrice -= 1
    }
    updatePrice() 

    // greenpeppers.toggleClass("active")


    // if(greenPepBut.hasClass('active')){
    //     greenpeppers.hide()
    //     greenPepBut.toggleClass('active')
    // } else{
    //     greenpeppers.show()
    //     greenPepBut.toggleClass('active')
    // }
})


sauceBut.click(function(){
    sauce.toggleClass("sauce-white")
    sauceBut.toggleClass('active')
    saucePrice.toggle()
    if (sauceBut.hasClass('active')){
        totalPrice -= 3
    } else {
        totalPrice += 3
    }
    updatePrice() 

    // if(sauceBut.hasClass('active')){
    //     sauce.hide()
    //     sauceBut.toggleClass('active')
    // } else{
    //     sauce.show()
    //     sauceBut.toggleClass('active')
    // }
})

crustBut.click(function(){
    crust.toggleClass("crust-gluten-free")
    crustBut.toggleClass('active')
    crustPrice.toggle()
    if (crustBut.hasClass('active')){
        totalPrice -= 5
    } else {
        totalPrice += 5
    }
    updatePrice() 

    // if(crustBut.hasClass('active')){
    //     crust.hide()
    //     crustBut.toggleClass('active')
    // } else{
    //     crust.show()
    //     crustBut.toggleClass('active')
    // }
})

function updatePrice(){
    price.text("$" + totalPrice)

}






