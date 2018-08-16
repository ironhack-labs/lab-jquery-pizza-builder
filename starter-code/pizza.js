// Write your Pizza Builder JavaScript in this file.

// iteration #1
//$(".btn-pepperonni").click( () => { $(".pep").fadeToggle(1000) } );
// $(".btn-mushrooms").click( () => {$(".mushroom").fadeToggle(1000)});
// $(".btn-green-peppers").click( () => { return $(".green-pepper").fadeToggle(1000) } );

// iteration #2
// $(".btn-crust").click(() => { $(".crust").toggleClass("crust-gluten-free")});
// $(".btn-sauce").click(() => {$(".sauce").toggleClass("sauce-white")});

// iteration #3

var ingredientsArr = [
	{
		buttonClass: ".btn-pepperonni",
		elemClass: ".pep",
	},
	{
		buttonClass: ".btn-mushrooms",
		elemClass: ".mushroom",
	},
	{
		buttonClass: ".btn-green-peppers",
		elemClass: ".green-pepper",
	}
]
var optionArr = [
	{ buttonClass:".btn-crust", elemClass:".crust", optionSwitch:"crust-gluten-free"},
	{ buttonClass:".btn-sauce", elemClass:".sauce", optionSwitch:"sauce-white"}
];

optionArr.forEach(function(el){
	return togglerOptions(el)
});

ingredientsArr.forEach(function(el){
	return togglerIngredients(el)
})

function togglerIngredients(obj){
	$(obj.buttonClass).click(function(){
		$(obj.elemClass).toggle() ;
		$(this).toggleClass("active")
	});    
}

function togglerOptions(obj){
	$(obj.buttonClass).click(function(){
		$(obj.elemClass).toggleClass(obj.optionSwitch);
		$(this).toggleClass("active")
	});
}

// iteration #4

// $("aside li").text()

// $( "li:contains('pepperonni')" ).fadeToggle()


// ----------------------------------------------
var result = 13

pizzaList()
updatePrice()

// if ( ! $("button")[3].classList.contains("active") ){ $( "li" ).eq( 8 ).fadeToggle()}

function pizzaList(){
	if ( ! $("button")[0].classList.contains("active") ){ 
		$( "li:contains('pepperonni')" ).toggle()
	};
	if ( ! $("button")[1].classList.contains("active") ){ 
		$( "li:contains('mushrooms')" ).toggle()
	};
	if ( ! $("button")[2].classList.contains("active") ){ 
		$( "li:contains('$1 green peppers')" ).toggle()
	};
	if ( ! $("button")[3].classList.contains("active") ){
		$( "li:contains('$3 white sauce')" ).toggle()
	};
	if ( ! $("button")[4].classList.contains("active") ){ 
		$( "li:contains('gluten')" ).toggle()
	};
}

$(".btn-pepperonni").click(function(){
	$( "li:contains('pepperonni')" ).toggle();
	($(".btn-pepperonni").hasClass("active")) ? result+=1 : result-=1;
	updatePrice()
})

$(".btn-mushrooms").click(function(){
	$( "li:contains('mushrooms')" ).toggle();
	($(".btn-mushrooms").hasClass("active")) ? result+=1 : result-=1;
	updatePrice()
})

$(".btn-green-peppers").click(function(){
	$( "li:contains('$1 green peppers')" ).toggle();
	($(".btn-green-peppers").hasClass("active")) ? result+=1 : result-=1;
	updatePrice()
})

$(".btn-sauce").click(function(){
	$( "li:contains('$3 white sauce')" ).toggle();
	($(".btn-sauce").hasClass("active")) ? result+=3 : result-=3;
	updatePrice()	
})

$(".btn-crust").click(function(){
	$( "li:contains('gluten')" ).toggle();
	($(".btn-crust").hasClass("active")) ? result+=5 : result-=5;
	updatePrice()
})

function updatePrice(){
	$("#prix").text(result)
}



// iteration 5
//$("#prix").text()