var alisson = {
  nome: "Alisson",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var raquel = {
  nome: "Raquel",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

var jogadores = [alisson, raquel];

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;

  return pontos;
}

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += `<tr>
        <td>${jogadores[i].nome}</td>
        <td>${jogadores[i].vitorias}</td>
        <td>${jogadores[i].empates}</td>
                <td>${jogadores[i].derrotas}</td>
        <td>${jogadores[i].pontos}</td>
        <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
        <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
        <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
      </tr>`;
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");

  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];

  jogador.vitorias++;

  jogador.pontos = calculaPontos(jogador);

  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];

  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];

  jogador.empates++;

  jogador.pontos = calculaPontos(jogador);

  exibeJogadoresNaTela(jogadores);
}

function adicionaJogador() {
  var novoJogador = {
    nome: document.querySelector(".newPlayer").value,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };

  jogadores.push(novoJogador);

  exibeJogadoresNaTela(jogadores);
}
