$(function(){
  $('.group button').on('click',function(){
     $('.sec_two').addClass('active')


     setTimeout(function(){
         $('.sec_two').removeClass('active');
         setTimeout(function(){
          
            $('.sec_two').addClass('active');
            setTimeout(function(){
             
                $('.sec_two').removeClass('active')
                setTimeout(function(){

                  $('.sec_two').addClass('active');
                  setTimeout(function(){

                    $('.sec_two').removeClass('active')
                    setTimeout(function(){
                    },100)
                  },100)
              },100)
            },100)
        },100)
     },100)
     
  })

  setTimeout(function(){
    $('.page_hidden div').css({'transform':'translateY(0)'})
    $('.page_hidden svg').css({'transform':'translate(0)'})
  },250)
  setTimeout(function(){
    $('.page_hidden').css({'z-index':'0'})
    $('.page_hidden div').css({'transform':'translateY(-100%)'})
    
  },800)

  var gold = $('.logo li')
  var silver = $('.des li')
  
  $('.logo li').on('click',function(){
    var bronze = $(this).index()
    $(this).addClass('active');
      gold.not($(this)).removeClass('active')

    silver.removeClass('show')
    $('.des li').eq(bronze).addClass('show')
      
  })
  function setResponsive(){
    if(matchMedia('only screen and (max-width:480px)').matches){
      $( '.group button' ).clone().appendTo( '.group:last' );

      $('.hidden').on('click',function(){
        if($('.mobile').hasClass('reveal')){
          $('.mobile').removeClass('reveal');
          $('header').removeClass('change')
          $('.header_logo').removeClass('awesome')
          $('.apple').removeClass('bad')
          $('.pine').removeClass('good')
          $('body').removeClass('alpha')
          $('.button_hid').removeClass('hah')
          $('.hidden div svg').css('display','block')
      $('.button_icon svg').contents().unwrap().wrap('<svg viewBox="0 0 29 20"><path d="M-0.000,20.000 L-0.000,17.000 L29.000,17.000 L29.000,20.000 L-0.000,20.000 ZM-0.000,-0.000 L29.000,-0.000 L29.000,3.000 L-0.000,3.000 L-0.000,-0.000 Z"></path></svg>')
      }else{
          $('.mobile').addClass('reveal')
          $('header').addClass('change')
          $('.header_logo').addClass('awesome')
          $('.apple').addClass('bad')
          $('.pine').addClass('good')
          $('body').addClass('alpha')
          $('.button_hid').addClass('hah')
          $('.hidden div svg').css('display','none')
      $('.button_icon svg').contents().unwrap().wrap('<svg viewBox="0 0 23 24"><path d="M23.008,2.759 L13.944,11.823 L22.814,20.693 L20.693,22.814 L11.823,13.944 L2.502,23.265 L0.381,21.143 L9.701,11.822 L0.187,2.307 L2.308,0.186 L11.822,9.701 L20.887,0.637 L23.008,2.759 Z"></path></svg>')
      }
      })
    }
  }
  setResponsive()
  

  
  
        
  




})