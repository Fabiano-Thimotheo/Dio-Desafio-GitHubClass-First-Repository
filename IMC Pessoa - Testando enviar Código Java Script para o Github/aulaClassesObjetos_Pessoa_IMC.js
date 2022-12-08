/*Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC; */

class Pessoa {

  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularIMC() {
    return this.peso / (this.altura * this.altura);
  }

  classificarIMC () {
    const imc = this.calcularIMC();
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
      return "Peso normal";
    } else if (imc >= 25 && imc < 30) {
      return "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
      return "Obesidade grau 1";
    } else if (imc >= 35 && imc < 40) {
      return "Obesidade grau 2";
    } else {
      return "Obesidade grau 3";
    }
  }

}

const jose = new Pessoa ("José", 70, 1.75);
console.log (" ");
console.log (" ");
console.log("INÍCIO DO EXERCÍCIO");
console.log (" ");
console.log (" ");
console.log (">>> O IMC de " + jose.nome + " é: " + jose.calcularIMC().toFixed(2));
console.log (">>> Isso significa que o IMC de " + jose.nome + " é classificado como: " + jose.classificarIMC());
console.log ("*");
console.log ("*");

const maria = new Pessoa ("Maria", 60, 1.65);
console.log (">>> O IMC de " + maria.nome + " é: " + maria.calcularIMC().toFixed(2));
console.log (">>> Isso significa que o IMC de " + maria.nome + " é classificado como: " + maria.classificarIMC());
console.log ("*");
console.log ("*");

const joao = new Pessoa ("João", 80, 1.85);
console.log (">>> O IMC de " + joao.nome + " é: " + joao.calcularIMC().toFixed(2));
console.log (">>> Isso significa que o IMC de " + joao.nome + " é classificado como: " + joao.classificarIMC());
console.log ("*");
console.log ("*");

const fabiano = new Pessoa ("Fabiano", 130, 1.88);
console.log (">>> O IMC de " + fabiano.nome + " é: " + fabiano.calcularIMC().toFixed(2));
console.log (">>> Isso significa que o IMC de " + fabiano.nome + " é classificado como: " + fabiano.classificarIMC());
console.log (" ");
console.log (" ");
console.log ("FIM DO EXERCÍCIO");
console.log (" ");
console.log (" ");

