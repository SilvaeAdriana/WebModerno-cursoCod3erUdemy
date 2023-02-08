const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}
//heranca em JS é baseada em prototipos
//a procura se dá a partir de escopos mais próximos para os mais disnt
//distantes
//o prototipo é um elemento q tem a propriedade e leva em consideração a proximidade
console.log(ferrari.prototype)
//_proto_consigo acesssar o prototipo do objeto: ele procura o
//atributo, se n tiver , no prototipo
console.log(ferrari.__proto__)//retorna {} =vazio mas existente
console.log(ferrari.__proto__ === Object.prototype)//true-ambos tem o mesmo prototype {}
console.log(volvo.__proto__ === Object.prototype)//true
console.log(Object.prototype.__proto__ === null)//existe uma prototipo superior a {}? false

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)