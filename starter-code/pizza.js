// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
 var totalPrice = 21;


// MUSHROOMS 

 $('.btn-mushrooms').click(function(){
   $('.mushroom').toggleClass('hidden');
   $('.pizza-mushroom').toggleClass('hidden');
   if($('.mushroom').hasClass('hidden')){
    totalPrice = totalPrice -1}
   else {
     totalPrice = totalPrice +1}
   $('.price strong').html('$' + totalPrice);
   $('.price ul li:contains("mushrooms")').toggle();
 });

 //GREEN PEPPERS

 $('.btn-green-peppers').click(function(){

   $('.green-pepper').toggleClass('hidden');
   $('.pizza-green-pepper').toggleClass('hidden');
   if($('.green-pepper').hasClass('hidden')){
    totalPrice = totalPrice -1}
   else {
     totalPrice = totalPrice +1}
   $('.price strong').html('$' + totalPrice);
   $('.price ul li:contains("green peppers")').toggle();
 });

 //PEPPERONNI


 $('.btn-pepperonni').click(function(){
   $('.pep').toggleClass('hidden');
   $('.pizza-pep').toggleClass('hidden');
   if($('.pep').hasClass('hidden')){
    totalPrice = totalPrice -1}
   else {
     totalPrice = totalPrice +1}
   $('.price strong').html('$' + totalPrice);
   $('.price ul li:contains("pepperonni")').toggle();
   
 });

 // SAUCE 
 $('.btn-sauce').click(function(){
   $('.pizza-sauce').toggleClass('hidden');
   $('.sauce').toggleClass('sauce-white');
   if($('.sauce').hasClass('sauce-white')){
    totalPrice = totalPrice +3}
   else {
     totalPrice = totalPrice -3}
   $('.price strong').html('$' + totalPrice);
   $('.price ul li:contains("white sauce")').toggle();
 });

 //CRUST
 $('.btn-crust').click(function(){
   $('.pizza-crust').toggleClass('hidden');
   $('.crust').toggleClass('crust-gluten-free');

 if($('.crust').hasClass('crust-gluten-free')){
  totalPrice = totalPrice +5}
 else {
   totalPrice = totalPrice -5}
 $('.price strong').html('$' + totalPrice);
 $('.price ul li:contains("gluten-free crust")').toggle();
});

});



  $('button').click(function(){
  $(this).toggleClass('active');
});


