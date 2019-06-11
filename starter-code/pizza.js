// Write your Pizza Builder JavaScript in this file.
//sujetamos llo que vamos a ocupar
const pizza= document.querySelector('#pizza')
const peperoni= document.querySelectorAll('.pep')
const champ= document.querySelectorAll('.mushroom')
const chile= document.querySelectorAll('.green-papper')

//botones
const btnPeperoni=document.querySelector('.btn-pepperonni')
const btnChamp=document.querySelector('.btn-mushrooms')
const btnChile=document.querySelector('.green-peppers')

btnPeperoni.onclick = e =>{
  
    peperoni.forEach(e=>{
      if( e.style.visibility == "visible" ){
        e.style.visibility = "hidden"  
      } else {
       
          e.style.visibility = "visible"  
          
      }
    })
      // peperoni.currentTarget.style.visibility = "hidden";
  // btnPeperoni.value=true
  }
 



