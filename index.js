//const prompt = require("prompt-sync")

import PromptSync from "prompt-sync"
const prompt = PromptSync()

/*const nome = prompt("Digite seu nome: ")
console.log(`Olá ${nome}`)

const temp = Number(prompt("Digite a temperatura: "))

if(temp > 38){
    console.log("Febre")
}else if(temp<26){
    console.log("Triste")
}
else{
    console.log("Tudo ok")
}
*/

const salario = Number(prompt("Digite seu salario: "))
const porc = Number(prompt("Digite a porcentagem a ser acrescida: "))
console.log(`O salario final é ${salario + salario * porc / 100}`)

const anoNasc = Number(prompt("Digite o ano do seu nascimento: "))
const dataAtual = new Date()
const anoAtual = dataAtual.getFullYear()

if(anoAtual - anoNasc <= 17){
    console.log("Não tem idade para tirar CNH")
} else {
    console.log("Tem permissão para tirar CNH")
}