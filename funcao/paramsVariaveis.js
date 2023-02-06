function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]//soma os elementos--arguments de indice [i]
    }
    return soma
}
//funcao sem parametros: pode não receber e receber paramentos:maleabilidade
console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

console.log(soma(1.1, 2.2, "Teste"))//concatena
console.log(soma('a', 'b', 'c'))