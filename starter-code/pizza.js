// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
    
    function init () {
        $('.sauce-white').toggle()
        $('.pep').toggle()
        $('.green-pepper').toggle();
        $('.mushroom').toggle()
        $(".btn-mushrooms").toggleClass("active");
        $(".btn-green-peppers").toggleClass("active");
        $(".btn-pepperonni").toggleClass("active");
        $( ".btn-sauce" ).removeClass( "active" )
        $( ".btn-crust" ).removeClass( "active" )
        $( ".crust" ).removeClass( "crust-gluten-free" )
        $( ".sauce" ).removeClass( "sauce-white" )
        for (var i=0 ; i<5 ; i++ ){
            $('.panel.price ul li').eq(i).hide(); 
        }
        $("strong")[0].innerText = "$10"; 
    }

    function activeCheck(element, i) { 
        // console.log(element);
       if ($(element).hasClass("active")){
        $('.panel.price ul li').eq(i).show(); 
    } else {
        $('.panel.price ul li').eq(i).hide();
    }
    };

    function updateTotalPrice(){
        var visible = $('.panel.price ul li:visible');
        // console.log(visible);
        var total = 10;
        visible.each(function (){
            total += parseInt($(this)[0].innerText.slice(1,2));
        })
        return $("strong")[0].innerText = "$"+total;
        }




    $(".btn-green-peppers").on("click", function(){
        $('.green-pepper').toggle();
        $(this).toggleClass("active");
        activeCheck(this, 2);
        updateTotalPrice();

    })

    $(".btn-pepperonni").on("click", function(){
        $('.pep').toggle()
        $(this).toggleClass("active");
        activeCheck(this, 0);
        updateTotalPrice();
    })

    $(".btn-mushrooms").on("click", function(){
        $('.mushroom').toggle()
        $(this).toggleClass("active");
        activeCheck(this, 1);
        updateTotalPrice();
    })

    $(".btn-sauce").on("click", function(){
        $('.sauce-white').toggle();
        $(this).toggleClass("active");
        activeCheck(this, 3);
        updateTotalPrice();
    })

    $(".btn-crust").on("click", function(){
        $('.crust-gluten-free').toggle();
        $(this).toggleClass("active");
        activeCheck(this, 4);
        updateTotalPrice();
    })
    
    init();
    
    
});