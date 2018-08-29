// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {

var peperoni1 = $('.btn-pepperonni')
var hongo1 = $('.btn-mushrooms')
var pimiento1 = $('.btn-green-peppers')
var costra1 = $('.btn-crust')
var salsa1 = $('.btn-sauce')
var pizza = 21
var peperoni = 1
var hongo = 1
var pimiento = 1
var costra = 5
var salsa = 3

  //primera interaccion con tercera

  $('.btn-pepperonni').on('click',function(){
    $('.pep').toggleClass('off')
    $('.btn-pepperonni').toggleClass('active')
    $('.price li:nth-child(1)').toggleClass('off')
    //var precio = price[0].innerHtml.substring(1,10)
    
    if (peperoni1.hasClass('active')){
      pizza = pizza + peperoni
      document.getElementById("insert").innerHTML = pizza;
    }else {
      pizza = pizza - peperoni
      document.getElementById("insert").innerHTML = pizza;
    }

    //document.getElementById("insert").innerHTML = pizza;
    //pizza = pizza + peperoni

    /*if ($('btn-pepperonni').hasClass('active')){

      console.log('funciona')

     // precio++
     // price[0].innerHtml = '$' + precio
      

    }else {

    pizza = pizza

      //var pagar = $('.price li:nth-child(1)')[1].innerHtml.substring(2,1)
      //var precio = precio - pagar
      //price[0].innerHtml = '$' + precio
    }*/
    
  })

  $('.btn-mushrooms').on('click',function(){
    $('.mushroom').toggleClass('off')
    $('.btn-mushrooms').toggleClass('active')
    $('.price li:nth-child(2)').toggleClass('off')
    if (hongo1.hasClass('active')){
      pizza = pizza + hongo
      document.getElementById("insert").innerHTML = pizza;
    }else {
      pizza = pizza - hongo
      document.getElementById("insert").innerHTML = pizza;
    }
  })

  $('.btn-green-peppers').on('click',function(){
    $('.green-pepper').toggleClass('off')
    $('.btn-green-peppers').toggleClass('active')
    $('.price li:nth-child(3)').toggleClass('off')
    if (pimiento1.hasClass('active')){
      pizza = pizza + pimiento
      document.getElementById("insert").innerHTML = pizza;
    }else {
     pizza = pizza - pimiento
     document.getElementById("insert").innerHTML = pizza;
    }
  })

  //segunda interaccion con tercera

  $('.btn-crust').on('click',function(){
    $('.crust').toggleClass('crust-gluten-free')
    $('.btn-crust').toggleClass('active')
    $('.price li:nth-child(5)').toggleClass('off')
    if (costra1.hasClass('active')){
      pizza = pizza + costra
      document.getElementById("insert").innerHTML = pizza;
    }else {
     pizza = pizza - costra
     document.getElementById("insert").innerHTML = pizza;
    }
  })

  $('.btn-sauce').on('click',function(){
    $('.sauce').toggleClass('sauce-white')
    $('.btn-sauce').toggleClass('active')
    $('.price li:nth-child(4)').toggleClass('off')
    if (salsa1.hasClass('active')){
      pizza = pizza + salsa
      document.getElementById("insert").innerHTML = pizza;
    }else {
     pizza = pizza - salsa
     document.getElementById("insert").innerHTML = pizza;
    }
  })

//5 iteration

});