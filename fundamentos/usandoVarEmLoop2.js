const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {//function é uma funcao anônima
        console.log(i)
    })
}

//o resultado é 10 para ambos, por var n tem escopo de bloco

funcs[2]()
funcs[8]()