// Write your Pizza Builder JavaScript in this file.

var totalPrice = Number($('#total-price').text().replace(/[^0-9\.]+/g,""));

// console.log($('#total-price').text());
function toppings (buttonname, peptotoggle, totalpricetoput, extra){
$(buttonname).on('click', function(){
  $(buttonname).toggleClass('active');
  $(peptotoggle).toggle();
  if($(buttonname).hasClass('active')=== true){
    totalPrice = totalPrice + extra ;
    $(totalpricetoput).text("$" + totalPrice);
  }
  else{
    totalPrice = totalPrice - extra;
    $(totalpricetoput).text("$" +totalPrice);
  }
});
}
toppings('.btn-pepperonni', '.pep, .price li:nth-child(1) ',  "#total-price", 1);
toppings('.btn-mushrooms', '.mushroom, .price li:nth-child(2) ',  "#total-price", 1);
toppings('.btn-green-peppers', '.green-pepper, .price li:nth-child(3) ',  "#total-price", 1);
toppings('.btn-sauce', '.sauce, .price li:nth-child(4) ',  "#total-price", 3);
toppings('.btn-crust', '.crust, .price li:nth-child(5) ',  "#total-price", 5);
