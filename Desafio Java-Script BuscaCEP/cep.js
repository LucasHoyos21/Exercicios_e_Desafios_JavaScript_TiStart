import {dadosCep} from "./buscacep.js"

const buscarCep     = document.querySelector(".btn")
const cep           = document.querySelector("#cep")

buscarCep.addEventListener("click", function(){
    // console.log(cep.value)
    dadosCep(cep.value)
})
