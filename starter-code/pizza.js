// Write your Pizza Builder JavaScript in this file.
// var btnPepperonni = $('.btn-pepperonni');
// var displayNone = css('')
function calTotalPrice() {

  var htmlColecIngredients = $('.selected > .value');
  // console.log("array ingredients:");
  // var firstEl = htmlColecIngredients[0].textContent;
  // console.log(firstEl);
  
  // console.log(htmlColecIngredients[0]);

  // console.log($('.price-pepperonni > .value').html());
  

  var arrayIngredients = [].slice.call(htmlColecIngredients)   
  // console.log(arrayIngredients);
  // console.log(parseInt(arrayIngredients[0].textContent));   
  // console.log(parseInt(arrayIngredients[1].textContent));   
  // console.log(parseInt(arrayIngredients[2].textContent)); 
  var finalPrice = 10;
  arrayIngredients.forEach(element => {
    finalPrice += parseInt(element.textContent);
    return finalPrice
  });
  //Why it doesn't work with reduce ?
  // var finalPrice = arrayIngredients.reduce((acc, e) => {
  //   var newAcc = parseFloat(acc.textContent)
  //   var newE = parseFloat(e.textContent)
  //   console.log(typeof newAcc);
  //   console.log(typeof newE);
  //   return newAcc += newE;
  // })
  console.log("The finale price is: " + parseInt(finalPrice));
  $('.finalPrice').html(finalPrice);
}
// console.log($('.price-pepperonni > .value').html());

//Initialization
$('.price-pepperonni').addClass('selected');
$('.price-mushrooms').addClass('selected');
$('.price-green-peppers').addClass('selected');
calTotalPrice();
$('.sauce').toggleClass('sauce-white');
$('.crust').toggleClass('crust-gluten-free');
$('.price-sauce').toggle();
$('.price-crust').toggle();
// Btn settings
$('.btn-pepperonni').click(function() {
  $('.pep').toggle();
  $('.btn-pepperonni').toggleClass('active');
  $('.price-pepperonni').toggle();
  $('.price-pepperonni').toggleClass('selected');
  calTotalPrice();
});
$('.btn-mushrooms').click(function() {
  $('.mushroom').toggle();
  $('.btn-mushrooms').toggleClass('active');
  $('.price-mushrooms').toggle();
  $('.price-mushrooms').toggleClass('selected');
  calTotalPrice();
});
$('.btn-green-peppers').click(function() {
  $('.green-pepper').toggle();
  $('.btn-green-peppers').toggleClass('active');
  $('.price-green-peppers').toggle();
  $('.price-green-peppers').toggleClass('selected');
  calTotalPrice();
});
$('.btn-sauce').click(function() {
  $('.sauce').toggleClass('sauce-white');
  $('.btn-sauce').toggleClass('active');
  $('.price-sauce').toggle();
  $('.price-sauce').toggleClass('selected');
  calTotalPrice();
});
$('.btn-crust').click(function() {
  $('.crust').toggleClass('crust-gluten-free');
  $('.btn-crust').toggleClass('active');
  $('.price-crust').toggle();
  $('.price-crust').toggleClass('selected');
  calTotalPrice();
});





