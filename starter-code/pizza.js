// Write your Pizza Builder JavaScript in this file.


var btnMushroom = $('.btn-mushrooms');
var btnGreenPepper = $('.btn-green-peppers');
var btnPepperonni = $('.btn-pepperonni');
var btnSauce = $('.btn-sauce');
var btnCrust =$('.btn-crust');

$('#pizza .crust').removeClass('crust-gluten-free');
$('#pizza .crust .sauce').removeClass('sauce-white');

btnGreenPepper.click(function(){
    $('#pizza .green-pepper').toggle('green-pepper')
})
btnMushroom.click(function(){
    $('#pizza .mushroom').toggle('mushroom')
})

btnPepperonni.click(function(){
    $('#pizza .pep').toggle('pep')
})


btnSauce.click(function(){
    $('#pizza .sauce').toggle('sauce-white')
})

btnCrust.click(function(){

    $('#pizza .crust').toggleClass('crust-gluten-free')
})



