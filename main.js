/* 

painel
    a cada NUMERO clicado -> adicionado em LISTA.
        a cada clique no CE retiramos o ultimo
            numero da LISTA.
    A cada clique no botão de + somamos uma lista
        com uma nova lista criada.


*/


// ADICIONAR números na lista

//adicionar valor no elemento - "output".
let painel = [];

function buttClick(valor) {
    console.log(
        valor
    )
    painel.push(valor)
    document.getElementById("out_p").innerHTML = valor
}
