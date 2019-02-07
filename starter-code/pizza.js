function Pizza() {
    this.pepperoni = true;
    this.mushrooms = true;
    this.greenPeppers = true;
    this.whiteSauce = true;
    this.glutenCrust = true;
    this.totalPrice = 21;
    this.toggleToppings = function (ingredient) {
        switch (ingredient) {
            case "Pepperonni":
                this.pepperoni ? (this.pepperoni = false, this.totalPrice -=1) : (this.pepperoni = true, this.totalPrice +=1);
                this.toggleIngredients(".pep", ".btn-pepperonni", "#pep-price", "hide", "hide", "active");
                $("#totPrice")[0].innerHTML = this.totalPrice;
                break;
            case "Mushrooms":
                this.mushrooms ? (this.mushrooms = false, this.totalPrice -=1) : (this.mushrooms = true, this.totalPrice +=1);
                this.toggleIngredients(".mushroom", ".btn-mushrooms", "#mush-price", "hide", "hide", "active");
                $("#totPrice")[0].innerHTML = this.totalPrice;
                break;
            case "Green peppers":
                this.greenPeppers ? (this.greenPeppers = false, this.totalPrice -=1) : (this.greenPeppers = true, this.totalPrice +=1);
                this.toggleIngredients(".green-pepper", ".btn-green-peppers", "#green-price", "hide", "hide", "active");
                $("#totPrice")[0].innerHTML = this.totalPrice;
                break;
            case "White sauce":
                this.whiteSauce ? (this.whiteSauce = false, this.totalPrice -=3) : (this.whiteSauce = true, this.totalPrice +=3);
                this.toggleIngredients(".sauce", ".btn-sauce", "#sauce-price", "sauce-white", "hide", "active");
                $("#totPrice")[0].innerHTML = this.totalPrice;
                break;
            case "Gluten-free crust":
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
$(".btn").click(function () {
    let ingre = $(this)[0].innerHTML
    debugger
    pizzaPeter.toggleToppings(ingre);
})
let pizzaPeter = new Pizza();