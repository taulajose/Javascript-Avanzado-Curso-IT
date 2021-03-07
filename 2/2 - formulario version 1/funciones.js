const { stat } = require("fs");

function validarNombre(e) {
  /*
  A partir de una expresión regular y el objeto de evento:
  - Capturar el input de nombre
  - Captura el grupo al que pertenece (.input-grp)
  - Captura el icono (.fas)
  - Captura el mensaje de error (.input-error)
  - Comprueba si lo ingresado por el usuario cumple la expresión regular
  - Dependiendo de la condición anterior:
    - agregar o quitar la clase "with-error" al grupo
    - agregar o quitar la clase "fa-times-circle" al icono
    - agregar o quitar la clase "fa-check-circle" al icono
    - mostrar u ocultar mensaje (existe una class hidden)
    - modificar el objeto states con true o false

  ver pistas en index.html
  */
  
  let expresion = /^[\w\s]{4,}$/i;
  let nombre = e.target;
  let grupo = nombre.closest('.input-grp');
  let icono = grupo.querySelector('.fas');
  let error = grupo.querySelector('.input-error');
  console.log(nombre)
  if (expresion.test(nombre.value)){
    grupo.classList.remove('with-error');
    icono.classList.remove('fa-times-circle');
    icono.classList.add('fa-check-circle');
    error.classList.add('hidden'); 
    states.nombre=true;
  }else{
    grupo.classList.add('with-error');
    icono.classList.add('fa-times-circle');
    icono.classList.remove('fa-check-circle');
    error.classList.remove('hidden');
    states.nombre=false;
}
}


function validarEmail(e) {
  /*
  A partir de una expresión regular y el objeto de evento:
  - Capturar el input de email
  - Captura el grupo al que pertenece (.input-grp)
  - Captura el icono (.fas)
  - Captura el mensaje de error (.input-error)
  - Comprueba si lo ingresado por el usuario cumple la expresión regular
  - Dependiendo de la condición anterior:
    - agregar o quitar la clase "with-error" al grupo
    - agregar o quitar la clase "fa-times-circle" al icono
    - agregar o quitar la clase "fa-check-circle" al icono
    - mostrar u ocultar mensaje (existe una class hidden)
    - modificar el objeto states con true o false

  ver pistas en index.html
  */
 let expresion = /^\w+@\w+(\.\w{2,3})+$/i;
 let inpemail = e.target;
 let grupoEmail = inpemail.closest('.input-grp');
 let iconoGrupoEmail = grupoEmail.querySelector('.fas');
 let errorEmail = grupoEmail.querySelector('.input-error');

 if (expresion.test(inpemail.value)){
   grupoEmail.classList.remove('with-error');
   iconoGrupoEmail.classList.remove('fa-times-circle');
   iconoGrupoEmail.classList.add('fa-check-circle');
   errorEmail.classList.add('hidden');
   states.email=true
 }else{
  grupoEmail.classList.add('with-error');
  iconoGrupoEmail.classList.add('fa-times-circle');
  iconoGrupoEmail.classList.remove('fa-check-circle');
  errorEmail.classList.remove('hidden');
  states.email=false
 }

}

function validarPais(e) {
  /*
  A partir del objeto de evento:
  - Capturar el selector value
  - Captura el grupo al que pertenece (.input-grp)
  - Captura el icono (.fas)
  - Captura el mensaje de error (.input-error)
  - Comprueba si la opción elegida no es "none"
  - Dependiendo de la condición anterior:
    - agregar o quitar la clase "with-error" al grupo
    - agregar o quitar la clase "fa-times-circle" al icono
    - agregar o quitar la clase "fa-check-circle" al icono
    - mostrar u ocultar mensaje (existe una class hidden)
    - modificar el objeto states con true o false

  ver pistas en index.html
  */
  selector = e.target;
  grupoSelector = selector.closest('.input-grp');
  iconoGrupoSelector = grupoSelector.querySelector('.fas');
  errorSelector = grupoSelector.querySelector('.input-error');
  if(selector.value != 'none'){
    iconoGrupoSelector.classList.remove('fa-times-circle');
    iconoGrupoSelector.classList.add('fa-check-circle');
    errorSelector.classList.add('hidden');
    states.pais=true;
  }else{
    iconoGrupoSelector.classList.add('fa-times-circle');
    iconoGrupoSelector.classList.remove('fa-check-circle');
    errorSelector.classList.remove('hidden');
    states.pais=false;
  }
}

function validarTerminos(e) {
  /*
  A partir del objeto de evento:
  - Capturar el checkbox
  - Captura el grupo al que pertenece (.input-grp)
  - Captura el icono (.fas)
  - Captura el mensaje de error (.input-error)
  - Comprueba si el checkbos está chequeado (.checked)
  - Dependiendo de la condición anterior:
    - agregar o quitar la clase "with-error" al grupo
    - agregar o quitar la clase "fa-times-circle" al icono
    - agregar o quitar la clase "fa-check-circle" al icono
    - mostrar u ocultar mensaje (existe una class hidden)
    - modificar el objeto states con true o false

  ver pistas en index.html
  */
 terminosCheckbox = e.target;
 grupoTerminos = terminosCheckbox.closest('.input-grp');
 iconoGrupoTerminos = grupoTerminos.querySelector('.fas');
 errorTerminos = grupoTerminos.querySelector('.input-error');
 if(terminosCheckbox.checked){
  grupoTerminos.classList.remove('with-error');
  iconoGrupoTerminos.classList.add('fa-check-circle');
  iconoGrupoTerminos.classList.remove('fa-times-circle');
  errorTerminos.classList.add('hidden');
  states.terminos=true;
 }else{
  grupoTerminos.classList.add('with-error');
  iconoGrupoTerminos.classList.add('fa-times-circle');
  iconoGrupoTerminos.classList.remove('fa-check-circle');
  errorTerminos.classList.remove('hidden');
  states.terminos=false;
 }
}

function validarFormulario(e) {
  /*
  Si alguno de los states está false, debes detener el envío del formulario
  Si lo detienes podrias intentar disparar los eventos necesarios y así aparezcan los errores
  */
 if(states.nombre == false || states.email == false || states.pais == false || states.terminos == false){
   e.preventDefault();
   e.target.elements.nombre.dispatchEvent(new Event('blur'));
   e.target.elements.email.dispatchEvent(new Event ('blur'));
   e.target.elements.terminos.dispatchEvent(new Event('blur'));
   e.target.elements.pais.dispatchEvent(new Event('blur'));
 }
}

function crearOption(obj){
  /*
  Recibo un objeto con las propiedades value y text
  Crear un nodo HTML del tipo option con las propiedades anteriores
  retornar el nodo HTML
  */
 let nodoOpcion = document.createElement('option');
 nodoOpcion.value = obj.value;
 nodoOpcion.textContent = obj.text;
 return nodoOpcion;
}


/*
Dentro de unas horas subiré una segunda parte donde buscaremos optimizar algunas partes.
El martes no hay clases, pero nos vemos el jueves.
Escriban a Alumni si hay dudas o preguntas.
*/