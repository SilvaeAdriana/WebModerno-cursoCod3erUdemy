//bind: this mais 'deterministico'


//OO
const pessoa = {
    saudacao: 'Bom dia!',
    falar() {//acessando atributo de objeto, precisa do this
        console.log(this.saudacao)//this, referenciacao ao objeto
    }
}

pessoa.falar()//acessando a funcao que está dentro da constante ai em cima!
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO


//eliminando o conflito:passa o bind para ammarrar um objeto a um metodo
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()