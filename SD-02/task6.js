// Refer to Task 6 in your Instructions to complete this task

let numeros = []

for (let i = 1; i <= 105; i++) {
  let resultado = ""

  if (i % 3 == 0){
    resultado += "Fizz"
  }

  if (i % 5 == 0){
    resultado += "Buzz"
  }

  if (i % 7 == 0){
    resultado += "Woof"
  }

  if (resultado == ""){
    numeros.push(i)
    resultado = String(i)
  }
  console.log(resultado);
};

console.log(numeros)