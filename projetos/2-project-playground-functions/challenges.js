// Desafio 1
function compareTrue(valor1, valor2) {
  if ((valor1 == true) && (valor2 == true)){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(frase) {
  frase = frase.split(' ');
  return frase;
}


// Desafio 4
function concatName(array) {
  let ultimo = (array.length - 1);
  return(array[ultimo] + ", " + array[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  let ganho = wins * 3;
  return(ganho + ties);
}

// Desafio 6
function highestCount(valores) {
  let maior = -1000000;
  let quantidade = 0;
  for (let i = 0; i < valores.length; i += 1){
    if (valores[i] > maior){
      maior = valores[i]
    }
  }
  for (let j = 0; j < valores.length; j += 1){
    if (valores[j] == maior) {
      quantidade += 1;
    }
} return(quantidade);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gato1 = 0;
  let gato2 = 0;

  if (mouse > cat1){
    gato1 = mouse - cat1;
  } else if (mouse < cat1){
      gato1 = cat1 - mouse;
  }
  if (mouse > cat2){
    gato1 = mouse - cat2;
  } else if (mouse < cat2){
      gato2 = cat2 - mouse;
  }
  if (gato1 > gato2){
    return("cat2");
  } else if (gato1 < gato2){
    return("cat1");
  } else {
    return("os gatos trombam e o rato foge");
}}

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let i = 0; i < array.length; i += 1){
    let tres = (array[i] % 3);
    let cinco = (array[i] % 5);
    if ((tres == 0) && (cinco == 0)) {
      resultado.push('fizzBuzz');
    } else if (tres == 0) {
      resultado.push('fizz');
    } else if (cinco == 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return(resultado);
}

// Desafio 9
function encode(frase) {
  let array = frase.split('');
  let codificado = [];
  for (let i = 0; i < array.length; i += 1){
    if (array[i] == "a"){
      codificado.push(1);
    } else if (array[i] == "e"){
      codificado.push(2);
    } else if (array[i] == "i"){
      codificado.push(3);
    } else if (array[i] == "o"){
      codificado.push(4);
    } else if (array[i] == "u"){
      codificado.push(5);
    } else {
      codificado.push(array[i]);
    }
  }
  return(codificado.join(''));
}

function decode(frase){
  let array = frase.split('');
  let decodificado = [];
  for (let i = 0; i < array.length; i += 1){
    if (array[i] == 1){
      decodificado.push("a");
    } else if (array[i] == 2){
      decodificado.push("e");
    } else if (array[i] == 3){
      decodificado.push("i");
    } else if (array[i] == 4){
      decodificado.push("o");
    } else if (array[i] == 5){
      decodificado.push("u");
    } else {
      decodificado.push(array[i]);
    }
  }
  return(decodificado.join(''));
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
