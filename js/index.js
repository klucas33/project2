
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
})