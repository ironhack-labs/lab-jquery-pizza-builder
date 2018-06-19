// Write your Pizza Builder JavaScript in this file.

var precio = 21;

$('.panel .btn').click(function(){
    $(this).toggleClass('active');
})

var pepperoni = $('.panel .btn:first');
pepperoni.click(function(){
    $('.pep').toggle();
    $('.price ul li:first').toggle();
    if($(this).hasClass('active')) precio +=1;
    else precio -= 1;
    $("strong").text("$" + precio);
})

var mushroom = $('.panel .btn-mushrooms');
mushroom.click(function(){
    $('#pizza .mushroom').toggle();
    $('.price ul li:nth-child(2)').toggle();
    if($(this).hasClass('active')) precio +=1;
    else precio -= 1;
    $("strong").text("$" + precio);
}) 

var greenPeppers = $('.panel .btn-green-peppers');
greenPeppers.click(function(){
    $('#pizza .green-pepper').toggle();
    $('.price ul li:nth-child(3)').toggle();
    if($(this).hasClass('active')) precio +=1;
    else precio -= 1;
    $("strong").text("$" + precio);
}) 

var whiteSauce = $('.panel .btn-sauce');
whiteSauce.click(function(){
    $('#pizza .sauce-white').toggle();
    $('.price ul li:nth-child(4)').toggle();
    if($(this).hasClass('active')) precio +=3;
    else precio -= 3;
    $("strong").text("$" + precio);
})

var gluttenFree = $('.panel .btn-crust');
gluttenFree.click(function(){
    $('#pizza .crust').toggleClass('crust-gluten-free');
    $('.price ul li:last').toggle();
    if($(this).hasClass('active')) precio +=5;
    else precio -= 5;
    $("strong").text("$" + precio);
}) 