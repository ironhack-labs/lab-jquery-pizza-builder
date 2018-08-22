// Write your Pizza Builder JavaScript in this file.
let $pepperonis = $('.pep');
let $mushrooms = $('.mushroom');
let $greenPeppers = $('.green-pepper');
let $crust = $(`.crust`);
let $sauce = $(`.sauce`);

let $pepperonisBtn = $('.btn-pepperonni');
let $mushroomsBtn = $('.btn-mushrooms');
let $greenPeppersBtn = $('.btn-green-peppers');
let $crustBtn = $(".btn-crust");
let $sauceBtn = $(".btn-sauce");

function showHidePep(e){
  $pepperonis.toggle();
}

function showHideMush(e){
  $mushrooms.toggle();
}

function showHideGreenPep(e){
  $greenPeppers.toggle();
}

function changeCrust(e){
  $crust.toggleClass("crust-gluten-free");
}

function changeSauce(e){
  $sauce.toggleClass("sauce-white");
}



$pepperonisBtn.on(`click`, showHidePep);
$mushroomsBtn.on(`click`, showHideMush);
$greenPeppersBtn.on(`click`, showHideGreenPep);
$crustBtn.on(`click`, changeCrust);
$sauceBtn.on(`click`, changeSauce);




