// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
    //console.log('asasasas')
    
    $('.btn-pepperonni').click(function(){

        if($('.pep').css('display')==='none'){
            $('.pep').css('display', 'block')
        } else {
            $('.pep').css('display', 'none')
        }
    })

    $('.btn-mushrooms').click(function(){

        if($('.cap, .stem').css('display')==='none'){
            $('.cap, .stem').css('display', 'block')
        } else {
            $('.cap, .stem').css('display', 'none')
        }
    })

    $('.btn-green-peppers').click(function(){

        if($('.green-pepper').css('display')==='none'){
            $('.green-pepper').css('display', 'block')
        } else {
            $('.green-pepper').css('display', 'none')
        }
    })

    $('.btn-sauce').click(function(){
        $( "section" ).removeClass( "sauce" )

        
    })

    $('.btn-crust').click(function(){
        $( "section" ).removeClass( "crust-gluten-free" ).addClass( "gluten-free-crust" );
        
    })

    $( "section" ).removeClass( "crust-gluten-free" ).addClass( "crust" );
    $( "section" ).removeClass( "sauce-white" )


    $('panel-price')

})

$('.green-pepper one')


$('.mushroom one')

$('.pep one')


