
function agregarFruta(evento){
  let section = document.getElementById('cuadricula')
  let fruta = evento.target.textContent; // esto es el contenido del button pulsado
  let div= document.createElement('div')
  div.className='fruta';
  div.textContent = fruta;
  section.appendChild(div);
  // 1
}

function quitarComportamientos(){
  alert("Has quitado todo el comportamiento");
  let botones = document.querySelectorAll("ul button");
  botones.forEach(boton => {
    boton.removeEventListener("click", agregarFruta);
  });
}

//3