// Write your Pizza Builder JavaScript in this file.
$(function() {

$('.btn-pepperonni').data('price', 1);
$('.btn-mushrooms').data('price', 1);
$('.btn-green-peppers').data('price', 1);
$('.btn-sauce').data('price', 3);
$('.btn-crust').data('price', 5);

function getTotalPrice(){
    var allButtons = $('.btn');
    var price = 10; 

    for (var i=0; i < allButtons.length; i++) {
        if (allButtons.eq(i).hasClass('active')) {
            price += allButtons.eq(i).data('price');
        }
    }   
    $('strong').text('$' + price);
};

$('.btn').on('click', function(){

    $(this).toggleClass('active');
    getTotalPrice();
});

$('.btn-pepperonni').on('click', function(){
       $('.pep').toggle();
       $('.price ul li:first').toggle();
    });

$('.btn-mushrooms').on('click', function(){
       $('.mushroom').toggle();
       $('.price ul li:nth-child(2)').toggle();
    });

$('.btn-green-peppers').on('click', function(){
        $('.green-pepper').toggle();
        $('.price ul li:nth-child(3)').toggle();
    });

$('.btn-crust').on('click', function(){
        $('.crust').toggleClass('crust-gluten-free');
        $('.price ul li:nth-child(4)').toggle();
    });

$('.btn-sauce').on('click', function(){
    $('.sauce').toggleClass('sauce-white');
    $('.price ul li:nth-child(5)').toggle();
});





+$('.btn-crust').click();
+$('.btn-sauce').click();


});


//     SOME BROCKEN CODE
//         $('.controls li button').on('click', function(){
//         $(this).toggleClass('active');
        
//         if ($('.btn-pepperonni').hasClass('active')){
//            $('.pep').show();
//           } else {
//            $('.pep').hide();
//         }    
        
//         if ($('.btn-mushrooms').hasClass('active')){
//              $('.mushroom').show();
//             } 
//           else {
//             $('.mushroom').hide();
        
//           }

//         if ($('.btn-green-peppers').hasClass('active')){
//             $('.green-pepper').show();
//            } 
//         else {
//            $('.green-pepper').hide();
       
//          }

//         if (!$('.btn-sauce').hasClass('active')){
//             $('.crust .sauce').toggleClass('sauce-white'); 
//         } else {
//             console.log('here is your white sauce');
//         }  
       
        
//          if (!$('.btn-crust').hasClass('active')){
//             $('.crust').toggleClass('crust-gluten-free');
//            }
//          else { console.log('here is your gf crust');
//          };

//   });