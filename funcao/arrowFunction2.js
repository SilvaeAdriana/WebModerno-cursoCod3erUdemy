function Pessoa() {
    this.idade = 0

    setInterval(() => {//function implicito
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa