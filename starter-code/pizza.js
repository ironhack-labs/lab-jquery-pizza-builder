// Write your Pizza Builder JavaScript in this file.

let $pepperonni = $('.pep');
let $mushrooms = $('.mushroom');
let $greenPeppers = $('.green-pepper');
let $crust = $('.crust');
let $sauce = $('.sauce');
let $panelPrice = $('.panel.price > ul');
let $panelTotalPrice = $('.panel.price > strong');


let $pepperonniBtn = $('.btn-pepperonni');
let $mushrBtn = $('.btn-mushrooms');
let $greenPepBtn = $('.btn-green-peppers');
let $sauceBtn = $('.btn-sauce');
let $crustBtn = $('.btn-crust');

initState();

function initState() {
    $('li:nth-child(4)', $panelPrice).hide();
    $('li:nth-child(5)', $panelPrice).hide();
    $crustBtn.toggleClass('active');
    $sauceBtn.toggleClass('active');
    $panelTotalPrice.text('$13');

    $pepperonniBtn.on('click', showHide);
    $mushrBtn.on('click', showHide);
    $greenPepBtn.on('click', showHide);
    $sauceBtn.on('click', addCrustOrSauce);
    $crustBtn.on('click', addCrustOrSauce);

}

function addCrustOrSauce(e) {
    let $node = $(e.target);

    if ($node.hasClass('btn-crust')) {
        $crust.toggleClass('crust-gluten-free');
        $crustBtn.toggleClass('active');
        $('li:nth-child(5)', $panelPrice).toggle();

        if( $('li:nth-child(5)', $panelPrice).css('display') !== 'none') {
            $panelTotalPrice.text(function(index, content) {

                let newPrice = '$' + (+content.replace('$', '').trim() + 5);
                return newPrice;
            });
        } else {
            $panelTotalPrice.text(function(index, content) {

                let newPrice = '$' + (+content.replace('$', '').trim() - 5);
                return newPrice;
            });
        }
    }

    if($node.hasClass('btn-sauce')){
        $sauce.toggleClass('sauce-white');
        $sauceBtn.toggleClass('active');
        $('li:nth-child(4)', $panelPrice).toggle();

        if( $('li:nth-child(4)', $panelPrice).css('display') !== 'none') {
            $panelTotalPrice.text(function(index, content) {

                let newPrice = '$' + (+content.replace('$', '').trim() + 3 + 0);
                return newPrice;
            });
        } else {
            $panelTotalPrice.text(function(index, content) {

                let newPrice = '$' + (+content.replace('$', '').trim() - 3 + 0);
                return newPrice;
            });
        }
    }
}

function showHide(e) {
    let $node = $(e.target);

    if($node.hasClass('btn-pepperonni')) {
        $pepperonni.toggle();
        $pepperonniBtn.toggleClass('active');
        $('li:nth-child(1)', $panelPrice).toggle();

        if( $('li:nth-child(1)', $panelPrice).css('display') !== 'none') {
            $panelTotalPrice.text(function(index, content) {

                let newPrice = '$' + (+content.replace('$', '').trim() + 1);
                return newPrice;
            });
        } else {
            $panelTotalPrice.text(function(index, content) {

                let newPrice = '$' + (+content.replace('$', '').trim() - 1);
                return newPrice;
            });
        }

    } else if($node.hasClass('btn-mushrooms')) {
        $mushrooms.toggle();
        $mushrBtn.toggleClass('active');
        $('li:nth-child(2)', $panelPrice).toggle();

        if( $('li:nth-child(2)', $panelPrice).css('display') !== 'none') {
            $panelTotalPrice.text(function(index, content) {

                let newPrice = '$' + (+content.replace('$', '').trim() + 1);
                return newPrice;
            });
        } else {
            $panelTotalPrice.text(function(index, content) {

                let newPrice = '$' + (+content.replace('$', '').trim() - 1);
                return newPrice;
            });
        }

    } else {
        $greenPeppers.toggle();
        $greenPepBtn.toggleClass('active');
        $('li:nth-child(3)', $panelPrice).toggle();

        if( $('li:nth-child(3)', $panelPrice).css('display') !== 'none') {
            $panelTotalPrice.text(function(index, content) {

                let newPrice = '$' + (+content.replace('$', '').trim() + 1);
                return newPrice;
            });
        } else {
            $panelTotalPrice.text(function(index, content) {

                let newPrice = '$' + (+content.replace('$', '').trim() - 1);
                return newPrice;
            });
        }
    }
}





