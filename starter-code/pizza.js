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

    if($('#pizza .crust').hasClass('crust-gluten-free')){
        $('#pizza .crust').removeClass('crust-gluten-free');
    } else {
        $('#pizza .crust').addClass('crust-gluten-free');
    }
    //toggle not working
    // $('#pizza .crust').toggle('crust-gluten-free')
})


