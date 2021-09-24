function Converter() {
  const valorEmDol = document.getElementById("valor").value;

  const textTela = document.getElementById("valorConvertido");

  var valorEmReal = valorEmDol * 5;
  var valorEmRealConvertido = parseFloat(valorEmReal);

  var textResultado = "O valor em reais é R$ " + valorEmRealConvertido;

  textTela.innerHTML = textResultado;
}
