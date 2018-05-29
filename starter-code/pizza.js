// Write your Pizza Builder JavaScript in this file.
$(document).ready(init);
function init()
{
  $('.btn-pepperonni').click(togglePepperonni);
  $('.btn-mushrooms').click(toggleMushrooms);
  $('.btn-green-peppers').click(toggleGreenPeppers);
  $('.btn-sauce').click(toggleSauce);
  $('.btn-crust').click(toggleCrust);

  if (!$('.btn-pepperonni').hasClass('active')) $('.btn-pepperonni').addClass('active');
  if (!$('.btn-mushrooms').hasClass('active')) $('.btn-mushrooms').addClass('active');
  if (!$('.btn-green-peppers').hasClass('active')) $('.btn-green-peppers').addClass('active');
  if ($('.btn-sauce').hasClass('active')) $('.btn-sauce').removeClass('active');
  if ($('.btn-crust').hasClass('active')) $('.btn-crust').removeClass('active');

  $('.sauce').removeClass('sauce-white');
  $('.crust').removeClass('crust-gluten-free');
  $('.price ul li:contains("white sauce")').hide();
  $('.price ul li:contains("gluten-free")').hide();

  calculateTotal();
}
function togglePepperonni()
{
  $('.pep').toggle();
  $('.btn-pepperonni').toggleClass('active');
  $('.price ul li:contains("pepperonni")').toggle();
  calculateTotal();
}
function toggleMushrooms()
{
  $('.mushroom').toggle();
  $('.btn-mushrooms').toggleClass('active');
  $('.price ul li:contains("mushrooms")').toggle();
  calculateTotal();
}
function toggleGreenPeppers()
{
  $('.green-pepper').toggle();
  $('.btn-green-peppers').toggleClass('active');
  $('.price ul li:contains("green peppers")').toggle();
  calculateTotal();
}
function toggleSauce()
{
  $('.sauce').toggleClass('sauce-white');
  $('.btn-sauce').toggleClass('active');
  $('.price ul li:contains("white sauce")').toggle();
  calculateTotal();
}
function toggleCrust()
{
  $('.crust').toggleClass('crust-gluten-free');
  $('.btn-crust').toggleClass('active');
  $('.price ul li:contains("crust")').toggle();
  calculateTotal();
}
function calculateTotal()
{
  var total = 10;
  if($('.btn-pepperonni').hasClass('active'))
  {
    total += 1;
  }
  if($('.btn-mushrooms').hasClass('active'))
  {
    total += 1;
  }
  if($('.btn-green-peppers').hasClass('active'))
  {
    total += 1;
  }
  if($('.btn-sauce').hasClass('active'))
  {
    total += 3;
  }
  if($('.btn-crust').hasClass('active'))
  {
    total += 5;
  }
  $('.price strong').text("$" + total);
  console.log(total);
}