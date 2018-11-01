// Write your Pizza Builder JavaScript in this file.

let finalPizza = 13;


defaultPrice();



function defaultPrice () {
    $('.sauce').toggleClass('sauce-white');
    $('.price li:nth-child(4)').toggle();
    $('.crust').toggleClass('crust-gluten-free');
    $('.price li:nth-child(5)').toggle();
    $('.price strong').text(`$${finalPizza}`);
    }



let pepperBtn = $('.btn:first');
let addPepperPrice = $('.price li:first')
pepperBtn.click(function(){
    $('.pep').toggle(300);
    pepperBtn.toggleClass('active');
    addPepperPrice.toggle();
    if (pepperBtn.hasClass('active')){
        finalPizza += 1;
        $('.price strong').text(`$${finalPizza}`);
    }else{
        finalPizza -=1;
        $('.price strong').text(`$${finalPizza}`);
    }
    
})


let mushroomBtn = $('.btn-mushrooms');
mushroomBtn.click(function(){
    mushroomBtn.toggleClass('active');
    $('.mushroom').toggle(300);
    $('.price li:nth-child(2)').toggle();
    if (mushroomBtn.hasClass('active')){
        finalPizza += 1;
        $('.price strong').text(`$${finalPizza}`);
    }else{
        finalPizza -=1;
        $('.price strong').text(`$${finalPizza}`);
    }
    
})

let greenBtn = $('.btn-green-peppers');
greenBtn.click(function(){
    greenBtn.toggleClass('active');
    $('.green-pepper').toggle(300);
    $('.price li:nth-child(3)').toggle();
    if (greenBtn.hasClass('active')){
        finalPizza += 1;
        $('.price strong').text(`$${finalPizza}`);
    }else{
        finalPizza -=1;
        $('.price strong').text(`$${finalPizza}`);
    }
    
})

let whiteBtn = $('.btn-sauce');
whiteBtn.click(function(){
    whiteBtn.toggleClass('active');
    $('.sauce').toggleClass('sauce-white');
    $('.price li:nth-child(4)').toggle();
    if (whiteBtn.hasClass('active')){
        finalPizza -=3;
        $('.price strong').text(`$${finalPizza}`);
    }else{
        finalPizza +=3
        $('.price strong').text(`$${finalPizza}`);
    }
    
})

let crustBtn = $('.btn-crust');
crustBtn.click(function(){
    crustBtn.toggleClass('active');
    $('.crust').toggleClass('crust-gluten-free');
    $('.price li:nth-child(5)').toggle();
    if (crustBtn.hasClass('active')){
        finalPizza -= 5;
        $('.price strong').text(`$${finalPizza}`);
    }else{
        finalPizza +=5;
        $('.price strong').text(`$${finalPizza}`);
    }
    
})


// function addToppings (){
    //     if ($(this).hasClass('active')){
    //         finalPizza += 1;
    //         $('.price strong').text(`$${finalPizza}`);
    //     }else{
    //         finalPizza -=1;
    //         $('.price strong').text(`$${finalPizza}`);
    //     }
        
    // }

