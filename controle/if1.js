function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo()//retorna nada, pois é falso
seForVerdadeEuFalo(null)//retorna nada, pois é falso
seForVerdadeEuFalo(undefined)//retorna nada, pois é falso
seForVerdadeEuFalo(NaN)//retorna nada, pois é falso
seForVerdadeEuFalo('')//retorna nada, é dalso
seForVerdadeEuFalo(0)//retorna nada, unico nº q é falso
seForVerdadeEuFalo(-1)//retorna -1
seForVerdadeEuFalo(' ') //retorna vazio
seForVerdadeEuFalo('?')//retorna ?
seForVerdadeEuFalo([])//retorna vazio
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})// retorna object Object