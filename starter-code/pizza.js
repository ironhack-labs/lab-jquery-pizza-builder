function Pizza() {
    this.pepperoni = true;
    this.mushrooms = true;
    this.greenPeppers = true;
    this.whiteSauce = true;
    this.glutenCrust = true;
    this.totalPrice = 21;
    this.toggleToppings = function (ingredient) {
        switch (ingredient) {
            case "pepperoni":
                this.pepperoni ? (this.pepperoni = false, this.totalPrice -=1) : (this.pepperoni = true, this.totalPrice +=1);
                this.toggleIngredients(".pep", ".btn-pepperonni", "#pep-price", "hide", "hide", "active");
                $("#totPrice")[0].innerHTML = this.totalPrice;
                break;
            case "mushroom":
                this.mushrooms ? (this.mushrooms = false, this.totalPrice -=1) : (this.mushrooms = true, this.totalPrice +=1);
                this.toggleIngredients(".mushroom", ".btn-mushrooms", "#mush-price", "hide", "hide", "active");
                $("#totPrice")[0].innerHTML = this.totalPrice;
                break;
            case "green-pepper":
                this.greenPeppers ? (this.greenPeppers = false, this.totalPrice -=1) : (this.greenPeppers = true, this.totalPrice +=1);
                this.toggleIngredients(".green-pepper", ".btn-green-peppers", "#green-price", "hide", "hide", "active");
                $("#totPrice")[0].innerHTML = this.totalPrice;
                break;
            case "sauce":
                this.whiteSauce ? (this.whiteSauce = false, this.totalPrice -=3) : (this.whiteSauce = true, this.totalPrice +=3);
                this.toggleIngredients(".sauce", ".btn-sauce", "#sauce-price", "sauce-white", "hide", "active");
                $("#totPrice")[0].innerHTML = this.totalPrice;
                break;
            case "crust":
                this.glutenCrust ? (this.glutenCrust = false, this.totalPrice -=5) : (this.glutenCrust = true, this.totalPrice +=5);
                this.toggleIngredients(".crust", ".btn-crust", "#gluten-price", "crust-gluten-free", "hide", "active");
                $("#totPrice")[0].innerHTML = this.totalPrice;
                break;
        }
    }
    this.toggleIngredients = function (content, button, price, showContent, showPrice, status) {
        $(content).toggleClass(showContent);
        $(button).toggleClass(status);
        $(price).toggleClass(showPrice);
    }
}
$(".btn-pepperonni").click(function () {
    pizza.toggleToppings("pepperoni");
})
$(".btn-mushrooms").click(function () {
    pizza.toggleToppings("mushroom");
})
$(".btn-green-peppers").click(function () {
    pizza.toggleToppings("green-pepper");
})
$(".btn-sauce").click(function () {
    pizza.toggleToppings("sauce");
})
$(".btn-crust").click(function () {
    pizza.toggleToppings("crust");
})
let pizza = new Pizza();