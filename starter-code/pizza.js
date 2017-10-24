// Write your Pizza Builder JavaScript in this file.
var btnMushroom = $('.btn-mushrooms');
var btnGreenPepper = $('.btn-green-peppers');
var btnPepperonni = $('.btn-pepperonni');
var btnSauce = $('.btn-sauce');
var btnCrust =$('.btn-crust');
var btns = $('.btn');

$('#pizza .crust').removeClass('crust-gluten-free');
btnSauce.removeClass('active');

$('#pizza .crust .sauce').removeClass('sauce-white');
btnCrust.removeClass('active');

$('.price ul li:last').hide();
$('.price ul li:last').prev('li').hide();

updatePrice();

btnPepperonni.click(function(){
    $('#pizza .pep').toggle('pep');
    updateList(this, 1);
    updatePrice();
});

btnMushroom.click(function(){
    $('#pizza .mushroom').toggle('mushroom');
    updateList(this, 2);
    updatePrice();
});

btnGreenPepper.click(function(){
    $('#pizza .green-pepper').toggle('green-pepper');
    updateList(this, 3);
    updatePrice();
});

btnSauce.click(function(){
    $('#pizza .sauce').toggleClass('sauce-white');
    updateList(this, 4);
    updatePrice();
});

btnCrust.click(function(){
     $('#pizza .crust').toggleClass('crust-gluten-free');
    updateList(this, 5);
    updatePrice();
});

btns.click(function(){
  $(this).toggleClass('active');
});

function updateList(btn, index){
  if($(btn).hasClass('active')){
    $('.price ul li:nth-child(' + index +')').hide();
  } else {
    $('.price ul li:nth-child(' + index +')').show();
  };
}

function updatePrice() {
  var total = 0;
  total += parseInt($('.price b').text().split(" ")[0].split("$")[1]);
  $('.price ul li:visible').each(function(){
    total += parseInt($(this).text().split(" ")[0].split("$")[1]);
  });
  // Update total price
  $('.price strong').text("$" + total);

}
