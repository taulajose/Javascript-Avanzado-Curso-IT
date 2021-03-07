function validarNombre(e) {
  let expresion = /^[\w\s]{4,}$/i;
  let input = e.target;
  let grupo = input.closest(".input-grp");
  let icono = grupo.querySelector(".fas");
  let mensaje = grupo.querySelector(".input-error");
  if(expresion.test(input.value)){
    grupo.classList.remove("with-error");
    icono.classList.remove("fa-times-circle");
    icono.classList.add("fa-check-circle");
    mensaje.classList.add("hidden");
    states.nombre = true;
  }
  else{
    grupo.classList.add("with-error");
    icono.classList.add("fa-times-circle");
    icono.classList.remove("fa-check-circle");
    mensaje.classList.remove("hidden");
    states.nombre = false;
  }
}

function validarEmail(e) {
  let expresion = /^\w+@\w+(\.\w{2,3})+$/i;
  let input = e.target;
  let grupo = input.closest(".input-grp");
  let icono = grupo.querySelector(".fas");
  let mensaje = grupo.querySelector(".input-error");
  if(expresion.test(input.value)){
    grupo.classList.remove("with-error");
    icono.classList.remove("fa-times-circle");
    icono.classList.add("fa-check-circle");
    mensaje.classList.add("hidden");
    states.email = true;
  }
  else{
    grupo.classList.add("with-error");
    icono.classList.add("fa-times-circle");
    icono.classList.remove("fa-check-circle");
    mensaje.classList.remove("hidden");
    states.email = false;
  }
}

function validarPais(e) {
  let input = e.target;
  let grupo = input.closest(".input-grp");
  let icono = grupo.querySelector(".fas");
  let mensaje = grupo.querySelector(".input-error");
  if(input.value != "none"){
    grupo.classList.remove("with-error");
    icono.classList.remove("fa-times-circle");
    icono.classList.add("fa-check-circle");
    mensaje.classList.add("hidden");
    states.pais = true;
  }
  else{
    grupo.classList.add("with-error");
    icono.classList.add("fa-times-circle");
    icono.classList.remove("fa-check-circle");
    mensaje.classList.remove("hidden");
    states.pais = false;
  }
}

function validarTerminos(e) {
  let input = e.target;
  let grupo = input.closest(".input-grp");
  let icono = grupo.querySelector(".fas");
  let mensaje = grupo.querySelector(".input-error");
  if(input.checked){
    grupo.classList.remove("with-error");
    icono.classList.remove("fa-times-circle");
    icono.classList.add("fa-check-circle");
    mensaje.classList.add("hidden");
    states.terminos = true;
  }
  else{
    grupo.classList.add("with-error");
    icono.classList.add("fa-times-circle");
    icono.classList.remove("fa-check-circle");
    mensaje.classList.remove("hidden");
    states.terminos = false;
  }
}

function validarFormulario(e) {
  if(!(states.nombre && states.email && states.pais && states.terminos)){
    e.preventDefault();
    e.target.elements.nombre.dispatchEvent(new Event('blur'));
    e.target.elements.email.dispatchEvent(new Event('blur'));
    e.target.elements.pais.dispatchEvent(new Event('blur'));
    e.target.elements.terminos.dispatchEvent(new Event('blur'));
  }
}

function crearOption(obj){
  const opcion = document.createElement("option");
  opcion.value = obj.value;
  opcion.textContent = obj.text;
  return opcion;
}