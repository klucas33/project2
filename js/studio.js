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
  },500)
  setTimeout(function(){
    $('.page_hidden').css({'z-index':'0'})
    $('.page_hidden div').css({'transform':'translateY(-100%)'})
    
  },1050)
})