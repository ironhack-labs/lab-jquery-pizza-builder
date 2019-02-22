// Write your Pizza Builder JavaScript in this file.
let fullPrice = 10;
function calcPrice(n, y){
   if ($(y).hasClass("active")){
       fullPrice += n
   } else {
       fullPrice -= n
       }
   $("strong").text("$" + fullPrice)
}
function reset(){
   $(".btn").removeClass("active")
   $(".sauce").removeClass("sauce-white")
   $(".crust").removeClass("crust-gluten-free")
   $(".pep").hide()
   $(".mushroom").hide()
   $(".green-pepper").hide()
   $(".price li").hide()
   $("strong").text("$" + fullPrice)
}
reset()
$(".btn").click(function(){
   $(this).toggleClass("active")
})
$(".btn-pepperonni").click(function(){
   $(".pep").toggle()
   $(".price li:first(1)").toggle()
   calcPrice(1, this)
})
$(".btn-mushrooms").click(function(){
   $(".mushroom").toggle()
   $(".price li:nth-child(2)").toggle()
   calcPrice(1, this)
})
$(".btn-green-peppers").click(function(){
   $(".green-pepper").toggle()
   $(".price li:nth-child(3)").toggle()
   calcPrice(1, this)
})
$(".btn-sauce").click(function(){
   $(".sauce").toggleClass("sauce-white")
   $(".price li:nth-child(4)").toggle()
   calcPrice(3, this)
})
$(".btn-crust").click(function(){
   $(".crust").toggleClass("crust-gluten-free")
   $(".price li:nth-child(5)").toggle()
   calcPrice(5, this)
}) 
