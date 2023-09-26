let opcao = parseInt(prompt("1-Subtração \n2-Multiplicação \n3-Divisão \n4-Soma"))

switch(opcao){

    case 1: 

        let n1 = parseInt(prompt("Digite um número"))
        let n2 = parseInt(prompt("Digite um número"))
        let sub

        sub = n1 - n2
        
        console.log("A subtração dos números é : " + sub)
    break;    

    case 2: 

    let n3 = parseInt(prompt("Digite um número"))
    let n4 = parseInt(prompt("Digite um número"))
    let multi        
    
    multi = n3 * n4

    console.log("A Multiplicação dos números é : " + multi)

    break;

    case 3:

        let n5 = parseInt(prompt("Digite um número"))
        let n6 = parseInt(prompt("Digite um número"))
        let divi 

        parseFloat(divi)

        divi = n5 / n6

        console.log("A Divisão dos números é : " + divi)
    break;

    case 4:

        let n7 = parseInt(prompt("Digite um número"))
        let n8 = parseInt(prompt("Digite um número"))
        let n9 = parseInt(prompt("Digite um número"))
        let n10 = parseInt(prompt("Digite um número"))
        let soma

        soma = n7 + n8 + n9 + n10


        console.log("A Soma dos números é : " + soma)
    break;

    default:

    console.log("Opção inválida")

    break;

}