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
      $('.side ul li:nth-of-type(2) button').on('click',function(){
        let first = $('.gold:nth-of-type(1)').offset().top;
        $('body,html').animate({'scrollTop':first},500)
      })
      $('.side ul li:nth-of-type(3) button').on('click',function(){
        let second = $('.gold:nth-of-type(2)').offset().top;
        $('body,html').animate({'scrollTop':second},500)
      })
      $('.side ul li:nth-of-type(4) button').on('click',function(){
        let third = $('.gold:nth-of-type(3)').offset().top;
        $('body,html').animate({'scrollTop':third},500)
      })
      $('.side ul li:nth-of-type(5) button').on('click',function(){
        let fourth = $('.gold:nth-of-type(4)').offset().top;
        $('body,html').animate({'scrollTop':fourth},500)
      })
      $('.side ul li:nth-of-type(6) button').on('click',function(){
        let fifth = $('.gold:nth-of-type(5)').offset().top;
        $('body,html').animate({'scrollTop':fifth},500)
      })

      function setResponsive(){
        if(matchMedia('only screen and (max-width:480px)').matches){
          $('.pop li:nth-of-type(1) button').on('click',function(){
            let first = $('.gold:nth-of-type(1)').offset().top;
          $('body,html').animate({'scrollTop':first},500)
          })
        }

        if(matchMedia('only screen and (max-width:480px)').matches){
          $('.pop li:nth-of-type(2) button').on('click',function(){
            let second = $('.gold:nth-of-type(2)').offset().top;
          $('body,html').animate({'scrollTop':second},500)
          })
        }

        if(matchMedia('only screen and (max-width:480px)').matches){
          $('.pop li:nth-of-type(3) button').on('click',function(){
            let third = $('.gold:nth-of-type(3)').offset().top;
          $('body,html').animate({'scrollTop':third},500)
          })
        }

        if(matchMedia('only screen and (max-width:480px)').matches){
          $('.pop li:nth-of-type(4) button').on('click',function(){
            let fourth = $('.gold:nth-of-type(4)').offset().top;
          $('body,html').animate({'scrollTop':fourth},500)
          })
        }
        
        if(matchMedia('only screen and (max-width:480px)').matches){
          $('.pop li:nth-of-type(5) button').on('click',function(){
            let fifth = $('.gold:nth-of-type(5)').offset().top;
          $('body,html').animate({'scrollTop':fifth},500)
          })
        }
      }

      setResponsive()


      $(document).ready(function(){
        $('.video').load();
      })

})