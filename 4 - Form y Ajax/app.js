// Estados iniciales
const states = {
  usuario: false,
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

// Referencias
const formulario = document.forms.frmRegistro;
const selectPaises = formulario.elements.pais;

// Crear opciones del selector de paises
const frag = document.createDocumentFragment();
paises.forEach(pais => frag.appendChild(crearOption(pais)) );
selectPaises.appendChild(frag);

// Listeners

formulario.addEventListener('focusout', validarEntrada);
formulario.addEventListener('submit', validarFormulario);
