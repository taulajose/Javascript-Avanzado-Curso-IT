function validarEntrada(e){
  if(e.target.name in states == false){
    return;
}
    let expresion = {
      nombre: /^[\w\s]{4,}$/i,
      email:  /^\w+@\w+(\.\w{2,3})+$/i
    }
    let input = e.target;
    let grupo = input.closest(".input-grp");
    let icono = grupo.querySelector(".fas");
    let mensaje = grupo.querySelector(".input-error");
    let condicion;
    switch(input.name){
      case "usuario":
        validarUsuarioExistente(input.value);
        return;
        break;
      case "nombre":
        condicion = expresion.nombre.test(input.value);
        break;
      case "pais":
        condicion = input.value != "none";
        break;
      case "email":
        condicion = expresion.email.test(input.value);
        break;
      case "terminos":
        condicion = input.checked;
        break;
    }

    if(condicion){
      grupo.classList.remove("with-error");
      icono.classList.remove("fa-times-circle");
      icono.classList.add("fa-check-circle");
      mensaje.classList.add("hidden");
      states[input.name] = true;
    }
    else{
      grupo.classList.add("with-error");
      icono.classList.add("fa-times-circle");
      icono.classList.remove("fa-check-circle");
      mensaje.classList.remove("hidden");
      states[input.name] = false;
    }
}

function validarFormulario(e) {
  if(!(states.nombre && states.email && states.pais && states.terminos && states.usuario)){
    e.preventDefault();
    let evento = new Event('focusout', { bubbles: true });
   for(let propiedad in states){
     e.target.elements[propiedad].dispatchEvent(evento)
   }
  }
}

function crearOption(obj){
  const opcion = document.createElement("option");
  opcion.value = obj.value;
  opcion.textContent = obj.text;
  return opcion;
}

function validarUsuarioExistente(usuario){
  let xhr = new XMLHttpRequest();
  xhr.open("GET","./consultarUsuarioExistente.txt?usuario"+usuario);
  xhr.addEventListener("load", (e) => {
    let input = document.getElementById("usuario");
    let grupo = input.closest(".input-grp");
    let icono = grupo.querySelector(".fas");
    let mensaje = grupo.querySelector(".input-error");
    
    if(input.value.trim() != "" && e.target.response != "EXISTE"){
      grupo.classList.remove("with-error");
      icono.classList.remove("fa-times-circle");
      icono.classList.add("fa-check-circle");
      mensaje.classList.add("hidden");
      states.usuario = true;
    }
    else{
      grupo.classList.add("with-error");
      icono.classList.add("fa-times-circle");
      icono.classList.remove("fa-check-circle");
      mensaje.classList.remove("hidden");
      states.usuario = false;
    }
  });
  xhr.send();
}