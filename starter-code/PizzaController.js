'use strict';

/**
 * Created by David on 14/05/2019.
 */
class ControladorIngrediente {

    constructor(cssDecorador, precio, isAdd) {

        this.cssDecorador = cssDecorador;
        this.precio = precio;
        this.isAdd = isAdd;
    }

    onChangeAdd() {
        //cambiar el estatus de agregacion y usar jquery para mover o remover la clase
        this.isAdd = !this.isAdd;

        if (this.cssDecorador === '.sauce-white') {
            if (this.isAdd) {
                $('.sauce').addClass('sauce-white');
            } else {
                $('.sauce').removeClass('sauce-white');
            }
        } else if (this.cssDecorador === '.crust-gluten-free') {
            if (this.isAdd) {
                $('.crust').addClass('crust-gluten-free');
            } else {
                $('.crust').removeClass('crust-gluten-free');
            }
        } else {
            if (this.isAdd) {
                $(this.cssDecorador).show();
            } else {
                $(this.cssDecorador).hide();
            }
        }
    }


}

class PizzaController {


    constructor(fnUpatePizzaInfo) {

        this.controladorIngrediente = {
            pep: null,
            mu: null,
            green: null,
            salsa: null,
            crust: null
        };

        this.fnUpatePizzaInfo = fnUpatePizzaInfo;

        let l = this.controladorIngrediente;
        this.listaControladorIngrediente = [
            l.pep, l.mu, l.green,
            l.salsa, l.crust
        ]

    }


    addControladorIngrediente(nombre, elementCmd, cssDecorador, precio, isAgregadoAlInicio) {

        // controller.addControladorIngrediente('pep',elemCmdPep,'green-pepper',1);

        if (this.controladorIngrediente[nombre] === undefined) {
            throw new Error("esta parte no se reconoce");
        }

        let ci = new ControladorIngrediente(cssDecorador, precio, isAgregadoAlInicio);

        elementCmd.onclick = (event) => {
            ci.onChangeAdd();
            this.onIngredienteChange(ci);
        };

        this.controladorIngrediente[nombre] = ci;
        this.onIngredienteChange(ci);

    }

    onIngredienteChange(controlladorIngrediente) {
        //actualizar total no uisamos el ultimo ingrediente

        let precioTotal=0;
        let htmlInner='';

        aqui voy hay que sumar los totales y llamar el callback

    }


}
