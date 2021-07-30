function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
  
    //CONDICIONAL PARA ADICIONAR ZERO NA FRENTE DO MINUTO E DA HORA
    if(hora <= 9 && minuto <= 9){
        msg.innerHTML = `Agora são 0${hora}:0${minuto}`
    }else if(hora > 9 && minuto <= 9){
        msg.innerHTML = `Agora são ${hora}:0${minuto}`
    }else if(hora <= 9 && minuto > 9){
        msg.innerHTML = `Agora são 0${hora}:${minuto}`
    }else{
        msg.innerHTML = `Agora são ${hora}:${minuto}`
    }

    //CONDICIONAL PARA EXIBIR FOTO E MUDAR BACKGROUND
    if(hora >= 5 && hora <= 12){
        img.src = "imagens/manhã-removebg-preview.png"
        document.body.style.background = "rgb(233, 233, 175)"

    } else if (hora >= 13 && hora <= 18){
        img.src = "imagens/tarde-removebg-preview.png"
        document.body.style.background = "rgba(184, 117, 54, 0.822)"
    } else {
        img.src = "imagens/noite-removebg-preview.png"
        document.body.style.background = "rgba(17, 17, 16, 0.877)"
    }
}