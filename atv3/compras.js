let produtos = [5]
let caro = 0
let exterior = 0
let brasil = 0
let soma = 0
for(let x = 0; x <= 4; x++){

    let nome = prompt("Digite o nome do produto:  ")
    let preco = parseFloat(prompt("Digite o preço do produto: "))
    let fabricacao = prompt("Onde foi fabricado 1-Brasil ou 2-Exterior ") 

    soma = preco + soma

    if(preco > caro){
        caro = preco
    }

    if(fabricacao != 1){
        exterior++
    }else{
        brasil++;
    }

    produtos[x] = {

        nome: nome, 
        preco: preco,
        fabricacao: fabricacao

    }

}

for(let x = 0; x <= 4; x++){

    console.log("Nome: " + produtos[x].nome + "\nPreço: " + produtos[x].preco + "\nFabricação: " + produtos[x].fabricacao)

}

console.log("O mais caro é: " + caro)
console.log("Foram fabricados no Brasil: " + brasil + " e no exterior: " + exterior)
console.log("A soma é: " + soma)