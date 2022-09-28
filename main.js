function tocaSom (idElementoAudio) {

    const elemento = document.querySelector(idElementoAudio);

    // if (elemento === null){
    //     alert('elemento não encontrado')
    // }

    if (elemento != null && elemento.localName === 'audio') {
        
     elemento.play();
    }
    else {
        alert('elemento não encontrado')
    }   
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom (idAudio);
    };

    

    tecla.onkeydown = function (evento) {

        //console.log(evento.code)

        if(evento.code === 'space' || evento.code === 'enter') 
        {tecla.classList.add('ativa');
    }}

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }

    //console.log(contador);
}