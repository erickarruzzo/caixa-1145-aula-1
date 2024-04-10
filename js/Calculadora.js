class Calculadora {
    constructor(numero1, numero2) {
        this.numero1 = parseInt(numero1);
        this.numero2 = parseInt(numero2);
    }

    somar() {
        return this.numero1 + this.numero2;
    }
}