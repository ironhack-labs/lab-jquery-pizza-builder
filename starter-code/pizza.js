// Write your Pizza Builder JavaScript in this file.
var total = 21



$(".btn-pepperonni").on("click",function(e){
  //console.log("btn_pep OK")
  var isActive = $(".btn-pepperonni").hasClass("active")
   if(isActive){
    //Quita la clase active
    $(".btn-pepperonni").toggleClass("active")
    $(".pep").addClass("invisible")
    $(".costo_pep").addClass("invisible")

    total -= 1
    $(".total").text("$"+total)
   }else{
     //Pone la clase active
    $(".btn-pepperonni").toggleClass("active")
    $(".pep").toggleClass("invisible")
    $(".costo_pep").toggleClass("invisible")

    total += 1
    $(".total").text("$"+total)
   }
})

$(".btn-mushrooms").on("click",function(e){
  //console.log("btn_pep OK")
  var isActive = $(".btn-mushrooms").hasClass("active")
   if(isActive){
    //Quita la clase active
    $(".btn-mushrooms").toggleClass("active")
    $(".mushroom").addClass("invisible")
    $(".costo_mush").addClass("invisible")
    total -= 1
    $(".total").text("$"+total)
   }else{
     //Pone la clase active
    $(".btn-mushrooms").toggleClass("active")
    $(".mushroom").toggleClass("invisible")
    $(".costo_mush").toggleClass("invisible")
    total += 1
    $(".total").text("$"+total)
   }
})

$(".btn-green-peppers").on("click",function(e){
  //console.log("btn_pep OK")
  var isActive = $(".btn-green-peppers").hasClass("active")
   if(isActive){
    //Quita la clase active
    $(".btn-green-peppers").toggleClass("active")
    $(".green-pepper").addClass("invisible")
    $(".costo_green").addClass("invisible")
    total -= 1
    $(".total").text("$"+total)
   }else{
     //Pone la clase active
    $(".btn-green-peppers").toggleClass("active")
    $(".green-pepper").toggleClass("invisible")
    $(".costo_green").toggleClass("invisible")
    total += 1
    $(".total").text("$"+total)
   }
})

$(".btn-sauce").on("click",function(e){
  //console.log("btn_pep OK")
  var isActive = $(".btn-sauce").hasClass("active")
   if(isActive){
    //Quita la clase active
    $(".btn-sauce").toggleClass("active")
    $(".sauce").addClass("invisible")
    $(".costo_white").addClass("invisible")
    total -= 3
    $(".total").text("$"+total)
   }else{
     //Pone la clase active
    $(".btn-sauce").toggleClass("active")
    $(".sauce").toggleClass("invisible")
    $(".costo_white").toggleClass("invisible")
    total += 3
    $(".total").text("$"+total)
   }
})

$(".btn-crust").on("click",function(e){
  //console.log("btn_pep OK")
  var isActive = $(".btn-crust").hasClass("active")
   if(isActive){
    //Quita la clase active
    $(".btn-crust").toggleClass("active")
    $(".crust").toggleClass("crust-gluten-free")
    $(".costo_gluten").addClass("invisible")
    total -= 5
    $(".total").text("$"+total)
   }else{
     //Pone la clase active
    $(".btn-crust").toggleClass("active")
    $(".crust").toggleClass("crust-gluten-free")
    $(".costo_gluten").toggleClass("invisible")
    total += 5
    $(".total").text("$"+total)
   }
})