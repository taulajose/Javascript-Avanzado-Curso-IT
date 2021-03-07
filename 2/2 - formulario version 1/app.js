// Estados iniciales
const states = {
  nombre: false,
  email: false,
  pais: false,
  terminos: false
};

const paises = [
  {value: "ar", text: "Argentina"}, 
  {value: "br", text: "Brasil"}, 
  {value: "ch", text: "Chile"}
];


// 1) Debes obtener las Referencias del formulario y los 4 elementos(inputs y select)
const formulario = document.forms.frmRegistro;
const inputname = formulario.elements.nombre;
const inputemail = formulario.elements.email;
const inputpais = formulario.elements.pais;
const inputterminos = formulario.elements.terminos;
// 2) Basado en el array paises, crear las opciones del selector de paises con la función "crearOption" del archivo de funciones.js
let selectPaises = document.querySelector('#pais');
let frag = document.createDocumentFragment();
 paises.forEach(pais=>{
  frag.appendChild(crearOption(pais));
  selectPaises.appendChild(frag);
})

// 3) Crear los Listeners de eventos asociados a la fn
inputname.addEventListener('blur',validarNombre);
inputemail.addEventListener('blur',validarEmail);
inputpais.addEventListener('blur',validarPais);
inputterminos.addEventListener('blur',validarTerminos);
formulario.addEventListener('submit',validarFormulario);
