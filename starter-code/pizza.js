
redButton = $('.btn-pepperonni')
redButton.click(() => {
    $('.pep').toggle()
    $(redButton).toggleClass('active')
    $('.price li:first').toggle()
})


mushroomButton = $('.btn-mushrooms')
mushroomButton.click(() => {
    $('.mushroom').toggle()
    $(mushroomButton).toggleClass('active')
    $('.price li:nth-child(2)').toggle()
})


pepperButton = $('.btn-green-peppers')
pepperButton.click(() => {
    $('.green-pepper').toggle()
    $(pepperButton).toggleClass('active')
    $('.price li:nth-child(3)').toggle()
})


whiteSauce = $('.btn-sauce')
whiteSauce.click(() => {

$('.sauce').toggleClass('sauce-white')  
$(whiteSauce).toggleClass('active')
$('.price li:nth-child(4)').toggle()
})

crustGluten = $('.btn-crust')
crustGluten.click(() => {
    $('.crust').toggleClass('crust-gluten-free')
    $(crustGluten).toggleClass('active')
    $('.price li:nth-child(5)').toggle()
})





// totalPrice = $('.price strong').toggle()
// totalPrice.click(() => {
//     $(totalPrice).toggleClass('active');
// })

var total = 0.0;

$('.price li').click.each(function() {
    var totalPrice = $(".price strong:nth-child('2')")
    console.log(totalPrice);
    total += parseFloat($(this).html());
    totalPrice = total;
});


totalPrice.click(() => {
    console.log(totalPrice);
})