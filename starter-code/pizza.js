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
        changeView($(this), ingredients);
    })
})

function changeView(element, array) {
    for(var i = 0; i < array.length; i++) {
        var btnClass = array[i].btn;
        if(element.hasClass(btnClass)) {
            console.log(btnClass);
            if(!$(array).get(i).hasOwnProperty("classtoggled")) {
                console.log("2");
                $("." + array[i].classname).toggle();
            } else {
                console.log("not 2");
                $("." + array[i].classname).toggleClass(array[i].classtoggled);
            }
        }

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

function printPrice(arrayelement) { //array[i]
    var priceMsg = "$" + arrayelement.price + " " + arrayelement.name;
    
}
