// Write your Pizza Builder JavaScript in this file.

$(()=>{
    $(".sauce-white").css("display","none");
    $(".crust").removeClass("crust-gluten-free");
    $(".btn-sauce").removeClass("active");
    $(".btn-crust").removeClass("active");
    $("ul li:contains('$3 white sauce')").hide();
    $("ul li:contains('$5 gluten-free crust')").hide();
    updatePrice();
});
$(".btn-pepperonni").click(() => {
    turnOnOffIngredient(".pep",
    ".btn-pepperonni","ul li:contains('$1 pepperonni')");
    updatePrice();
});
$(".btn-mushrooms").click(() => {
    turnOnOffIngredient(".mushroom",
    ".btn-mushrooms","ul li:contains('$1 mushrooms')");
    updatePrice();
});
$(".btn-green-peppers").click(() => {
    turnOnOffIngredient(".green-pepper",
    ".btn-green-peppers","ul li:contains('$1 green peppers')");
    updatePrice();
});
$(".btn-sauce").click(() => {
    turnOnOffIngredient(".sauce-white",
    ".btn-sauce","ul li:contains('$3 white sauce')");
    updatePrice();
});
$(".btn-crust").click(() => {
    $(".crust").toggleClass("crust-gluten-free");
    turnOnOffIngredient("",".btn-crust",
    "ul li:contains('$5 gluten-free crust')");
    updatePrice();
});
function turnOnOffIngredient(element,button,listElement){
    $(element).toggle();
    $(button).toggleClass("active");
    $(listElement).toggle();
}
function updatePrice(){
    let ingredients = $(".price li:visible");
    let totalPrice = 10;
    for(i=0;i<ingredients.length;i++){
        totalPrice+=parseInt(ingredients[i].innerText.match(/(\d+\.+\d*)|(\.+\d*)|\d/g));
    }
    $(".price strong").prop("innerText","$"+totalPrice);
}