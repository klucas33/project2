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
    }
  }
  setResponsive()
  

  
  
        
  




})