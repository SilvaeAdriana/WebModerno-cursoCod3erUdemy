// Exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function (e) {//funcao callback q acontece com click
    console.log('O evento ocorreu!') //[0] é o indice do elemento
}

//quando clicar no body, executa a funcao