let h1 = document.createElement("h1")
let h2 = document.createElement("h2")
let p =  document.createElement("p")
let div = document.getElementById("principal")
 
    h1.innerHTML = 'Bem vindo ao JS'
    h2.innerHTML = 'Criando elementos de forma dinâmica'
    p.innerHTML = 'Esse é um exemplo clássico de geração de HTML com Javascript'
 
    div.appendChild(h1)
    div.appendChild(h2)
    div.appendChild(p)
     
    h1.classList.add("tituloPrincipal")
    h2.classList.add("tituloSec")
    p.classList.add("texto")