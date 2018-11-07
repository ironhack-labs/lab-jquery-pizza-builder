// Write your Pizza Builder JavaScript in this file.
var pepperonni = $('.btn-pepperonni')
var mushrooms = $('.btn-mushrooms')
var green = $('.btn-green-peppers')
var sauce = $('.btn-sauce')
var crust  = $('.btn-crust')
var greenDiv= $('#greenpeppers')
var mushDiv= $('#mushrooms')
var pepperonniDiv = $('#pepperonis')
var sauceDiv = $('.sauce-white')
var costraDiv=$("#crusty")

var mushPrice = $('.price li:contains(mushrooms)')
var pepperoniPrice = $('.price li:contains(pepperonni)')
var pepperPrice = $('.price li:contains(peppers)')
var saucePrice = $('.price li:contains(sauce)')
var glutenPrice = $('.price li:contains(crust)')
var priceTOT = $('strong')

var priceItem=parseInt(priceTOT.text().substr(1,priceTOT.text().length));

function updatePrice(ingrediente, value){
    if(ingrediente.hasClass('active')){
        priceItem-=value
      priceTOT.text('$'+priceItem)
     }else{
      priceItem+=value
     }
}

green.click(function (e) { 
    e.preventDefault();
   greenDiv.toggle();
   green.toggleClass('active')
   pepperPrice.toggle();
   updatePrice(green,1)
}
);
mushrooms.click(function (e) { 
    e.preventDefault();
    mushDiv.toggle();
    mushrooms.toggleClass('active')

    mushPrice.toggle();

   updatePrice(mushrooms,1)
    
}
);
pepperonni.click(function (e) { 
    e.preventDefault();
    pepperonniDiv.toggle();
    pepperonni.toggleClass('active')
    pepperoniPrice.toggle();

   updatePrice(pepperonni,1)
    
}
);
sauce.click(function (e) { 
    e.preventDefault();
    sauceDiv.toggleClass("sauce-white");
    sauce.toggleClass('active')
    saucePrice.toggle();
    updatePrice(sauce,3)
    
}
);crust.click(function (e) { 
    e.preventDefault();
    costraDiv.toggleClass("crust-gluten-free");
    crust.toggleClass('active')
    glutenPrice.toggle()
    updatePrice(crust,5)
}

);
