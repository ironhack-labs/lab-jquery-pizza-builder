// Write your Pizza Builder JavaScript in this file.

//buttons

var pepButton = $('.btn-pepperonni')

var mushButton = $('.btn-mushrooms')

var greeButton = $('.btn-green-peppers')

var crustButton = $('.btn-crust')

var sauceButton = $('.btn-sauce')

//complements

var pepperonnis = $('.pep')

var mushrooms = $('.mushroom')

var peppers = $('.green-pepper')

var crust = $('.crust')

var sauce = $('.sauce')

var pepPrice = $('.price li:nth-child(1)')

var mushPrice = $('.price li:nth-child(2)')

var greePrice = $('.price li:nth-child(3)')

var crustPrice = $('.price li:nth-child(5)')

var saucePrice = $('.price li:nth-child(4)')

var totalPrice = $('strong')

var total = 21

//logic

pepButton.click(function(){
    pepperonnis.toggle()
    pepButton.toggleClass('active')
    if(pepButton.hasClass('active')){pepPrice.text('$1 pepperonni')
    total = total+1
    }else{pepPrice.text('$0 pepperonni')
    total = total-1}
    totalPrice.text('$'+total)
})

mushButton.click(function(){
    mushrooms.toggle()
    mushButton.toggleClass('active')
    if(mushButton.hasClass('active')){mushPrice.text('$1 mushrooms')
    total = total+1
    }else{mushPrice.text('$0 mushrooms')
    total = total-1}
    totalPrice.text('$'+total)
})

greeButton.click(function(){
    peppers.toggle()
    greeButton.toggleClass('active')
    if(greeButton.hasClass('active')){greePrice.text('$1 green peppers')
    total = total+1
    }else{greePrice.text('$0 green peppers')
    total = total-1}
    totalPrice.text('$'+total)
})

crustButton.click(function(){
    crust.toggleClass('crust-gluten-free')
    crustButton.toggleClass('active')
    if(crustButton.hasClass('active')){crustPrice.text('$5 gluten-free crust')
    total = total+5
    }else{crustPrice.text('$0 gluten-free crust')
    total = total-5}
    totalPrice.text('$'+total)
})

sauceButton.click(function(){
    sauce.toggleClass('sauce-white')
    sauceButton.toggleClass('active')
    if(sauceButton.hasClass('active')){saucePrice.text('$3 white sauce')
    total=total+3
    }else{saucePrice.text('$0 white sauce')
    total = total-3}
    totalPrice.text('$'+total)
})

/* <!-- Price -->
    <aside class="panel price">
      <h2>Your pizza's price</h2>

      <b>$10 cheese pizza</b>
      <ul>
        <li>$1 pepperonni</li>
        <li>$1 mushrooms</li>
        <li>$1 green peppers</li>
        <li>$3 white sauce</li>
        <li>$5 gluten-free crust</li>
      </ul>
      <strong>$21</strong>
    </aside> */