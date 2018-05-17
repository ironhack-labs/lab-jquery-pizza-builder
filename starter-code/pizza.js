let pepinillos = 0;
let hongos = 0;
let peperoni = 0;

function agregaIngredientePizza(cual){

	let nombreClase = "";
	let i = 0;

	$('section[class*="pep"]').css("display","none"); //ocultamos las class pep peperoni
    $('section[class*="mushroom"]').css("display","none"); //ocultamos las class pep peperoni

    for(i = 1; i <= peperoni; i ++){
		nombreClase = "pep " + numberToText(i);
		$('section[class*="'+ nombreClase + '"]').css("display","block");
	}		

	for(i = 1; i <= hongos; i ++){
		nombreClase = "mushroom " + numberToText(i);
		$('section[class*="'+ nombreClase + '"]').css("display","block");			
	}	

	for(i = 1; i <= pepinillos; i ++){
		nombreClase = "green-pepper " + numberToText(i);
		$('section[class*="'+ nombreClase + '"]').css("display","block");			
	}					


	// if(cual==0){				

	// 	for(i = 1; i <= peperoni; i ++){
	// 		nombreClase = "pep " + numberToText(i);
	// 		$('section[class*="'+ nombreClase + '"]').css("display","block");
	// 	}		
		
	// } else if (cual==1){

	// 	for(i = 1; i <= hongos; i ++){
	// 		nombreClase = "mushroom " + numberToText(i);
	// 		$('section[class*="'+ nombreClase + '"]').css("display","block");			
	// 	}			
		
	// } else if (cual==2){
	// 	for(i = 1; i <= pepinillos; i ++){
	// 		nombreClase = "green-pepper " + numberToText(i);
	// 		$('section[class*="'+ nombreClase + '"]').css("display","block");			
	// 	}			
	// }

	// console.log("Agregando" + pepinillos + hongos + peperoni);

}

// Write your Pizza Builder JavaScript in this file.
$( document ).ready(function() {
    console.log( "ya cargamos el DOM" );   

    $('section[class*="pep"]').css("display","none"); //ocultamos las class pep peperoni
    $('section[class*="mushroom"]').css("display","none"); //ocultamos las class pep peperoni
    // el inverso es display = "block"

    //peperoni
	$("button").eq(0).click(function(){
	    //alert("The paragraph was clicked.");
	    peperoni +=1;
	    agregaIngredientePizza(0);
	});

	//hongos
	$("button").eq(1).click(function(){
	    //alert("The paragraph was clicked.");
	    hongos +=1;
	    agregaIngredientePizza(1);
	});

	//pepinillos
	$("button").eq(2).click(function(){
	    //alert("The paragraph was clicked.");
	    pepinillos += 1;
	    agregaIngredientePizza(2);
	});
    
});

function numberToText(numero){
	switch(numero) {
	    case 1: return "one"; break;	        
	    case 2: return "two"; break;
	    case 3: return "three"; break;
	    case 4: return "four"; break;
	    case 5: return "five"; break;
	    case 6: return "six"; break;
	    case 7: return "seven"; break;
	    case 8: return "eight"; break;
	    case 9: return "nine"; break;
	    case 10: return "ten"; break;
	    case 11: return "eleven"; break;
	    case 12: return "twelve"; break;
	    case 13: return "thirteen"; break;
	    case 14: return "fourteen"; break;
	    case 15: return "fifteen"; break;
	    case 16: return "sixteen"; break;
	    case 17: return "seventeen"; break;
	    case 18: return "eightteen"; break;
	    case 19: return "nineteen"; break;
	    case 20: return "twenty"; break;
	    case 21: return "twenty one"; break;  	        
	    default: break;	        
	}	
}