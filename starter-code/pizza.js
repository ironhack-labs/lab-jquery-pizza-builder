// Write your Pizza Builder JavaScript in this file.
var pepBut = $('.btn-pepperonni');
var pepperonnis = $('.pep');
var pepPrecio = $('.price ul li:nth-child(1)');

var mushBut = $('.btn-mushrooms');
var mushrooms = $('.mushroom');
var mushPrecio = $('.price ul li:nth-child(2)');

var greenBut = $('.btn-green-peppers');
var greenPeppers = $('.green-pepper');
var greenPrecio = $('.price ul li:nth-child(3)');

var sauceBut = $('.btn-sauce');
var sauce = $('.sauce');
var saucePrecio = $('.price ul li:nth-child(4)');

var crustBut = $('.btn-crust');
var crust = $('.crust');
var crustPrecio = $('.price ul li:nth-child(5)');

var precio = 21;
var precioPanel = $('.price strong');

pepBut.click(function(){
  if(pepperonnis.is(":visible")){
    pepperonnis.hide();
    pepPrecio.hide();
    precio -= 1;
  } else {
    pepperonnis.show();
    pepPrecio.show();
    precio += 1;
  }

  pepBut.toggleClass('active');
  precioPanel.text('$' + precio);
});

mushBut.click(function(){
  if(mushrooms.is(":visible")){
    mushrooms.hide();
    mushPrecio.hide();
    precio -= 1;
  } else {
    mushrooms.show();
    mushPrecio.show();
    precio += 1;
  }
  mushBut.toggleClass('active');
  precioPanel.text('$' + precio);
});

greenBut.click(function(){
  if(greenPeppers.is(":visible")){
    greenPeppers.hide();
    greenPrecio.hide();
    precio -= 1;
  } else {
    greenPeppers.show();
    greenPrecio.show();
    precio += 1;
  }
  greenBut.toggleClass('active');
  precioPanel.text('$' + precio);
});

sauceBut.click(function(){
  sauce.toggleClass('sauce-white');
  sauceBut.toggleClass('active');

  if(sauce.hasClass('sauce-white')){
    saucePrecio.show();
    precio += 3;
  } else {
    saucePrecio.hide();
    precio -= 3;
  }
  precioPanel.text('$' + precio);
});

crustBut.click(function(){
  crust.toggleClass('crust-gluten-free');
  crustBut.toggleClass('active');

  if(crust.hasClass('crust-gluten-free')){
    crustPrecio.show();
    precio += 5;
  } else {
    crustPrecio.hide();
    precio -= 5;
  }
  precioPanel.text('$' + precio);
});


