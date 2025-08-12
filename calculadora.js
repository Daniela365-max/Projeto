// calculadora.js
// Edite os valores abaixo conforme quiser
const num1 = 10;
const num2 = 5;
const operador = '+';

let resultado;
let mensagem;

if (operador === '+') {
  resultado = num1 + num2;
  mensagem = `${num1} + ${num2} = ${resultado}`;
} else if (operador === '-') {
  resultado = num1 - num2;
  mensagem = `${num1} - ${num2} = ${resultado}`;
} else if (operador === '*') {
  resultado = num1 * num2;
  mensagem = `${num1} * ${num2} = ${resultado}`;
} else if (operador === '/') {
  if (num2 === 0) {
    mensagem = 'Erro: divisão por zero não é permitida.';
  } else {
    resultado = num1 / num2;
    mensagem = `${num1} / ${num2} = ${resultado}`;
  }
} else {
  mensagem = `Operador inválido ("${operador}"). Use +, -, * ou /.`;
}

console.log('Resultado:', mensagem);