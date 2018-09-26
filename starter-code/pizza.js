// // GLOBAL VARIABLES -----------------

// var $pepperoni = $('.pep');
// var $mushroom = $('.mushroom');
// var $greenPepper = $('.green-pepper');
// var $crust = $('.crust');
// var $sauce = $('.sauce');

// var $btnPep = $('.btn-pepperonni');
// var $btnMush = $('.btn-mushrooms');
// var $btnGPep = $('.btn-green-peppers');
// var $btnSau = $('.btn-sauce');
// var $btnCrust = $('.btn-crust');
// var $allButtons = $('.btn');

// var $liPep = $('.panel.price ul li:contains(pepperonni)');
// var $liMush = $('.panel.price ul li:contains(mushrooms)');
// var $liGPep = $('.panel.price ul li:contains(peppers)');
// var $liSau = $('.panel.price ul li:contains(sauce)');
// var $liCrust = $('.panel.price ul li:contains(crust)');

// var $priceBox = $('.panel.price strong');
// var price = 13;

// $liSau.hide();
// $liCrust.hide();


// //FUNCTIONS -----------------

// var toggleTopping = function (topping, elem) {
//   topping.toggle();
//   elem.toggle();
//   updatePrice(elem);
// }

// var changeBase = function (base, type, elem) {
//   base.toggleClass(type);
//   elem.toggle();
//   updatePrice(elem);
// }

// var updatePrice = function (elem) {
//   var priceIngred = parseInt(elem.text().match(/\d+/)[0]);
//   elem.is(":hidden") ? price -= priceIngred : price += priceIngred;
//   $priceBox.text('$' + price);
// }


// //EVENTS -----------------

// $btnPep.on("click", function(){
//   toggleTopping($pepperoni, $liPep);
// });
// $btnMush.on("click", function(){
//   toggleTopping($mushroom, $liMush);
// });
// $btnGPep.on("click", function(){
//   toggleTopping($greenPepper, $liGPep);
// });
// $btnSau.on("click", function(){
//   changeBase($sauce, 'sauce-white', $liSau);
// });
// $btnCrust.on("click", function(){
//   changeBase($crust, 'crust-gluten-free', $liCrust);
// });
// $allButtons.on("click", function(){
//   $(this).toggleClass('active');
// });



// ANOTHER WAY TO DO IT ------------------------------------------------

var ingredient = {
  'btn-pepperonni': {
    pic: $('.pep'),
    li: $('.panel.price ul li:contains(pepperonni)')
  },
  'btn-mushrooms': {
    pic: $('.mushroom'),
    li: $('.panel.price ul li:contains(mushrooms)')
  },
  'btn-green-peppers': {
    pic: $('.green-pepper'),
    li: $('.panel.price ul li:contains(peppers)')
  },
  'btn-sauce': {
    pic: $('.sauce'),
    li:  $('.panel.price ul li:contains(sauce)'),
    clas: 'sauce-white'
  },
  'btn-crust': {
    pic: $('.crust'),
    li: $('.panel.price ul li:contains(crust)'),
    clas: 'crust-gluten-free'
  },
}

var ingredArr = ['btn-pepperonni', 'btn-mushrooms', 'btn-green-peppers'];
var $allButtons = $('.btn');
var $priceBox = $('.panel.price strong');
var price = 13;
$('.panel.price ul li:contains(sauce)').hide();
$('.panel.price ul li:contains(crust)').hide();


//FUNCTIONS -----------------
var toggleTopping = function (topping, elem) {
  topping.toggle();
  elem.toggle();
}
var changeBase = function (base, type, elem) {
  base.toggleClass(type);
  elem.toggle();
}
var updatePrice = function (elem) {
  var priceIngred = parseInt(elem.text().match(/\d+/)[0]);
  elem.is(":hidden") ? price -= priceIngred : price += priceIngred;
  $priceBox.text('$' + price);
}

//EVENT -----------------
$allButtons.on("click", function(e){
  var btnClass = $(this).attr('class').match(/(\bbtn-\S+)/ig)[0];
  if (ingredArr.includes(btnClass)) {
    toggleTopping(ingredient[btnClass].pic, ingredient[btnClass].li);
  } else {
    changeBase(ingredient[btnClass].pic, ingredient[btnClass].clas, ingredient[btnClass].li);
  }
  updatePrice(ingredient[btnClass].li);
  $(this).toggleClass('active');
});
