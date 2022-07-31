window.onload = function() {
let produtos = [
    {desc: ' Mamão Papaia ', preco: 3.80},
    {desc: ' Laranja ', preco: 2.50}, 
    {desc: ' Manga ', preco: 4.90},
    {desc: ' Melão ', preco: 5.70},
    {desc: ' Melancia ', preco: 6.98},
    ];

    const ulPai = document.querySelector("#produtos");

    (
        ()=>{
           for(let prod of produtos){
            const li = document.createElement("li")
            for(let frutas in prod ){
                if(frutas == "desc"){
                ulPai.appendChild(li).textContent = prod["desc"]
            } else {
                ulPai.appendChild(li).setAttribute("data-preco", prod[frutas] )
            }
            }
           }
        }
    )()

    const cestaFrutas = document.querySelectorAll("#produtos > li")
    const cestaDoCliente = document.querySelector("#cestaDoCliente")
    const mostraTotalCompra = document.querySelector("#mostraTotalCompra")
    


     
    let cestaCli = []
    let total =0;
    cestaFrutas.forEach(function(item){
        item.addEventListener("click", function(){
    
 

        if(cestaCli.indexOf(item.textContent) != -1){
            
            alert(`O item ${ item.textContent } Já está na cesta`)
        } else {
            total += Number( item.dataset.preco )
            cestaCli.push(item.textContent);
            const itemCestaCliente = document.createElement ("li")
            cestaDoCliente.appendChild(itemCestaCliente).textContent = item.textContent
            mostraTotalCompra.value = total.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
        }
    }
        )
    }

    )





    // function mensagem(nome){
    //     alert("Bem vindo" + nome)
    // }

    // mensagem("Lucas");

}