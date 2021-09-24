var numeroSecreto = parseInt(Math.random() * 11);
var numeroTentativas = 3;
var resetButton = document.querySelector(".resetButton");
var chutarButton = document.querySelector(".submitButton");

resetButton.setAttribute("disabled", "true");
var resultadoText = document.querySelector("#resultado");

function Chutar() {
  var chute = parseInt(document.querySelector("#valor").value);
  if (numeroTentativas != 0) {
    if (chute <= 10 && chute >= 0) {
      if (numeroSecreto == chute) {
        resultadoText.innerHTML = "Você acertou!";
        numeroTentativas = 0;
        // resetButton.setAttribute("enabled", "true");
        // chutarButton.setAttribute("disabled", "true");
        resetButton.disabled = false;
        chutarButton.disabled = true;
      } else {
        numeroTentativas--;
        // resultadoText.innerHTML = "Você errou! Você tem " + i + "chances";
        resultadoText.innerHTML =
          "Você errou! Você tem " + numeroTentativas + " chances";

        console.log(numeroSecreto);
      }
    } else {
      resultadoText.innerHTML = "Por favor, digite um número entre 0 a 10";
      numeroTentativas--;
    }
  }
}

function Reset() {
  // resetButton.setAttribute("disabled", "true");
  // chutarButton.setAttribute("disabled", "false");
  resetButton.disabled = true;
  chutarButton.disabled = false;
  numeroTentativas = 3;
  resultadoText.innerHTML = "";
  document.querySelector("#valor").value = "";
  numeroSecreto = parseInt(Math.random() * 11);
}
