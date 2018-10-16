// Write your Pizza Builder JavaScript in this file.
console.log("Test")

$('button.btn-pepperonni').click(function(){
    console.log("Pepperoni Button")
    $('section.pep').toggle()
    $('button.btn-pepperonni').toggleClass("active")
    $("li:contains('$1 pepperonni')").toggle()
    updatePrice2()
})

$('button.btn-mushrooms').click(function(){
    console.log("Mushroom Button")
    $('section.mushroom').toggle()
    $('button.btn-mushrooms').toggleClass("active")
    $("li:contains('$1 mushrooms')").toggle()
    updatePrice2()
})

$('button.btn-green-peppers').click(function(){
    console.log("Green Pepper Button")
    $('section.green-pepper').toggle()
    $('button.btn-green-peppers').toggleClass("active")
    $("li:contains('$1 green peppers')").toggle()
    updatePrice2()
})

$('button.btn-sauce').click(function(){
    console.log("Sauce Button")
    $('section.sauce').toggleClass("sauce-white")
    $('button.btn-sauce').toggleClass("active")
    $("li:contains('$3 white sauce')").toggle()
    updatePrice2()
})



$('button.btn-crust').click(function(){
    console.log("Crust Button")
    $('section.crust').toggleClass("crust-gluten-free")
    $('button.btn-crust').toggleClass("active")
    $("li:contains('$5 gluten-free crust')").toggle()
    updatePrice2()
})

function updatePrice2(){
    console.log("Hello")
    var totalPrice = 10
    if (!$('button.btn-crust').hasClass('active')){
      totalPrice+=5
    }
    if (!$('button.btn-sauce').hasClass('active')){
        totalPrice+=3
    }
    if ($('button.btn-pepperonni').hasClass('active')){
        totalPrice+=1
    }
    if ($('button.btn-mushrooms').hasClass('active')){
        totalPrice+=1
    }
    if ($('button.btn-green-peppers').hasClass('active')){
        totalPrice+=1
    }
    $('strong').text(totalPrice)
   }

   