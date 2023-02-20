// tipo String

const texto1 = "olá, Mundo!";
const texto2 = 'olá, Mundo!';
const senha = "senhaSuperSegura456!";
const stringDeNumeros ="34567";

const citacao = 'O Leo disse "oi!"';
console.log(citacao + " / " + texto1 + " / " + texto2)

// concatenação (+)

const concatenação = "Meu nome é: ";
const meuNome = "Sergio";

console.log(concatenação + meuNome)

// template string OU template literal

// comparação entre strings:

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

console.log(cidade)
console.log(input)
