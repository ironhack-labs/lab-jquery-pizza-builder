// Write your Pizza Builder JavaScript in this file.


var btnMushroom = $('.btn-mushrooms');
var btnGreenPepper = $('.btn-green-peppers');
var btnPepperonni = $('.btn-pepperonni');

btnGreenPepper.click(function(){
    $('#pizza .green-pepper').toggle('green-pepper')
})
btnMushroom.click(function(){
    $('#pizza .mushroom').toggle('mushroom')
})

btnPepperonni.click(function(){
    $('#pizza .pep').toggle('pep')
})
