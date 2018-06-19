$(document).ready(function () {

        $('.green-pepper').hide();
        $('.pep').css({display: 'none'});
        $('.mushroom').css({display: 'none'});
        $('.active').removeClass('active');
        $('.price li').css({display : 'none'})
        $('.panel strong').text($('.panel b').text().split(" ")[0]);

 
 
    $('.btn-pepperonni').click(function(){

        var element = $('pepperonni');
        var visible = element.attr('display');

        console.log(visible)

     })








})