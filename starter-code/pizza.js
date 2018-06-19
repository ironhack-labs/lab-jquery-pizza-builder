// Write your Pizza Builder JavaScript in this file.

// $(document).ready(function() {

// BUTTON VARS

var btnPepperoni = $('.btn-pepperonni');

var btnMushrooms = $('.btn-mushrooms');

var btnGreenPeppers = $('.btn-green-peppers');

var btnSauce = $('.btn-sauce');

var btnCrust = $('.btn-crust');

var btnWhite = $('.btn-sauce');

var totalPriceDiv = $('strong');
var actualTotalPrice = totalPriceDiv.html();

var priceList = $('.price li');

function getTotalPrice() {
    var priceList = $('.price li').not(':hidden');
    var grandTotal = 0;

    $('.price li').each(function( index ) {
        grandTotal += Number((priceList.eq(index).text().charAt(1)));
      });

    actualTotalPrice = grandTotal + 10;

$(totalPriceDiv).text(`$${actualTotalPrice}`);

    return actualTotalPrice;
}

// START WITH GLUTEN TOGGLED OFF

btnCrust.removeClass('active');

// CLICK FUNCTIONS FOR EACH BUTTON

btnPepperoni.click(function(event) {
        $('.pep').toggle();
        btnPepperoni.toggleClass('active');
        priceList.eq(0).toggle();
        getTotalPrice();
});

btnMushrooms.click(function(event) {
    $('.mushroom').toggle();
    btnMushrooms.toggleClass('active');
    priceList.eq(1).toggle();
    getTotalPrice();
});

btnGreenPeppers.click(function(event) {
    $('.green-pepper').toggle();
    btnGreenPeppers.toggleClass('active');
    priceList.eq(2).toggle();
    getTotalPrice();
});

btnWhite.click(function(event) {
    $('.sauce-white').toggle();
    btnWhite.toggleClass('active');
    priceList.eq(3).toggle();
    getTotalPrice();
});

btnCrust.click(function(event) {
    btnCrust.toggleClass('active');
    priceList.eq(4).toggle();
    getTotalPrice();
});

console.log(actualTotalPrice);


// function getTotalPrice() {
//     var priceList = $('.price li').not(':hidden');
//     var grandTotal = 0;

//     $('.price li').each(function( index ) {
//         grandTotal += Number((priceList.eq(index).text().charAt(1)));
//       });
    
//     // for (i = 0; i < priceList.length; i++) {
//     //     var ingredientsAsNumbers = (priceList[i].replace(/\D/g,'');
//     //     grandTotal += Number(ingredientsAsNumbers);
//     // }

//     actualTotalPrice = grandTotal + 10;
// return actualTotalPrice;
// console.log(actualTotalPrice);
// }




// });