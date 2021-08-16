var nome = prompt('Digite seu nome.');

var numero = prompt('Olá '+nome+'! Agora digite um número.');

document.write('1. Seja bem vindo '+nome+'!'+'<br>');

document.write('2. Você digitou o número ('+numero+').'+'<br>');

var v = (numero == 20);

console.log(v);

document.write('3. O retorno da comparação booleana é '+v+'.'+'<br>');

numero = parseInt(numero);

var vinte = 20;

console.log(numero+vinte);

var soma = numero+vinte;

document.write('4. A soma dos valores é '+soma+'.'+'<br>');

console.log(numero-vinte);

var sub = numero-vinte;

document.write('5. A subtração dos valores é '+sub+'.'+'<br>');

console.log(numero%vinte);

var resto = numero%vinte;

document.write('6. O resto da divisão é de '+resto+'.'+'<br>');

console.log(numero*numero);

var quad = numero*numero;

document.write('7. O quadrado do número digitado é '+quad+'.'+'<br>');

