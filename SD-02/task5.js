// Refer to Task 5 in your Instructions to complete this task

let numeroLineas = Number(prompt("Introduce el número de lineas a mostrar para el programa Fizz Buzz: "))
for (let i = 1; i <= numeroLineas; i++) {
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
    resultado = String(i)
  }
  console.log(resultado);
};