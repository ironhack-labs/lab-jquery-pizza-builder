$(document).ready(function() {
  
		$("li:first").addClass("selected");

		$("article:nth-child(2)").addClass("middle");
		
		$(".list-item:odd").addClass("highlighted");
		
		$("#list-container .list-item:last").css({"border": "1px solid #eee"});

		$("#form-container input").blur(function(){
      	$(this).css({"borderColor": "initial"});
      	}
    	);

		$("#form-container input").blur(function(){
			$(this).css({"borderColor":"initial"});
		}
		);






  alert("DOM is Loaded");



});

