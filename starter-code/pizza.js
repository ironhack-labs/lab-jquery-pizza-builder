// Write your Pizza Builder JavaScript in this file.

'use strict'

function main(){

    var sauce = '$0 regular sauce';
    var crust = '$0 regular crust';

    var $peppers = $('.green-pepper');
    var $peppersButton = $('.btn-green-peppers');
    var $pepperList = $('.price li:nth-child(1)');
        $peppersButton.click(function(){
            $peppersButton.toggleClass('active')
            $peppers.toggle(function(){
            });
        });

    var $pepperoni = $('.pep');
    var $pepButton = $('.btn-pepperonni');
        $pepButton.click(function(){
            $pepButton.toggleClass('active')
            $pepperoni.toggle(function(){
            });
        });

    var $mushrooms = $('.mushroom');
    var $mushButton = $('.btn-mushrooms');
        $mushButton.click(function(){
            $mushButton.toggleClass('active')
            $mushrooms.toggle(function(){
            });
        });

    var $sauce = $('.price li:nth-child(4)');
    var $crust = $('.price li:nth-child(5)');

        $sauce.text(sauce);
        $crust.text(crust);
    var $sauceButton = $('.btn-sauce');
    var $crustButton = $('.btn-crust');
        $sauceButton.click(function(){
            if (($sauceButton).hasClass('active')){
                $sauce.text(sauce);
            }
            else{
                $sauce.text('$1 white sauce');
            }
            $sauceButton.toggleClass('active');
        })
        $crustButton.click(function(){
            if (($crustButton).hasClass('active')){
                $crust.text(crust);
            }
            else{
                $crust.text('$3 gluten free crust');
            }
            $crustButton.toggleClass('active');
        })
            

}

$(main);