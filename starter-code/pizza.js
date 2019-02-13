$(document).ready(function() {
  alert("DOM is loaded");
  

  $(".btn-pepperonni").click(function() {
    $(".pep").toggle();
    $(this).toggleClass("active")
    $(".panel.price ul li:contains(pepperonni)").toggle()
    console.log("You clicked the button!");
    getTotal()
  });

  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggle();
    $(this).toggleClass("active")
    $(".panel.price ul li:contains(mushrooms)").toggle()
    console.log("You clicked mushrooms");
    getTotal()
  });

  $(".btn-green-peppers").click(function() {
    $(".green-pepper").toggle();
    $(this).toggleClass("active")
    $(".panel.price ul li:contains(peppers)").toggle()
    console.log("You clicked green peppers");
    getTotal()
  });

  $(".crust-gluten-free").removeClass("crust-gluten-free");
console.log($(".btn-crust"))


  $(".btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");
    $(this).toggleClass("active")
    $(".panel.price ul li:contains(crust)").toggle()
    console.log("You clicked crust")
    getTotal()
  });

  $(".btn-sauce").click(function() {
    $(".sauce-white").toggle();
    $(".panel.price ul li:contains(sauce)").toggle()
    $(this).toggleClass("active")
    console.log("You clicked sauce")
    getTotal()
  });


  function getTotal(){

    totalPrice = 10
   if ($(".btn-pepperonni").hasClass("active")){
    totalPrice = totalPrice + 1

  } if ($(".btn-mushrooms").hasClass("active")){
    totalPrice = totalPrice + 1

  } if ($(".btn-green-peppers").hasClass("active")){
    totalPrice = totalPrice + 1

  } if ($(".btn-crust").hasClass("active")){
    totalPrice = totalPrice + 5

  } if ($(".btn-sauce").hasClass("active")){
    totalPrice = totalPrice + 3
  }
  $("strong").html(totalPrice)
  }
})
