const frutas = [
  { nombre: 'Manzana',  icono: '🍎' }, 
  { nombre: 'Pera',     icono: '🍐' },  
  { nombre: 'Naranja',  icono: '🍊' },  
  { nombre: 'Banana',   icono: '🍌' },  
  { nombre: 'Sandia',   icono: '🍉' },  
  { nombre: 'Uvas',     icono: '🍇' },  
  { nombre: 'Frutilla', icono: '🍓' },  
  { nombre: 'Cereza',   icono: '🍒' },  
  { nombre: 'Anana',    icono: '🍍' }, 
];
let ul = document.getElementById('botones')
for (let i=0; i<frutas.length; i++){
  let li = document.createElement('li')
  let boton = document.createElement('button');
  boton.textContent=frutas[i].icono + " " + frutas[i].nombre
  ul.appendChild(li);
  boton.addEventListener('click',agregarFruta)
  li.appendChild(boton);
}

document.getElementById("btnDestruir").addEventListener("click", quitarComportamientos);

// 2


// 3
