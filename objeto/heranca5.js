console.log(typeof String)//funcao
console.log(typeof Array)//funcao
console.log(typeof Object)//funcao
//toda funcao tem .prototype(atributo)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}//reverte elementos do array após quebrá-los

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
    return this[0]//this: meio de pegar o valor
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())


//sobrescreveno toString(já existe)--causa efeito colateral
String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())