// Write your Pizza Builder JavaScript in this file.
//$("[]")
var pepper_btn = $(".btn-green-peppers ");
var peppers = $(".green-pepper");
var mushrooms_btn=$(".btn-mushrooms")
var mushrooms=$(".mushroom")
var pepp= $(".pep")
var pep_btn=$(".btn-pepperonni")
var pepperoni = $(".pep")
var crust_btn=$(".btn-crust")
var crust=$(".crust")
var sauce_btn=$(".btn-sauce")
var sauce=$(".sauce")
var list = $(".price > ul > *")
console.log(pepper_btn);

pepper_btn.on("click",function(){peppers.toggleClass("no-display")
            pepper_btn.toggleClass("active")})
mushrooms_btn.on("click",function(){mushrooms.toggleClass("no-display")
            mushrooms_btn.toggleClass("active")})
pep_btn.on("click",function(){pepperoni.toggleClass("no-display")
            pep_btn.toggleClass("active")})
crust_btn.on("click",function(){crust.toggleClass("crust-gluten-free")
            crust_btn.toggleClass("active")})
sauce_btn.on("click",function(){sauce.toggleClass("sauce-white")
            sauce_btn.toggleClass("active")})
$(document).ready(function () {
    crust_btn.click()
    sauce_btn.click()
    pep_btn.click()
    pepper_btn.click()
    mushrooms_btn.click()
})