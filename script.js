 
    $(document).ready(main);

var contador = 1;

function main(){

  $('.abrir').click(function(){

  $('.nav').toggle();

   

   if(contador === 1){

     $('.nav').animate({

       right: '-100%'

     })

     contador = 0;

   }else{
    
     $('.nav').animate({

       right: '0'

     })
     contador = 1;
   }

  })
 }
