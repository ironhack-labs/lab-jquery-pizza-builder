// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {


    var sum = 0


    $('button.btn-mushrooms').click(function(){
        $(this).toggleClass('active')
        $('.mushroom').toggle()
        $('.price li:nth-child(2)').toggle()
   
        if($('.btn-mushrooms').hasClass('active')){
            sum += 1
        } else {
            sum = 0
        }
        render()
    })

    $('button.btn-pepperonni').click(function(){

        $(this).toggleClass('active')
        $('.pep').toggle()
        $('.price li').first().toggle()

        if($('.btn-pepperonni').hasClass('active')){
            sum += 1
        } else {
            sum = 0
        }
        render()
    })
 
    $('button.btn-green-peppers').click(function(){


        $(this).toggleClass('active')
        $('.green-pepper').toggle()
        $('.price li:nth-child(3)').toggle()

        if($('.btn-green-peppers').hasClass('active')){
            sum += 1
        } else {
            sum = 0
        }
        render()

    })

    $('button.btn-sauce').click(function(){


        $(this).toggleClass('active')
        $('.sauce').toggleClass('sauce-white')
        $('.price li:nth-child(4)').toggle()

        if($('.btn-sauce').hasClass('active')){
            sum += 3
        } else {
            sum = 0
        }
        render()

    })

    $('button.btn-crust').click(function(){


        $(this).toggleClass('active')
        $('.crust').toggleClass('crust-gluten-free')
        $('.price li:nth-child(5)').toggle()
        
        if($('.btn-crust').hasClass('active')){
            sum += 5
        } else {
            sum = 0
        }
        render()

    })
    
    function render() {
        $('strong').text(sum + 10)

    }

})
