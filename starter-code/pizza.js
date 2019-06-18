// Write your Pizza Builder JavaScript in this file.

let total = 13;
let isPep = true;
let isMush = true;
let isgPepper = true;
let isWhiteSauce = false;
let isGFree = false;

let button = $('.btn');
let mushrromButton = $('.btn-mushrooms');
let greenPepperButton = $('.btn-green-peppers');
let whiteSauceButton = $('.btn-sauce');
let gCrustButton = $('.btn-crust');


// Changes the appearence of the button to pushed/not pushed
button.click(function(){
    $(this).toggleClass('active');    
})

{/* <aside class="panel price">
      <h2>Your pizza's price</h2>
      <b>$10 cheese pizza</b>
      <ul>
        <li>$1 pepperonni</li>
        <li>$1 mushrooms</li>
        <li>$1 green peppers</li>
        <li>$3 white sauce</li>
        <li>$5 gluten-free crust</li>
      </ul>
      <strong>$21</strong>
    </aside> */}

// Adds and removes the toppings
$('.btn-pepperonni').click(function(){
    $('.pep').toggle();
    $('aside li:first-child').toggle();

    if(isPep){
        isPep = false;
        total -= 1;
    }
    else{
        isPep = true;
        total += 1;
    }
    $('.totalPrice').text(total);
   });

   $('.btn-mushrooms').click(function(){
    $('.mushroom').toggle();
    $('aside li:nth-child(2)').toggle();
    
    if(isMush){
        isMush = false;
        total -= 1;
    }
    else{
        isMush = true;
        total += 1;
    }
    $('.totalPrice').text(total);
   });

   $('.btn-green-peppers').click(function(){
    $('.green-pepper').toggle();
    $('aside li:nth-child(3)').toggle();
    
    if(isgPepper){
        isgPepper = false;
        total -= 1;
    }
    else{
        isgPepper = true;
        total += 1;
    }
    $('.totalPrice').text(total);
   });
  
   $('.btn-sauce').click(function(){
    $('.sauce').toggleClass('sauce-white');
    $('aside li:nth-child(4)').toggleClass('display');
    
    if(isWhiteSauce){
        isWhiteSauce = false;
        total -= 3;
    }
    else{
        isWhiteSauce = true;
        total += 3;
    }
    $('.totalPrice').text(total);
   });

   $('.btn-crust').click(function(){
    $('.crust').toggleClass('crust-gluten-free');
    $('aside li:nth-child(5)').toggleClass('display');
    
    if(isGFree){
        isGFree = false;
        total -= 5;
    }
    else{
        isGFree = true;
        total += 5;
    }
    $('.totalPrice').text(total);
    
   });


   