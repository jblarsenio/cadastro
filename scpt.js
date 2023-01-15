const form  = document.getElementById('form');
    const campo = document.querySelectorAll('.req');
    const spam  = document.querySelectorAll('.sap');
    const email = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;


    function seterro(index){
      
      spam[index].style.display ='block' ;
    }
    function removeerro(index){
         
      spam[index].style.display ='none' ;
    }

   
    function namevalidate(){
    if(campo[0].value.length<3){
       seterro(0) ;
    }
    else{
       removeerro(0);
    }
}
    
    function emailvalidate(){
        if(!email.test(campo[1].value)){
            seterro(1) ;

        }else{
            removeerro(1);
        }
    }
     function senha(){
        if( campo[2].value.length <8){
            seterro(2);
        }
        else{
            removeerro(2);
        }
     }
     function repitasenha(){
        if (campo[2].value == campo[3].value && campo[3].value.length >=8 ){
            removeerro(3);
        

        }
        else{
            seterro(3);
        
        }
        }
     