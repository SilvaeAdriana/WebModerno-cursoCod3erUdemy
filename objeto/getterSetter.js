const sequencia = {
    _valor: 1, // convenção/uma notação aos demais desenvolvedorses
    // p variavel que sera accessssada internamente,apesar dela poder ser acessada livremente
    get valor() { return this._valor++ },//get-retorna
    set valor(valor) { //set-manipula
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}


console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)