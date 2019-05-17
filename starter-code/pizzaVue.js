var app = new Vue({
    el: '#mainApp',
    data: {

        pizza: {
            base: {
                nombre: 'cheese pizza',
                precio: 10
            },
            ingredientes: [
                {nombre: 'Pepperonni', precio: 1, isAdd: true},
                {nombre: 'Mushrooms', precio: 1, isAdd: true},
                {nombre: 'Green peppers', precio: 1, isAdd: true},
                {nombre: 'White sauce', precio: 1, isAdd: true},
                {nombre: 'Gluten-free crust', precio: 1, isAdd: true}
            ],
            precioTotal: 24
        }

    },
    methods: {
        changePeperoni: function () {
            this.changeIngrediente('Pepperonni');

        },
        changeIngrediente: function (nombre) {

            let ingrediente = this.pizza.ingredientes
                .find(item => {
                    return item.nombre===nombre;
                });

            ingrediente.isAdd = !ingrediente.isAdd;

            //calcular el total
            this.calcularPrecioTotal();
        },
        calcularPrecioTotal: function () {

            let subtotalIngrediente = this.pizza.ingredientes
                .filter(item => {
                    return item.isAdd;
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
