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

// Referencias
const formulario = document.forms.frmRegistro;
const inputNombre = formulario.elements.nombre;
const inputEmail = formulario.elements.email;
const selectPaises = formulario.elements.pais;
const inputTerminos = formulario.elements.terminos;

// Crear opciones del selector de paises
const frag = document.createDocumentFragment();
paises.forEach(pais => frag.appendChild(crearOption(pais)) );
selectPaises.appendChild(frag);

// Listeners
inputNombre.addEventListener('blur', validarNombre);
inputEmail.addEventListener('blur', validarEmail);
selectPaises.addEventListener('blur', validarPais);
inputTerminos.addEventListener('blur', validarTerminos);
formulario.addEventListener('submit', validarFormulario);
