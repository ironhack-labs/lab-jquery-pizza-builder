$(document).ready(function(){
 var total = 13;
$(".price strong").html("$"+total);


console.log(total);
addToppings('.btn-pepperonni','.pep','.price ul li:nth-child(1)',1);
addToppings('.btn-mushrooms','.mushroom', '.price ul li:nth-child(2)',1);
addToppings('.btn-green-peppers','.green-pepper','.price ul li:nth-child(3)',1);

$('.crust').toggleClass('crust-gluten-free');
$('.sauce').toggleClass('sauce-white');

customizeCrustAndSauce('.btn-sauce','.sauce','sauce-white','.price ul li:nth-child(4)',3);
customizeCrustAndSauce('.btn-crust','.crust','crust-gluten-free','.price ul li:nth-child(5)',5);

$('.btn-sauce').toggleClass('active');
$('.btn-crust').toggleClass('active');


$('.price ul li:nth-child(4)').toggle();
$('.price ul li:nth-child(5)').toggle();

function addToppings(toppingButon,toppingClass, number,price){
$(toppingButon).click(function(){
$(toppingClass).toggle();
$(toppingButon).toggleClass('active');
$(number).toggle();
addPrice(price,number);

});
}
function customizeCrustAndSauce(optionButon,optionClass,option2Class,number,price){

$(optionButon).click(function(){
$(optionClass).toggleClass(option2Class);
$(optionButon).toggleClass('active');
$(number).toggle();
addPrice(price,number,total);
});
}

function addPrice(price,onoff){
if  ($(onoff).is(":visible")){
 total+= price;
}
else{
 total-= price;
 }
$('strong').html('$'+total);
}

});
