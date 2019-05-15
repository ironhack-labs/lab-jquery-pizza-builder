class RenderIngredientePizza {

    constructor(nombre, elemBoton, fnOnShow, fnOnHide) {
        this.nombre = nombre;
        this.elemBoton = elemBoton;
        this.fnOnShow = fnOnShow;
        this.fnOnHide = fnOnHide;
    }
}

class IngredientePizza {

    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

}



class PizzaFactory {

    constructor() {
        this.listaIngredientesFactory = [];
    }

    /*Recibe un evento cambair nombre*/
    cambiarIngrediente(pizza, ingrediente) {

        let listaIngredientes = pizza.getListaIngredientes();

        //estta el nombre?
        let index = listaIngredientes.findIndex( (item) => {
            return item.nombre === ingrediente;
        });

        let isAgregado = index > -1;



        if (isAgregado) {
            //remover
            listaIngredientes = listaIngredientes.filter( item=>{
               return item.nombre !==ingrediente;
            });
        } else {
            //agregar
            let ingredienteAgregado = this.listaIngredientesFactory.find(item => {
                return item.nombre === ingrediente;
            });

            listaIngredientes.push(ingredienteAgregado);
        }

        let newPizza = new Pizza(pizza.getIngredientePizzaBase(), listaIngredientes);

        return newPizza;
    }

    registrarIngrediente(ingrediente) {
        this.listaIngredientesFactory.push(ingrediente);
    }


    crearPizza(nombrePizzaBase, precioBase, listaIngredientes = null) {

        let ingredientePizzaBase = new IngredientePizza(nombrePizzaBase, precioBase);

        listaIngredientes = listaIngredientes === null ? this.listaIngredientesFactory : listaIngredientes;

        return new Pizza(ingredientePizzaBase, listaIngredientes);

    }


}