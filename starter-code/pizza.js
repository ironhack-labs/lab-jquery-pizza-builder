// Write your Pizza Builder JavaScript in this file.
$('document').ready(function(){
  var pepBtn    = $('.btn-pepperonni')
  var mushBtn   = $('.btn-mushrooms')
  var grnPepBtn = $('.btn-green-peppers')
  var sauceBtn  = $('.btn-sauce')
  var crustBtn  = $('.btn-crust')
  var pep       = $('.pep')
  var grnPep    = $('.green-pepper')
  var mush      = $('.mushroom')
  var sauce     = $('.sauce-white')
  var crust     = $('.crust')
  var active    = $('.active')

  crust.removeClass('crust-gluten-free')

  mushBtn.click(function(){
    $(this).toggleClass('active')
    mush.toggle()})
  pepBtn.click(function(){
    $(this).toggleClass('active')
    pep.toggle()})
  grnPepBtn.click(function(){
    $(this).toggleClass('active')
    grnPep.toggle()})
  sauceBtn.click(function(){
    $(this).toggleClass('active')
    sauce.toggle()})
  crustBtn.click(function(){
    $(this).toggleClass('active')
    crust.toggleClass('crust-gluten-free')})
})