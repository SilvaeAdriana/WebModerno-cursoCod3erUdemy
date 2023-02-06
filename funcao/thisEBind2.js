function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {//dispara função conforme determinado intervalo
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa