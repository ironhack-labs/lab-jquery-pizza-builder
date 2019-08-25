// Write your Pizza Builder JavaScript in this file.
var botonPepe= document.getElementById('boton1');
var botonMush= document.getElementById('boton2');
var botonGreen= document.getElementById('boton3');
var botonWhite= document.getElementById('boton4');
var botonGluten= document.getElementById('boton5');

//poner los botones inactivos
const ul = document.getElementsByTagName('ul')[1].children
const listabotones = [...ul]
listabotones.forEach((e) => {
    e.style.display = 'none'
})

const total=document.getElementById("precioTotal")
const precio=total.innerHTML.substr(1,2)
let sumatoria=precio

//console.log(sumatoria)

//obtengo todos los elemento de peperoni
peperoni = document.getElementsByClassName('pep');
//obtengo todos los de mushroom
mush = document.getElementsByClassName('mushroom');
//obtengo los elemento con la clase green
green = document.getElementsByClassName('green-pepper');
//obtengo los elemento con la clase white
white = document.querySelector('.sauce');
//obtengo los elemento con la clase crust
crust = document.querySelector('.crust')

listabotones[0].style.display = 'block'
listabotones[1].style.display = 'block'
listabotones[2].style.display = 'block'
listabotones[3].style.display = 'block'
listabotones[4].style.display = 'block'

botonPepe.addEventListener('click',function(){
    botonPepe.classList.toggle('active')
    const arrgloPep = [...peperoni]
    if(botonPepe.classList.contains('active')){
        arrgloPep.forEach((elemento) => {
            elemento.style.display='block';
        })
        listabotones[0].style.display = 'block'
        sumatoria += 1
        total.innerHTML=""
        total.innerHTML= `$${sumatoria}`
       // console.log(sumatoria)
    }else{
        arrgloPep.forEach((elemento) => {
            elemento.style.display='none';
        })
        listabotones[0].style.display = 'none'
        sumatoria -= 1
        total.innerHTML=""
        total.innerHTML= `$${sumatoria}`
       // console.log(sumatoria)
    }
});

botonMush.addEventListener('click',function(){
    botonMush.classList.toggle('active')
    const arrMush = [...mush]
    if(botonMush.classList.contains('active')){
    const arrMush = [...mush]
        arrMush.forEach((elemento) => {
            elemento.style.display='block';
        })
        listabotones[1].style.display = 'block'
        sumatoria += 1
        total.innerHTML=""
        total.innerHTML= `$${sumatoria}`
       // console.log(sumatoria)
    }else{
        arrMush.forEach((elemento) => {
            elemento.style.display='none';
        }) 
        listabotones[1].style.display = 'none'
        sumatoria -= 1
        total.innerHTML=""
        total.innerHTML= `$${sumatoria}`
       // console.log(sumatoria)
        
    }   
});

botonGreen.addEventListener('click',function(){
    botonGreen.classList.toggle('active')
    const arrGreen = [...green]
    if(botonGreen.classList.contains('active')){
    const arrGreen = [...green]
        arrGreen.forEach((elemento) => {
            elemento.style.display='block';
        })
        listabotones[2].style.display = 'block'
        sumatoria += 1
        total.innerHTML=""
        total.innerHTML= `$${sumatoria}`
        //console.log(sumatoria)
    }else{
        arrGreen.forEach((elemento) => {
            elemento.style.display='none';
        }) 
        listabotones[2].style.display = 'none'
        sumatoria -= 1
        total.innerHTML=""
        total.innerHTML= `$${sumatoria}`
        //console.log(sumatoria) 
    }       
});

botonWhite.addEventListener('click',function(){
    botonWhite.classList.toggle('active')
    if(white.className == 'sauce'){
        white.className += ' sauce-white'
        listabotones[3].style.display = 'block'
        sumatoria += 3
        total.innerHTML=""
        total.innerHTML= `$${sumatoria}`
        //console.log(sumatoria)
    } else{
        white.setAttribute('class','sauce')
        listabotones[3].style.display = 'none'
        sumatoria -= 3
        total.innerHTML=""
        total.innerHTML= `$${sumatoria}`
       // console.log(sumatoria)
    }  
});

botonGluten.addEventListener('click',function(){
    botonGluten.classList.toggle('active')
    if(crust.className == 'crust'){
        crust.className += ' crust-gluten-free'
        listabotones[4].style.display = 'block'
        sumatoria += 5
        total.innerHTML=""
        total.innerHTML= `$${sumatoria}`
        //console.log(sumatoria)
    } else{
        crust.setAttribute('class','crust')
        listabotones[4].style.display = 'none'
        sumatoria -= 5
        total.innerHTML=""
        total.innerHTML= `$${sumatoria}`
        //console.log(sumatoria)
    } 
});
