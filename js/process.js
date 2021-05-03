$(function(){
    setTimeout(function(){
        $('.page_hidden div').css({'transform':'translateY(0)'})
        $('.page_hidden svg').css({'transform':'translate(0)'})
      },250)
      setTimeout(function(){
        $('.page_hidden').css({'z-index':'0'})
        $('.page_hidden div').css({'transform':'translateY(-100%)'})
        
      },800)
      var scrTop, winHei, imgHei; 
      $(window).on('scroll',function(){

        scrTop = $(this).scrollTop();
        winHei = $(window).height();
        imgHei = $('.gold:nth-of-type(2)').offset().top;
        textHei = $('.hid').offset().top;


        if(imgHei -  winHei  < scrTop && winHei - textHei < -scrTop){
            $('.side ul').fadeIn()
        }else{
          $('.side ul').fadeOut()

        }

        

       
      })
})