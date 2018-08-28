// Write your Pizza Builder JavaScript in this file.
var botonM = $('.btn-mushrooms');
var mushrooms = $('.mushroom');
var price = $('.price strong');


botonM.on('click',function(){
  var total= price[0].innerHTML.substring(1,10);
  mushrooms.toggle();
  $('.price ul li:nth-child(2)').toggle();
  botonM.toggleClass('active');
  if(botonM.hasClass('active')){
    total++
    price[0].innerHTML = '$'+total;
  }else{
  var precio = $('.price ul li:nth-child(2)')[0].innerHTML.substring(2,1);
  var total = total-precio;
  price[0].innerHTML = '$'+total;
  }
})


var botonP = $('.btn-pepperonni');
var peps = $('.pep');
botonP.on('click',function(){
  var total= price[0].innerHTML.substring(1,10);
  peps.toggle();
  $('.price ul li:nth-child(1)').toggle();
  botonP.toggleClass('active');
  if(botonP.hasClass('active')){
    total++
    price[0].innerHTML = '$'+total;
  }else{
  var precio = $('.price ul li:nth-child(1)')[0].innerHTML.substring(2,1);
  var total = total-precio;
  price[0].innerHTML = '$'+total;
  }
})

var botonG = $('.btn-green-peppers');
var peppers = $('.green-pepper');
botonG.on('click',function(){
  var total= price[0].innerHTML.substring(1,10);
  peppers.toggle();
  $('.price ul li:nth-child(3)').toggle();
  botonG.toggleClass('active')
  if(botonG.hasClass('active')){
    total++
    price[0].innerHTML = '$'+total;
  }else{
  var precio = $('.price ul li:nth-child(3)')[0].innerHTML.substring(2,1);
  var total = total-precio;
  price[0].innerHTML = '$'+total;
  }
})

var botonW = $('.btn-sauce');
var sauce = $('.sauce');
botonW.removeClass('active');
var total= price[0].innerHTML.substring(1,10);
var precio = $('.price ul li:nth-child(4)')[0].innerHTML.substring(2,1);
var total = total-precio;
price[0].innerHTML = '$'+total;
$('.price ul li:nth-child(4)').css('display','none');
botonW.on('click',function(){
  var total= price[0].innerHTML.substring(1,10);
  sauce.toggleClass('sauce-white');
  $('.price ul li:nth-child(4)').toggle();
  botonW.toggleClass('active')
  if(botonW.hasClass('active')){
    totalt=parseInt(total);
    totalt = totalt+3;
    price[0].innerHTML = '$'+totalt;
  }else{
  var precio = $('.price ul li:nth-child(4)')[0].innerHTML.substring(2,1);
  var total = total-precio;
  price[0].innerHTML = '$'+total;
  }
})

var botonC = $('.btn-crust');
var crust = $('.crust');
botonC.on('click',function(){
  var total= price[0].innerHTML.substring(1,10);
  $('.price ul li:nth-child(5)').toggle();
crust.toggleClass('crust-gluten-free');
botonC.toggleClass('active');
if(botonC.hasClass('active')){
  totalt=parseInt(total);
  totalt = totalt+5;
  price[0].innerHTML = '$'+totalt;
}else{
var precio = $('.price ul li:nth-child(5)')[0].innerHTML.substring(2,1);
var total = total-precio;
price[0].innerHTML = '$'+total;
}
})

