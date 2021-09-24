function adicionarFilme() {
  var linkFilme = document.getElementById("filme").value;
  var tituloFilme = document.getElementById("titulo").value;

  var elementoListaFilmes = document.getElementById("listaFilmes");

  var listaFilmes = [];
  var listaTituloFilmes = [];

  if (linkFilme.endsWith(".jpg")) {
    listaFilmes.push(linkFilme);
    listaTituloFilmes.push(tituloFilme);
    for (var i = 0; i < listaFilmes.length; i++) {
      elementoListaFilmes.innerHTML +=
        "<img src=" +
        listaFilmes[i] +
        "><figcaption>" +
        listaTituloFilmes[i] +
        "</figcaption>";
    }
  }
}
