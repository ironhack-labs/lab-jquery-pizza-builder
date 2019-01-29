// Write your Pizza Builder JavaScript in this file.

let total = 10;
let isPepperoni = false
let isMushroom = false
let isGrnPep = false
let isSauceWhite = false
let isGluten = false

//reset pizz on load
$( document ).ready(function() {
    $('.sauce').toggleClass('sauce-white')
    $('.crust').toggleClass('crust-gluten-free')
    $('#pep-btn').toggleClass('active')
    $('#mushroom-btn').toggleClass('active')
    $('#gp-btn').toggleClass('active')
});
// toppings
function updatePizza(){

  $("#pep-btn").click(function(){
      isPepperoni = !(isPepperoni)
      $('#pep-btn').toggleClass('active')
      $('.pep').toggleClass('pepperoni')
      $('#pep-item').toggleClass('lst-item-display')
      if(isPepperoni){
        total+=1
      }else{
        total-=1
        if (total < 10){
          total = 10
        }
      }
      $('strong').text('$'+total+'.00')
  });

  $('#mushroom-btn').click(function(){
    isMushroom = !(isMushroom)
    $('.mushroom').toggleClass('no-mushroom')
    $('#mushroom-btn').toggleClass('active')
    $('#mushroom-item').toggleClass('lst-item-display')
    if(isMushroom){
      total+=1
    }else{
      total-=1
      if (total < 10){
        total = 10
      }
    }
    $('strong').text('$'+total+'.00')
  });

  $('#gp-btn').click(function(){
    isGrnPep = !(isGrnPep)
    $('.green-pepper').toggleClass('no-pepper')
    $('#gp-btn').toggleClass('active')
    $('#gp-item').toggleClass('lst-item-display')
    if(isGrnPep){
      total+=1
    }else{
      total-=1
      if (total < 10){
        total = 10
      }
    }
    $('strong').text('$'+total+'.00')
  })

  //Sauce
  $('#sauce-btn').click(function(){
    isSauceWhite = !(isSauceWhite)
    $('.sauce').toggleClass('sauce-white')
    $('#sauce-item').toggleClass('lst-item-display')
    if(isSauceWhite){
      total+=3
    }else{
      total-=3
    }
    $('strong').text('$'+total+'.00')
  })

  $('#crust-btn').click(function(){
      isGluten = !(isGluten)
      $('.crust').toggleClass('crust-gluten-free')
      $('#crust-item').toggleClass('lst-item-display')
      if(isGluten){
        total +=5
      }else{
        total-=5
      }
      $('strong').text('$'+total+'.00')
  })
  console.log(total);
}
updatePizza()
