// Write your Pizza Builder JavaScript in this file.
$("document").ready (
  $(".crust").removeClass("crust-gluten-free"),
  $(".sauce").removeClass("sauce-white"),
  $(".btn-crust").removeClass("active"),
  $(".btn-sauce").toggleClass("active"),
  $(".panel.price > ul > li:nth-child(4)").addClass("invisible"),
  $(".panel.price > ul > li:nth-child(5)").addClass("invisible"),
  updatePrice()

)

$(".btn-pepperonni").on('click', () => {
  $(".pep").toggleClass("invisible")
  $(".btn-pepperonni").toggleClass("active")
  $(".panel.price > ul > li:nth-child(1)").toggleClass("invisible")
  updatePrice();
})
$(".btn-mushrooms").on('click', () => {
  $(".mushroom").toggleClass("invisible")
  $(".btn-mushrooms").toggleClass("active")
  $(".panel.price > ul > li:nth-child(2)").toggleClass("invisible")
  updatePrice();

})

$(".btn-green-peppers").on('click', () => {
  $(".green-pepper").toggleClass("invisible")
  $(".btn-green-peppers").toggleClass("active")
  $(".panel.price > ul > li:nth-child(3)").toggleClass("invisible")
  updatePrice();

})
$(".btn-sauce").on('click',()=>{
  $(".sauce").toggleClass("sauce-white")
  $(".btn-sauce").toggleClass("active")
  $(".panel.price > ul > li:nth-child(4)").toggleClass("invisible")
  updatePrice();

})
$(".btn-crust").on('click',()=>{
  $(".crust").toggleClass("crust-gluten-free")
  $(".btn-crust").toggleClass("active")
  $(".panel.price > ul > li:nth-child(5)").toggleClass("invisible")
  updatePrice();

})

function updatePrice(){
  var total = 10;
  
  if($(".btn-pepperonni").hasClass("active"))
    total +=1;
  if($(".btn-mushrooms").hasClass("active"))
    total +=1;
  if($(".btn-green-peppers").hasClass("active"))
    total +=1;
  if($(".btn-sauce").hasClass("active"))
    total +=3;
  if($(".btn-crust").hasClass("active"))
    total +=5;

  console.log($("aside strong").text("$" + total));

}



    // if($(".pep:visible").length > 0)
    //   $(".pep:visible").css("display", "none");
    // else
    //   $(".pep :hidden").css("display", "inherit");