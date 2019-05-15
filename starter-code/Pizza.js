class Pizza {

    constructor(ingredientePizzaBase, listaIngredientesPizza) {


        this.getIngredientePizzaBase = () => {
            return ingredientePizzaBase;
        };


        this.getListaIngredientes = () => {
            return listaIngredientesPizza;
        };


        let precio = ingredientePizzaBase.precio;
        let htmlDesc = '';

        listaIngredientesPizza.forEach( ingrediente => {
            precio += ingrediente.precio;
            htmlDesc +=  `<li>${ingrediente.precio} ${ingrediente.nombre}</li>`;
        });


        this.getPrecio = () => {
            return precio;
        };

        this.getHtmlListaIngredientes = () => {
            return htmlDesc;
        };

        this.getNombrePizzaBase = () => {
            return `${ingredientePizzaBase.precio} ${ingredientePizzaBase.nombre}`;
        }
    }

}