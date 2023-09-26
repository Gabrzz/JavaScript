let array = 11
let Contador = 0
let Positivos = 0, Negativos = 0, Pares = 0, Impares = 0

do {
    array.push(parseFloat(prompt("Digite um numero")))

    if(array[Contador] == 0){
        break
    }
    else if(array[Contador] > 0){
        Positivos++
    }
    else if(array[Contador] < 0){
        Negativos++
    }

    if(array[Contador] % 2 == 0){
        Pares++
    }
    else{
        Impares++
    }
}while(1)
console.log("Positivos: " + Positivos + "\nNegativos: " + Negativos + "\nPares: " + Pares + "\nImpares: " + Impares)