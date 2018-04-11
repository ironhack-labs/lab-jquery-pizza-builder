var total = Number($(".price strong").text().slice(1, 3));
var pepperonni = true, mushroom = true, sauce = true, greenPepper = true, crust = true; 

$(".btn-pepperonni").click(function(){
	$(".pep").toggle("slow");
	$(".price ul li:first").toggle("slow");
	$(".btn-pepperonni").toggleClass("active");
	
	if (pepperonni){
		$(".price strong").text("$" + (total - 1));
		pepperonni = false;
		total--;
	}
	else { 
		$(".price strong").text("$" + (total + 1));
		pepperonni = true;
		total++;
	}
})

$(".btn-mushrooms").click(function(){
	$(".mushroom").toggle("slow");
	$(".price ul li:nth-child(2)").toggle("slow");
	$(".btn-mushrooms").toggleClass("active");

	if (mushroom){
		$(".price strong").text("$" + (total - 1));
		mushroom = false;
		total--;
	}
	else { 
		$(".price strong").text("$" + (total + 1));
		mushroom = true;
		total++;
	}
})

$(".btn-green-peppers").click(function(){
	$(".green-pepper").toggle("slow");
	$(".price ul li:nth-child(3)").toggle("slow");
	$(".btn-green-peppers").toggleClass("active");

	if (greenPepper){
		$(".price strong").text("$" + (total - 1));
		greenPepper = false;
		total--;
	}
	else { 
		$(".price strong").text("$" + (total + 1));
		greenPepper = true;
		total++;
	}
})

$(".btn-sauce").click(function(){
	$(".sauce").toggle("slow");
	$(".price ul li:nth-child(4)").toggle("slow");
	$(".btn-sauce").toggleClass("active");

	if (sauce){
		$(".price strong").text("$" + (total - 3));
		sauce = false;
		total -= 3;
	}
	else { 
		$(".price strong").text("$" + (total + 3));
		sauce = true;
		total += 3;
	}
})

$(".btn-crust").click(function(){
	$(".crust").toggleClass("crust-gluten-free");
	$(".price ul li:last").toggle("slow");
	$(".btn-crust").toggleClass("active");

	if (crust){
		$(".price strong").text("$" + (total - 5));
		crust = false;
		total -= 5;
	}
	else { 
		$(".price strong").text("$" + (total + 5));
		crust = true;
		total += 5;
	}
})	
