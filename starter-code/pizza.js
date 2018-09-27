// Write your Pizza Builder JavaScript in this file.
var ingredients = [
    {btn: "btn-pepperonni",classname: "pep", price: 1, name: "pepperonni"}, 
    {btn: "btn-mushrooms", classname: "mushroom", price: 1, name: "mushrooms"}, 
    {btn: "btn-green-peppers", classname: "green-pepper", price: 1, name: "green peppers"}, 
    {btn: "btn-sauce", classname: "sauce", classtoggled: "sauce-white", price: 3, name: "sauce"}, 
    {btn: "btn-crust", classname: "crust", classtoggled: "crust-gluten-free", price: 5, name: "crust"}
];
$(document).ready(function(){
    resetExtras();

    $('.btn').on("click", function() {
        $(this).toggleClass('active');
        var ingredient = detectIngredient($(this), ingredients);
        changeView(ingredient);
        printPrice(ingredient);
    })
})

function detectIngredient(element, array) {
    for(var i = 0; i < array.length; i++) {
        var btnClass = array[i].btn;
        if(element.hasClass(btnClass)) {
            return array[i];
        }

    }
}

function changeView(ingredient) {
    if(!ingredient.hasOwnProperty("classtoggled")) {
        $("." + ingredient.classname).toggle();
    } else {
        $("." + ingredient.classname).toggleClass(ingredient.classtoggled);
    }
}


function resetBtn(element, classname) {
    $("." + element).removeClass(classname);
}

function resetExtras() {
    resetBtn("btn-sauce","active");
    resetBtn("btn-crust","active");
    resetBtn("sauce", "sauce-white");
    resetBtn("crust", "crust-gluten-free");
}

function printPrice(element) { //array[i]
     $('.price li:contains(' + element.name + ')').slideToggle();
    console.log($('.price li:contains(' + element.name + ')'));
}
