// Write your Pizza Builder JavaScript in this file.
let b_pepp = $("li:nth-child(1) button");
let b_mush = $("li:nth-child(2) button");
let b_greenp = $("li:nth-child(3) button");
let b_sauce = $("li:nth-child(4) button");
let b_crust = $("li:nth-child(5) button");

let pepp = $(".pep");
let mush = $(".mushroom");
let greenp = $(".green-pepper");
let sauce = $(".sauce");
let crust = $(".crust");

let p_pepp = $(".panel.price li:nth-child(1)");
let p_mush = $(".panel.price li:nth-child(2)");
let p_greenp = $(".panel.price li:nth-child(3)");
let p_sauce = $(".panel.price li:nth-child(4)");
let p_crust = $(".panel.price li:nth-child(5)");

let total = $('aside strong')
let num = 10
let prices = $('.panel.price li')



sauce.removeClass("sauce-white");
crust.removeClass("crust-gluten-free");
p_sauce.css('display','none')
p_crust.css('display','none')

if(pepp.css("visibility") !== "hidden") {
    b_pepp.addClass("active")
    num += 1
}
if(mush.css("visibility") !== "hidden") {
    b_mush.addClass("active")
    num += 1
}
if(greenp.css("visibility") !== "hidden") {
    b_greenp.addClass("active")
    num += 1
}



function updatePrice(){
    total.text("$"+num)
}

updatePrice()


b_pepp.on("click", function() {
  if (pepp.css("visibility") !== "hidden") {
    pepp.css("visibility", "hidden");
    b_pepp.removeClass("active");
    p_pepp.css('display','none')
    num -= 1
  } else {
    pepp.css("visibility", "visible");
    b_pepp.addClass("active");
    p_pepp.css('display','block')
    num += 1
  }
  updatePrice()
});

b_mush.on("click", function() {
  if (mush.css("visibility") !== "hidden") {
    mush.css("visibility", "hidden");
    b_mush.removeClass("active");
    p_mush.css('display','none')
    num -= 1
  } else {
    mush.css("visibility", "visible");
    b_mush.addClass("active");
    p_mush.css('display','block')
    num += 1
  }
  updatePrice()
});

b_greenp.on("click", function() {
  if (greenp.css("visibility") !== "hidden") {
    greenp.css("visibility", "hidden");
    b_greenp.removeClass("active");
    p_greenp.css('display','none')
    num -= 1
  } else {
    greenp.css("visibility", "visible");
    b_greenp.addClass("active");
    p_greenp.css('display','block')
    num += 1
  }
  updatePrice()
});

b_sauce.on("click", function() {
  sauce.toggleClass("sauce-white");
  if(p_sauce.css('display')==='block'){
    p_sauce.css('display','none')
    num -= 3
  } else {
    p_sauce.css('display','block')
    num += 3
  }
  updatePrice()
});

b_crust.on("click", function() {
  crust.toggleClass("crust-gluten-free");
  if(p_crust.css('display')==='block'){
    p_crust.css('display','none')
    num -= 5
  } else {
    p_crust.css('display','block')
    num += 5
  }
  updatePrice()
});
