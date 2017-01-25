// Write your Pizza Builder JavaScript in this file.
$( document ).ready(function() {

function buttonClick(buttonName, lineItemName, iconName) {
  $(buttonName).click(function(){
    $(lineItemName).toggleClass('block');
    $(buttonName).toggleClass('active');
    $(iconName).toggleClass('display-none');
  });
}

buttonClick('.btn-pepperonni', '.pep-line-item', '.pep');
buttonClick('.btn-mushrooms', '.mush-line-item', '.mushroom');
buttonClick('.btn-green-peppers', '.green-pep-line-item', '.green-pepper');
// buttonClick('.btn-sauce', '.')

$('.btn-sauce').click(function(){
  $('.white-sauce-line-item').toggleClass('block');
  $('.btn-sauce').toggleClass('active');
  $('.sauce').toggleClass('sauce-white');
});

$('.btn-crust').click(function(){
  $('.gf-crust-line-item').toggleClass('block');
  $('.btn-crust').toggleClass('active');
  $('.crust').toggleClass('crust-gluten-free');
});

$('.btn').click(function(){
  var priceArray = $( "li.block" ).children();
  var total = 0;
  for (i=0;i<priceArray.length;i++) {
    var x = Number(priceArray[i].innerHTML);
    total = total + x;
  }
  total = total + 10;
  $('#total-price').html(total);
});

});
