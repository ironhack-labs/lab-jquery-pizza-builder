// Write your Pizza Builder JavaScript in this file.
var btnPep = $('.btn-pepperonni');
var btnChampos = $('.btn-mushrooms');
var btnPeppos = $('.btn-green-peppers');
var btnSauce = $('.btn-sauce');
var btnCrust = $('.btn-crust');
var pepLi = $('.price li:first-child');
var totalPrice = $('#totalPrice');
var realPrice = parseInt(totalPrice.text().substring(1,totalPrice.text().length));

console.log('working');
btnPep.on('click',function (e) {
    console.log('delete peperoni');
    var peperonies = $('.pep')
    peperonies.toggleClass('hide');
    btnPep.toggleClass('active');
    pepLi.toggleClass('hide');
    if(btnPep.hasClass('active')){
        realPrice+= 1;
        console.log(realPrice);
        totalPrice.html('$'+realPrice);
    }else if(!btnPep.hasClass('active')){
        realPrice-= 1;
        totalPrice.html('$'+realPrice);
    }
    console.log(btnPep.hasClass('active'));
});

btnChampos.on('click',function (e) {
    console.log('delete mushrooms');
    var mushrooms = $("[class^='mushroom']");
    mushrooms.toggleClass('hide');
    btnChampos.toggleClass('active');
    $('.price li:nth-child(2)').toggleClass('hide');
    if(btnChampos.hasClass('active')){
        realPrice+= 1;
        console.log(realPrice);
        totalPrice.html('$'+realPrice);
    }else if(!btnChampos.hasClass('active')) {
        realPrice -= 1;
        totalPrice.html('$'+realPrice);
    }
});

btnPeppos.on('click',function (e) {
    console.log('delete pepper');
    var peppers = $(".green-pepper");
    peppers.toggleClass('hide');
    btnPeppos.toggleClass('active');
    $('.price li:nth-child(3)').toggleClass('hide');
    if(btnPeppos.hasClass('active')){
        realPrice+= 1;
        console.log(realPrice);
        totalPrice.html('$'+realPrice);
    }else if(!btnPeppos.hasClass('active')){
        realPrice-= 1;
        totalPrice.html('$'+realPrice);
    }
});

btnSauce.on('click',function (e) {
    console.log('delete souce');
    var souce = $(".sauce-white");
    souce.toggleClass('hide');
    btnSauce.toggleClass('active');
    $('.price li:nth-child(4)').toggleClass('hide');
    if(btnSauce.hasClass('active')){
        realPrice+= 3;
        console.log(realPrice);
        totalPrice.html('$'+realPrice);
    }else if(!btnSauce.hasClass('active')){
        realPrice-= 3;
        totalPrice.html('$'+realPrice);
    }
});

btnCrust.on('click',function (e) {
    console.log('delete light 3,:');
    var crust = $(".sauce-white");
    crust.toggleClass('darkCrust');
    btnCrust.toggleClass('active');
    $('.price li:nth-child(5)').toggleClass('hide');
    if(btnCrust.hasClass('active')){
        realPrice+= 5;
        console.log(realPrice);
        totalPrice.html('$'+realPrice);
    }else if(!btnCrust.hasClass('active')){
        realPrice-= 5;
        totalPrice.html('$'+realPrice);
    }
});
