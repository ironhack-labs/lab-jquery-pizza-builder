// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {




})


function toggleIngredientes (ingredient, button, listItem) {

  $(button).on("click", function() {

    $(ingredient).toggle()
    $(listItem).toggle()
    $(button).toggleClass("active")

    var itemPrice = document.querySelector(listItem).innerText

    debugger
    
    if(!$(button).hasClass("active")){

      if(itemPrice.includes("1")) {

        var totalPrice = changePrice()

        totalPrice --

        document.querySelector(listItem).innerText = totalPrice

      } else if(itemPrice.includes("3")) {

        var totalPrice = changePrice()

        totalPrice -= 3

        document.querySelector(listItem).innerText = totalPrice

      } else if(itemPrice.includes("5")) {

        var totalPrice = changePrice()

        totalPrice -= 5

        document.querySelector(listItem).innerText = totalPrice

      }

    }

  })

}



// function toggleIngredientes (ingredient, button, listItem) {

//   $(button).on("click", function() {

//     $(ingredient).toggle()
//     $(listItem).toggle()
//     $(button).toggleClass("active")
    
//     if($(button + ":contains('active)")){

//     }

//   })

// }

function changePrice () {

  var price = document.querySelector(".total-price").innerText

  var totalPrice =  +price.slice(1);

}



function itemPrice (priceIngrediente) {

  var priceItem = priceIngrediente

  var indexSpace = string.indexOf("")

  var price = +string.slice(1, string[indexSpace])

  console.log(price)

}



var greenPepperButton = toggleIngredientes(".green-pepper", ".btn-green-peppers", ".green-pepper-item")

var mushroomsButton = toggleIngredientes(".mushroom", ".btn-mushrooms", ".mushroom-item")

var pepButton = toggleIngredientes(".pep", ".btn-pepperonni", ".pep-item")

var crustButton = toggleIngredientes(".crust-gluten-free", ".btn-crust", ".crust-item")

var sauceButton = toggleIngredientes(".sauce-white", ".btn-sauce", ".sauce-white-item")

console.log(greenPepperButton)
console.log(mushroomsButton)
console.log(pepButton)


// function ingredientesPrice (listItem) {

//   if()

// }


// var greenPepperButton = $(".btn-green-peppers").on("click", function (){

//   $(".green-pepper").toggle()
//   $(".btn-green-peppers").toggleClass("active")

// })

// var mushroomsButton = $(".btn-mushrooms").on("click", function (){

//   $(".mushroom").toggle()
//   $(".btn-mushrooms").toggleClass("active")


// })

// var pepButton = $(".btn-pepperonni").on("click", function (){

//   $(".pep").toggle()
//   $(".btn-pepperonni").toggleClass("active")

// })


// var sauceButton = $(".btn-sauce").on("click", function (){

//   $(".sauce-white").toggle()
//   $(".btn-sauce").toggleClass("active")

// })

// var crustButton = $(".btn-crust ").on("click", function (){

//   $(".crust-gluten-free").toggle()
//   $(".btn-crust").toggleClass("active")

// })


