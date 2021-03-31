$(function(){
  $('.group button').on('click',function(){
     $('.sec_two').addClass('active')


     setTimeout(function(){
         $('.sec_two').removeClass('active');
         setTimeout(function(){
          
            $('.sec_two').addClass('active');
            setTimeout(function(){
             
                $('.sec_two').removeClass('active')
            },100)
        },100)
     },100)
     
  })
})