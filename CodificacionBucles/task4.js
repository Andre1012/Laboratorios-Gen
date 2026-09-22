// Refer to Task 4 in your Instructions to complete this task

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
    resultado = String(i)
  }
  console.log(resultado);
};