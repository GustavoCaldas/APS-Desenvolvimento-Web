function calcularIMC() {
    var nome = document.getElementById("nome").value;
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value / 100;

    document.getElementById("resultado").style.color = "black"

    // Validations
    if (nome.length <= 0) {
        document.getElementById("resultado").innerText = `Digite o seu nome.`
        document.getElementById("resultado").style.color = "red"
        return;
    }
    if (peso <= 0) {
        document.getElementById("resultado").innerText = `Seu peso deve ser maior que 0.`
        document.getElementById("resultado").style.color = "red"
        return;
    }
    if (altura <= 0) {
        document.getElementById("resultado").innerText = `Sua altura deve ser maior que 0.`
        document.getElementById("resultado").style.color = "red"
        return;
    }
    // Validations

    var imc = (peso / (altura * altura)).toFixed(1);

    if (imc < 18.5)
        document.getElementById("resultado").innerText = `${nome}, seu IMC foi de ${imc}. Segundo a tabela você está magro.`
    else if (imc < 24.9)
        document.getElementById("resultado").innerText = `${nome}, seu IMC foi de ${imc}. Segundo a tabela você está normal.`
    else if (imc < 30)
        document.getElementById("resultado").innerText = `${nome}, seu IMC foi de ${imc}. Segundo a tabela você está sobrepeso.`
    else
        document.getElementById("resultado").innerText = `${nome}, seu IMC foi de ${imc}. Segundo a tabela você está obeso.`
}