// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
    var roniBtn = $('.btn-pepperonni')[0]
    var mushBtn = $('.btn-mushrooms')[0]
    var pepBtn = $('.btn-green-peppers')[0]
    var sauceBtn = $('.btn-sauce')[0]
    var crustBtn = $('.btn-crust')[0]

    $(roniBtn).click(function(){
        $("[class ~= 'pep']").toggle();
        $(this).toggleClass('active');
        var liItem = $("li:contains('pepperonni')")[0];
        if(liItem.hidden){
            liItem.hidden = false;
        } else {
            liItem.hidden = true;
        }
        updatePrice();
    });

    $(mushBtn).click(function(){
        $("[class ~= 'mushroom']").toggle();
        $(this).toggleClass('active');
        var liItem = $("li:contains('mushrooms')")[0];
        if(liItem.hidden){
            liItem.hidden = false;
        } else {
            liItem.hidden = true;
        }
        updatePrice();
    });

    $(pepBtn).click(function(){
        $("[class ~= 'green-pepper']").toggle();
        $(this).toggleClass('active');
        var liItem = $("li:contains('green')")[0];
        if(liItem.hidden){
            liItem.hidden = false;
        } else {
            liItem.hidden = true;
        }
        updatePrice();
    });

    $(sauceBtn).click(function(){
        $("[class ~= 'sauce']").toggleClass("sauce-white");
        $(this).toggleClass('active');
        var liItem = $("li:contains('white')")[0];
        if(liItem.hidden){
            liItem.hidden = false;
        } else {
            liItem.hidden = true;
        }
        updatePrice();
    });

    $(crustBtn).click(function(){
        $("[class ~= 'crust']").toggleClass("crust-gluten-free");
        $(this).toggleClass('active');
        var liItem = $("li:contains('gluten')")[0];
        if(liItem.hidden){
            liItem.hidden = false;
        } else {
            liItem.hidden = true;
        }
        updatePrice();
    });

    updatePrice = function() {
        var liItems = Array.from($("li:visible('true'):contains('$')"));
        var toppingsTotal = 0;
        liItems.forEach(function(liItem){
            toppingsTotal += Number(liItem.textContent.substr(1).substr(0, liItem.textContent.substr(1).indexOf(" ")));
        });
        $("strong:contains('$')")[0].textContent = "$" + (10 + toppingsTotal);
    }
    



    


})
