/* Gere o conteúdo “Hoje é dia X/Y de XXXX (pesquise e use a função appendChild)
❖ Crie um elemento do tipo h1 no body do HTML com a mensagem inicial “msg base”.
❖ Em Javascript, acesse esse elemento pelo ID e modifique seu conteúdo com base no
horário local, sendo:
❖ Entre 6 e 11 horas: “Bom dia!”
❖ 12 horas: “Hora do Almoço!”
❖ 13 as 17: “Boa tarde!”
❖ 18 as 23: “Boa noite!”
❖ 0 horas: “Não disse que ia dormir mais cedo hoje?”
❖ Entre 1 e 5 horas: “Não está na netflix, está?”
❖ Escreva separadamente o arquivo.html do arquivo.js;
❖ Para realizar essa atividade, pesquise sobre como fazer para obter a data atual do seu
computador em javascript.
*/

const d = new Date() 
const text = d.toLocaleString()
const dh = d.getTime()

const data = document.createElement("h1")
data.innerHTML = 'Hoje é dia ' + text
document.body.appendChild(data)

const mensagem = document.createElement("h1")
const hour = parseInt(d.getHours())

if(hour >= 6 && hour <= 11){

    mensagem.innerHTML = 'Bom dia!'

}else if(hour >= 12 && hour <= 13){

    mensagem.innerHTML = 'Hora do almoço'

}else if(hour >= 13 && hour <= 17){

    mensagem.innerHTML = 'Boa tarde'

}else if(hour >= 18 && hour <= 23){

    mensagem.innerHTML = 'Boa noite!'

}else if(hour == 0){

    mensagem.innerHTML = 'Não disse que ia dormir mais cedo hoje?'

}else if(hour >= 1 && hour <= 5){

    mensagem.innerHTML = 'Não está na Netflix, está?'

}

document.body.appendChild(mensagem)

