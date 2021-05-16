
$(function(){
    $('.sound').on('click',function(){
        $('.sound svg').toggleClass('active')
    })
   
    $('.page_hidden').css('z-index','0');

    $('.button_icon').on('click',function(){
        
    })

    if(window.matchMedia('(max-width:480px)').matches){
        $('.button_icon').on('click',function(){
            $('.click').addClass('what');
        })
    }
    
    $('.button_icon').on('click',function(){
        if($('.mobile').hasClass('reveal')){
            $('.mobile').removeClass('reveal');
            $('header').removeClass('change')
            $('.header_logo').removeClass('awesome')
            $('.apple').removeClass('bad')
            $('.pine').removeClass('good')
            $('body').removeClass('alpha')
        $('.button_icon svg').contents().unwrap().wrap('<svg viewBox="0 0 29 20"><path d="M-0.000,20.000 L-0.000,17.000 L29.000,17.000 L29.000,20.000 L-0.000,20.000 ZM-0.000,-0.000 L29.000,-0.000 L29.000,3.000 L-0.000,3.000 L-0.000,-0.000 Z"></path></svg>')
        }else{
            $('.mobile').addClass('reveal')
            $('header').addClass('change')
            $('.header_logo').addClass('awesome')
            $('.apple').addClass('bad')
            $('.pine').addClass('good')
            $('body').addClass('alpha')
        $('.button_icon svg').contents().unwrap().wrap('<svg viewBox="0 0 23 24"><path d="M23.008,2.759 L13.944,11.823 L22.814,20.693 L20.693,22.814 L11.823,13.944 L2.502,23.265 L0.381,21.143 L9.701,11.822 L0.187,2.307 L2.308,0.186 L11.822,9.701 L20.887,0.637 L23.008,2.759 Z"></path></svg>')
        }
    })

    

    function setResponsive(){
        $(document).ready(function(){
            if(matchMedia('only screen and (max-width:480px)').matches){
                $('.move_clone').addClass('act')
                
                setTimeout(function(){
                    var num = 0
                    var width = $('.text').find('div').width()
                    var cold = width * 5;
                    
                    setInterval(function(){
                      num +=.5;
                      if(cold<num)num=0;
                      $('.text div').css('transform','translateX(-'+num+'px)')
                    },10)
                  },20)
            }
        })
    
    }
    setResponsive()
      
})