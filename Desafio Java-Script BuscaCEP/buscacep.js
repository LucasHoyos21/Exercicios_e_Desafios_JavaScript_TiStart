

// const logradouro    = document.querySelector("#logradouro")
// const bairro        = document.querySelector("#bairro")
// const localidade    = document.querySelector("#localidade")
// const uf            = document.querySelector("#uf")



let dadosCep = async function(cep){
    let url = `https://viacep.com.br/ws/${cep}/json/`

    try{
        let dadosFetch = await fetch(url)
        let dadosJson  = await dadosFetch.json()

        // logradouro.value = dadosJson.logradouro
        // bairro.value = dadosJson.bairro
        // localidade.value = dadosJson.localidade
        // uf.value = dadosJson.uf

        for(let valorCep in dadosJson){
            if( document.querySelector(`#${valorCep}`)){
                document.querySelector(`#${valorCep}`).value = dadosJson[valorCep]
            }
            
        }
        

    } catch(error){
        alert(error)
    }


}



export {dadosCep}

// dadosCep ("87020260")