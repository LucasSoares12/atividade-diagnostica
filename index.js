console.log("Questão 1")
var a = 10
var b = 6
console.log(a + b);

console.log("Questão 2")
var nome = "Lucas"
var year = 23
console.log("Meu nome é", nome, "e tenho", year, "anos.")

console.log("Questão 3")
var a = 8
var b = 7
var c = 9
console.log((a + b + c) / 3)

console.log("Questão 4")
let numero = 5;

if (numero % 2 === 0) {
    console.log("número é par");
}
else {
    console.log("número é impar");
}

console.log("Questão 5")
let idade = 20;

if (idade >= 18) {
    console.log("Maior de idade");
}
else{
    console.log("Menor de idade");
}

console.log("Questão 6")
let nota = 5;

if(nota >= 9) {
    console.log("nota A");
} else if(nota >=7) {
    console.log("Nota B");
} else if(nota >= 5){
console.log("Nota C");
} else if (nota <= 4) {
    console.log("Nota D");
} 

console.log("Questão 7")
for(let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("Questão 8")
for(let i = 1; i <= 10; i++) {
    console.log(i*5);
}

console.log("Questão 9")
for(let i = 1; i <= 100; i++) {
    let soma = 0
    soma = soma + i
    console.log(soma);
}

console.log("Questão 10")
function dobrar(x) {
    return x * 2
}
console.log(dobrar(10));
//
console.log("Questão 11")
function calcularIMC(x,y) {
    var IMC = x / (y*y)
    return IMC
}
console.log(calcularIMC(70,1.75).toFixed(2));
//
console.log("Questão 12")

//
console.log("Questão 13")
