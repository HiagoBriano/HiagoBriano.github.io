// Desafio 10
function techList() {

}

// Desafio 11
function generatePhoneNumber(numero) {
  const inicial1 = numero.join('');
  inicial = inicial1.split('');
  
  // menor que 0 ou maior que 9
  let erro = 0; 
  for (let i = 0; i < numero.length; i += 1) {
    if ((numero[i] > 9) || (numero[i] < 0)) {
      erro += 1;
    }
  }

  // números iguais
  const organizando = numero.sort();
  let contagem = 1;
  let anterior;
  for (let i = 0; i < organizando.length; i += 1){
    if (anterior == organizando[i]){
      contagem += 1;
      if (contagem == 3) {
        break;
      }
    } else {
      contagem = 1;
      anterior = organizando[i];
    }
  }

  // respostas
  if ((11 < numero.length) || (11 > numero.length)) {
    return("Array com tamanho incorreto.");
  } else if ((erro > 0) || (contagem > 2)) {
    return("não é possível gerar um número de telefone com esses valores");
  } else {
    return("(" + inicial[0] + inicial[1] + ") " + inicial[2] + inicial[3] + inicial[4] + inicial[5] +  inicial[6] + "-" + inicial[7] + inicial[8] + inicial[9] + inicial[10]);
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let somaA = (lineB + lineC);
  let somaB = (lineA + lineC);
  let somaC = (lineB + lineA);
 
  let maiorA = (somaA > lineA);
  let maiorB = (somaB > lineB);
  let maiorC = (somaC > lineC);
 
  let diferencaA = (lineA >= (Math.abs(lineA - lineB))) && (lineA >= (Math.abs(lineA - lineC)));
  let diferencaB = (lineB >= (Math.abs(lineA - lineB))) && (lineB >= (Math.abs(lineB - lineC)));
  let diferencaC = (lineC >= (Math.abs(lineC - lineB))) && (lineC >= (Math.abs(lineA - lineC)));
 
  if (maiorA && diferencaA && maiorB && diferencaB && maiorC && diferencaC){
   return true
  } else {
   return false
  }
 }

// Desafio 13
function hydrate(frase) {
  let ordem = frase.split('').filter(Number);
  let soma = 0;
  for (let i = 0; ordem.length > i; i += 1) {
    calculo = parseInt(ordem[i], 10)
    soma += calculo;
  }

  if (soma > 1) {
    return (soma + ' copos de água');
  } else {
    return (soma + ' copo de água');
  }
  // usei esse site para aprender a converter a string para int
  // https://pt.stackoverflow.com/questions/134453/como-converter-uma-string-para-int-em-javascript

  // Usei esse site para tirar a base de como separar os numeros
  // https://pt.stackoverflow.com/questions/3719/como-obter-apenas-os-n%C3%BAmeros-de-uma-string-em-javascript
}


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};