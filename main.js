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
        valor                       // Mostra o valor referente ao botão clicado
    )
    if (painel.length <= 8){
        painel.push(valor)              // Add o valor do botão à lista Painel
        document.getElementById("out_p").innerHTML = painel      // Mostra a sequencia de números clicados

    }
}

function buttCE() {
    painel.pop();                                            // Apaga o Ultimo número
    document.getElementById("out_p").innerHTML = painel      // Mostra a sequencia de números clicados

}
