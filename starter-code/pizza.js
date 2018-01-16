// Write your Pizza Builder JavaScript in this file.

$(document).ready(function(){
	$(".pep").hide();
	$(".mushroom").hide();
	$(".green-pepper").addClass("pimiento-verde");
	$(".pimiento-verde").removeClass("green-pepper");
	$(".crust").removeClass("crust-gluten-free");
	$(".sauce").removeClass("sauce-white");

	$(".btn-pepperonni").removeClass("active");
	$(".btn-mushrooms").removeClass("active");
	$(".btn-green-peppers").removeClass("active");
	$(".btn-crust").removeClass("active");
	$(".btn-sauce").removeClass("active");

	$(".btn-pepperonni").on("click", function(){
		$(".btn-pepperonni").toggleClass("active");

		if($(".pep").css("display") === "none"){
			$(".pep").show()
		}else {
			$(".pep").hide()
		}
	})

	$(".btn-mushrooms").on("click", function(){
		$(".btn-mushrooms").toggleClass("active");

		if($(".mushroom").css("display") === "none"){
			$(".mushroom").show()
		}else {
			$(".mushroom").hide()
		}
	})
	
	$(".btn-green-peppers").on("click", function(){
		$(".pimiento-verde").toggleClass("green-pepper");
		$(".btn-green-peppers").toggleClass("active");
	})

	$(".btn-crust").on("click", function(){
		$(".crust").toggleClass("crust-gluten-free");
		$(".btn-crust").toggleClass("active");
	})	

	$(".btn-sauce").on("click", function(){
		$(".sauce").toggleClass("sauce-white");
		$(".btn-sauce").toggleClass("active");
	})
});
