'use strict';
// Write your Pizza Builder JavaScript in this file.

// Produce jqeury objects (arrays) and store in var
var $greenPeppers = $('.green-pepper');
var $mushrooms = $('.mushroom');
var $peps = $('.pep');

// Produce jquery objects (arrays with length 1) and store in var
var $greenPeppersBtn = $('.btn-green-peppers');
var $pepsBtn = $('.btn-pepperonni');
var $mushroomsBtn = $('.btn-mushrooms');

// Bind button click to html element display/hide toggle
$greenPeppersBtn.click(function(){
  $greenPeppers.toggle(0, function(){
    if($(this).is(':hidden')) {
      $greenPeppersBtn.removeClass('active');
    }
    else {
      $greenPeppersBtn.addClass('active');
    }
  });
});
$pepsBtn.click(function(){
  $peps.toggle(0, function(){
    if($(this).is(':hidden')) {
      $pepsBtn.removeClass('active');
    }
    else {
      $pepsBtn.addClass('active');
    }
  });

});
$mushroomsBtn.click(function(){
  $mushrooms.toggle(0, function(){
    if($(this).is(':hidden')) {
      $mushroomsBtn.removeClass('active');
    }
    else {
      $mushroomsBtn.addClass('active');
    }
  });
});

// Iteration 2
var $crust = $('.crust');
var $crustBtn = $('.btn-crust');
var $sauce = $('.sauce');
var $sauceBtn = $('.btn-sauce');

$crust.removeClass('crust-gluten-free');
$sauce.removeClass('sauce-white');

$crustBtn.click(function(){
  var $crustGlutenFree = $('.crust-gluten-free');
  if( $crustGlutenFree.length > 0 ) {
    $crust.removeClass('crust-gluten-free');
  }
  else {
    $crust.addClass('crust-gluten-free');
  }
});

$sauceBtn.click(function(){
  var $whiteSauce = $('.sauce-white');
  if( $whiteSauce.length > 0 ) {
    $sauce.removeClass('sauce-white');
  }
  else {
    $sauce.addClass('sauce-white');
  }
});

// Iteration 4

