// Write your Pizza Builder JavaScript in this file.
$('.btn-pepperonni').click(function(){
    $('* .pep').toggle("active");
    $('.salch').toggle("active");
    console.log("si funciono");
})

$('.btn-mushrooms').click(function(){
    $('* .mushroom ').toggle("active")
    $('.hong').toggle("active");
})

$('.btn-green-peppers').click(function(){
    $('* .green-pepper').toggle("active")
    $('.pim').toggle("active");
})
$('.btn-sauce').click(function(){
    $('* .sauce').toggle("active")
    $('.sals').toggle("active");
})
$('.btn-crust').click(function(){
    $('* .crust').toggleClass("crust-gluten-free")
    $('.orilla').toggle("active");
})

function calcPrice(){
    var totalPrice=10;  if ($('.btn-pepperonni').hasClass('active')) {
      totalPrice += 1;
    }
    if ($('.btn-mushrooms').hasClass('active')) {
      totalPrice += 1;
    }
    if ($('.btn-green-peppers').hasClass('active')) {
      totalPrice += 1;
    }
    if ($('.btn-sauce').hasClass('active')) {
      totalPrice += 3;
    }
    if ($('.btn-crust').hasClass('active')) {
      totalPrice += 5;
    }  
        $('strong').innerHTML = totalPrice;
   }

   calcPrice()
