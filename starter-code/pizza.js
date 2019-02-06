function Pizza() {
    this.pepperoni = true;
    this.mushrooms = true;
    this.greenPeppers = true;
    this.whiteSauce = true;
    this.glutenCrust = true;
    this.toggleToppings = function (ingredient) {
        switch (ingredient) {
            case "pepperoni":
                this.pepperoni ? this.pepperoni = false : this.pepperoni = true;
                this.toggleIngredients(".pep", ".btn-pepperonni", "#pep-price", "hide", "hide", "active");
                this.setPrice()
                break;
            case "mushroom":
                this.mushrooms ? this.mushrooms = false : this.mushrooms = true;
                this.toggleIngredients(".mushroom", ".btn-mushrooms", "#mush-price", "hide", "hide", "active");
                this.setPrice()
                break;
            case "green-pepper":
                this.greenPeppers ? this.greenPeppers = false : this.greenPeppers = true;
                this.toggleIngredients(".green-pepper", ".btn-green-peppers", "#green-price", "hide", "hide", "active");
                this.setPrice()
                break;
            case "sauce":
                this.whiteSauce ? this.whiteSauce = false : this.whiteSauce = true;
                this.toggleIngredients(".sauce", ".btn-sauce", "#sauce-price", "sauce-white", "hide", "active");
                this.setPrice()
                break;
            case "crust":
                this.glutenCrust ? this.glutenCrust = false : this.glutenCrust = true;
                this.toggleIngredients(".crust", ".btn-crust", "#gluten-price", "crust-gluten-free", "hide", "active");
                this.setPrice()
                break;
        }
    }
    this.toggleIngredients = function (content, button, price, showContent, showPrice, status) {
        $(content).toggleClass(showContent);
        $(button).toggleClass(status);
        $(price).toggleClass(showPrice);
    }
    this.setPrice = function () {
        this.totalPrice = 10;
        this.pepperoni ? this.totalPrice += 1 : 0;
        this.mushrooms ? this.totalPrice += 1 : 0;
        this.greenPeppers ? this.totalPrice += 1 : 0;
        this.whiteSauce ? this.totalPrice += 3 : 0;
        this.glutenCrust ? this.totalPrice += 5 : 0;
        $("#totPrice")[0].innerHTML = this.totalPrice;
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