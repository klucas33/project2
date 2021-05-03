$(function(){
    setTimeout(function(){
        $('.page_hidden div').css({'transform':'translateY(0)'})
        $('.page_hidden svg').css({'transform':'translate(0)'})
      },250)
      setTimeout(function(){
        $('.page_hidden').css({'z-index':'0'})
        $('.page_hidden div').css({'transform':'translateY(-100%)'})
        
      },800)
})