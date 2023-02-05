const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

//imprime os numeros em colchetes
//como i tem escopo de bloco por ser let, ele tem seu valor recuperado
funcs[2]()
funcs[6]()
funcs[8]()