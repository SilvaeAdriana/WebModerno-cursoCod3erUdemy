let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)//global=objeto global-window no browser

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)//não aponta mais para global,por conta do bind
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)//não aponta pro global,por causa da arrow
comparaComThisArrow(module.exports)//module.exports é o this

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)

//aa arrow function é dominante