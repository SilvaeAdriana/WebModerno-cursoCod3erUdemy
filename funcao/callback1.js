const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}


//percorre o array e vai aplicando a funcao nele
//call back: é chamada qdo um evento acontecer
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))