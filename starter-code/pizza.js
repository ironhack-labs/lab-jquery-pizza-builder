// Write your Pizza Builder JavaScript in this file.


var botonPepe= document.getElementById('boton1');
var botonMush= document.getElementById('boton2');
var botonGreen= document.getElementById('boton3');
var botonWhite= document.getElementById('boton4');
var botonGluten= document.getElementById('boton5');

//obtengo todos los elemento de peperoni
peperoni = document.getElementsByClassName('pep');
//obtengo todos los de mushroom
mush = document.getElementsByClassName('mushroom');
//obtengo los elemento con la clase green
green = document.getElementsByClassName('green-pepper');
//obtengo los elemento con la clase white
white = document.getElementsByClassName('sauce');
for (var i=0;i<white.length;i++){
    //le cambio la propiedad de los peperoni
    white[i].style.display = 'block';
}

//obtengo los elemento con la clase crust
crust = document.getElementsByClassName('crust');
for (var i=0;i<crust.length;i++){
    //le cambio la propiedad de los peperoni
    crust[i].style.display = 'block';
}

botonPepe.addEventListener('click',function(){

            //recorro mi arreglo de peperoni
            for (var i=0;i<peperoni.length;i++){
                //le cambio la propiedad de los peperoni
                peperoni[i].style.display = 'block';
            }

            //recorro mi arreglo de mushroom
            for (var i=0;i<mush.length;i++){
                //le cambio la propiedad de los mushroom
                mush[i].style.display = 'none';
            }

            //recorro mi arreglo de green
            for (var i=0;i<green.length;i++){
                //le cambio la propiedad de los green
                green[i].style.display = 'none';
            }
                
});

botonMush.addEventListener('click',function(){
	
            //recorro mi arreglo de peperoni
            for (var i=0;i<peperoni.length;i++){
                //le cambio la propiedad de los peperoni
                peperoni[i].style.display = 'none';
            }

            //recorro mi arreglo de mushroom
            for (var i=0;i<mush.length;i++){
                //le cambio la propiedad de los mushroom
                mush[i].style.display = 'block';
            }

            //recorro mi arreglo de green
            for (var i=0;i<green.length;i++){
                //le cambio la propiedad de los green
                green[i].style.display = 'none';
            }
        
});

botonGreen.addEventListener('click',function(){
	
            //recorro mi arreglo de peperoni
            for (var i=0;i<peperoni.length;i++){
                //le cambio la propiedad de los peperoni
                peperoni[i].style.display = 'none';
            }

            //recorro mi arreglo de mushroom
            for (var i=0;i<mush.length;i++){
                //le cambio la propiedad de los mushroom
                mush[i].style.display = 'none';
            }

            //recorro mi arreglo de green
            for (var i=0;i<green.length;i++){
                //le cambio la propiedad de los green
                green[i].style.display = 'block';
            }
            
});

botonWhite.addEventListener('click',function(){
            
    for (var i=0;i<white.length;i++){
        //le cambio la propiedad de los peperoni
        white[i].style.display = 'none';
    }
        
});

botonGluten.addEventListener('click',function(){
    for (var i=0;i<crust.length;i++){
        //le cambio la propiedad de los peperoni
        crust[i].style.display = 'block';
    }
});
