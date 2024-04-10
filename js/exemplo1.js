function aoClicar() {
    let numero1 = document.getElementById('numero1').value;
    let numero2 = document.getElementById('numero2').value;
    let calculadora = new Calculadora(numero1, numero2);

    let divSaida = document.getElementById('saida');

    let resultado = calculadora.somar();

    divSaida.innerText = `Resultado: ${resultado}`;
}