// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

  
$('.btn-pepperonni').data('price', 1);
$('.btn-mushrooms').data('price', 1);
$('.btn-green-peppers').data('price', 1);
$('.btn-sauce').data('price', 3);
$('.btn-crust').data('price', 5);


function calculateTotalPrice(){
    var allTheButtons = $('.btn');
    var price = 10;

 for(var i =0; i < allTheButtons.length; i++){
    if(allTheButtons.eq(i).hasClass('active')){
        price += allTheButtons.eq(i).data('price');
    }
 }
    $('strong').text('$' + price);
}

$('.btn').click(function(){
  $(this).toggleClass('active');
  calculateTotalPrice();
})


// $('.controls li button').on('click', function(){
//   $(this).toggleClass('active');
//   if($('.btn-pepperonni').hasClass('active')){
//      $('.pep').show();
//     //  $('.price ul li:first').toggle();
//   }
//   else{
//      $('.pep').hide();
//   }
  
//   if($('.btn-green-peppers').hasClass('active')){
//      $('.green-pepper').show();
//     //  $('.price ul li:nth-chiild(2)').toggle();
//   }
//   else{
//      $('.green-pepper').hide();
//   }
  
//   if($('.btn-mushrooms').hasClass('active')){
//      $('.mushroom').show();
//     //  $('.price ul li:nth-child(3)').toggle();
//   }
//   else{
//      $('.mushroom').hide();
//   }

//   if ($('.btn-sauce').hasClass('active')){
//     $('.sauce').toggleClass('.sauce-white');
//   }
//   else{
//     $('.sauce').show();
//   }

//   if($('.btn-crust').hasClass('active')){
//     $('.crust').toggleClass('.crust-gluten-free');
//   }
//   else{
//     $('.crust').show();
//   }



$('.btn-pepperonni').click(function(){
  $('.pep').toggle();
  $('.price ul li:first').toggle();
});

$('.btn-mushrooms').click(function(){
  $('.mushroom').toggle();
  $('.price ul li:nth-child(2)').toggle();
});

$('.btn-green-peppers').click(function(){
  $('.green-pepper').toggle();
  $('.price ul li:nth-child(3)').toggle();
});

$('.btn-sauce').click(function(){
  $('.sauce').toggleClass('sauce-white');
  $('.price ul li:nth-child(4)').toggle();
});

$('.btn-crust').click(function(){
  $('.crust').toggleClass('crust-gluten-free');
  $('.price ul li:last').toggle();
});








$('.btn-crust').click();
$('.btn-sauce').click();
  
});
