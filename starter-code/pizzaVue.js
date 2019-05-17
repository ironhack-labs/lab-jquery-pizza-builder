var app = new Vue({
    el: '#mainApp',
    data: {

        pizza: {
            base: {
                nombre: 'pizza mediana de queso',
                precio: 10
            },
            ingredientes: [
                {nombre: 'Pepperonni', precio: 1, isAgregado: true},
                {nombre: 'Mushrooms', precio: 1, isAgregado: true},
                {nombre: 'Green peppers', precio: 1, isAgregado: true},
                {nombre: 'White sauce', precio: 3, isAgregado: true},
                {nombre: 'Gluten-free crust', precio: 5, isAgregado: true}
            ],
            precioTotal: 24
        }

    },
    methods: {
        changePeperoni: function () {
            return this.changeIngrediente('Pepperonni');
        },
        changeMushrooms: function () {
            return this.changeIngrediente('Mushrooms');
        },
        changePeppers: function () {
            return this.changeIngrediente('Green peppers');
        },
        changeSalsa: function () {
            return this.changeIngrediente('White sauce');
        },
        changeCrust: function () {
            return this.changeIngrediente('Gluten-free crust');
        },
        changeIngrediente: function (nombreIngrediente) {

            let ingrediente = this.pizza.ingredientes
                .find(item => {
                    return item.nombre === nombreIngrediente;
                });

            ingrediente.isAgregado = !ingrediente.isAgregado;

            //calcular el total
            this.calcularPrecioTotal();
        },
        calcularPrecioTotal: function () {

            let subtotalIngrediente = this.pizza.ingredientes
                .filter(item => {
                    return item.isAgregado;
                })
                .reduce((total, item) => {
                    total += item.precio;
                    return total;
                }, 0)
            ;

            this.pizza.precioTotal = this.pizza.base.precio + subtotalIngrediente;

        }
    }
});
