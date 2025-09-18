// 1. Pedir 3 números al usuario 
let numbersInput = prompt("Agrega 3 números enteros, separados por una coma (,)");

// 2. Declaramos la función para dividir el prompt y el usuario pueda agregar 3 cifras separadas por ",".
let separadorDeNumeros = numbersInput.split(",");

// 3. Convertir los números
let threeNumbers = separadorDeNumeros.map(num => parseFloat(num.trim()));
// 4. Función para comparar los números
let [a,b,c] = threeNumbers;

// Si los números son iguales: imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
if(a==b && b==c){
      console.log("Los tres números introducidos: ",a,b,c,"son iguales" );
} else{
      //Ordenar de mayor a menor
      threeNumbers.sort((a,b) => (b - a));
      console.log("Números ordenados de mayor a menor: " ,threeNumbers);

      //Ordenar de menor a mayor
      threeNumbers.sort((a,b) => (a - b))
      console.log("Números ordenados de menor a mayor: " ,threeNumbers);
}
