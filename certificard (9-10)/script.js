botao = document.querySelector(".botao");

function mudaTema() {
    if (botao.innerText == "Dark Mode") {
        botao.innerText = "Light Mode";
    } else {
        botao.innerText = "Dark Mode";
    }
    document.body.classList.toggle("dark");

}


