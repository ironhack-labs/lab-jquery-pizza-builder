// Write your Pizza Builder JavaScript in this file.
$(document).ready(function () {
	
	//    $(".btn-pepperonni").click(function(){
	//        $(".pep:last").append(" <section class=\"pep\"></section>");
	//    });
	//    $(".btn-mushrooms").click(function(){
	//        $("ol").append("<li>Appended mushrooms</li>");
	//    });
//	function checkPresense(className) {
//		if (($(className).css("display")) === "block") {
//			
//	}

		//console.log("True")
//	} else if (($(".green-pepper").css("display")) === "none") {
//		var pepper = false;
//		console.log("False")
//	}
	
	$(".btn-pepperonni").click(function () {
		$(".pep").toggle();
		$(".panel.price li:nth-child(1)").toggle();		
	});
	/* **************************************************** */
	$(".btn-green-peppers").click(function () {
		$(".green-pepper").toggle();
		$(".panel.price li:nth-child(3)").toggle();		

	});
	/* **************************************************** */
	$(".btn-mushrooms").click(function () {
		$(".mushroom").toggle();
		$(".panel.price li:nth-child(2)").toggle();		
	});
	/* **************************************************** */	
	$(".btn-crust").click(function () {
		$(".crust").toggleClass("crust-gluten-free");
		$(".panel.price li:nth-child(5)").toggle();		

	});
	/* **************************************************** */
	$(".btn-sauce").click(function () {
		$(".sauce").toggleClass("sauce-white");
		$(".panel.price li:nth-child(4)").toggle();		
	});
    /* **************************************************** */
	$('button').on('click', function () {
		if ($(this).hasClass("active")) {
		$(this).removeClass("active");
		} else { 
		$(this).addClass("active");
		}
	});
	/* **************************************************** */
	$(".btn").click(function () {
		var sum = 10;
		if (($(".panel.price li:nth-child(3)").css("display")) === "list-item") {
			sum += 1;
		} if (($(".panel.price li:nth-child(2)").css("display")) === "list-item") {
			sum += 1;
		} if (($(".panel.price li:nth-child(1)").css("display")) === "list-item") {
			sum += 1;
		} if (($(".panel.price li:nth-child(4)").css("display")) === "list-item") {
			sum += 3;
		} if (($(".panel.price li:nth-child(5)").css("display")) === "list-item") {
			sum += 5;
		}
		$("strong").text("$" + sum);
		});	
});
