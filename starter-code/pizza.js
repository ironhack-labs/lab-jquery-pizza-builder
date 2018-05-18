$(document).ready(function(){
    
    //sauce and crust removal by default
    $('.crust').removeClass('crust-gluten-free');
    $('.sauce').removeClass('sauce-white');
    
    //sauce and crust button off by default
    $('.btn-sauce').removeClass('active');
    $('.btn-crust').removeClass('active');
    
    //hide crust and sauce items on the list and update the free one
    $('li:contains("gluten-free crust")').text("0$ gluten-free crust");
    $('li:contains("white"), li:contains("gluten-free")').hide();
    
    //events
    clickEvent('.btn-pepperonni', '.pep', null, 'pepperonni');
    clickEvent('.btn-mushrooms', '.mushroom', null, 'mushrooms');
    clickEvent('.btn-green-peppers', '.green-pepper', null, 'green peppers');
    clickEvent('.btn-sauce', '.sauce', 'sauce-white', 'white sauce');
    clickEvent('.btn-crust', '.crust', 'crust-gluten-free', 'gluten-free crust');
    
    updatePrice();
    
});

function clickEvent(selector, toggle, toggleClass, keyword){
    
    $(selector).click(function(){
        $(this).toggleClass('active');
        
        if (toggleClass) {
            $(toggle).toggleClass(toggleClass);
            $('.panel li:contains("'+ keyword +'")').toggle('slow');
        } else{
            $(toggle).toggle();
            $('.panel li:contains("'+ keyword +'")').toggle('slow');
        }
        updatePrice();
    });
}


function updatePrice(){
    var total = 10;
    
    $('.btn.active').each(function(){
        var name = $(this).text().toLowerCase();
        var $element = $("li:contains('" + name + "')");
        var $itemPrice = Number($element.text().split(' ')[0].replace('$', ''));
        total += $itemPrice;
    });    
    $('strong').text('$' + total);
}














