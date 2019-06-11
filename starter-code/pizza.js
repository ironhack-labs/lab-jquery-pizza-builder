// Write your Pizza Builder JavaScript in this file.
//sujetamos llo que vamos a ocupar
const pizza= document.querySelector('#pizza')
const peperoni= document.querySelectorAll('.pep')
const champ= document.querySelectorAll('.mushroom')
const chile= document.querySelectorAll('.green-pepper')
const gluten= document.querySelector('.crust-gluten-free')
const salsa= document.querySelector('.sauce-white')


//botones
const btnPeperoni=document.querySelector('.btn-pepperonni')
const btnChamp=document.querySelector('.btn-mushrooms')
const btnChile=document.querySelector('.btn-green-peppers')
//botones de salsa y glueten
const btnGluten=document.querySelector('.btn-crust')
const btnSalsa=document.querySelector('.btn-sauce')

//funcion para desaparecer peperonis
btnPeperoni.onclick = e =>{
    peperoni.forEach(e=>{
      if( e.style.visibility == "visible" ){
        e.style.visibility = "hidden"  
        btnPeperoni.classList.remove("active");//boton animacion
      } else {       
          e.style.visibility = "visible"  
          btnPeperoni.classList.add("active");//boton animacion
      }
    })
  }

//funcion para desaparecer champiñones
btnChamp.onclick = e =>{
  champ.forEach(e=>{
    if( e.style.visibility == "visible" ){
      e.style.visibility = "hidden"  
      btnChamp.classList.remove("active");//boton animacion

    } else {       
        e.style.visibility = "visible" 
        btnChamp.classList.add("active");//boton animacion
    }
  })
}
//funcion para desaparecer chiles
btnChile.onclick = e =>{
  chile.forEach(e=>{
    if( e.style.visibility == "visible" ){
      e.style.visibility = "hidden"  
      btnChile.classList.remove("active");//boton animacion

    } else {       
        e.style.visibility = "visible" 
        btnChile.classList.add("active");//boton animacion
 
    }
  })
}
//funcion para desaparecer la Salsa
btnSalsa.onclick = e =>{
    if( salsa.classList.item(1) == "sauce-white" ){
    salsa.classList.remove("sauce-white");
    btnSalsa.classList.remove("active");//boton animacion
    } else {       
      salsa.classList.add("sauce-white"); 
      btnSalsa.classList.add("active");//boton animacion

    }
}
//funcion para desaparecer Gluten
btnGluten.onclick = e =>{

  if( gluten.classList.item(1) == "crust-gluten-free" ){
    gluten.classList.remove("crust-gluten-free");
    btnGluten.classList.remove("active");//boton animacion
  } else {       
    gluten.classList.add("crust-gluten-free"); 
    btnGluten.classList.add("active");//boton animacion

  }
}
//








