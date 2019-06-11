// Write your Pizza Builder JavaScript in this file.
//sujetadores
 const pepperoni_button = document.querySelector(".btn-pepperonni")
 const pepperoni_img = document.querySelectorAll(".pep")
 const mush_button = document.querySelector(".btn-mushrooms")
 const mush_img = document.querySelectorAll(".mushroom")
 const green_button = document.querySelector(".btn-green-peppers")
 const green_img = document.querySelectorAll(".green-pepper")
 const crust_button = document.querySelector(".btn-crust ")
 const crust_img = document.querySelector(".crust-gluten-free")
 const sause_button = document.querySelector(".btn-sauce ")
 const sause_img = document.querySelector(".sauce-white")
 const li = document.querySelectorAll(".price li")
 const price = document.querySelector(".price strong")
 //
inicio()
 total()

  pepperoni_button.onclick = (e) =>{
      for (let i= 0; i< pepperoni_img.length;i++){
        if  (pepperoni_img[i].style.visibility == "visible" ||pepperoni_img[i].style.visibility == "" ){
        pepperoni_img[i].style.visibility = "hidden"; // or
        
        }else{
        pepperoni_img[i].style.visibility = "visible"; // or
        } // depending on what you're doing
      }
      if  (li[0].style.visibility == "visible" ||li[0].style.visibility == "" ){
        li[0].style.visibility = "hidden"; 
        li[0].style.height = "0vh"
    }else{
        li[0].style.visibility = "visible"; 
        li[0].style.height = "2vh"
        
    }
      pepperoni_button.classList.toggle("active")
      total()
  }
  mush_button.onclick = (e) =>{
    for (let i= 0; i< mush_img.length;i++){
      if  (mush_img[i].style.visibility == "visible" ||mush_img[i].style.visibility == "" ){
      mush_img[i].style.visibility = "hidden"; // or
      
      }else{
      mush_img[i].style.visibility = "visible"; // or
      } // depending on what you're doing
    }
    if  (li[1].style.visibility == "visible" ||li[1].style.visibility == "" ){
        li[1].style.visibility = "hidden"; 
        li[1].style.height = "0vh"
    }else{
        li[1].style.visibility = "visible"; 
        li[1].style.height = "2vh"
        
    }
    mush_button.classList.toggle("active")
    total()
}

green_button.onclick = (e) =>{
    for (let i= 0; i< green_img.length;i++){
      if  (green_img[i].style.visibility == "visible" ||green_img[i].style.visibility == "" ){
      green_img[i].style.visibility = "hidden"; 
      
      }else{
      green_img[i].style.visibility = "visible"; // or
      } // depending on what you're doing
    }
    
    if  (li[2].style.visibility == "visible" ||li[2].style.visibility == "" ){
        li[2].style.visibility = "hidden"; 
        li[2].style.height = "0vh"
    }else{
        li[2].style.visibility = "visible"; 
        li[2].style.height = "2vh"
    }

    green_button.classList.toggle("active")
    total()
}

crust_button.onclick = (e) =>{
    crust_button.classList.toggle("active")
    crust_img.classList.toggle("crust-gluten-free")
      if  (li[4].style.visibility == "visible" ||li[4].style.visibility == "" ){
        li[4].style.visibility = "hidden"; 
        li[4].style.height = "0vh"
    }else{
        li[4].style.visibility = "visible"; 
        li[4].style.height = "2vh"
    }
    total()
}
sause_button.onclick = (e) =>{
    sause_button.classList.toggle("active")
  sause_img.classList.toggle("sauce-white")
  if  (li[3].style.visibility == "visible" ||li[3].style.visibility == "" ){
    li[3].style.visibility = "hidden"; 
    li[3].style.height = "0vh"
}else{
    li[3].style.visibility = "visible"; 
    li[3].style.height = "2vh"
}
total()
}

function total(){
    let valor = 10
    for (let i=0; i<li.length;i++){
        if ( i ==0 || i ==1||i==2){
            if (li[i].style.visibility=="visible"|| li[i].style.visibility == "")
            valor++;
        }
        else if ( i==3){
            if (li[i].style.visibility=="visible"||li[i].style.visibility == "")
            valor+=3;
        }
        else if ( i==4){
            if (li[i].style.visibility=="visible"||li[i].style.visibility == "")
            valor+=5;
        }
    }
    price.innerText=`$${valor}`
}
function inicio(){
    li[3].style.visibility = "hidden"; 
    li[4].style.visibility = "hidden"; 
    sause_button.classList.toggle("active")
  sause_img.classList.toggle("sauce-white")
  crust_button.classList.toggle("active")
    crust_img.classList.toggle("crust-gluten-free")
    li[4].style.height = "0vh"
    li[3].style.height = "0vh"
}// Write your Pizza Builder JavaScript in this file.
