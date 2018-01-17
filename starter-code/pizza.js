'use strict'
// Write your Pizza Builder JavaScript in this file.


var $greenPep = $('div#pizza section.green-pepper'); 

var $pepperonni = $('div#pizza section.pep'); 

var $mushrooms = $('div#pizza section.mushroom'); 

var $crust = $('.crust');

var $sauce = $('.sauce');


// var $adReButton = $.each($('button'), function (){});

var $buttonPe = $($('button')[0]);

var $buttonMu = $($('button')[1]);

var $buttonGr = $($('button')[2]);

var $buttonCr = $($('button')[4]);

var $buttonSa = $($('button')[3]);

// function addRemove () {
//     var numb = 0;
//     if (numb = 0) {
//         $pepperonni.remove()
//         numb = 1;
//     } else {
//         $pepperonni.add()
//     }
// }

function removePe () {
    if ($pepperonni.is(':visible')) {
        $pepperonni.hide();
    } else if ($pepperonni.is(':hidden')){
        $pepperonni.show();
    }
}

function removeMu () {

    if ($mushrooms.is(':visible')) {
        $mushrooms.hide();
    } else if ($mushrooms.is(':hidden')){
        $mushrooms.show();
    }
}

function removeGr () {
    if ($greenPep.is(':visible')) {
        $greenPep.hide();
    } else if ($greenPep.is(':hidden')){
        $greenPep.show();
    }
}

function changeSauce () {
    $sauce.addClass('sauce-white');
}

function changeCrust () {
    $crust.addClass('crust-gluten-free');
}

$buttonPe.click(removePe);

$buttonMu.click(removeMu);

$buttonGr.click(removeGr);

$buttonCr.click(changeCrust);

$buttonSa.click(changeSauce);

// $(main);