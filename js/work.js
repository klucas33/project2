$(function(){
    setTimeout(function(){
        $('.page_hidden div').css({'transform':'translateY(0)'})
        $('.page_hidden svg').css({'transform':'translate(0)'})
      },250)
      setTimeout(function(){
        $('.page_hidden').css({'z-index':'0'})
        $('.page_hidden div').css({'transform':'translateY(-100%)'})
        
      },800)

      var clone = ['brio toys -','Sparbanken Skåne -','Tetra Pak Services -','Oatly -','MECA -','Prisjakt -'];
      
  
     
      $('.same').each(function(k){
        var txt='';

        for(var i=0;i<10;i++){
          txt += '<strong>'+clone[k]+'</strong>';
        }
        $(this).find('p').html(txt);
      })
      
   
      setTimeout(function(){
        var num = 0
        var width = $('.same').find('strong').width()
        var cold = width * 5;
        
        setInterval(function(){
          num +=.5;
          if(cold<num)num=0;
          $('.same:even a p').css('transform','translateX(-'+num+'px)')
          $('.same:odd a p').css('transform','translateX('+num+'px)')
          console.log(cold)
        },10)
      },20)
      


      
})