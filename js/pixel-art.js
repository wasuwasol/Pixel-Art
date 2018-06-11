var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];


let paleton = document.getElementById('paleta');
let grillaTotal = document.getElementById('grilla-pixeles');

function iniciar() {
  recorrerColores(); 
  crearGrilla();
}
window.onload = iniciar();




// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
let colorPersonalizado = document.getElementById('color-personalizado');


colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    cuadroColorActual.style.backgroundColor = colorActual;
  }) 
);


/*  VARIABLES PROPIAS  */

//Paso1

function recorrerColores() {
  for (let i = 0; i < nombreColores.length; i++) {
    let colores = document.createElement('div');
    colores.style.backgroundColor = nombreColores[i];
    colores.className = 'color-paleta';
    paleton.appendChild(colores);
  }
}


function crearGrilla() {
  for (let j = 0; j <= 1750; j++) {
    const elemento = document.createElement('div');
    grillaTotal.appendChild(elemento);
  }
}


//Paso2


let cuadroColorActual = document.getElementById('indicador-de-color');
paleton.addEventListener('click', guardarColor);
  function guardarColor(e) {
    cuadroColorActual.style.backgroundColor = e.target.style.backgroundColor;
  }


//Paso3

grillaTotal.addEventListener('click', pintarColor);
  function pintarColor(p) {
      p.target.style.backgroundColor = cuadroColorActual.style.backgroundColor;
  }

grillaTotal.addEventListener('mouseover', pintarEnMovimiento);
function pintarEnMovimiento(q) {
  if (apretado) {
    q.target.style.backgroundColor = cuadroColorActual.style.backgroundColor;
  }
}


//Paso4
let apretado;
grillaTotal.addEventListener('mousedown', mouseConClick);
function mouseConClick() {
  apretado = true;  
}

grillaTotal.addEventListener('mouseup', mouseSinClick);
function mouseSinClick() {
  apretado = false;
}


//Paso5  - Borrar imagen
let borrar = document.getElementById('borrar');

borrar.addEventListener('click', borrarTodo);
  function borrarTodo() {
    let desactivarRed = grillaTotal.getElementsByTagName('div');
    for (let j = 0; j <= 1750; j++) {
      desactivarRed[j].style.animation.fadeOut = '5s';
      desactivarRed[j].style.backgroundColor = '#fff';
    }
}