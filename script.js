const botoensCurtir = document.querySelectorAll(".Curtir");
botoesCurtir.forEach(function(botoensCurtir) {
    let curtiu =false;
    botoensCurtir.addEventListener("click,curtir");
    function curtir|(){
        const contador = botoensCurtir.querySelector("span");
        if(curtiu===false){
            contador.textContent++;
            curtiu= true;}
            else{
                contador.textContent--;
                curtiu=false;
            }
        }
    });

