const listaOpções = document.querySelector(".seçãoDetalhesConta_opçõestransações")

listaOpções.addEventListener("click", indentificarOpções)

function indentificarOpções(Event){
    const elemento = Event.target
    
    if(elemento.tagName == "LI"){
        const id = elemento.id
        
        const secaoEscolha  = document.querySelector(`div[data-id="${id}"]`)
        removeClasseMostrar()
        secaoEscolha.classList.add("mostrar")

    }
    
}
function removeClasseMostrar(){
    const divs = document.querySelectorAll(".seçãoTransação .container div")
    
    for(let i = 0; i < divs.length; i++){
        
        divs[i].classList.remove("mostrar")

    }
}