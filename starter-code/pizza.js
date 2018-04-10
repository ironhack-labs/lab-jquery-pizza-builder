// Write your Pizza Builder JavaScript in this file.
$(".crust").removeClass("crust-gluten-free");
$(".sauce").removeClass("sauce-white");
$(".btn-crust").removeClass("active");
$(".btn-sauce").removeClass("active");


	var pP=parseInt($(".uno").text());
	console.log(pP);
	var mP=parseInt($(".dos").text());
	console.log(mP);
	var gP=parseInt($(".tres").text());
	console.log(gP);
	var sP=parseInt($(".cuatro").text());
	console.log(sP);
	var cP=parseInt($(".cinco").text());
	console.log(cP);
	var piP=parseInt($(".zero").text());
	console.log(piP);

	var total = pP+mP+gP+sP+cP+piP;
/*aaaaaaaaaaaaaaaa*/

$(".btn-pepperonni").click(function(){
	console.log("Pulsado pepperoni");
	$(".pep").toggle();
	$(".btn-pepperonni").toggleClass("active");
	var state=$(".btn-pepperonni").hasClass("active");
	$(".list:first-child").toggle();
	if(state){
		console.log(total++);
	}else{
		console.log(total--);
	}
	$(".total").text(total);
});	

$(".btn-mushrooms").click(function(){
	console.log("Pulsado mushrooms");
	$(".mushroom").toggle();
	$(".btn-mushrooms").toggleClass("active");
	$(".list:nth-child(2)").toggle();
	var state=$(".btn-mushrooms").hasClass("active");
	if(state){
		console.log(total++);
	}else{
		console.log(total--);
	}
	$(".total").text(total);
});

$(".btn-green-peppers").click(function(){
	console.log("Pulsado peppers");
	$(".green-pepper").toggle();
	$(".btn-green-peppers").toggleClass("active");
	$(".list:nth-child(3)").toggle();
	var state=$(".btn-green-peppers").hasClass("active");

	if(state){
		console.log(total++);
	}else{
		console.log(total--);
	}
	$(".total").text(total);
});

$(".btn-sauce").click(function(){
	console.log("Pulsado sauce");
	$(".sauce").toggleClass("sauce-white");
	$(".btn-sauce").toggleClass("active");
	$(".list:nth-child(4)").toggle();
	var state=$(".btn-sauce").hasClass("active");
	
	if(state){
		console.log(total=total-3);
	}else{
		console.log(total=total+3);
	}
	$(".total").text(total);
});

$(".btn-crust").click(function(){
	console.log("Pulsado crust");
	$(".crust").toggleClass("crust-gluten-free");
	$(".btn-crust").toggleClass("active");
	$(".list:nth-child(5)").toggle();
	var state=$(".btn-crust").hasClass("active");
	if(state){
		console.log(total=total-5);
	}else{
		console.log(total=total+5);
	}
	$(".total").text(total);
});


$(".total").text(total);	


	
