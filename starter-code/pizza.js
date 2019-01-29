var total = 21;

var pepperoni = true; 
var mush = true;
var greenPep = true;
var whiteSauce = true;
var crusty = true;


$('.btn-pepperonni').click((e) =>{
    $('.pep').toggle()
    $('.btn-pepperonni').toggleClass('active')
    $('.price li:nth-child(1)').toggle()

    let price = $(e.currentTarget).data("price")
    if(pepperoni){
        total -= price
    } else {
        total += price
    }
    pepperoni = !pepperoni;
    $('strong').text('$'+total)
})
$('.btn-mushrooms').click((e) =>{
    $('.mushroom').toggle()
    $('.btn-mushrooms').toggleClass('active')
    $('.price li:nth-child(2)').toggle()
    let price = $(e.currentTarget).data("price")
    console.log(price)
    if(mush){
        total = total - price
       $('strong').text('$'+total) 
    } else {
        total = total + price
        $('strong').text('$'+total) 
    }
    mush = !mush
})
$('.btn-green-peppers').click((e) =>{
    $('.green-pepper').toggleClass('remove')
    $('.btn-green-peppers').toggleClass('active')
    $('.price li:nth-child(3)').toggle()
    let price = $(e.currentTarget).data("price")
    if(greenPep){
        total -= price
    } else {
        total += price
    }
    greenPep = !greenPep;
    $('strong').text('$'+total)
})

$('.btn-sauce').click((e) =>{
    $('.sauce').toggleClass('remove')
    $('.btn-sauce').toggleClass('active')
    $('.price li:nth-child(4)').toggle()
    let price = $(e.currentTarget).data("price")
    if(whiteSauce){
        total -= price
    } else {
        total += price
    }
    whiteSauce = !whiteSauce;
    $('strong').text('$'+total)
})

$('.btn-crust').click((e) =>{
    $('.crust').toggleClass('remove')
    $('.btn-crust').toggleClass('active')
    $('.price li:nth-child(5)').toggle()
    let price = $(e.currentTarget).data("price")
    if(crusty){
        total -= price
    } else {
        total += price
    }
    crusty = !crusty;
    $('strong').text('$'+total)
})

