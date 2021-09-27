var btnSortear = document.getElementById("btnSortear");
var btnJogar = document.getElementById("btnJogar");
var opcoes = document.getElementById("opcoes");

var carta1 = {
    nome: "Gon",
    imagem: "https://pbs.twimg.com/profile_images/725080716686532609/YRN9cKT4.jpg",
    atributos: {
        ataque: 9,
        defesa: 7,
        magia: 2
    }
};

var carta2 = {
    nome: "Killua",
    imagem: "https://nerdhits.com.br/wp-content/uploads/2021/05/killua.jpg",
    atributos: {
        ataque: 7,
        defesa: 3,
        magia: 5
    }
};

var carta3 = {
    nome: "Hisoka",
    imagem: "https://i.pinimg.com/originals/b8/ef/33/b8ef33ad8b01122afa4356b86c3da90c.jpg",
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 8
    }
};

var cartas = [carta1, carta2, carta3];

var minhaCarta;
var maquinaCarta;

function sortearCarta() {
    var numeroMinhaCarta = parseInt(Math.random() * 3);
    var numeroMaquina = parseInt(Math.random() * 3);
    minhaCarta = cartas[numeroMinhaCarta];
    exibirCartaJogador();

    while (numeroMinhaCarta == numeroMaquina) {
        numeroMaquina = parseInt(Math.random() * 3);
    }

    maquinaCarta = cartas[numeroMaquina];

    btnSortear.disabled = true;
    btnJogar.disabled = false;


}


function exibirCartaJogador() {
    var cartaJogador = document.getElementById("carta-jogador")

    cartaJogador.style.backgroundImage = `url(${minhaCarta.imagem})`

    var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"
        style=" width: inherit; height: inherit; position: absolute;">`
    var tagHTML = `<div id="opcoes" class="carta-status">`
    for (var atributo in minhaCarta.atributos) {
        tagHTML += `<input type="radio" name="atributos" value="${atributo}">${atributo} ${minhaCarta.atributos[atributo]} </br>`;
    }
    var nome = `<p class="carta-subtitle">${minhaCarta.nome}</p>`

    cartaJogador.innerHTML = moldura + tagHTML + nome + `</div>`;
}

function exibirCartaAdversario() {
    var cartaAdversario = document.getElementById("carta-maquina")

    cartaAdversario.style.backgroundImage = `url(${maquinaCarta.imagem})`

    var molduraMaquina = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"
    style=" width: inherit; height: inherit; position: absolute;">`
    var tagHTMLMaquina = `<div id="opcoes" class="carta-status">`
    for (var atributo in maquinaCarta.atributos) {
        tagHTMLMaquina += `<p name="atributos">${atributo} ${maquinaCarta.atributos[atributo]}</br><p>`;
    }
    var nomeMaquina = `<p class="carta-subtitle">${maquinaCarta.nome}</p>`

    cartaAdversario.innerHTML = molduraMaquina + tagHTMLMaquina + nomeMaquina + `</div>`;
}


function retornaAtributoSelecionado() {
    var opcoesAtributos = document.getElementsByName("atributos");

    for (var i = 0; i < opcoesAtributos.length; i++) {
        if (opcoesAtributos[i].checked == true) {
            return opcoesAtributos[i].value;
        }
    }
}

function jogar() {
    var atributoSelecionado = retornaAtributoSelecionado();
    var valorMinhaCarta = minhaCarta.atributos[atributoSelecionado];
    var valorMaquinaCarta = maquinaCarta.atributos[atributoSelecionado];
    var resultadoDiv = document.getElementById("resultado");

    exibirCartaAdversario();

    if (valorMinhaCarta > valorMaquinaCarta) {
        resultadoDiv.innerHTML = `<p class="resultado-final"> Você ganhou! Seu atributo ${atributoSelecionado} é ${valorMinhaCarta} e o do adversário é ${valorMaquinaCarta}</p>`;
        if (minhaCarta.nome == "Gon" && maquinaCarta.nome == "Killua") {
            var audio = new Audio('nay_nay_killua.mp3')
            audio.play();
        }
    } else if (valorMinhaCarta < valorMaquinaCarta) {
        resultadoDiv.innerHTML = `<p class="resultado-final"> Você perdeu! Seu atributo ${atributoSelecionado} é ${valorMinhaCarta} e o do adversário é ${valorMaquinaCarta}</p>`;
        if (maquinaCarta.nome == "Gon" && minhaCarta.nome == "Killua") {
            var audio = new Audio('nay_nay_killua.mp3')
            audio.play();
        }
    } else {
        resultadoDiv.innerHTML = `<p class="resultado-final">Vocês empataram! Seu atributo ${atributoSelecionado} é ${valorMinhaCarta} e o do adversário também é ${valorMaquinaCarta}</p>`;
    }

    btnSortear.disabled = false;
    btnJogar.disabled = true;
}
