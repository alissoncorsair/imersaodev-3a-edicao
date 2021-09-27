const confirmar = document.querySelector(".submit");

confirmar.addEventListener("click", (e) => {
e.preventDefault();
  

const n1 = parseFloat(document.querySelector(".n1").value);
const n2 = parseFloat(document.querySelector(".n2").value);
const n3 = parseFloat(document.querySelector(".n3").value);
const n4 = parseFloat(document.querySelector(".n4").value);
var media = ((n1+n2+n3+n4)/4).toFixed(2);
const resultado = document.querySelector(".resultado"); 
  
  if (n1<0 || n2<0 || n3 < 0 || n4 < 0 || n1>10 || n2>10 || n3>10 || n4>10){
    resultado.innerHTML="Erro!"
} else 
  

{
  
  if(media >= 6){
        resultado.innerHTML = "Parabéns, você foi aprovado. Média: " + media;
        resultado.classList.add("aprovado");
        resultado.classList.remove("reprovado");
    }
    else{
        resultado.innerHTML = "Você foi reprovado. Média: " + media;
        resultado.classList.add("reprovado");
        resultado.classList.remove("aprovado");
    }
  }
})