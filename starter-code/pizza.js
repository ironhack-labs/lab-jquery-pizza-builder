// Write your Pizza Builder JavaScript in this file.
var pepon=false;
var pepBut=$('.btn-pepperonni');
var mushBut=$('.btn-mushrooms');
var pepeBut=$('.btn-green-peppers');
var sauceBut=$('.btn-sauce');
var crustBut= $('.btn-crust');
$('.btn-pepperonni').click(function(){
    
    if(pepon==false){
        $('.pep').addClass('pep2');
        $('.price ul li:nth-child(1)').hide();
        pepon=true;
        sub=sub-1;
        
    }else{ 
    $('.pep').removeClass('pep2');
    $('.price ul li:nth-child(1)').show();
    sub=sub+1;
    pepon=false;}
    pepBut.toggleClass('active');
    total();
    
   })
   var mush=false;
$('.btn-mushrooms').click(function(){
    
    if(mush==false){
        $('.mushroom').addClass('pep2');
        $('.price ul li:nth-child(2)').hide();
        mush=true;
        sub=sub-1;
    }else{ 
    $('.mushroom').removeClass('pep2');
    $('.price ul li:nth-child(2)').show();
    sub=sub+1;
    mush=false;}
    mushBut.toggleClass('active');
    total();
   })
   var pepe=false;
$('.btn-green-peppers').click(function(){
    
    if(pepe==false){
        $('.green-pepper').addClass('pep2');
        $('.price ul li:nth-child(3)').hide();
        pepe=true;
        sub=sub-1;
    }else{ 
   $('.green-pepper').removeClass('pep2');
   $('.price ul li:nth-child(3)').show();
   sub=sub+1;
      pepe=false;}
      pepeBut.toggleClass('active');
      total();
      })
      var sauce=false;
$('.btn-sauce').click(function(){
    
        if(sauce==false){
            $('.sauce').addClass('sauce-white');
            $('.price ul li:nth-child(4)').hide();
            sauce=true;
            sub=sub-3;
        }else{ 
            $('.sauce').removeClass('sauce-white');
            $('.price ul li:nth-child(4)').show();
            sub=sub+3;
          sauce=false;}
          sauceBut.toggleClass('active');
          total();
          })
          var crust=false;
          $('.btn-crust').click(function(){
    
            if(crust==false){
                $('.crust').addClass('crust-gluten-free');
                $('.price ul li:nth-child(5)').hide();
                crust=true;
                sub=sub-5;
            }else{ 
           $('.crust').removeClass('crust-gluten-free');
           
           $('.price ul li:nth-child(5)').show();
           sub=sub+5;
              crust=false;}
              crustBut.toggleClass('active');
              total();
              })
    var vpep= 1;
    var vmuch= 1;
    var vpepe= 1;
    var vsaurce= 3;
    var vcrust= 5;
    var sub=21;
function total(){
    $('.price strong font font').text("$"+sub);
}


