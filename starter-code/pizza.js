// Write your Pizza Builder JavaScript in this file.

var total = $(".price strong")
var pepperonni = $(".btn-pepperonni")
var mushroom = $(".btn-mushrooms")
var greenpepper = $(".btn-green-peppers")
var sauce = $(".btn-sauce")
var crust = $(".btn-crust")

$( document ).ready(function() {
    $(".crust").removeClass ("crust-gluten-free")
    $(".sauce").removeClass ("sauce-white")
});


function cambiarPrecio(){
var precio =10
   if (pepperonni.hasClass ("active"))
   return precio+=1
   if (mushroom.hasClass ("active"))
   return precio+=1
   if (greenpepper.hasClass ("active"))
   return precio+=1
   if (sauce.hasClass ("active"))
   return precio+=3
   if (crust.hasClass ("active"))
   return precio+=5
   console.log (precio)
}



// Agregar - quitar ingredientes

$('.btn-pepperonni').on('click', function(){
    $('#pizza .pep').toggleClass("esconder");
    $('.price li:first').toggleClass("esconder");
    cambiarPrecio ()
  })


  $('.btn-mushrooms').on('click', function(){
    $('.price li:nth-child(2)').toggleClass("esconder")
    $('#pizza .mushroom').toggleClass("esconder")
    cambiarPrecio ()
  })

  $('.btn-green-peppers').on('click', function(){
    $('.price li:nth-child(3)').toggleClass("esconder")
    $('#pizza .green-pepper ').toggleClass("esconder")
    cambiarPrecio ()
  })

  $('.btn-sauce').on('click', function(){
    $('.price li:nth-child(4)').toggleClass("esconder")
    $('#pizza .sauce ').toggleClass("sauce-white")
    cambiarPrecio ()
  })


  $('.btn-crust').on('click', function(){
    $('.price li:last').toggleClass("esconder")
    $('#pizza .crust ').toggleClass("crust-gluten-free")
    cambiarPrecio ()
  })


    // Buttons Active

  $('.btn-pepperonni').on('click', function(){
    $('.btn-pepperonni').toggleClass("active")
  })

  $('.btn-mushrooms').on('click', function(){
    $('.btn-mushrooms').toggleClass("active")
  })


  $('.btn-green-peppers').on('click', function(){
    $('.btn-green-peppers').toggleClass("active")
  })


  $('.btn-crust').on('click', function(){
    $('.btn-crust').toggleClass("active")
  })

  $('.btn-sauce').on('click', function(){
    $('.btn-sauce').toggleClass("active")
  })




      






 




