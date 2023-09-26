let aluno = []
let main = document.getElementById("principal")


for(let x = 0; x <= 9; x++){

    let nome = prompt("Digite seu nome:  ")
    let email = prompt("Digite seu email: ")
    let materiafavorita = prompt("Digite sua matéria preferida: ") 


    aluno[x] = {

        nome: nome, 
        email: email,
        materiafavorita: materiafavorita

    }

}

for(let x = 0; x <= 9; x++){  

   let h1 = document.createElement("h1")
   let h2 = document.createElement("h2")
   let p =  document.createElement("p")
   let div = document.createElement("div")

    h1.innerHTML = aluno[x].nome
    h2.innerHTML = aluno[x].email
    p.innerHTML = aluno[x].materiafavorita

    div.appendChild(h1)
    div.appendChild(h2)
    div.appendChild(p)

    main.appendChild(div)
}